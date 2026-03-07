// import { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "../../axiosInstance";
// import { Contextapi } from "../../../contextapi/Contextapi";

// function AdLogin() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     communityCode: "",
//   });

//   const navigate = useNavigate();
//   const { saveAuthData } = useContext(Contextapi);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/api/auth/admin-login", formData);
//       alert("Login Successful ✅");

//       saveAuthData(res.data.token, res.data.firstName, res.data.role);
//       localStorage.setItem("lastName", res.data.lastName);
//       localStorage.setItem("communityName", res.data.communityName);
//       localStorage.setItem("communityCode", res.data.communityCode);

//       navigate("/admin/dashboard");
//     } catch (err) {
//       const errorMessage = err?.response?.data?.error || "Login failed ❌";
//       alert(errorMessage);
//       console.error("Login error:", err);
//     }
//   };

//   return (
//     <>
//       <div className="container-fluid vh-100 position-relative overflow-hidden login-bg">
//         {/* ⭐ STAR BACKGROUND */}
//         <div className="stars layer1"></div>
//         <div className="stars layer2"></div>
//         <div className="stars layer3"></div>

//         {/* LOGIN CARD */}
//         <div className="row h-100 justify-content-center align-items-center position-relative">
//           <div className="col-11 col-sm-8 col-md-5 col-lg-4">
//             <div className="login-glass">
//               <h3 className="text-center text-white fw-bold mb-4">
//                 Admin Login
//               </h3>

//               <form onSubmit={handleSubmit}>
//                 <label>Username / Email</label>
//                 <input
//                   type="text"
//                   className="form-control mb-3"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />

//                 <label>Password</label>
//                 <input
//                   type="password"
//                   className="form-control mb-3"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />

//                 <label>Community ID</label>
//                 <input
//                   type="text"
//                   className="form-control mb-4"
//                   name="communityCode"
//                   value={formData.communityCode}
//                   onChange={handleChange}
//                 />

//                 <button className="btn btn-light w-100 fw-bold">Login</button>
//               </form>

//               <div className="text-center mt-3">
//                 <Link
//                   to="/forget-password"
//                   className="text-white text-decoration-none"
//                 >
//                   Forget Password?
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 🔥 THEME CSS (SAME AS REGISTER) */}
//       <style>
//         {`
//         .login-bg {
//           background: #000;
//         }

//         /* STAR ANIMATION (INFINITE) */
//         .stars {
//           position: absolute;
//           inset: 0;
//           background-repeat: repeat;
//           animation: starScroll linear infinite;
//         }

//         @keyframes starScroll {
//           from { background-position: 0 0; }
//           to { background-position: 0 -3000px; }
//         }

//         .layer1 {
//           background-image: radial-gradient(2px 2px at 20% 30%, white, transparent);
//           background-size: 180px 180px;
//           animation-duration: 25s;
//         }

//         .layer2 {
//           background-image: radial-gradient(3px 3px at 60% 70%, white, transparent);
//           background-size: 280px 280px;
//           animation-duration: 45s;
//         }

//         .layer3 {
//           background-image: radial-gradient(4px 4px at 80% 90%, white, transparent);
//           background-size: 450px 450px;
//           animation-duration: 70s;
//         }

//         /* GLASS LOGIN CARD */
//         .login-glass {
//           background: rgba(255, 255, 255, 0.12);
//           backdrop-filter: blur(14px);
//           -webkit-backdrop-filter: blur(14px);
//           border-radius: 20px;
//           padding: 30px;
//           border: 1px solid rgba(255,255,255,0.25);
//           box-shadow: 0 0 40px rgba(0,0,0,0.6);
//         }

//         .login-glass label {
//           color: #ffffff;
//           font-weight: 500;
//         }

//         .login-glass .form-control {
//           background: rgba(255,255,255,0.9);
//           border: none;
//           color: #000;
//         }

//         .login-glass .form-control:focus {
//           box-shadow: none;
//         }
//         `}
//       </style>
//     </>
//   );
// }

// export default AdLogin;

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axiosInstance";
import { Contextapi } from "../../../contextapi/Contextapi";

function AdLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    communityCode: "",
  });

  const navigate = useNavigate();
  const { saveAuthData } = useContext(Contextapi);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/admin-login", formData);

      alert("Login Successful ✅");

      saveAuthData(res.data.token, res.data.firstName, res.data.role);
      localStorage.setItem("lastName", res.data.lastName);
      localStorage.setItem("communityName", res.data.communityName);
      localStorage.setItem("communityCode", res.data.communityCode);

      navigate("/admin/dashboard");
    } catch (err) {
      const errorMessage = err?.response?.data?.error || "Login failed ❌";
      alert(errorMessage);
      console.error("Login error:", err);
    }
  };

  return (
    <div className="main-bg">
      {/* Background Circles */}
      <div className="circle c1"></div>
      <div className="circle c2"></div>
      <div className="circle c3"></div>
      <div className="circle c4"></div>
      <div className="circle c5"></div>
      <div className="circle c6"></div>
      <div className="circle c7"></div>
      <div className="circle c8"></div>
      <div className="circle c9"></div>
      <div className="circle c10"></div>

      {/* Login Content */}
      <div className="premium-wrapper d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="card shadow-lg p-4"
          style={{ width: "100%", maxWidth: "420px", borderRadius: "15px" }}
        >
          <h3 className="text-center fw-bold mb-4">Admin Login</h3>

          <form onSubmit={handleSubmit}>
            <label className="fw-semibold">Username / Email</label>
            <input
              type="text"
              className="form-control mb-3"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label className="fw-semibold">Password</label>
            <input
              type="password"
              className="form-control mb-3"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label className="fw-semibold">Community ID</label>
            <input
              type="text"
              className="form-control mb-4"
              name="communityCode"
              value={formData.communityCode}
              onChange={handleChange}
              required
            />

            <button className="btn btn-primary w-100 fw-bold">Login</button>
          </form>

          <div className="text-center mt-3">
            <Link to="/forget-password" className="text-decoration-none">
              Forget Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdLogin;
