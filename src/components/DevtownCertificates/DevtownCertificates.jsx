import { notification } from 'antd';
import React, { useEffect, useState } from 'react'
import { serviceGet } from '../../utils/api';
import { setHeader } from '../../utils/header';
import useLoadingStore from '../../store/loadingStore';
import NewModal from '../ProfileModals/NewModal';
import { Link } from 'react-router-dom';
import CertUpdateRequestModal from './CertUpdateRequestModal';

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
	// Function to toggle dropdown visibility
	const toggleDropdown = (title) => {
		if (selectedTitle === title) {
			setSelectedTitle(null);
		} else {
			setSelectedTitle(title);
		}
	};
  return certificates && certificates.length > 0  ?  (
    <div style={{padding: '0 2rem'}}>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{height: 'auto', backgroundColor: 'white', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '1.125rem'}}>
            DevTown Certificates
        </div>
        <div style={{marginBottom: '0.5rem'}}>
            {updateAllowed ? (
                <div style={{display: 'flex', alignItems: 'flex-start'}}>
                    <NewModal
                        text="Update"
                        mainSub="Raise Update Request Certificate"
                    >
                        <CertUpdateRequestModal setUpdateAllowed={setUpdateAllowed} />
                    </NewModal>
                </div>
            ) : (
                ""
            )}
        </div>
    </div>
    <div style={{maxHeight: '12rem', overflowY: 'auto', width: '100%'}}>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {certificates?.map((certificate) => (
                <div style={{display: 'flex', width: '100%', backgroundColor: '#F7FAFC', border: ''}}>
                    <div
                        key={certificate?.name}
                        style={{display: 'grid', borderStyle: 'solid', borderColor: '#E2E8F0', borderWidth: '0 0 1px 0', margin: '0 auto', width: '100%', padding: '0.5rem 1rem', cursor: 'pointer'}}
                    >
                        <details className="group">
                            <summary style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '500', listStyle: 'none', width: '100%', padding: '0.5rem 0'}}>
                                <span>{certificate?.name}</span>

                                <span className="transition-all group-open:rotate-180">
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
                                </span>
                            </summary>
                            {certificate?.certificates?.map((certificate) => (
                                <div style={{borderLeft: '4px solid #6B46C1', backgroundColor: 'white', display: 'flex', alignItems: 'center', transition: 'all 0.7s', ':hover': {backgroundColor: '#F7FAFC'}}}>
                                    <Link
                                        to={`/download/${certificate._id}`}
                                        style={{width: '100%', fontSize: '0.875rem', marginLeft: '1rem'}}
                                    >
                                        <div style={{fontWeight: '600', padding: '0.25rem 0'}}>
                                            <div>View</div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </details>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>
)
   : (
    <>
    
    </>
  )
}

export default DevtownCertificates