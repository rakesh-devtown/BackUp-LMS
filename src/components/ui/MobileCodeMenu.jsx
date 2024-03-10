import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'

function MobileCodeMenu( {

  value,
  setValue

}  ) {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  
  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      style={{
        width: "106px",
      }}
      onChange={setValue}/>
  )
}

export default MobileCodeMenu