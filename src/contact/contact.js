import React from 'react';
import {useHistory, useLocation} from 'react-router-dom'

const Contact = (props) => {

    console.log(props);
        
   const history= useHistory();
         
  const location= useLocation()
console.log(location);
    const goToAbout=()=>{

        // props.history.push("/about-us")

        history.push("/about-us")
    }
    return (
        <>
         <div>
            contact us
        </div>

        <button onClick={()=>goToAbout()} className="btn btn-success">Go To About us</button>
        
        </>
       
    );
}

export default Contact;
