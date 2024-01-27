import { notification } from 'antd';
import React, { useEffect, useState } from 'react'
import { serviceGet } from '../../utils/api';
import { setHeader } from '../../utils/header';
import useLoadingStore from '../../store/loadingStore';
import NewModal from '../ProfileModals/NewModal';
import { Link } from 'react-router-dom';
import CertUpdateRequestModal from './CertUpdateRequestModal';
import { CertificateDetails, CertificateHeader, CertificateHero, CertificateHeroInner, CertificateIcon, CertificateItem, CertificateItemInner, CertificateLink, CertificateLinkContainer, CertificateName, CertificateSummary, CertificateTitle, CertificateTitleContainer, CertificateUpdateContainer, CertificateUpdateModalContainer, CertificateViewContainer, CertificatesOuterContainer } from '../../styles/certificates.styles';

function DevtownCertificates() {
    const [certificates, setCertificates] = useState([]);
	const [selectedTitle, setSelectedTitle] = useState(null);
	const [updateAllowed, setUpdateAllowed] = useState(false);
    const setLoading = useLoadingStore(state => state.setLoading);
	// fetch devtown certificates of student
	const getCertificates = async () => {
		try {
            setLoading(true);

            setHeader("auth", `bearer ${localStorage.getItem("token")}`);   
			const { success, data } = await serviceGet(
				"student/student-api/v1/certificate",
			);
			if (success) {
				// toast.success("Certificates fetched successfully");
				setCertificates(data.result);
				setUpdateAllowed(data.updateAllowed)
			}
		} catch (error) {
            notification.error({
                message: "Error",
                description: error.message,
            
            })
			// toast.error("Error fetching certificates");
		} finally {
            setLoading(false);

        }
	};

	useEffect(() => {
		getCertificates();
	}, [updateAllowed]);

	const toggleDropdown = (title) => {
		if (selectedTitle === title) {
			setSelectedTitle(null);
		} else {
			setSelectedTitle(title);
		}
	};
  return certificates && certificates.length > 0  ?  (
    <CertificatesOuterContainer >


<CertificateHeader>
  <CertificateTitleContainer>
    <CertificateTitle>Devtown Certificates</CertificateTitle>
  </CertificateTitleContainer>
  <CertificateUpdateContainer>
    {updateAllowed ? (
     <CertificateUpdateModalContainer>
     <NewModal
       text="Update"
       mainSub="Raise Update Request Certificate"
     >
       <CertUpdateRequestModal setUpdateAllowed={setUpdateAllowed} />
     </NewModal>
   </CertificateUpdateModalContainer>
    ) : (
      ""
    )}
  </CertificateUpdateContainer>
</CertificateHeader>
<CertificateHero>
  <CertificateHeroInner>
    {certificates?.map((certificate , i ) => (
      <CertificateItem key={i} >
        <CertificateItemInner >
          <CertificateDetails className="group">
            <CertificateSummary>
              <CertificateName>{certificate?.name}</CertificateName>
              <CertificateIcon>
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </CertificateIcon>
            </CertificateSummary>
            {certificate?.certificates?.map((certificate) => (
              <CertificateLinkContainer>
                <CertificateLink to={`/download/${certificate._id}`}>
                <CertificateViewContainer>
  <div>View</div>
</CertificateViewContainer>
                </CertificateLink>
              </CertificateLinkContainer>
            ))}
          </CertificateDetails>
        </CertificateItemInner>
      </CertificateItem>
    ))}
  </CertificateHeroInner>
</CertificateHero>
</CertificatesOuterContainer>
)
   : (
    <>
    
    </>
  )
}

export default DevtownCertificates