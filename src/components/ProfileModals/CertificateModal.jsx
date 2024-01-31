import React, { useState } from "react";
import { setHeader } from "../../utils/header";
import { serviceDelete, servicePost, servicePut } from "../../utils/api";
import { Button, Input, notification } from "antd";
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
} from "../../styles/Modals/sharedModals.styles";
import useLoadingStore from "../../store/loadingStore";

function CertificateModal({ cert, type, setopen, about }) {
  const [startDate, setStartDate] = useState({ month: "", year: "" });
  const [endDate, setEndDate] = useState({ month: "", year: "" });

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

  const [updateCertificate, setupdateCertificate] = useState({
    title: cert?.title,
    organization: cert?.organization,
    start_date: cert?.start_date,
    end_date: cert?.end_date,
    description: cert?.description,
    url: cert?.url,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (type === "Add") {
      handleSave(updateCertificate);
    } else if (type === "Edit") {
      handleEdit(updateCertificate);
    }
  };
  const setLoading = useLoadingStore((state) => state.setLoading);


  const handleSave = async (updateCertificate) => {
    // dispatch(setLoadingTrue());

    const start_Date = new Date(startDate.year, startDate.month, 1);
    const end_Date = new Date(endDate.year, endDate.month, 1);

    const updatedCertificate = {
      ...updateCertificate,
      start_date: start_Date.toISOString().slice(0, 10),
      end_date: end_Date.toISOString().slice(0, 10),
    };

    setupdateCertificate(updatedCertificate);

    try {
      setLoading(true);
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      const {
        success,
        data: { certificate },
        message,
      } = await servicePost(
        "student/student-api/v1/me/certificate",
        updatedCertificate
      );

      if (success) {
        // toast.success(message);
        setopen(false);
        await about();
      } else {
        notification.error({
          message: "Failed to add the Certificate",
          description: message,
        });
        // toast.error(message);
      }
    } catch (error) {
      notification.error({
        message: "Failed to add the Certificate",
        description: error.message,
      });

      //   toast.error(error.response);
    } finally {
      setLoading(false);

      //   dispatch(setLoadingFalse());
    }
  };

  const handleEdit = async (updateCertificate) => {
    // dispatch(setLoadingTrue());

    const start_Date = new Date(startDate.year, startDate.month, 1);
    const end_Date = new Date(endDate.year, endDate.month, 1);

    const update_edit_Certificate = {
      ...updateCertificate,
      start_date: start_Date.toISOString().slice(0, 10),
      end_date: end_Date.toISOString().slice(0, 10),
    };

    try {
      setLoading(true)
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      const {
        success,
        data: { certificate },
        message,
      } = await servicePut(
        `student/student-api/v1/me/certificate/${cert?._id}`,
        update_edit_Certificate
      );

      if (success) {
        // toast.success(message);
        setupdateCertificate({
          title: certificate?.title,
          organization: certificate?.organization,
          start_date: certificate?.start_date,
          end_date: certificate?.end_date,
          description: certificate?.description,
          url: certificate?.url,
          ...updateCertificate,
        });
        setopen(false);
        await about();
      } else {
        notification.error({
          message: "Failed to add the Certificate",
          description: message,
        });
        // toast.error(message);
      }
    } catch (error) {
      notification.error({
        message: "Failed to add the Certificate",
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
        `student/student-api/v1/me/certificate/${cert?._id}`
      );
      // toast.success("Certificate Deleted");
      await about();
      // await getAssignments();
    } catch (error) {
      notification.error({
        message: "Failed to add the Certificate",
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
          Certificate Title <Important  >  *</Important>
        </ModalLabel>

        {type === "Edit" ? (
          <Input
            id="title"
            defaultValue={updateCertificate?.title}
            name="title"
            type="text"
            required
            onChange={(e) =>
              setupdateCertificate({
                ...updateCertificate,
                title: e.target.value,
              })
            }
            autoComplete="title"
          />
        ) : (
          <Input
            id="title"
            name="title"
            type="text"
            required
            onChange={(e) =>
              setupdateCertificate({
                ...updateCertificate,
                title: e.target.value,
              })
            }
            autoComplete="title"
          />
        )}

        <div>
          <ModalLabel>
            {" "}
            Organization <Important  >  *</Important>{" "}
          </ModalLabel>

          {type === "Edit" ? (
            <Input
              id="organization"
              defaultValue={updateCertificate?.organization}
              name="organization"
              type="text"
              required
              onChange={(e) =>
                setupdateCertificate({
                  ...updateCertificate,
                  organization: e.target.value,
                })
              }
              autoComplete="organization"
            />
          ) : (
            <Input
              id="organization"
              name="organization"
              type="text"
              required
              onChange={(e) =>
                setupdateCertificate({
                  ...updateCertificate,
                  organization: e.target.value,
                })
              }
              autoComplete="organization"
            />
          )}
        </div>
        <ModalLabel>
          {" "}
          Certificate Link <Important  >  *</Important>{" "}
        </ModalLabel>


          {type === "Edit" ? (
            <Input
              id="url"
              defaultValue={updateCertificate?.url}
              name="url"
              type="url"
              required
              onChange={(e) =>
                setupdateCertificate({
                  ...updateCertificate,
                  url: e.target.value,
                })
              }
              autoComplete="url"
            />
          ) : (
            <Input
              id="url"
              name="url"
              type="url"
              required
              onChange={(e) =>
                setupdateCertificate({
                  ...updateCertificate,
                  url: e.target.value,
                })
              }
              autoComplete="url"
            />
          )}
     
        <ModalLabel> Start Date</ModalLabel>
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
        <ModalLabel> End Date</ModalLabel>
        <DateSelectContainer>
          <CustomDropdown
            type="month"
            handleChange={handleEndDateMonthChange}
          />
          <CustomDropdown type="year" handleChange={handleEndDateYearChange} />
        </DateSelectContainer>

        <ModalLabel> Description</ModalLabel>
        {type === "Edit" ? (
          <ModalTextArea
            id="description"
            name="description"
            type="text"
            autoComplete="description"
            rows="4"
            defaultValue={updateCertificate?.description}
            onChange={(e) =>
              setupdateCertificate({
                ...updateCertificate,
                description: e.target.value,
              })
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
              setupdateCertificate({
                ...updateCertificate,
                description: e.target.value,
              })
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

export default CertificateModal;
