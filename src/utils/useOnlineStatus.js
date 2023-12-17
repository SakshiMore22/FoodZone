import { useState , useEffect } from "react";

const useOnlineStatus=()=>{

    const [onlineStatus,setonlineStatus]=useState(true)

    //check if user status is online or offline
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlineStatus(false)
        })

        window.addEventListener("online",()=>{
            setonlineStatus(true)
        })
    },[]);

    //returns a boolean expression representing status
    return onlineStatus;
}

export default useOnlineStatus;