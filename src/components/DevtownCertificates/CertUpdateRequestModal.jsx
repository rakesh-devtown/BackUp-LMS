import React, { useState } from 'react'
import { servicePost } from '../../utils/api';
import { setHeader } from '../../utils/header';
import { Button, Input, notification } from 'antd';
import { CertFormButtonContainer, CertFormContainer, CertFormInput, CertFormTitle, CertFormTitleRequired, CertWarningContainer } from '../../styles/Certificates/certificates.styles';
import useLoadingStore from '../../store/loadingStore';

function CertUpdateRequestModal({ setopen, about ,setUpdateAllowed }) {
    const [updatedName, setUpdateName] = useState();
	const handleSubmit = (event) => {
		event.preventDefault();
		handleRequest();
	};
  const setLoading = useLoadingStore((state) => state.setLoading);

	const handleRequest = async () => {
		try {
      setLoading(true)
            setHeader("auth", `bearer ${localStorage.getItem("token")}`);
			const { success, message } = await servicePost(
				`student/student-api/v1/certificate/update-request/`,
				{ updatedName: updatedName },
			
			);
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
		} finally {
            setLoading(false)
    }
		setopen(false);
		setUpdateAllowed(false)
	};
  return (
    <form onSubmit={handleSubmit}>
    <CertWarningContainer>
  You are allowed to modify your certificate only once.
</CertWarningContainer>
<CertFormContainer>
  <div>
    <CertFormTitle>
      Updated Name <CertFormTitleRequired>*</CertFormTitleRequired>
    </CertFormTitle>

    <CertFormInput
      id="updatedName"
      defaultValue={updatedName}
      name="updatedName"
      type="text"
      required
      onChange={(e) => setUpdateName(e.target.value)}
      autoComplete="title"
    />
  </div>
  <CertFormButtonContainer>
    <Button onClick={handleSubmit} children="Raise Request" type="submit" />
  </CertFormButtonContainer>
</CertFormContainer>
</form>
  )
}

export default CertUpdateRequestModal