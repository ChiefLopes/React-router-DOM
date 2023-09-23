import PropTypes from "prop-types";   
import { useState } from "react";  

export const ChangeProfile = (props) => {
    const [newUsername, setNewUsername] = useState("");
    
  return (
      <div>
          <input onChange={(e) => setNewUsername(e.target.value)} />
          <button onClick={() => {props.setNewUsername(newUsername)}}>Change Username</button>
          
    </div>
  )
}

 ChangeProfile.propTypes = {
    setNewUsername: PropTypes.string.isRequired,
 }