import React, { useState } from "react";
import { serviceDelete, servicePost, servicePut } from "../../utils/api";
import { setHeader } from "../../utils/header";
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

function ProjectModal({ proj, type, setopen, about }) {
  const [startDate, setStartDate] = useState({ month: "", year: "" });
  const [endDate, setEndDate] = useState({ month: "", year: "" });
  const setLoading = useLoadingStore((state) => state.setLoading);

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

  const [updateProject, setupdateProject] = useState({
    title: proj?.title,
    start_date: proj?.start_date,
    end_date: proj?.end_date,
    description: proj?.description,
    githubLink: proj?.githubLink,
    deployedLink: proj?.deployedLink,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (type === "Add") {
      handleSave(updateProject);
    } else if (type === "Edit") {
      handleEdit(updateProject);
    }
  };

  const handleSave = async (updateProject) => {
    //   dispatch(setLoadingTrue());

    const start_Date = new Date(startDate.year, startDate.month, 1);
    const end_Date = new Date(endDate.year, endDate.month, 1);

    const updatedProject = {
      ...updateProject,
      start_date: start_Date.toISOString().slice(0, 10),
      end_date: end_Date.toISOString().slice(0, 10),
    };

    setupdateProject(updatedProject);

    try {
      setLoading(true)
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      const {
        success,
        data: { projects },
        message,
      } = await servicePost(
        "student/student-api/v1/me/project",
        updatedProject
      );

      if (success) {
        // toast.success(message);
        setopen(false);
        await about();
      } else {
        notification.error({
          message: "Failed to add the Project",
          description: message,
        });

        //   toast.error(message);
      }
    } catch (error) {
      notification.error({
        message: "Failed to add the Project",
        description: error.message,
      });

      // toast.error(error.response);
    } finally {
      setLoading(false);
      
      // dispatch(setLoadingFalse());
    }
  };

  const handleEdit = async (updateProject) => {
    //   dispatch(setLoadingTrue());

    const start_Date = new Date(startDate.year, startDate.month, 1);
    const end_Date = new Date(endDate.year, endDate.month, 1);

    const update_edit_Project = {
      ...updateProject,
      start_date: start_Date.toISOString().slice(0, 10),
      end_date: end_Date.toISOString().slice(0, 10),
    };

    try {
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      setLoading(true);
      const {
        success,
        data: { projects },
        message,
      } = await servicePut(
        `student/student-api/v1/me/project/${proj?._id}`,
        update_edit_Project
      );

      if (success) {
        // toast.success(message);
        setupdateProject({
          title: projects?.title,
          start_date: projects?.start_date,
          end_date: projects?.end_date,
          description: projects?.description,
          githubLink: projects?.githubLink,
          deployedLink: projects?.deployedLink,
          ...updateProject,
        });
        setopen(false);
        await about();
      } else {
        notification.error({
          message: "Failed to add the Project",
          description: message,
        });
        //   toast.error(message);
      }
    } catch (error) {
      notification.error({
        message: "Failed to add the Project",
        description: error.message,
      });
      // toast.error(error.response);
    } finally {
      setLoading(false);
      // dispatch(setLoadingFalse());
    }
  };

  const deleteSubmission = async () => {
    try {
      setLoading(true);

      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      // dispatch(setLoadingTrue());
      const { data } = await serviceDelete(
        `student/student-api/v1/me/project/${proj?._id}`
      );
      // toast.success("Project Deleted");
      await about();
      // await getAssignments();
    } catch (error) {
      notification.error({
        message: "Failed to delete the Project",
        description: error.message,
      });
      // toast.error(error.message);
    } finally {
      setLoading(false);
      // dispatch(setLoadingFalse());
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <ModalFormContainer>
      
      <ModalLabel>
            Project Name <Important
            >*</Important>
          </ModalLabel>
          {type === "Edit" ? (
            <Input
              id="project-name"
              defaultValue={updateProject?.title}
              name="p-name"
              type="text"
              required
              onChange={(e) =>
                setupdateProject({ ...updateProject, title: e.target.value })
              }
              autoComplete="name"
            />
          ) : (
            <Input
              id="project-name"
              name="p-name"
              type="text"
              required
              onChange={(e) =>
                setupdateProject({ ...updateProject, title: e.target.value })
              }
              autoComplete="name"
            />
          )}
        

        <div>
        <ModalLabel>
            Github Link  <Important>*</Important>
          </ModalLabel>
          {type === "Edit" ? (
            <Input
              id="github-link"
              defaultValue={updateProject?.githubLink}
              name="g-link"
              type="url"
              required
              onChange={(e) =>
                setupdateProject({
                  ...updateProject,
                  githubLink: e.target.value,
                })
              }
              autoComplete="gitlink"
            />
          ) : (
            <Input
              id="github-link"
              name="g-link"
              type="url"
              required
              onChange={(e) =>
                setupdateProject({
                  ...updateProject,
                  githubLink: e.target.value,
                })
              }
              autoComplete="gitlink"
            />
          )}
        </div>          <ModalLabel>
            Hosted Link   <Important>*</Important>
          </ModalLabel>
          {type === "Edit" ? (
            <Input
              id="hosted-link"
              defaultValue={updateProject?.deployedLink}
              name="h-link"
              type="url"
              required
              onChange={(e) =>
                setupdateProject({
                  ...updateProject,
                  deployedLink: e.target.value,
                })
              }
              autoComplete="hostlink"
            />
          ) : (
            <Input
              id="hosted-link"
              name="h-link"
              type="url"
              required
              onChange={(e) =>
                setupdateProject({
                  ...updateProject,
                  deployedLink: e.target.value,
                })
              }
              autoComplete="hostlink"
            />
          )}

        <div>
        <ModalLabel>
            Start Date 
          </ModalLabel>
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
          <ModalLabel>
            End Date 
          </ModalLabel>
          <DateSelectContainer>
            <CustomDropdown
              type="month"
              handleChange={handleEndDateMonthChange}
            />
            <CustomDropdown
              type="year"
              handleChange={handleEndDateYearChange}
            />
          </DateSelectContainer>
          <ModalLabel>
            Description  
          </ModalLabel>
          {type === "Edit" ? (
            <ModalTextArea
              id="description"
              name="description"
              type="text"
              
              autoComplete="description"
              rows="4"
              defaultValue={updateProject?.description}
              onChange={(e) =>
                setupdateProject({
                  ...updateProject,
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
                setupdateProject({
                  ...updateProject,
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
        </div>
      </ModalFormContainer>
    </form>
  );
}

export default ProjectModal;
