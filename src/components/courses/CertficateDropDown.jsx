import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import CertificateForm from './CertificateForm';
const CertificateDropDown = (  { handleSubmit , updateProfile , setupdateProfile,   setCertificateData ,  open , setOpen } ) => {
  
  const [placement, setPlacement] = useState('left');
  

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      
      <Drawer
        title="Fill you details to get certificate"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <CertificateForm updateProfile={updateProfile} setupdateProfile={setupdateProfile}  handleSubmit={handleSubmit}  open={open} setOpen={setOpen} setCertificateData={setCertificateData}  />
        

      </Drawer>
    </>
  );
};
export default CertificateDropDown;