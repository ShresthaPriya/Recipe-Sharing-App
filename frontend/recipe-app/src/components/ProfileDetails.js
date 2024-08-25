import React from "react";
import { AppContext } from "../App";
import { useContext } from "react";


const ProfileDetails =()=>{
    const {username, setUsername}=useContext(AppContext)
    return(
        
        <div>
           <input onChange ={(e)=>setUsername(e.target.value)} value={username}/>
           <button onClick={()=>setUsername(username)}>Change Username</button>
        </div>
    )
}
export default ProfileDetails;