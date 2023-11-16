import LOGO_URL from "../utils/common";
const Header=()=>{
    return(
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
          <ul>
            <li key="nav-item-1">Home</li>
            <li key="nav-item-2">About</li>
            <li key="nav-item-3">Contact</li>
            <li key="nav-item-4">Cart</li>
          </ul>
        </div>
      </div>
    );
  }

export default Header;