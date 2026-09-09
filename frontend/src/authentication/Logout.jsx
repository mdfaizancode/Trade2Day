import {useNavigate} from "react-router-dom";

function Logout({setIsAuthenticated}){

   const navigate = useNavigate();

   const handleLogout = ()=>{
    localStorage.removeItem('user-info');
    setIsAuthenticated(false);
    navigate('/login');
   }

    return(
      <div>
        <button className="logout-btn" onClick={handleLogout} >Logout</button>
      </div>
    )
}
export default Logout;