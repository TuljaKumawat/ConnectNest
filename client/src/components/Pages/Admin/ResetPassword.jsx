// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "../../axiosInstance";

// function ResetPassword() {
//   const { token } = useParams();
//   const navigate = useNavigate();

//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }
//     try {
//       const res = await axios.post(`/api/auth/reset-password/${token}`, {
//         password,
//       });
//       alert(res.data.message);
//       navigate("/admin-login");
//     } catch (err) {
//       alert("Invalid or expired link");
//     }
//   };

//   return (
//     <>
//       <div className="container-fluid vh-100 position-relative overflow-hidden reset-bg">
//         {/* ⭐ STAR BACKGROUND */}
//         <div className="stars layer1"></div>
//         <div className="stars layer2"></div>
//         <div className="stars layer3"></div>

//         {/* RESET CARD */}
//         <div className="row h-100 justify-content-center align-items-center position-relative">
//           <div className="col-11 col-sm-8 col-md-5 col-lg-4">
//             <div className="reset-glass">
//               <h3 className="text-center text-white fw-bold mb-4">
//                 Reset Password
//               </h3>

//               <form onSubmit={handleSubmit}>
//                 <label>New Password</label>
//                 <input
//                   type="password"
//                   className="form-control mb-3"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />

//                 <label>Confirm Password</label>
//                 <input
//                   type="password"
//                   className="form-control mb-4"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   required
//                 />

//                 <button type="submit" className="btn btn-light w-100 fw-bold">
//                   Update Password
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 🔥 SAME THEME CSS */}
//       <style>
//         {`
//         .reset-bg {
//           background: #000;
//         }

//         /* INFINITE STAR SCROLL */
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

//         /* GLASS CARD */
//         .reset-glass {
//           background: rgba(255, 255, 255, 0.12);
//           backdrop-filter: blur(14px);
//           -webkit-backdrop-filter: blur(14px);
//           border-radius: 20px;
//           padding: 30px;
//           border: 1px solid rgba(255,255,255,0.25);
//           box-shadow: 0 0 40px rgba(0,0,0,0.6);
//         }

//         .reset-glass label {
//           color: #ffffff;
//           font-weight: 500;
//         }

//         .reset-glass .form-control {
//           background: rgba(255,255,255,0.9);
//           border: none;
//           color: #000;
//         }

//         .reset-glass .form-control:focus {
//           box-shadow: none;
//         }
//         `}
//       </style>
//     </>
//   );
// }

// export default ResetPassword;

// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "../../axiosInstance";

// function ResetPassword() {
//   const { token } = useParams();
//   const navigate = useNavigate();

//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // 🔐 STRONG PASSWORD VALIDATION
//   const handlePasswordChange = (value) => {
//     setPassword(value);

//     const strongPasswordRegex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

//     if (!strongPasswordRegex.test(value)) {
//       setPasswordError(
//         "Password must be at least 8 characters and include uppercase, lowercase, number & special character.",
//       );
//     } else {
//       setPasswordError("");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (passwordError) return;

//     if (password !== confirmPassword) {
//       setMessage("❌ Passwords do not match");
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await axios.post(`/api/auth/reset-password/${token}`, {
//         password,
//       });

//       setMessage(res.data.message);

//       // ✅ SUCCESS → LOGIN REDIRECT
//       setTimeout(() => {
//         navigate("/admin-login");
//       }, 2000);
//     } catch (err) {
//       setMessage(err.response?.data?.error || "❌ Invalid or expired link");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="container-fluid vh-100 position-relative overflow-hidden reset-bg">
//         {/* ⭐ STAR BACKGROUND */}
//         <div className="stars layer1"></div>
//         <div className="stars layer2"></div>
//         <div className="stars layer3"></div>

//         <div className="row h-100 justify-content-center align-items-center position-relative">
//           <div className="col-11 col-sm-8 col-md-5 col-lg-4">
//             <div className="reset-glass">
//               <h3 className="text-center text-white fw-bold mb-4">
//                 Reset Password
//               </h3>

//               <form onSubmit={handleSubmit}>
//                 <label>New Password</label>
//                 <input
//                   type="password"
//                   className={`form-control mb-2 ${passwordError ? "is-invalid" : ""}`}
//                   value={password}
//                   onChange={(e) => handlePasswordChange(e.target.value)}
//                   required
//                 />
//                 {passwordError && (
//                   <small className="text-danger">{passwordError}</small>
//                 )}

//                 <label className="mt-3">Confirm Password</label>
//                 <input
//                   type="password"
//                   className="form-control mb-3"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   required
//                 />

//                 {message && (
//                   <div className="text-center mb-3">
//                     <small
//                       className={
//                         message.startsWith("❌")
//                           ? "text-danger"
//                           : "text-success"
//                       }
//                     >
//                       {message}
//                     </small>
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   className="btn btn-light w-100 fw-bold"
//                   disabled={loading}
//                 >
//                   {loading ? "Updating..." : "Update Password"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 🔥 SAME THEME CSS */}
//       <style>
//         {`
//         .reset-bg {
//           background: #000;
//         }

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

//         .reset-glass {
//           background: rgba(255, 255, 255, 0.12);
//           backdrop-filter: blur(14px);
//           border-radius: 20px;
//           padding: 30px;
//           border: 1px solid rgba(255,255,255,0.25);
//           box-shadow: 0 0 40px rgba(0,0,0,0.6);
//         }

//         .reset-glass label {
//           color: #ffffff;
//           font-weight: 500;
//         }

//         .reset-glass .form-control {
//           background: rgba(255,255,255,0.9);
//           border: none;
//           color: #000;
//         }

//         .reset-glass .form-control:focus {
//           box-shadow: none;
//         }
//         `}
//       </style>
//     </>
//   );
// }

// export default ResetPassword;

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../axiosInstance";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔐 STRONG PASSWORD VALIDATION
  const handlePasswordChange = (value) => {
    setPassword(value);

    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!strongPasswordRegex.test(value)) {
      setPasswordError(
        "Password must be at least 8 characters and include uppercase, lowercase, number & special character.",
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordError) return;

    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`/api/auth/reset-password/${token}`, {
        password,
      });

      setMessage(res.data.message);

      setTimeout(() => {
        navigate("/admin-login");
      }, 2000);
    } catch (err) {
      setMessage(err.response?.data?.error || "❌ Invalid or expired link");
    } finally {
      setLoading(false);
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

      {/* Page Content */}
      <div className="premium-wrapper d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="card shadow-lg p-4"
          style={{ width: "100%", maxWidth: "420px", borderRadius: "15px" }}
        >
          <h3 className="text-center fw-bold mb-4">Reset Password</h3>

          <form onSubmit={handleSubmit}>
            <label className="fw-semibold">New Password</label>

            <input
              type="password"
              className={`form-control mb-2 ${passwordError ? "is-invalid" : ""}`}
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              required
            />

            {passwordError && (
              <small className="text-danger">{passwordError}</small>
            )}

            <label className="mt-3 fw-semibold">Confirm Password</label>

            <input
              type="password"
              className="form-control mb-3"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {message && (
              <div className="text-center mb-3">
                <small
                  className={
                    message.startsWith("❌") ? "text-danger" : "text-success"
                  }
                >
                  {message}
                </small>
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary w-100 fw-bold"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
