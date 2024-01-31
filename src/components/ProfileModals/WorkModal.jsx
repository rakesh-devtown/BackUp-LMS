import React, { useState } from "react";
import { serviceDelete, servicePost, servicePut } from "../../utils/api";
import { setHeader } from "../../utils/header";
import { notification, Input, Button } from "antd";
import CustomDropdown from "../DropDown/CustomDropdown";
import {
  DateSelectContainer,
  Important,
  ModalButtonContainer,
  ModalDeleteButton,
  ModalFormContainer,
  ModalLabel,
  ModalSaveButton,
  ModalTextArea,
  PresentLabel,
} from "../../styles/Modals/sharedModals.styles";
import { MarginContainer } from "../../styles/Certificates/certificates.styles";
import useLoadingStore from "../../store/loadingStore";

function WorkModal({ workex, type, setopen, about }) {
  const [startDate, setStartDate] = useState({ month: "", year: "" });
  const [endDate, setEndDate] = useState({ month: "", year: "" });
  const [isChecked, setIsChecked] = useState(false);
  const setLoading = useLoadingStore((state) => state.setLoading);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleStartDateMonthChange = (e) => {
    const value = e.target.value;
    setStartDate({
      ...startDate,
      month: value,
    });
  };

  const handleStartDateYearChange = (e) => {
    const value = e.target.value;
    setStartDate({
      ...startDate,
      year: value,
    });
  };

  const handleEndDateMonthChange = (e) => {
    const value = e.target.value;
    setEndDate({
      ...endDate,
      month: value,
    });
  };

  const handleEndDateYearChange = (e) => {
    const value = e.target.value;
    setEndDate({
      ...endDate,
      year: value,
    });
  };

  const [updateWork, setupdateWork] = useState({
    company: workex?.company,
    position: workex?.position,
    start_date: workex?.start_date,
    end_date: workex?.end_date,
    description: workex?.description,
    certificate: workex?.certificate,
    currentJob: workex?.currentJob,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (type === "Add") {
      handleSave(updateWork);
    } else if (type === "Edit") {
      handleEdit(updateWork);
    }
  };

  const handleSave = async (updateWork) => {
    // dispatch(setLoadingTrue());

    const start_Date = new Date(startDate.year, startDate.month, 1);
    const end_Date = new Date(endDate.year, endDate.month, 1);

    const updatedWork = {
      ...updateWork,
      start_date: start_Date.toISOString().slice(0, 10),
      end_date: end_Date.toISOString().slice(0, 10),
      currentJob: isChecked,
    };

    setupdateWork(updatedWork);

    try {
      setLoading(true);
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      const {
        success,
        data: { experience },
        message,
      } = await servicePost(
        "student/student-api/v1/me/experience",
        updatedWork
      );

      if (success) {
        // toast.success(message);
        setopen(false);
        await about();
      } else {
        notification.error({
          message: "Failed to add the Work Experience",
          description: message,
        });
        // toast.error(message);
      }
    } catch (error) {
      notification.error({
        message: "Failed to add the Work Experience",
        description: error.message,
      });
      //   toast.error(error.response);
    } finally {
      setLoading(false);
      //   dispatch(setLoadingFalse());
    }
  };

  const handleEdit = async (updateWork) => {
    // dispatch(setLoadingTrue());

    const start_Date = new Date(startDate.year, startDate.month, 1);
    const end_Date = new Date(endDate.year, endDate.month, 1);

    const update_edit_Work = {
      ...updateWork,
      start_date: start_Date.toISOString().slice(0, 10),
      end_date: end_Date.toISOString().slice(0, 10),
      currentJob: isChecked,
    };

    try {
      setLoading(true);
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      const {
        success,
        data: { experience },
        message,
      } = await servicePut(
        `student/student-api/v1/me/experience/${workex?._id}`,
        update_edit_Work
      );

      if (success) {
        // toast.success(message);
        setupdateWork({
          company: experience?.company,
          position: experience?.position,
          start_date: experience?.start_date,
          end_date: experience?.end_date,
          description: experience?.description,
          certificate: experience?.certificate,
          currentJob: experience?.currentJob,
          ...updateWork,
        });
        setopen(false);
        await about();
      } else {
        notification.error({
          message: "Failed to edit the Work Experience",
          description: message,
        });
        // toast.error(message);
      }
    } catch (error) {
      notification.error({
        message: "Failed to edit the Work Experience",
        description: error.message,
      });
      //   toast.error(error.response);
    } finally {
      setLoading(false);
      //   dispatch(setLoadingFalse());
    }
  };

  const deleteSubmission = async () => {
    try {
      setLoading(true);
      //   dispatch(setLoadingTrue());
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      const { data } = await serviceDelete(
        `student/student-api/v1/me/experience/${workex?._id}` 
      );
      // toast.success("Experience Deleted");
      await about();
      // await getAssignments();
    } catch (error) {
      notification.error({
        message: "Failed to delete the Work Experience",
        description: error.message,
      });
      //   toast.error(error.message);
    } finally {
      setLoading(false);
      //   dispatch(setLoadingFalse());
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <ModalFormContainer>
        <ModalLabel>
          Role <Important>*</Important>
        </ModalLabel>

        {type === "Edit" ? (
          <Input
            id="position"
            defaultValue={updateWork?.position}
            name="i-position"
            type="text"
            required
            onChange={(e) =>
              setupdateWork({ ...updateWork, position: e.target.value })
            }
            autoComplete="position"
          />
        ) : (
          <Input
            id="position"
            name="i-position"
            type="text"
            required
            onChange={(e) =>
              setupdateWork({ ...updateWork, position: e.target.value })
            }
            autoComplete="position"
          />
        )}
        <div>
          <ModalLabel>
            Company Name <Important>*</Important>
          </ModalLabel>

          {type === "Edit" ? (
            <Input
              id="institution-name"
              defaultValue={updateWork?.company}
              name="i-name"
              type="text"
              required
              onChange={(e) =>
                setupdateWork({ ...updateWork, company: e.target.value })
              }
              autoComplete="name"
            />
          ) : (
            <Input
              id="institution-name"
              name="i-name"
              type="text"
              required
              onChange={(e) =>
                setupdateWork({ ...updateWork, company: e.target.value })
              }
              autoComplete="name"
            />
          )}
        </div>

              <MarginContainer/>
          <ModalLabel>
            Certificate Link <Important>*</Important>
          </ModalLabel>

          {type === "Edit" ? (
            <Input
              id="certificate"
              defaultValue={updateWork?.certificate}
              name="certificate"
              type="url"
              required
              onChange={(e) =>
                setupdateWork({ ...updateWork, certificate: e.target.value })
              }
              autoComplete="certificate"
            />
          ) : (
            <Input
              id="certificate"
              name="certificate"
              type="url"
              required
              onChange={(e) =>
                setupdateWork({ ...updateWork, certificate: e.target.value })
              }
              autoComplete="certificate"
            />
          )}
        

        <ModalLabel>Start Date</ModalLabel>

        <DateSelectContainer>
          <CustomDropdown
            type="month"
            handleChange={handleStartDateMonthChange}
          />
          <CustomDropdown
            type="year"
            handleChange={handleStartDateYearChange}
          />
        </DateSelectContainer>
        <ModalLabel>End Date</ModalLabel>
        <DateSelectContainer>
          <CustomDropdown
            type="month"
            handleChange={handleEndDateMonthChange}
          />
          <CustomDropdown type="year" handleChange={handleEndDateYearChange} />
        </DateSelectContainer>
        <PresentLabel>
          <input
            type="checkbox"
              
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p> Present</p>
        </PresentLabel>
        <ModalLabel>Description</ModalLabel>
        {type === "Edit" ? (
          <ModalTextArea
            id="description"
            name="description"
            type="text"
            autoComplete="description"
            rows="4"
            defaultValue={updateWork?.description}
            onChange={(e) =>
              setupdateWork({ ...updateWork, description: e.target.value })
            }
          ></ModalTextArea>
        ) : (
          <ModalTextArea
            id="description"
            name="description"
            type="text"
            autoComplete="description"
            rows="4"
            onChange={(e) =>
              setupdateWork({ ...updateWork, description: e.target.value })
            }
          ></ModalTextArea>
        )}
        <ModalButtonContainer>
          <ModalSaveButton type="submit" onClick={handleSubmit}>
            Save
          </ModalSaveButton>
          {type === "Edit" && (
            <ModalDeleteButton type="submit" onClick={deleteSubmission}>
              Delete
            </ModalDeleteButton>
          )}
        </ModalButtonContainer>
      </ModalFormContainer>
    </form>
  );
}

export default WorkModal;
