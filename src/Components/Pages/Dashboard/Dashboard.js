import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaHome, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import cargo from '../../../Images/Cargo logo/cargo1.png';
import auth from '../../../firebase.init';
import '../../CSS/DashboardStyle.css';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [authUser] = useAuthState(auth);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/user/${authUser?.email}`)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [users, authUser?.email]);

  const handleToggle = () => {
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="bg-slate-900 text-white">
      <div>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-sidebar"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side navigation ">
            <label for="dashboard-sidebar" className="drawer-overlay "></label>
            <ul className=" ">
              <li style={{ marginLeft: '-12px', marginBottom: '50px' }}>
                <Link to="/" className="aLink flex justify-center">
                  <img
                    className="h-20 w-20 rounded-full"
                    src={users[0]?.img || cargo}
                    alt=""
                  />
                </Link>
              </li>
              {/* start */}
              <li>
                <Link className="aLink" to="/">
                  <span className="icon  ">
                    <FaHome className="text-2xl mt-3 ml-2 pt-1" />
                  </span>
                  <span className="title hover:animate-pulse font-bold ">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link className="aLink" to="/qrCode">
                  <span className="icon  ">
                    <FaHome className="text-2xl mt-3 ml-2 pt-1" />
                  </span>
                  <span className="title hover:animate-pulse font-bold ">
                    Home
                  </span>
                </Link>
              </li>

              <li className="mt-20">
                <Link className="aLink" to="/contact">
                  <span className="icon">
                    <BsFillTelephoneFill className="text-2xl mt-3 ml-2 pt-1" />
                  </span>
                  <span className="title">Contact</span>
                </Link>
              </li>
              <li className="">
                <Link className="aLink" to="/profile">
                  <span className="icon">
                    <FaUserAlt className="text-2xl mt-3 ml-2 pt-1" />
                  </span>
                  <span className="title">Profile</span>
                </Link>
              </li>
              <li>
                <Link onClick={handleSignOut} className="aLink ">
                  <span className="icon">
                    <FaSignOutAlt className="text-2xl mt-3 ml-2 pt-1" />
                  </span>
                  <span className="title">Sign Out</span>
                </Link>
              </li>
            </ul>
            <div onClick={handleToggle} className="toggle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
