import React from 'react'
import Shourya from '../../assets/images/Shaurya Sinha-B&W.png'
import AdCarousel from '../ui/AdCarousel'
import MainLogo from "../../assets/images/Big Logo.jpg";
import AtoZ from "../../assets/images/Exporter (1) 1.png"
function LayoutTopAd() {
  return (
    <div 
        style={{
            display:"flex",
            justifyContent:"center",
            gap:"20px",
            flexDirection:"row",
            alignItems:"center",
            height:'216px' ,
            width:'100%',
            backgroundColor: "#F9F9F9",
            border: "1px solid #E5E5E5",
            borderRadius: "16px",
            position:"relative"
        }}
    >
        <div
            style={{
                position:"absolute",
                top:10,
                right:10,
                display:"flex",
                alignItems:"center",
                gap:"20px"
            }}
        >
            <img height={22} src={MainLogo} alt="" />
            <img height={43} src={AtoZ} alt="" />
        </div>
        <div>
            <img src={Shourya} alt=""
              height={216}
            />
        </div>
        <div>
            <AdCarousel/>
        </div>
    </div>
  )
}

export default LayoutTopAd