import React, { useState } from "react";
import { serviceDelete, servicePost, servicePut } from "../../utils/api";
import { setHeader } from "../../utils/header";
import { Button, Input, notification } from "antd";
import CustomDropdown from "../DropDown/CustomDropdown";

function ProjectModal({ proj, type, setopen, about }) {
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
      // dispatch(setLoadingFalse());
    }
  };

  const deleteSubmission = async () => {
    try {
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
      // dispatch(setLoadingFalse());
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          marginBottom: "40px",
          width: "100%",
          paddingLeft: "12px",
          paddingRight: "12px",
          color: "#747474",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
  <p style={{ fontWeight: "600", marginTop: "20px", marginLeft: "4px", marginBottom: "8px" }}>
    Project Name <span style={{ color: "#FF0000" }}>*</span>
  </p>
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
</div>


<div>
  <p style={{ fontWeight: "600", marginTop: "20px", marginLeft: "4px", marginBottom: "8px" }}>
    Github Link <span style={{ color: "#FF0000" }}>*</span>
  </p>
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
</div>
<div style={{ marginTop: "20px" }}>
  <p style={{ fontWeight: "600", marginTop: "20px", marginLeft: "4px", marginBottom: "8px" }}>
    Hosted Link <span style={{ color: "#FF0000" }}>*</span>
  </p>
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
</div>


<div>
  <p style={{ fontWeight: "600", marginTop: "20px", marginLeft: "4px", marginBottom: "8px" }}>Start Date</p>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
    <CustomDropdown
      type="month"
      handleChange={handleStartDateMonthChange}
    />
    <CustomDropdown
      type="year"
      handleChange={handleStartDateYearChange}
    />
  </div>
  <p style={{ fontWeight: "600", marginTop: "20px", marginLeft: "4px", marginBottom: "8px" }}>End Date</p>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
    <CustomDropdown
      type="month"
      handleChange={handleEndDateMonthChange}
    />
    <CustomDropdown
      type="year"
      handleChange={handleEndDateYearChange}
    />
  </div>
  <p style={{ fontWeight: "600", marginTop: "20px", marginLeft: "4px" }}>Description</p>
  {type === "Edit" ? (
    <textarea
      id="description"
      name="description"
      type="text"
      style={{ width: "100%", padding: "12px 16px", marginTop: "20px", backgroundColor: "#F8F8FA", color: "#4A4A4A", border: "1px solid #CCCCCC", borderRadius: "4px" }}
      autoComplete="description"
      rows="4"
      defaultValue={updateProject?.description}
      onChange={(e) =>
        setupdateProject({
          ...updateProject,
          description: e.target.value,
        })
      }
    ></textarea>
  ) : (
    <textarea
      id="description"
      name="description"
      type="text"
      style={{ width: "100%", padding: "12px 16px", marginTop: "20px", backgroundColor: "#F8F8FA", color: "#4A4A4A", border: "1px solid #CCCCCC", borderRadius: "4px" }}
      autoComplete="description"
      rows="4"
      onChange={(e) =>
        setupdateProject({
          ...updateProject,
          description: e.target.value,
        })
      }
    ></textarea>
  )}
  <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "40px", gap: "12px", alignItems :"center"}}>
  <Button type="submit"  
    style={{
      border : "1px solid black",
    }}
    onClick={handleSubmit}
  >
    Save
  </Button>
    {type === "Edit" && (
      <Button type="submit"  
      style={{
        border : "1px solid black",
      }}
      onClick={deleteSubmission}
    >
      Delete
    </Button>
    )}
  </div>
</div>
































      </div>
    </form>
  );
}

export default ProjectModal;
