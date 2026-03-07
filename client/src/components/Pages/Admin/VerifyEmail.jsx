// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "../../axiosInstance";

// const VerifyEmail = () => {
//   const { token } = useParams();
//   const navigate = useNavigate();

//   const [status, setStatus] = useState("loading");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const verify = async () => {
//       try {
//         const res = await axios.get(`/api/auth/verify-email/${token}`);

//         setStatus("success");
//         setMessage(res.data.message);

//         // ✅ redirect AFTER verification
//         setTimeout(() => {
//           navigate(`/register?email=${res.data.email}`);
//         }, 2000);
//       } catch (err) {
//         setStatus("error");
//         setMessage(err.response?.data?.error || "Invalid or expired link");
//       }
//     };

//     verify();
//   }, [token, navigate]);

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <div className="card p-4 text-center" style={{ maxWidth: 450 }}>
//         {status === "loading" && <h5>Verifying email...</h5>}

//         {status === "success" && (
//           <>
//             <h4 className="text-success">✅ Email Verified</h4>
//             <p>{message}</p>
//             <p className="text-muted">Redirecting to registration…</p>
//           </>
//         )}

//         {status === "error" && (
//           <>
//             <h4 className="text-danger">❌ Verification Failed</h4>
//             <p>{message}</p>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VerifyEmail;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../axiosInstance";

const VerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.get(`/api/auth/verify-email/${token}`);

        setStatus("success");
        setMessage(res.data.message);

        setTimeout(() => {
          navigate(`/register?email=${res.data.email}`);
        }, 2000);
      } catch (err) {
        setStatus("error");
        setMessage(err.response?.data?.error || "Invalid or expired link");
      }
    };

    verify();
  }, [token, navigate]);
  return (
    <div className="main-bg">
      {/* background circles */}
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

      <div className="premium-wrapper d-flex justify-content-center align-items-center vh-100">
        <div
          className="card shadow-lg p-4 text-center"
          style={{ maxWidth: "420px", borderRadius: "15px" }}
        >
          {status === "loading" && <h5>Verifying Email...</h5>}

          {status === "success" && (
            <>
              <h4 className="text-success">Email Verified ✅</h4>
              <p>{message}</p>
              <p className="text-muted">Redirecting...</p>
            </>
          )}

          {status === "error" && (
            <>
              <h4 className="text-danger">Verification Failed ❌</h4>
              <p>{message}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
