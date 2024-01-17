import React, { useState } from "react";
import { serviceDelete, servicePost, servicePut } from "../../utils/api";
import { setHeader } from "../../utils/header";
import { notification, Input, Button } from "antd";
import CustomDropdown from "../DropDown/CustomDropdown";

function WorkModal({ workex, type, setopen, about }) {
  const [startDate, setStartDate] = useState({ month: "", year: "" });
  const [endDate, setEndDate] = useState({ month: "", year: "" });
  const [isChecked, setIsChecked] = useState(false);

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
      //   dispatch(setLoadingFalse());
    }
  };

  const deleteSubmission = async () => {
    try {
      //   dispatch(setLoadingTrue());
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      const { data } = await serviceDelete(
        `student/student-api/v1/me/experience/${workex?._id}`
        // axios.defaults.headers.common
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
      //   dispatch(setLoadingFalse());
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
        {/* Rest of the code */}
        <div style={{ marginBottom: "20px" }}>
          <p
            style={{
              fontWeight: "600",
              marginTop: "20px",
              marginLeft: "4px",
              marginBottom: "8px",
            }}
          >
            Role <span style={{ color: "#FF0000" }}>*</span>
          </p>
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
        </div>
        <div>
          <p
            style={{
              fontWeight: "600",
              marginTop: "20px",
              marginLeft: "4px",
              marginBottom: "8px",
            }}
          >
            Company Name <span style={{ color: "#FF0000" }}>*</span>
          </p>
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

        <div style={{ marginTop: "20px" }}>
          <p
            style={{
              fontWeight: "700",
              fontSize: "0.875rem",
              marginLeft: "4px",
              marginBottom: "4px",
              color: "#747474",
            }}
          >
            Certificate Link <span style={{ color: "#FF0000" }}>*</span>
          </p>
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
        </div>

        <p
          style={{
            fontWeight: "600",
            marginTop: "20px",
            marginLeft: "4px",
            marginBottom: "8px",
          }}
        >
          Start Date
        </p>
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
  <CustomDropdown type="year" handleChange={handleEndDateYearChange} />
</div>
<label style={{ display: "flex", gap: "8px", alignItems: "center", marginTop: "8px" }}>
  <input
    type="checkbox"
    style={{}}
    checked={isChecked}
    onChange={handleCheckboxChange}
  />
  <p> Present</p>
</label>
<p style={{ fontWeight: "600", marginTop: "20px", marginLeft: "4px" }}>Description</p>
{type === "Edit" ? (
  <textarea
    id="description"
    name="description"
    type="text"
    style={{
      width: "100%",
      paddingLeft: "12px",
      paddingRight: "12px",
      paddingTop: "8px",
      paddingBottom: "8px",
      marginTop: "20px",
      color: "#4A4A4A",
      backgroundColor: "#F8F8FA",
      border: "1px solid #D1D1D1",
      borderRadius: "4px",
      outline: "none",
    }}
    autoComplete="description"
    rows="4"
    defaultValue={updateWork?.description}
    onChange={(e) =>
      setupdateWork({ ...updateWork, description: e.target.value })
    }
  ></textarea>
) : (
  <textarea
    id="description"
    name="description"
    type="text"
    style={{
      width: "100%",
      paddingLeft: "12px",
      paddingRight: "12px",
      paddingTop: "8px",
      paddingBottom: "8px",
      marginTop: "20px",
      color: "#4A4A4A",
      backgroundColor: "#F8F8FA",
      border: "1px solid #D1D1D1",
      borderRadius: "4px",
      outline: "none",
    }}
    autoComplete="description"
    rows="4"
    onChange={(e) =>
      setupdateWork({ ...updateWork, description: e.target.value })
    }
  ></textarea>
)}
<div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", gap: "12px" }}>
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
    </form>
  );
}

export default WorkModal;
