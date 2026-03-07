// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../../axiosInstance";

// function ResidentDashboard() {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [community, setCommunity] = useState("");
//   const [code, setCode] = useState("");
//   const [announcements, setAnnouncements] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/resident-login");
//     } else {
//       setName(localStorage.getItem("loginName"));
//       setCommunity(localStorage.getItem("communityName"));
//       setCode(localStorage.getItem("communityCode"));
//       fetchAnnouncements();
//     }
//   }, [navigate]);

//   const fetchAnnouncements = async () => {
//     try {
//       const res = await axios.get("/api/resident/announcements", {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       setAnnouncements(res.data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-4 pt-4">
//       {/* ===== WELCOME CARD ===== */}
//       <div className="card shadow-sm mb-5 mt-5">
//         <div className="card-body">
//           <h4 className="fw-bold mb-1">Welcome, {name} 👋</h4>
//           <p className="text-muted mb-0">
//             Community: <b>{community}</b> ({code})
//           </p>
//         </div>
//       </div>

//       {/* 📌 NOTICE BOARD (RECTANGLE + RESPONSIVE) */}
//       <div
//         className="mx-auto p-4"
//         style={{
//           maxWidth: "900px",
//           width: "100%",
//           background: "#1f5f3a",
//           borderRadius: "10px",
//           border: "10px solid #5b3a1e",
//           boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
//         }}
//       >
//         {loading ? (
//           <p className="text-white text-center">Loading announcements...</p>
//         ) : announcements.length === 0 ? (
//           <p
//             style={{
//               color: "#f5f5f5",
//               fontFamily: "cursive",
//               textAlign: "center",
//               padding: "60px 0",
//             }}
//           >
//             No announcements yet
//           </p>
//         ) : (
//           announcements.map((ann) => {
//             const dateObj = new Date(ann.createdAt);
//             return (
//               <div key={ann._id}>
//                 {/* HEADER */}
//                 <div className="d-flex justify-content-between text-white mb-3">
//                   <span style={{ fontFamily: "cursive" }}>
//                     {dateObj.toLocaleDateString()}
//                   </span>

//                   <span
//                     style={{
//                       fontSize: "24px",
//                       fontWeight: "bold",
//                       letterSpacing: "3px",
//                       fontFamily: "cursive",
//                     }}
//                   >
//                     NOTICE
//                   </span>

//                   <span style={{ fontFamily: "cursive" }}>
//                     {dateObj.toLocaleTimeString()}
//                   </span>
//                 </div>

//                 <hr style={{ borderColor: "#ddd" }} />

//                 {/* TITLE */}
//                 <h3
//                   style={{
//                     color: "#fff",
//                     fontFamily: "cursive",
//                     textAlign: "center",
//                     textDecoration: "underline",
//                     marginTop: "25px",
//                   }}
//                 >
//                   {ann.title}
//                 </h3>

//                 {/* MESSAGE */}
//                 <p
//                   style={{
//                     color: "#f5f5f5",
//                     fontFamily: "cursive",
//                     fontSize: "20px",
//                     textAlign: "center",
//                     whiteSpace: "pre-line",
//                     marginTop: "30px",
//                     padding: "0 15px",
//                   }}
//                 >
//                   {ann.message}
//                 </p>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// }

// export default ResidentDashboard;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axiosInstance";
import "bootstrap/dist/css/bootstrap.min.css";

function ResidentDashboard() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [community, setCommunity] = useState("");
  const [code, setCode] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/resident-login");
    } else {
      setName(localStorage.getItem("loginName"));
      setCommunity(localStorage.getItem("communityName"));
      setCode(localStorage.getItem("communityCode"));
      fetchAnnouncements();
    }
  }, [navigate]);

  const fetchAnnouncements = async () => {
    try {
      const res = await axios.get("/api/resident/announcements", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setAnnouncements(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-bg py-5">
      {/* BACKGROUND CIRCLES */}
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

      <div className="container layout-wrapper">
        <div className="row g-4">
          {/* ===== LEFT SIDE - NOTICE BOARD (BADA COLUMN) ===== */}
          <div className="col-lg-8 col-12">
            <div className="notice-board p-4">
              {loading ? (
                <p className="text-white text-center">
                  Loading announcements...
                </p>
              ) : announcements.length === 0 ? (
                <p className="board-text text-center py-5">
                  No announcements yet
                </p>
              ) : (
                announcements.map((ann) => {
                  const dateObj = new Date(ann.createdAt);
                  return (
                    <div key={ann._id}>
                      <div className="d-flex justify-content-between text-white mb-3 board-text">
                        <span>{dateObj.toLocaleDateString()}</span>
                        <span className="notice-title">NOTICE</span>
                        <span>{dateObj.toLocaleTimeString()}</span>
                      </div>

                      <hr className="board-line" />

                      <h3 className="board-heading">{ann.title}</h3>

                      <p className="board-message">{ann.message}</p>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* ===== RIGHT SIDE - SMALL COLUMN ===== */}
          <div className="col-lg-4 col-12">
            {/* DETAILS CARD */}
            <div className="details-card shadow mb-4">
              <h5 className="fw-bold mb-3">User Details</h5>

              <div className="detail-row">
                <span>Name:</span>
                <span>{name}</span>
              </div>

              <div className="detail-row">
                <span>Community:</span>
                <span>{community}</span>
              </div>

              <div className="detail-row">
                <span>Community Code:</span>
                <span>{code}</span>
              </div>
            </div>

            {/* PROFILE IMAGE CARD */}
            <div className="user-card text-center shadow">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="User"
                className="user-img mb-3"
              />
              <h6 className="fw-bold mb-0">{name}</h6>
              <small className="text-muted">Resident</small>
            </div>
          </div>
        </div>
      </div>

      <style>{`

        .layout-wrapper {
          margin-top: 60px;
          position: relative;
          z-index: 2;
        }

        /* NOTICE BOARD */
        .notice-board {
          background: #1f5f3a;
          border-radius: 10px;
          border: 10px solid #5b3a1e;
          box-shadow: 0 15px 40px rgba(0,0,0,0.6);
        }

        .notice-title {
          font-size: 24px;
          font-weight: bold;
          letter-spacing: 3px;
        }

        .board-heading {
          color: #fff;
          text-align: center;
          text-decoration: underline;
          margin-top: 25px;
        }

        .board-message {
          color: #f5f5f5;
          font-size: 20px;
          text-align: center;
          white-space: pre-line;
          margin-top: 30px;
          padding: 0 15px;
        }

        .board-text {
          color: #f5f5f5;
        }

        .board-line {
          border-color: #ddd;
        }

        /* DETAILS CARD */
        .details-card {
          background: white;
          border-radius: 20px;
          padding: 20px;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #eee;
          font-size: 14px;
        }

        /* PROFILE CARD */
        .user-card {
          background: white;
          border-radius: 20px;
          padding: 20px;
        }

        .user-img {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 4px solid #4e73df;
        }

      `}</style>
    </div>
  );
}

export default ResidentDashboard;
