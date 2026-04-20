// import { useEffect, useState } from "react";
// import axios from "../../axiosInstance";

// function PendingAdmin() {
//   const [admins, setAdmins] = useState([]);

//   const fetchAdmins = async () => {
//     const res = await axios.get("/api/super-admin/pending-admins");
//     setAdmins(res.data);
//   };

//   const handleApprove = async (id) => {
//     await axios.put(`/api/super-admin/approve/${id}`);
//     alert("Approved!");
//     fetchAdmins();
//   };

//   const handleReject = async (id) => {
//     await axios.put(`/api/super-admin/reject/${id}`);
//     alert("Rejected!");
//     fetchAdmins();
//   };

//   useEffect(() => {
//     fetchAdmins();
//   }, []);

//   return (
//     <div className="main-bg d-flex justify-content-center align-items-start flex-column py-5">
//       {/* BACKGROUND (SAME AS YOUR THEME) */}
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

//       <div className="container position-relative" style={{ zIndex: 2 }}>
//         {/* HEADER */}
//         <div className="text-center mb-5">
//           <h1 className="title-main">ConnectNest</h1>
//           <h3 className="fw-bold mt-2">Pending Admin Requests</h3>
//           <p className="description">
//             Review and approve new admin registrations for communities.
//           </p>
//         </div>

//         {/* NO DATA */}
//         {admins.length === 0 ? (
//           <div className="glass-card text-center p-4">
//             <h5>No pending admin requests 🚀</h5>
//           </div>
//         ) : (
//           <div className="row g-4">
//             {admins.map((admin) => (
//               <div key={admin._id} className="col-md-6 col-lg-4">
//                 <div className="glass-card h-100">
//                   <h5 className="fw-bold mb-2">
//                     {admin.firstName} {admin.lastName}
//                   </h5>

//                   <p className="text-muted small mb-2">{admin.email}</p>

//                   <hr />

//                   <p>
//                     <b>📱 Mobile:</b> {admin.mobile}
//                   </p>
//                   <p>
//                     <b>🏢 Community:</b> {admin.communityId.name} (
//                     {admin.communityId.communityCode})
//                   </p>
//                   <p>
//                     <b>🏠 Type:</b> {admin.communityId.type}
//                   </p>
//                   <p>
//                     <b>📦 Unit:</b> {admin.communityId.unit}
//                   </p>

//                   <p className="small text-muted">
//                     {admin.communityId.address}, {admin.communityId.city},{" "}
//                     {admin.communityId.state} - {admin.communityId.pincode}
//                   </p>

//                   {/* ACTION BUTTONS */}
//                   <div className="d-flex gap-2 mt-3">
//                     <button
//                       className="btn approve-btn w-50"
//                       onClick={() => handleApprove(admin._id)}
//                     >
//                       ✅ Approve
//                     </button>

//                     <button
//                       className="btn reject-btn w-50"
//                       onClick={() => handleReject(admin._id)}
//                     >
//                       ❌ Reject
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* CSS */}
//       <style>{`

//         .title-main {
//           font-size: 50px;
//           font-weight: 800;
//           background: linear-gradient(45deg, #111010, #374347);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .description {
//           font-size: 18px;
//           color: black;
//         }

//         /* GLASS CARD */
//         .glass-card {
//           background: rgba(255, 255, 255, 0.9);
//           border-radius: 20px;
//           padding: 25px;
//           box-shadow: 0 10px 30px rgba(0,0,0,0.2);
//           transition: 0.3s;
//         }

//         .glass-card:hover {
//           transform: translateY(-5px);
//         }

//         /* BUTTONS */
//         .approve-btn {
//           background: #27ae60;
//           color: white;
//           border-radius: 25px;
//           border: none;
//         }

//         .approve-btn:hover {
//           background: #1e8449;
//         }

//         .reject-btn {
//           background: #e74c3c;
//           color: white;
//           border-radius: 25px;
//           border: none;
//         }

//         .reject-btn:hover {
//           background: #c0392b;
//         }

//         @media (max-width: 768px) {
//           .title-main {
//             font-size: 32px;
//           }
//         }

//       `}</style>
//     </div>
//   );
// }

// export default PendingAdmin;
import { useEffect, useState } from "react";
import axios from "../../axiosInstance";

function PendingAdmin() {
  const [admins, setAdmins] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [reason, setReason] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const fetchAdmins = async () => {
    const res = await axios.get("/api/super-admin/pending-admins");
    setAdmins(res.data);
  };

  const handleApprove = async (id) => {
    await axios.put(`/api/super-admin/approve/${id}`);
    alert("Approved!");
    fetchAdmins();
  };


  const handleRejectConfirm = async () => {
    await axios.put(`/api/super-admin/reject/${selectedId}`, {
      reason,
    });

    setShowModal(false);
    setReason("");

    // 👉 Toast show karo
    setToastMsg("❌ Admin Rejected & Email Sent!");
    setShowToast(true);

    fetchAdmins();

    // 👉 Auto hide after 3 sec
    setTimeout(() => setShowToast(false), 3000);
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  return (
    <div className="main-bg d-flex justify-content-center align-items-start flex-column py-5">
      {/* BACKGROUND (SAME AS YOUR THEME) */}
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

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* HEADER */}
        <div className="text-center mb-5">
          <h1 className="title-main">ConnectNest</h1>
          <h3 className="fw-bold mt-2">Pending Admin Requests</h3>
          <p className="description">
            Review and approve new admin registrations for communities.
          </p>
        </div>

        {/* NO DATA */}
        {admins.length === 0 ? (
          <div className="glass-card text-center p-4">
            <h5>No pending admin requests 🚀</h5>
          </div>
        ) : (
          <div className="row g-4">
            {admins.map((admin) => (
              <div key={admin._id} className="col-md-6 col-lg-4">
                <div className="glass-card h-100">
                  <h5 className="fw-bold mb-2">
                    {admin.firstName} {admin.lastName}
                  </h5>

                  <p className="text-muted small mb-2">{admin.email}</p>

                  <hr />

                  <p>
                    <b>📱 Mobile:</b> {admin.mobile}
                  </p>
                  <p>
                    <b>🏢 Community:</b> {admin.communityId.name} (
                    {admin.communityId.communityCode})
                  </p>
                  <p>
                    <b>🏠 Type:</b> {admin.communityId.type}
                  </p>
                  <p>
                    <b>📦 Unit:</b> {admin.communityId.unit}
                  </p>

                  <p className="small text-muted">
                    {admin.communityId.address}, {admin.communityId.city},{" "}
                    {admin.communityId.state} - {admin.communityId.pincode}
                  </p>

                  {/* ACTION BUTTONS */}
                  <div className="d-flex gap-2 mt-3">
                    <button
                      className="btn approve-btn w-50"
                      onClick={() => handleApprove(admin._id)}
                    >
                      ✅ Approve
                    </button>

                    <button
                      className="btn reject-btn w-50"
                      //onClick={() => handleReject(admin._id)}
                      onClick={() => {
                        setSelectedId(admin._id);
                        setShowModal(true);
                      }}
                    >
                      ❌ Reject
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ✅ MODAL (NOW CORRECT PLACE) */}
      {showModal && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content glass-card">
              <div className="modal-header">
                <h5 className="modal-title">Reject Admin</h5>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                <label>Enter rejection reason:</label>
                <textarea
                  className="form-control mt-2"
                  rows="3"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  className="btn reject-btn"
                  onClick={handleRejectConfirm}
                >
                  Reject & Send Mail
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showToast && (
        <div
          className="position-fixed top-0 end-0 m-4"
          style={{
            zIndex: 9999,
            background: "rgba(231, 76, 60, 0.95)",
            color: "white",
            padding: "12px 20px",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          {toastMsg}
        </div>
      )}

      {/* CSS */}
      <style>{`

        .title-main {
          font-size: 50px;
          font-weight: 800;
          background: linear-gradient(45deg, #111010, #374347);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .description {
          font-size: 18px;
          color: black;
        }

        /* GLASS CARD */
        .glass-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          padding: 25px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          transition: 0.3s;
        }

        .glass-card:hover {
          transform: translateY(-5px);
        }

        /* BUTTONS */
        .approve-btn {
          background: #27ae60;
          color: white;
          border-radius: 25px;
          border: none;
        }

        .approve-btn:hover {
          background: #1e8449;
        }

        .reject-btn {
          background: #e74c3c;
          color: white;
          border-radius: 25px;
          border: none;
        }

        .reject-btn:hover {
          background: #c0392b;
        }

        @media (max-width: 768px) {
          .title-main {
            font-size: 32px;
          }
        }

      `}</style>
    </div>
  );
}

export default PendingAdmin;

