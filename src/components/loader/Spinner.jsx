import { Spin } from "antd";

const Spinner=({large})=>{
    return (
        <div style={{
            position:'absolute',
            top:0,
            bottom:0,
            left:0,
            right:0,
            width:'100%',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            backgroundColor:'rgba(0,0,0,0.2)',
            zIndex:99,
            alignItems:'center',
        }}>
            <Spin size={large ? 'large' : 'small'}/>
        </div>
    )
}
export default Spinner;