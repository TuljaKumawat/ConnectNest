// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "../../axiosInstance";

// const EmailVerification = () => {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [isSuccess, setIsSuccess] = useState(true);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email) {
//       setIsSuccess(false);
//       setMessage("Please enter a valid email address.");
//       return;
//     }

//     try {
//       setLoading(true);
//       await axios.post("/api/auth/verify-email", { email });
//       setIsSuccess(true);
//       setMessage("Verification link has been sent to your email.");
//     } catch (err) {
//       setIsSuccess(false);
//       setMessage(
//         err.response?.data?.error ||
//           "Failed to send verification email. Try again.",
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="star-wrapper">
//       {/* ⭐ STAR LAYERS */}
//       <div className="stars layer1"></div>
//       <div className="stars layer2"></div>
//       <div className="stars layer3"></div>

//       {/* CONTENT */}
//       <div className="content d-flex justify-content-center align-items-center min-vh-100">
//         <div
//           className="glass-card p-4 shadow-lg"
//           style={{ width: "100%", maxWidth: "420px" }}
//         >
//           <h3 className="text-center fw-bold mb-2 text-white">
//             Verify Your Email
//           </h3>

//           <p className="text-center text-muted mb-4">
//             Enter your email to receive verification link
//           </p>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="form-label text-light">Email Address</label>
//               <input
//                 type="email"
//                 className="form-control form-control-lg"
//                 placeholder="example@email.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             {message && (
//               <div
//                 className={`alert ${
//                   isSuccess ? "alert-success" : "alert-danger"
//                 }`}
//               >
//                 {message}
//               </div>
//             )}

//             <button
//               type="submit"
//               className="btn btn-light w-100 fw-semibold mt-2"
//               disabled={loading}
//             >
//               {loading ? "Sending..." : "Verify Email"}
//             </button>

//             <div className="text-center mt-3">
//               <Link
//                 to="/admin-login"
//                 className="text-decoration-none text-light"
//               >
//                 Already have an account?
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* ⭐ STYLES */}
//       <style>{`
//         /* WRAPPER */
//         .star-wrapper {
//           position: relative;
//           min-height: 100vh;
//           background: black;
//           overflow: hidden;
//         }

//         /* STARS */
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
//           opacity: 0.6;
//         }

//         .layer2 {
//           background-image: radial-gradient(3px 3px at 60% 70%, white, transparent);
//           background-size: 280px 280px;
//           animation-duration: 45s;
//           opacity: 0.5;
//         }

//         .layer3 {
//           background-image: radial-gradient(4px 4px at 80% 90%, white, transparent);
//           background-size: 450px 450px;
//           animation-duration: 70s;
//           opacity: 0.4;
//         }

//         /* CONTENT */
//         .content {
//           position: relative;
//           z-index: 10;
//         }

//         /* GLASS CARD */
//         .glass-card {
//           background: rgba(255, 255, 255, 0.08);
//           backdrop-filter: blur(14px);
//           border-radius: 18px;
//           border: 1px solid rgba(255, 255, 255, 0.2);
//         }

//         .form-control {
//           background: rgba(255, 255, 255, 0.9);
//           border-radius: 10px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default EmailVerification;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../axiosInstance";

const EmailVerification = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setIsSuccess(false);
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      await axios.post("/api/auth/verify-email", { email });
      setIsSuccess(true);
      setMessage("Verification link has been sent to your email.");
    } catch (err) {
      setIsSuccess(false);
      setMessage(
        err.response?.data?.error ||
          "Failed to send verification email. Try again.",
      );
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

      {/* Content */}
      <div className="premium-wrapper d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="card shadow-lg p-4"
          style={{ width: "100%", maxWidth: "420px", borderRadius: "15px" }}
        >
          <h3 className="text-center fw-bold mb-2">Verify Your Email</h3>

          <p className="text-center text-muted mb-4">
            Enter your email to receive verification link
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {message && (
              <div
                className={`alert ${
                  isSuccess ? "alert-success" : "alert-danger"
                }`}
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary w-100 fw-semibold mt-2"
              disabled={loading}
            >
              {loading ? "Sending..." : "Verify Email"}
            </button>

            <div className="text-center mt-3">
              <Link to="/admin-login" className="text-decoration-none">
                Already have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
