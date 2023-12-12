import { useEffect ,useState} from "react";
import { REST_MENU_URL } from "./common";

const useRestMenu=(resId)=>{

    const [resMenu , setresMenu]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data= await fetch(REST_MENU_URL+resId);
        const json= await data.json();
        setresMenu(json);
    }
    return resMenu;
}

export default useRestMenu;