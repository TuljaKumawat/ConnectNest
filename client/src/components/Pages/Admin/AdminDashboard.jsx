// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../../axiosInstance";

// function AdminDashboard() {
//   const navigate = useNavigate();

//   const loginName = localStorage.getItem("loginName");
//   const lastName = localStorage.getItem("lastName");
//   const communityName = localStorage.getItem("communityName");
//   const communityCode = localStorage.getItem("communityCode");
//   const token = localStorage.getItem("token");

//   const [stats, setStats] = useState({
//     residents: 0,
//     complaints: 0,
//     bills: 0,
//     announcements: 0,
//   });

//   const authHeader = { headers: { Authorization: `Bearer ${token}` } };

//   useEffect(() => {
//     if (!token) {
//       navigate("/admin-login");
//       return;
//     }
//     fetchDashboardCounts();
//   }, [token, navigate]);

//   const fetchDashboardCounts = async () => {
//     try {
//       const res = await axios.get("/api/admin/dashboard/stats", authHeader);
//       setStats(res.data);
//     } catch (err) {
//       console.error("Failed to fetch dashboard stats", err);
//     }
//   };

//   return (
//     <div className="container mt-4 pt-5 ">
//       {/* TOP INFO */}
//       <div className="mb-4">
//         <h4 className="fw-semibold">
//           Welcome Admin, {loginName} {lastName}
//         </h4>
//         <p className="mb-0">
//           <strong>Community:</strong> {communityName} ({communityCode})
//         </p>
//       </div>

//       <hr />

//       <h4 className="mb-4">📊 Admin Dashboard</h4>

//       {/* DASHBOARD CARDS */}
//       <div className="row g-4 mb-5">
//         <DashCard
//           title="Residents"
//           count={stats.residents}
//           path="/admin/manage-residents"
//         />
//         <DashCard
//           title="Complaints"
//           count={stats.complaints}
//           path="/admin/complaints"
//         />
//         <DashCard
//           title="Bills"
//           count={stats.bills}
//           path="/admin/manage-bills"
//         />
//         <DashCard
//           title="Announcements"
//           count={stats.announcements}
//           path="/admin/manage-announcements"
//         />
//       </div>
//       {/* MONTHLY COLLECTION PLACEHOLDER */}
//       <div className="card shadow-sm rounded-4">
//         <div className="card-body">
//           <h6 className="fw-semibold mb-2">Monthly Collection</h6>
//           <p className="text-muted mb-0">No payment data available</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

// /* DASHBOARD CARD */
// function DashCard({ title, count, path }) {
//   const navigate = useNavigate();

//   return (
//     <div className="col-md-3">
//       <div className="card text-center shadow rounded-4  dashboard-card">
//         <div className="card-body py-5">
//           <h6 className="mb-2 fw-bold">{title}</h6>

//           {/* 🔥 REAL COUNT */}
//           <h3 className="fw-bold mb-4">{count}</h3>
//           <button
//             className="btn px-4 fw-semibold"
//             style={{ backgroundColor: "#cbc8c8ff" }}
//             onClick={() => navigate(path)}
//           >
//             Manage
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../../axiosInstance";

// function AdminDashboard() {
//   const navigate = useNavigate();

//   const loginName = localStorage.getItem("loginName");
//   const lastName = localStorage.getItem("lastName");
//   const communityName = localStorage.getItem("communityName");
//   const communityCode = localStorage.getItem("communityCode");
//   const token = localStorage.getItem("token");

//   const [stats, setStats] = useState({
//     residents: 0,
//     complaints: 0,
//     bills: 0,
//     announcements: 0,
//   });

//   const authHeader = { headers: { Authorization: `Bearer ${token}` } };

//   useEffect(() => {
//     if (!token) {
//       navigate("/admin-login");
//       return;
//     }
//     fetchDashboardCounts();
//   }, [token, navigate]);

//   const fetchDashboardCounts = async () => {
//     try {
//       const res = await axios.get("/api/admin/dashboard/stats", authHeader);
//       setStats(res.data);
//     } catch (err) {
//       console.error("Failed to fetch dashboard stats", err);
//     }
//   };

//   return (
//     <div className="main-bg">
//       {/* Background Circles */}
//       <div className="circle c1"></div>
//       <div className="circle c2"></div>
//       <div className="circle c3"></div>
//       <div className="circle c4"></div>
//       <div className="circle c5"></div>
//       <div className="circle c6"></div>
//       <div className="circle c7"></div>
//       <div className="circle c8"></div>
//       <div className="circle c9"></div>
//       <div className="circle c10"></div>
//       <div className="container mt-4 pt-5 dashboard-wrapper">
//         {/* WELCOME CARD */}
//         <div className="card welcome-card mt-4">
//           <div className="card-body">
//             <h5 className="fw-semibold mb-1">
//               Welcome Admin, {loginName} {lastName}
//             </h5>

//             <p className="mb-0 small">
//               <strong>Community:</strong> {communityName} ({communityCode})
//             </p>
//           </div>
//         </div>

//         <h4 className=" mt-2 mb-4 text-center dashboard-title">
//           📊 Admin Dashboard
//         </h4>

//         {/* DASHBOARD CARDS */}
//         <div className="row g-4 mb-5">
//           <DashCard
//             title="Residents"
//             count={stats.residents}
//             path="/admin/manage-residents"
//           />

//           <DashCard
//             title="Complaints"
//             count={stats.complaints}
//             path="/admin/complaints"
//           />

//           <DashCard
//             title="Bills"
//             count={stats.bills}
//             path="/admin/manage-bills"
//           />

//           <DashCard
//             title="Announcements"
//             count={stats.announcements}
//             path="/admin/manage-announcements"
//           />
//         </div>

//         {/* MONTHLY COLLECTION PLACEHOLDER */}
//         <div className="card collection-card shadow-sm rounded-4">
//           <div className="card-body">
//             <h6 className="fw-semibold mb-2">Monthly Collection</h6>
//             <p className="text-muted mb-0">No payment data available</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// <style>{`/* PAGE BACKGROUND CIRCLES */

// .dashboard-wrapper{
// position:relative;
// z-index:1;
// }

// .dashboard-wrapper::before{
// content:"";
// position:fixed;
// width:400px;
// height:400px;
// background:rgba(0,150,255,0.15);
// border-radius:50%;
// top:-120px;
// left:-120px;
// filter:blur(120px);
// z-index:-1;
// }

// .dashboard-wrapper::after{
// content:"";
// position:fixed;
// width:350px;
// height:350px;
// background:rgba(255,0,150,0.15);
// border-radius:50%;
// bottom:-120px;
// right:-120px;
// filter:blur(120px);
// z-index:-1;
// }

// /* WELCOME CARD */

// .welcome-card{
// background:rgba(255,255,255,0.08);
// backdrop-filter:blur(10px);
// border:1px solid rgba(255,255,255,0.15);
// color:white;
// border-radius:14px;
// }

// /* DASHBOARD TITLE */

// .dashboard-title{
// color:white;
// font-weight:600;
// }

// /* DASHBOARD CARD */

// .dashboard-card{
// background:rgba(255,255,255,0.07);
// border:1px solid rgba(255,255,255,0.12);
// backdrop-filter:blur(10px);
// color:white;
// transition:0.3s;
// }

// .dashboard-card:hover{
// transform:translateY(-6px);
// box-shadow:0 10px 30px rgba(0,0,0,0.4);
// }

// /* COUNT CIRCLE */

// .dashboard-icon-circle{
// width:65px;
// height:65px;
// border-radius:50%;
// display:flex;
// align-items:center;
// justify-content:center;
// margin:auto;
// font-weight:700;
// font-size:20px;
// color:white;
// background:linear-gradient(135deg,#5f9cff,#7c4dff);
// }

// /* BUTTON */

// .dashboard-btn{
// border:none;
// border-radius:30px;
// background:linear-gradient(135deg,#5f9cff,#7c4dff);
// color:white;
// transition:0.3s;
// }

// .dashboard-btn:hover{
// transform:scale(1.05);
// opacity:0.9;
// }

// /* COLLECTION CARD */

// .collection-card{
// background:rgba(255,255,255,0.07);
// border:1px solid rgba(255,255,255,0.12);
// backdrop-filter:blur(10px);
// color:white;
// }

// `}</style>;
// export default AdminDashboard;

// /* DASHBOARD CARD */
// function DashCard({ title, count, path }) {
//   const navigate = useNavigate();

//   return (
//     <div className="col-md-3">
//       <div className="card text-center shadow rounded-4 dashboard-card">
//         <div className="card-body py-5">
//           <div className="dashboard-icon-circle">{count}</div>

//           <h6 className="mb-3 fw-bold mt-3">{title}</h6>

//           <button
//             className="btn dashboard-btn px-4 fw-semibold"
//             onClick={() => navigate(path)}
//           >
//             Manage
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axiosInstance";

import { FaUsers } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";

function AdminDashboard() {
  const navigate = useNavigate();

  const loginName = localStorage.getItem("loginName");
  const lastName = localStorage.getItem("lastName");
  const communityName = localStorage.getItem("communityName");
  const communityCode = localStorage.getItem("communityCode");
  const token = localStorage.getItem("token");

  const [stats, setStats] = useState({
    residents: 0,
    complaints: 0,
    bills: 0,
    announcements: 0,
  });

  const authHeader = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    if (!token) {
      navigate("/admin-login");
      return;
    }
    fetchDashboardCounts();
  }, [token, navigate]);

  const fetchDashboardCounts = async () => {
    try {
      const res = await axios.get("/api/admin/dashboard/stats", authHeader);
      setStats(res.data);
    } catch (err) {
      console.error("Failed to fetch dashboard stats", err);
    }
  };

  return (
    <div className="main-bg">
      {/* CIRCLES */}
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

      <div className="container dashboard-wrapper">
        {/* WELCOME CARD */}
        <div className="card welcome-card mt-2">
          <div className="card-body">
            <h5 className="fw-semibold mb-1">
              Welcome Admin, {loginName} {lastName}
            </h5>

            <p className="mb-0 small">
              <strong>Community:</strong> {communityName} ({communityCode})
            </p>
          </div>
        </div>

        {/* TITLE */}
        <h4 className="dashboard-title text-center mt-3 mb-4">
          📊 Admin Dashboard
        </h4>

        {/* DASHBOARD CARDS */}
        <div className="row g-4 mb-5">
          <DashCard
            title="Residents"
            count={stats.residents}
            icon={<FaUsers />}
            path="/admin/manage-residents"
            cardClass="residents-card"
          />

          <DashCard
            title="Complaints"
            count={stats.complaints}
            icon={<MdReportProblem />}
            path="/admin/complaints"
            cardClass="complaints-card"
          />

          <DashCard
            title="Bills"
            count={stats.bills}
            icon={<FaMoneyBillWave />}
            path="/admin/manage-bills"
            cardClass="bills-card"
          />

          <DashCard
            title="Announcements"
            count={stats.announcements}
            icon={<MdCampaign />}
            path="/admin/manage-announcements"
            cardClass="announcements-card"
          />
        </div>

        {/* COLLECTION CARD */}
        <div className="card collection-card shadow-sm rounded-4 mb-2">
          <div className="card-body">
            <h6 className="fw-semibold mb-5">Monthly Collection</h6>
            <p className="mb-0">No payment data available</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminDashboard;

function DashCard({ title, count, path, icon, cardClass }) {
  const navigate = useNavigate();

  return (
    <div className="col-md-3 col-sm-6">
      <div className={`card dashboard-card ${cardClass}`}>
        <div className="card-body text-center">
          <div className="dash-icon">{icon}</div>

          <h2 className="dash-count">{count}</h2>

          <p className="dash-title">{title}</p>

          <button className="btn dashboard-btn" onClick={() => navigate(path)}>
            Manage →
          </button>
        </div>
      </div>
    </div>
  );
}
