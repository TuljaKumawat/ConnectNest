// import { useState } from "react";
// import axios from "../../axiosInstance";

// function ForgetPassword() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/api/auth/forget-password", { email });
//       setMessage(res.data.message);
//     } catch (err) {
//       setMessage("Error sending reset link");
//     }
//   };

//   return (
//     <>
//       <div className="container-fluid vh-100 position-relative overflow-hidden forget-bg">
//         {/* ⭐ STARS */}
//         <div className="stars layer1"></div>
//         <div className="stars layer2"></div>
//         <div className="stars layer3"></div>

//         {/* CARD */}
//         <div className="row h-100 justify-content-center align-items-center position-relative">
//           <div className="col-11 col-sm-8 col-md-5 col-lg-4">
//             <div className="forget-glass text-center">
//               <h3 className="text-white fw-bold mb-3">Forgot Password</h3>

//               <p className="text-light mb-4">
//                 Enter your registered email to receive reset link
//               </p>

//               <form onSubmit={handleSubmit}>
//                 <label className="text-white">Email Address</label>
//                 <input
//                   type="email"
//                   className="form-control mb-3"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />

//                 <button className="btn btn-light w-100 fw-bold">
//                   Send Reset Link
//                 </button>
//               </form>

//               {message && <p className="text-white mt-3">{message}</p>}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 🔥 SAME THEME CSS */}
//       <style>
//         {`
//         .forget-bg {
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

//         /* GLASS CARD */
//         .forget-glass {
//           background: rgba(255, 255, 255, 0.12);
//           backdrop-filter: blur(14px);
//           -webkit-backdrop-filter: blur(14px);
//           border-radius: 20px;
//           padding: 30px;
//           border: 1px solid rgba(255,255,255,0.25);
//           box-shadow: 0 0 40px rgba(0,0,0,0.6);
//         }

//         .forget-glass .form-control {
//           background: rgba(255,255,255,0.9);
//           border: none;
//           color: #000;
//         }

//         .forget-glass .form-control:focus {
//           box-shadow: none;
//         }
//         `}
//       </style>
//     </>
//   );
// }

// export default ForgetPassword;

import { useState } from "react";
import axios from "../../axiosInstance";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/forget-password", { email });
      setMessage(res.data.message);
    } catch (err) {
      setMessage("Error sending reset link");
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
          className="card shadow-lg text-center p-4"
          style={{ width: "100%", maxWidth: "420px", borderRadius: "15px" }}
        >
          <h3 className="fw-bold mb-3">Forgot Password</h3>

          <p className="text-muted mb-4">
            Enter your registered email to receive reset link
          </p>

          <form onSubmit={handleSubmit}>
            <label className="fw-semibold">Email Address</label>

            <input
              type="email"
              className="form-control mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button className="btn btn-primary w-100 fw-bold">
              Send Reset Link
            </button>
          </form>

          {message && <div className="alert alert-info mt-3">{message}</div>}
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
