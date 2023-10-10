import React from 'react';
import { Card, Row, Col } from 'antd';
//import 'antd/dist/antd.css';

const { Meta } = Card;

const coursesData = [
  {
    title: 'Course 1',
    description: 'Description of Course 1',
    image: 'https://via.placeholder.com/150', // Replace with your course image URL
  },
  {
    title: 'Course 2',
    description: 'Description of Course 2',
    image: 'https://via.placeholder.com/150', // Replace with your course image URL
  },
  {
    title: 'Course 3',
    description: 'Description of Course 3',
    image: 'https://via.placeholder.com/150', // Replace with your course image URL
  },
];

function Courses() { // Renamed the component to Courses
  return (
    <div className="Courses"> {/* Updated class name */}
      <h1 className="text-center my-6 mt-">My Courses</h1>
      <Row gutter={16}>
        {coursesData.map((course, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt={course.title} src={course.image} />}
            >
              <Meta title={course.title} description={course.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Courses; // Export the component as Courses
