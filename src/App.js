import 'react-day-picker/dist/style.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import CreateAccount from './Components/Login/CreateAccount';
import Login from './Components/Login/Login';
import RequireAuth from './Components/Login/RequireAUth';
import AddProduct from './Components/Pages/Dashboard/Add Product/AddProduct';
import AllProducts from './Components/Pages/Dashboard/All Product/AllProducts';
import Bookings from './Components/Pages/Dashboard/Boooking/Bookings';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import QRCodeScanner from './Components/Pages/Dashboard/QR Code/QRCodeScanner';
import Home from './Components/Pages/Home/Home';
import Pdf from './Components/Pages/Pdf/Pdf';
import NotFound from './Components/Share/NotFound';

function App() {
  return (
    <div>
      {/* <Appointment /> */}
      <Routes>
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<NotFound />}></Route>

        {/* Dashboard Start */}
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Home />} />
          <Route path="booking" element={<Bookings />} />
          <Route path="qrCode" element={<QRCodeScanner />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="allProduct" element={<AllProducts />} />

          <Route path="pdf" element={<Pdf />} />
        </Route>
        {/* Dashboard End */}
      </Routes>
      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
