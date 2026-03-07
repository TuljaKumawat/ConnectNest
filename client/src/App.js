import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Path from './components/Path';
import Register from './components/Pages/Admin/Register';
import AdLogin from './components/Pages/Admin/AdLogin';
import PendingAdmin from './components/Pages/superadmin/PendingAdmin';
import AdminDashboard from './components/Pages/Admin/AdminDashboard';
import ForgetPassword from './components/Pages/Admin/ForgetPassword';
import ResetPassword from './components/Pages/Admin/ResetPassword';
import ProtectedRoute from "./components/ProtecteRoute";
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { Contextapi, ContextProvider } from './contextapi/Contextapi';
import ResidentLogin from './components/Pages/User/ResidentLogin';
import ResidentDashboard from './components/Pages/User/ResidentDashboard';
import ManageResidents from './components/Pages/Admin/ManageResident';
import ManageAnnouncements from './components/Pages/Admin/ManageAnnoucements';
import ResidentProfile from './components/Pages/User/ResidentProfile';
import ManageBills from './components/Pages/Admin/ManageBills';
import ResidentBills from './components/Pages/User/ResidentBills';
import ResidentComplaint from './components/Pages/User/ResidentComplaint';
import ManageComplaints from './components/Pages/Admin/ManageComplaints';
import EmailVerification from './components/Pages/Admin/EmailVerification';
import VerifyEmail from './components/Pages/Admin/VerifyEmail';



function App() {
  const { token } = useContext(Contextapi) || {};

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);
  return (
    <ContextProvider>
      <Router>

        <Header />
        <Routes>
          <Route path='/' element={< Path />}></Route>
          <Route path='/verify-email' element={< EmailVerification />}></Route>
          <Route path='/verify-email/:token' element={<VerifyEmail />}></Route>
          <Route path='/register' element={< Register />}></Route>
          <Route path='/super-admin/pending-admins' element={<PendingAdmin />}></Route>
          <Route path='/admin-login' element={<AdLogin />}></Route>
          <Route path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin/manage-residents'
            element={
              <ProtectedRoute>
                <ManageResidents />
              </ProtectedRoute>
            }
          />

          <Route
            path='/admin/manage-announcements'
            element={
              <ProtectedRoute>
                <ManageAnnouncements />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/manage-bills"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <ManageBills />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/complaints"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <ManageComplaints />
              </ProtectedRoute>
            }
          />
          <Route path='/forget-password' element={< ForgetPassword />}></Route>
          <Route path='/reset-password/:token' element={< ResetPassword />}></Route>

          <Route path='/resident-login' element={< ResidentLogin />}></Route>
          <Route
            path="/resident/dashboard"
            element={
              <ProtectedRoute allowedRoles={["resident"]}>
                <ResidentDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/resident/bills"
            element={
              <ProtectedRoute allowedRoles={["resident"]}>
                <ResidentBills />
              </ProtectedRoute>
            }
          />


          <Route
            path="/resident/profile"
            element={
              <ProtectedRoute allowedRoles={["resident"]}>
                <ResidentProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resident/complaints"
            element={
              <ProtectedRoute allowedRoles={["resident"]}>
                < ResidentComplaint />
              </ProtectedRoute>
            }
          />



        </Routes>
        <Footer />


      </Router>
    </ContextProvider>
  );
}

export default App;
