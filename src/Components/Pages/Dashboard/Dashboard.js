import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillCamera } from 'react-icons/ai';
import { FaHome, FaProductHunt, FaSignOutAlt } from 'react-icons/fa';
import { MdAddchart } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import pos from '../../../Images/Cargo logo/pos1.png';
import auth from '../../../firebase.init';
import '../../CSS/DashboardStyle.css';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [authUser] = useAuthState(auth);
  const [users, setUsers] = useState([]);
    const [selectedButton, setSelectedButton] = useState('Button 2');

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
              <label
                for="dashboard-sidebar"
                className="drawer-overlay "
              ></label>
              <ul className=" ">
                <li style={{ marginLeft: '-12px', marginBottom: '50px' }}>
                  <Link to="/" className="aLink flex justify-center">
                    <img
                      className="h-20 w-20 rounded-full"
                      src={users[0]?.img || pos}
                      alt=""
                    />
                  </Link>
                </li>
                {/* start */}
                <li
                  onClick={() => setSelectedButton('Button 1')}
                  className={
                    selectedButton === 'Button 1'
                      ? 'bg-slate-900 text-black rounded-l-lg'
                      : ''
                  }
                >
                  <Link className="aLink" to="/">
                    <span className="icon  ">
                      <FaHome className="text-2xl mt-3 ml-2 pt-2" />
                    </span>
                    <span className="title hover:animate-pulse font-bold ">
                      Home
                    </span>
                  </Link>
                </li>
                <li
                  onClick={() => setSelectedButton('Button 2')}
                  className={
                    selectedButton === 'Button 2'
                      ? 'bg-slate-900 text-black rounded-l-lg'
                      : ''
                  }
                >
                  <Link className="aLink" to="/qrCode">
                    <span className="icon  ">
                      {/* <img
                      className=" h-9 w-9 rounded-full mt-3 hover:ml-2"
                      src={scan}
                      alt="Scan"
                    /> */}
                      <AiFillCamera className="text-2xl mt-4 ml-2 pt-1" />
                    </span>
                    <span className="title hover:animate-pulse font-bold ">
                      Scan Qr
                    </span>
                  </Link>
                </li>
                <li
                  onClick={() => setSelectedButton('Button 3')}
                  className={
                    selectedButton === 'Button 3'
                      ? 'bg-slate-900 text-black rounded-l-lg'
                      : ''
                  }
                >
                  <Link className="aLink" to="/addProduct">
                    <span className="icon  ">
                      <MdAddchart className="text-2xl mt-4 ml-2 pt-1" />
                    </span>
                    <span className="title hover:animate-pulse font-bold ">
                      Add Product
                    </span>
                  </Link>
                </li>
                <li
                  onClick={() => setSelectedButton('Button 4')}
                  className={
                    selectedButton === 'Button 4'
                      ? 'bg-slate-900 text-black rounded-l-lg'
                      : ''
                  }
                >
                  <Link className="aLink" to="/allProduct">
                    <span className="icon  ">
                      <FaProductHunt className="text-2xl mt-4 ml-2 pt-1" />
                    </span>
                    <span className="title hover:animate-pulse font-bold ">
                      All Product
                    </span>
                  </Link>
                </li>

                <li className="lg:mt-40 md:mt-32">
                  <Link onClick={handleSignOut} className="aLink ">
                    <span className="icon">
                      <FaSignOutAlt className="text-2xl mt-5 ml-2 " />
                    </span>
                    <span className="title">Sign Out</span>
                  </Link>
                </li>
              </ul>

              <div onClick={handleToggle} className="toggle "></div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;
