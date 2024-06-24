import { Button, Typography, notification } from 'antd';
import { Link } from 'react-router-dom';
import { AppleFilled, WindowsFilled , LinuxOutlined, AndroidFilled, LaptopOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import useWindowSize from '../../../hooks/useWindowSize';
import { StyledParagraph, StyledTitle, StyledModalContent } from '../../../styles/settings.styles';
import useAuthStore from '../../../store/authStore';
import { serviceGet } from '../../../utils/api';
import { useEffect, useState } from 'react';



const DeviceLogged = ({ handleCancel }) => {

    const { width } = useWindowSize()
    const user = useAuthStore((state) => state.user);
    const [sessions, setSessions] = useState([]); // Now useState is defined
    const [loading, setLoading] = useState(false)
    const screenLimitReached = useAuthStore((state) => state.screenLimitReached);

    const fetchSessions = async () => {
        try {
          if (user) {
            setLoading(true);
            const {data} = await serviceGet(`student/student/v1/screen/${user?.id}`);
            console.log(data)
            setSessions(data);
          } else {
        
          }
        } catch (error) {
          console.log(error)
          notification.error({ message: error.message });
        } finally {
          setLoading(false)
        }
      };

    useEffect(()=>{
        fetchSessions();
    },[])

    const handleClear = () => {
        handleCancel()
    }

    return (
        <StyledVariant width={width}>
            <StyledTitle level={2}>Device Logged</StyledTitle>
            <div className='sub-container' >
                {
                    sessions.map((session, index) => {
                        return (
                            <Card key={index} width={width} className='card'>
                                <div><i>{(session.os === 'Win32' || session.os==='Window') ? <WindowsFilled /> : 
                                         (session.os === 'Android' || session.os==='Linux armv81') ? <AndroidFilled/> :
                                         (session.os === 'Darwin' || session.os.match(/mac/gi)) ? <AppleFilled/> : 
                                         session.os === 'Linux' ? <LinuxOutlined/>
                                         : <LaptopOutlined/>}</i> <p>{session.os === 'Linux armv81' ? 'Android' : session.os}</p></div>
                                <p>{session.loginTime}</p>
                                <div className={`hidden hidden-card`}>Logout</div>
                            </Card>
                        )
                    })
                }
                <Button type='primary' size='large' style={{ height: "55px" }} onClick={handleClear}>Clear all session</Button>
                {/* <Link className='last-element'>Have problem with devices login?</Link> */}
            </div>
        </StyledVariant>
    )
}

const StyledVariant = styled(StyledModalContent)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Poppins;
    .sub-container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 17px;
    }
    .last-element{
        color: var(--Color-Brand-Brand-Blue, #0859DE);
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        padding: 16px 0;
    }

    /* showing logout option based on hover card */
    .card:hover .hidden-card{
        display:flex;
    }
`

const Card = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${props => props.width >= 768 ? "13.4px 24px" : "13.4px 5px"};
    width: ${props => props.width >= 768 ? "430px" : "330px"};
    
    color: #081735;
    font-size: 18px;
    font-weight: 500;
    border-radius: 6.487px;
    cursor: pointer;
    div{
        display: flex;
        gap: 12px;
    }
    .hidden{
        display: none;
        justify-content: center;
        align-items:center ;
        padding: 13.4px 24px;
        width: ${props => props.width >= 768 ? "430px" : "330px"};
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #DE0844;
        z-index: 55;
        border-radius: 6.487px;
        font-size: 18px;
        font-weight: 600;
        color: white;
        transition: all 0.3s;
        
    }
    .hidden-card{
        background-color: #DE0844;
    }
`
export default DeviceLogged;

