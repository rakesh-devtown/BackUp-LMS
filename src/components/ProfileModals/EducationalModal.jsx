import React, { useState } from 'react'
import { serviceDelete, servicePost, servicePut } from '../../utils/api';
import { setHeader } from '../../utils/header';
import { Button, Input, notification } from 'antd';
import CustomDropdown from '../DropDown/CustomDropdown';

function EducationModal({ educ, type, setopen, about }) {
    console.log("educ" , educ) ;
    const [startDate, setStartDate] = useState({ month: "", year: "" });
    const [endDate, setEndDate] = useState({ month: "", year: "" });
  
    //for setting the year and month functions were made
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
  
    //state to save education details
    const [updateEducation, setupdateEducation] = useState({
      collegeName: educ?.collegeName,
      start_date: educ?.start_date,
      end_date: educ?.end_date,
      marks: educ?.marks,
    });
  
    //submit the details
    const handleSubmit = (event) => {
      event.preventDefault();
      //if type is add then we will POST the details otherwise PUT the details
      if (type === "Add") {
        handleSave(updateEducation);
      } else if (type === "Edit") {
        handleEdit(updateEducation);
      }
    };
  
    const handleSave = async (updateEducation) => {
    //   dispatch(setLoadingTrue());
  
      const start_Date = new Date(startDate.year, startDate.month, 1);
      const end_Date = new Date(endDate.year, endDate.month, 1);
  
      const updatedEducation = {
        ...updateEducation,
        start_date: start_Date.toISOString().slice(0, 10),
        end_date: end_Date.toISOString().slice(0, 10),
      };
  
      setupdateEducation(updatedEducation);
  
      try {
        setHeader("auth", `bearer ${localStorage.getItem("token")}`);
        const {
          success,
          data: { education },
          message,
        } = await servicePost(
          "student/student-api/v1/me/education",
          updatedEducation,
          
        );
        if (success) {
          // toast.success("Education Added Successfully");
          setopen(false);
          await about();
        } else {
            notification.error({
                message: "Failed to add the Education",
                description: message,
            
            })
        //   toast.error("Failed to add the Education");
        }
      } catch (error) {
        notification.error({
            message: "Failed to add the Education",
            description: error.message,
        
        })
        // toast.error("Failed to add the Education");
      } finally {
        // dispatch(setLoadingFalse());
      }
    };
  
    const handleEdit = async (updateEducation) => {
    //   dispatch(setLoadingTrue());
  
      const start_Date = new Date(startDate.year, startDate.month, 1);
      const end_Date = new Date(endDate.year, endDate.month, 1);
  
      const update_edit_Education = {
        ...updateEducation,
        start_date: start_Date.toISOString().slice(0, 10),
        end_date: end_Date.toISOString().slice(0, 10),
      };
      setHeader("auth", `bearer ${localStorage.getItem("token")}`); 
      try {
        const {
          success,
          data: { education },
          message,
        } = await servicePut(
          `student/student-api/v1/me/education/${educ?._id}`,
          update_edit_Education,
         
        );
        if (success) {
          // toast.success("Education Updated Successfully");
          setupdateEducation({
            collegeName: education?.collegeName,
            start_date: education?.start_date,
            end_date: education?.end_date,
            marks: education?.marks,
            ...updateEducation,
          });
          setopen(false);
          await about();
        } else {
            notification.error({
                message: "Failed to update the Education",
                description: message,
            
            
            })
        //   toast.error("Failed to update the Education");
        }
      } catch (error) {
        notification.error({
            message: "Failed to update the Education",
            description: error.message,
        
        })
        // toast.error("Failed to update the Education");
      } finally {
        // dispatch(setLoadingFalse());
      }
    };
  
    //delete the details
    const deleteSubmission = async () => {
      try {
        // dispatch(setLoadingTrue());
    setHeader       ("auth", `bearer ${localStorage.getItem("token")}`);
        const { data } = await serviceDelete(
          `student/student-api/v1/me/education/${educ?._id}`,
          
        );
        // toast.success("Education Deleted");
        await about();
      } catch (error) {
        notification.error({
            message: "Failed to delete the Education",
            description: error.message,
        
        })  
        // toast.error("Failed to delete the Education");
      } finally {
        // dispatch(setLoadingFalse());
      }
    };


  return (
   <form onSubmit={handleSubmit}>
  <div style={{ marginBottom: "40px", width: "100%", paddingLeft: "12px", paddingRight: "12px", color: "#747474" }}>
    <div>
      <p style={{ fontWeight: "600", marginTop: "20px", marginLeft: "4px", marginBottom: "8px" }}>
        College Name <span style={{ color: "#FF0000" }}>*</span>
      </p>
      {type === "Edit" ? (
        <Input
          id="institution-name"
          defaultValue={updateEducation?.collegeName}
          name="i-name"
          type="text"
          required
          onChange={(e) =>
            setupdateEducation({
              ...updateEducation,
              collegeName: e.target.value,
            })
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
            setupdateEducation({
              ...updateEducation,
              collegeName: e.target.value,
            })
          }
          autoComplete="name"
        />
      )}
    </div>
    <div style={{ marginTop: "20px" }}>
      <p style={{ fontWeight: "600", marginLeft: "4px", marginBottom: "8px" }}>
        Grade <span style={{ color: "#FF0000" }}>*</span>
      </p>
      {type === "Edit" ? (
        <Input
          id="marks"
          name="marks"
          defaultValue={updateEducation?.marks}
          type="text"
          required
          onChange={(e) =>
            setupdateEducation({
              ...updateEducation,
              marks: e.target.value,
            })
          }
          autoComplete="marks"
        />
      ) : (
        <Input
          id="marks"
          name="marks"
          type="text"
          required
          onChange={(e) =>
            setupdateEducation({
              ...updateEducation,
              marks: e.target.value,
            })
          }
          autoComplete="marks"
        />
      )}
    </div>
    <p style={{ fontWeight: "600", marginTop: "20px", marginLeft: "4px", marginBottom: "8px" }}>Start Date</p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
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
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <CustomDropdown
        type="month"
        handleChange={handleEndDateMonthChange}
      />
      <CustomDropdown type="year" handleChange={handleEndDateYearChange} />
    </div>
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "40px", gap: "12px" }}>
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
  )
}

export default EducationModal