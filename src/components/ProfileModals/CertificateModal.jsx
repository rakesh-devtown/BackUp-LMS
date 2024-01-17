import React, { useState } from "react";
import { setHeader } from "../../utils/header";
import { serviceDelete, servicePost, servicePut } from "../../utils/api";
import { Button, Input, notification } from "antd";
import CustomDropdown from "../DropDown/CustomDropdown";

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
      //   dispatch(setLoadingFalse());
    }
  };
  const deleteSubmission = async () => {
    try {
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
      //   dispatch(setLoadingFalse());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          marginBottom: "40px",
          width: "100%",
          padding: "0 12px",
          color: "#747474",
        }}
      >
        <p style={{ fontWeight: "600", marginTop: "20px", marginLeft: "4px", marginBottom: "8px" }}>
  Certificate Title <span style={{ color: "#FF0000" }}>*</span>
</p>
<div style={{ marginBottom: "20px" }}>
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
</div>
<div>
  <p style={{ fontWeight: "600", marginTop: "20px", marginLeft: "4px", marginBottom: "8px" }}>
    Organisation <span style={{ color: "#FF0000" }}>*</span>
  </p>
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
<p style={{ fontWeight: "600", marginTop: "20px", marginLeft: "4px", marginBottom: "8px" }}>
  Certificate Link <span style={{ color: "#FF0000" }}>*</span>
</p>



<div style={{ marginTop: "20px" }}>
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
</div>
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
  <CustomDropdown type="year" handleChange={handleEndDateYearChange} />
</div>


<p style={{ fontWeight: "600", marginTop: "20px", marginLeft: "4px" }}>Description</p>
{type === "Edit" ? (
  <textarea
    id="description"
    name="description"
    type="text"
    style={{
      width: "100%",
      padding: "10px 12px",
      marginTop: "20px",
      backgroundColor: "#F8F8FA",
      color: "gray",
      border: "1px solid",
      borderRadius: "4px",
      outline: "none",
      boxShadow: "none",
    }}
    autoComplete="description"
    rows="4"
    defaultValue={updateCertificate?.description}
    onChange={(e) =>
      setupdateCertificate({
        ...updateCertificate,
        description: e.target.value,
      })
    }
  ></textarea>
) : (
  <textarea
    id="description"
    name="description"
    type="text"
    style={{
      width: "100%",
      padding: "10px 12px",
      marginTop: "20px",
      backgroundColor: "#F8F8FA",
      color: "gray",
      border: "1px solid",
      borderRadius: "4px",
      outline: "none",
      boxShadow: "none",
    }}
    autoComplete="description"
    rows="4"
    onChange={(e) =>
      setupdateCertificate({
        ...updateCertificate,
        description: e.target.value,
      })
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

export default CertificateModal;
