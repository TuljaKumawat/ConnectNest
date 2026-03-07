// import { useState, useContext } from "react";
// import axios from "../../axiosInstance";
// import { Link, useNavigate } from "react-router-dom";
// import { Contextapi } from "../../../contextapi/Contextapi";

// function ResidentLogin() {
//   const navigate = useNavigate();
//   const { saveAuthData } = useContext(Contextapi);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/api/auth/resident-login", formData);

//       // ✅ SAME BACKEND LOGIC
//       saveAuthData(res.data.token, res.data.firstName, res.data.role);
//       localStorage.setItem("communityName", res.data.communityName);
//       localStorage.setItem("communityCode", res.data.communityCode);

//       alert("Login Successful ✅");
//       navigate("/resident/dashboard");
//     } catch (err) {
//       alert(err?.response?.data?.error || "Login failed ❌");
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "black",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* ⭐ STAR BACKGROUND */}
//       <div className="stars layer1"></div>
//       <div className="stars layer2"></div>
//       <div className="stars layer3"></div>

//       {/* ⭐ LOGIN CARD */}

//       <div
//         className="d-flex align-items-center justify-content-center"
//         style={{
//           minHeight: "100vh",
//           backgroundColor: "black",
//         }}
//       >
//         <div
//           className="card shadow-lg text-white"
//           style={{
//             width: "380px",
//             background: "linear-gradient(145deg, #1c1c1c, #2b2b2b)",
//             borderRadius: "16px",
//           }}
//         >
//           <div className="card-body p-4">
//             <h3 className="text-center fw-bold mb-4">Resident Login</h3>

//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label className="form-label">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="form-control"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="form-label">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   className="form-control"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <button type="submit" className="btn btn-light w-100 fw-semibold">
//                 Login
//               </button>
//             </form>

//             <div className="text-center mt-3">
//               <Link
//                 to="/forget-password"
//                 className="text-white text-decoration-none"
//               >
//                 Forget Password?
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ⭐ STAR CSS */}
//       <style>{`
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
//       `}</style>
//     </div>
//   );
// }

// export default ResidentLogin;

import { useState, useContext } from "react";
import axios from "../../axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import { Contextapi } from "../../../contextapi/Contextapi";
import "bootstrap/dist/css/bootstrap.min.css";
//import "../../styles/background.css"; // ✅ background css import (path adjust if needed)

function ResidentLogin() {
  const navigate = useNavigate();
  const { saveAuthData } = useContext(Contextapi);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/resident-login", formData);

      saveAuthData(res.data.token, res.data.firstName, res.data.role);
      localStorage.setItem("communityName", res.data.communityName);
      localStorage.setItem("communityCode", res.data.communityCode);

      alert("Login Successful ✅");
      navigate("/resident/dashboard");
    } catch (err) {
      alert(err?.response?.data?.error || "Login failed ❌");
    }
  };

  return (
    <div className="main-bg d-flex justify-content-center align-items-center">
      {/* SAME BACKGROUND CIRCLES */}
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

      {/* LOGIN CARD */}
      <div className="login-card shadow-lg">
        <h3 className="fw-bold text-center mb-4 heading-text">
          Resident Login
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control custom-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control custom-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn login-btn w-100 fw-semibold">
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <Link to="/forget-password" className="text-decoration-none small">
            Forgot Password?
          </Link>
        </div>
      </div>

      {/* COMPONENT SPECIFIC CSS ONLY */}
      <style>{`

        .login-card {
          width: 380px;
          background: white;
          border-radius: 30px;
          padding: 40px 30px;
          position: relative;
          z-index: 2;
        }

        .heading-text {
          font-size: 26px;
          color: #444;
        }

        .custom-input {
          height: 45px;
          border-radius: 20px;
        }

        .login-btn {
          background: #4e73df;
          border: none;
          border-radius: 20px;
          height: 45px;
          color: white;
        }

        .login-btn:hover {
          background: #375ad3;
        }

        @media (max-width: 768px) {
          .login-card {
            width: 92%;
          }
        }

      `}</style>
    </div>
  );
}

export default ResidentLogin;
