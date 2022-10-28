import { Link } from "react-router-dom";

import "./navBar.scss";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="left">
        <Link to="/home">
          <span>socialbook</span>
        </Link>
        <HomeOutlinedIcon/>
        <Brightness4OutlinedIcon/>
        <GridViewOutlinedIcon/>
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" id="searchInput" placeholder="search" />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon/>
        <MailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user">
          <img src="https://images.pexels.com/photos/8880117/pexels-photo-8880117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="profilePic" />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;