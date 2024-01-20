import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import auth from '../Auth/RouteProtection/auth';
import { BackwardOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import img from "../../assets/images/ICON.svg";
function GenerateMagicLink() {
    const navigate = useNavigate();
    const [value , setValue] = useState({
        email:""
    })
    //submit the form data
    function handleOnChange(e) {
        const { name, value } = e.target;
        setValue((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleSubmit = (event) => {
      event.preventDefault();
    
      if(value) {
            auth.generateMagicLink(value);
      }
    }
  return (
    <>
    <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', maxWidth: '36rem', margin: '0 auto'}}>
      <div style={{maxWidth: '20rem', backgroundColor: 'white', padding: '2.5rem', borderRadius: '0.5rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem'}}>
        <div style={{position: 'absolute', top: '2.5rem', left: '2.5rem'}}>
          <button

            onClick={()=>{
              navigate('/auth')
            }}
            style={{cursor:"pointer",display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0.5rem 1rem', borderWidth: '1px', borderColor: 'transparent', fontSize: '1rem', fontWeight: '500', borderRadius: '0.25rem', color: 'black', backgroundColor: '#f7fafc', outline: 'none'}}
          >
            <BackwardOutlined style={{display: 'inline-block'}} size={25}/>
            Back</button>
        </div>
        <div style={{textAlign:"center"}}>
          <img
            style={{margin: '0 auto', height: '3rem', width: 'auto'}}
            src={img}
            alt="Workflow"
          />
          <h2 style={{marginTop: '1.5rem', textAlign: 'center', fontSize: '1.875rem', fontWeight: '800', color: '#1a202c'}}>Login With Magic Link</h2>
        </div>
        <p style={{textAlign: 'center', fontSize: '1rem'}}>Simplify your login process: Receive a magical link via email, click to log in, and easily access your account securely— <span style={{fontWeight: 'bold'}}>no passwords required</span></p>
        {/* form for submission */}
        <form  style={{marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem'}} onSubmit={handleSubmit}>
          <div style={{borderRadius: '0.25rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', marginBottom: '1.5rem'}}>
            <div>
              <Input
                onChange={handleOnChange}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email address"
              />
            </div>
          </div>
          <div style={{display:"flex" , textAlign:"center" , justifyContent:"center" }}>
            <button
            

              type="submit"
                style={{backgroundColor: 'whitesmoke', color: 'black', fontWeight: '500', fontSize: '1rem', borderRadius: '0.25rem',  borderWidth: '1px', borderColor: 'transparent', cursor: 'pointer', outline: 'none' , padding : "6px"}}
              onClick={handleSubmit}
            >
                Send Magic Link
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default GenerateMagicLink