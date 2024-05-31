import React from 'react'
import styled from 'styled-components'

const TrainingEnrollNowCard = () => {
    return (
        <>
            <EnrollNowCard>
                <h2>Full Stack Web Development Industrial Training program</h2>
                <div className='first_div'>
                    <button>Get Full Access</button>
                    <p>Flat 25% off</p>
                </div>
                <div className='second_div'>
                    <p>Enroll Now at <span>&#8377;5500</span></p>
                </div>
                <button className='enroll_btn'>Enroll Now</button>
            </EnrollNowCard>
        </>
    )
}

const EnrollNowCard = styled.section`
    h2{
        color: #1D2026;
        font-family: "DM Sans";
        font-size: 28px;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 10px;
    }
        .first_div{
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: "DM Sans";
        font-size: 14px;
        font-weight: 400;
        button{
            color: var(--Color-White-100, #FFF);
            line-height: normal;
            font-style: normal;
            padding: 10px 16px;
            border: none;
            border-radius: 4px;
            background: linear-gradient(96deg, #1E6DE8 -12.72%, #9747FF 109.54%);
        }
        p{
            color: #0080FF;
        }
    }
    .second_div{
        color: #1D2026;
        font-family: Inter;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin: 12.81px 0px;
        span{
            font-size: 26px;
            font-weight: 700;
        }
    }

    .enroll_btn{
        padding: 17px 135px;
        color: var(--Color-White-100, #FFF);
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        background: #1E6DE8;
        border-radius: 7.117px;
        border: none;
  }
`

export default TrainingEnrollNowCard