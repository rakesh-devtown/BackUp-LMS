import React, { useState } from 'react'
import { Container } from '../../styles/LoginPage.styles'
import useAuthStore from '../../store/authStore';
import { LineChartOutlined } from '@ant-design/icons';

function WrapperCareersPath() {
    const [info ,setInfo ] = useState([])

    const user = useAuthStore((state) => state.user);
    console.log(user);
  return (
    <Container>
      <h1
      style={{
        display:"inline"
      }}
      >
         I am  {user?.user?.name} having {info[1] ? info[1] : <LineChartOutlined/> }
      </h1>
    </Container>
  )
}

export default WrapperCareersPath