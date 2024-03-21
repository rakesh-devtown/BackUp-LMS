import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import CourseDescriptionModalCard from '../Cards/CourseDescriptionModalCars';
const CourseDescriptionModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
     
      <Modal width="70%" open={true} onOk={handleOk} onCancel={handleCancel}>
      <CourseDescriptionModalCard/>
      </Modal>
    </div>
  );
};
export default CourseDescriptionModal;