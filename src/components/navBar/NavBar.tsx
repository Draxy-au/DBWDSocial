import { useContext } from "react";
import { Link } from "react-router-dom";

import "./navBar.scss";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  return (
    <div className='nav-bar'>
      <div className='left'>
        <Link to='/home'>
          <span>socialbook</span>
        </Link>
        <HomeOutlinedIcon />
        {!darkMode && <Brightness4OutlinedIcon onClick={toggle} />}
        {darkMode && <Brightness5OutlinedIcon onClick={toggle} />}
        <GridViewOutlinedIcon />
        <div className='search'>
          <SearchOutlinedIcon />
          <input type='text' id='searchInput' placeholder='search' />
        </div>
      </div>
      <div className='right'>
        <PersonOutlineOutlinedIcon />
        <MailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className='user'>
          <img src={`${currentUser?.profilePic}`} alt='profilePic' />
          <span>{currentUser?.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
