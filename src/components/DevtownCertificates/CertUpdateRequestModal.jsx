import React, { useState } from 'react'
import { servicePost } from '../../utils/api';
import { setHeader } from '../../utils/header';
import { Button, Input, notification } from 'antd';

function CertUpdateRequestModal({ setopen, about ,setUpdateAllowed }) {
    const [updatedName, setUpdateName] = useState();
	const handleSubmit = (event) => {
		event.preventDefault();
		handleRequest();
	};

	const handleRequest = async () => {
		try {
            setHeader("auth", `bearer ${localStorage.getItem("token")}`);
			const { success, message } = await servicePost(
				`student/student-api/v1/certificate/update-request/`,
				{ updatedName: updatedName },
			
			);
			console.log(message);
			if (success) {
                notification.success({
                    message 
                })
				// toast.success(message);
			} else {
                notification.error({
                    message
                })
				// toast.error(message);
			}
		} catch (error) {

            notification.error({
                message : "An error occurred in creating certificate update request"
            })
			// toast.error("An error occurred in creating certificate update request");
		}
		setopen(false);
		setUpdateAllowed(false)
	};
  return (
    <form onSubmit={handleSubmit}>
    <div style={{border: '2px dashed #EF4444', margin: '1rem', borderRadius: '0.375rem', padding: '0.5rem', backgroundColor: '#FEF2F2', textAlign: 'center', fontWeight: '600'}}>
        You are allowed to modify your certificate only once.
    </div>
    <div style={{marginBottom: '2.5rem', width: '100%', padding: '0 0.75rem', color: '#747474'}}>
        <div>
            <p style={{fontWeight: '600', marginTop: '1.25rem', marginLeft: '0.25rem', marginBottom: '0.5rem'}}>
                Updated Name <span style={{color: '#EF4444'}}>*</span>
            </p>

            <Input
                id="updatedName"
                defaultValue={updatedName}
                name="updatedName"
                type="text"
                required
                onChange={(e) => setUpdateName(e.target.value)}
                autoComplete="title"
                style={{width: '100%'}}
            />
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Button onClick={handleSubmit} children="Raise Request" type="submit" />
        </div>
    </div>
</form>
  )
}

export default CertUpdateRequestModal