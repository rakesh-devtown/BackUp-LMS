import { Modal } from 'antd'
import React from 'react'
import AddEducation from './AddEducation'
import AddExperience from './AddExperience'
import CloseModal from '../../Buttons/CloseModal'
import styled from 'styled-components'
import useWindowSize from '../../../hooks/useWindowSize'
import AddSkills from './AddSkills'
import AddSocialMedia from './AddSocialMedia'
import AddProject from './AddProject'
import AddCertification from './AddCertification'
import EditPersonalDetails from './EditPersonalDetails'

const ResumeModals = ({ keyItem, handleCancel, value }) => {

    const { width } = useWindowSize();
    return (
        <>
            <Modal
                // title={keyItem}
                // styles={myModalStyles}
                // propWidth={width}
                // maskClosable={false}
                open={true}
                // confirmLoading={confirmLoading}
                onCancel={handleCancel}
                centered={true}
                footer={null}
                width={width >= 1200 ? "1016px" : (width >= 768 ? "600px" : "450px")}
            // closeIcon={<CloseModal />}
            >

                {keyItem === 'education' && <AddEducation />}
                {keyItem === 'skills' && <AddSkills />}
                {keyItem === 'socialMedia' && <AddSocialMedia />}
                {keyItem === 'experience' && <AddExperience value={value} />}
                {keyItem === 'project' && <AddProject />}
                {keyItem === 'certification' && <AddCertification />}
                {keyItem === 'personalDetails' && <EditPersonalDetails />}




            </Modal>
        </>
    )
}


export default ResumeModals;