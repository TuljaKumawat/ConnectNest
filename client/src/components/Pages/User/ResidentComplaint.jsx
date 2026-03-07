// import React, { useState, useEffect } from "react";
// import axios from "../../axiosInstance";
// import { Modal, Button, Badge } from "react-bootstrap";

// const ResidentComplaint = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     image: null,
//   });

//   const [myComplaints, setMyComplaints] = useState([]);
//   const [othersComplaints, setOthersComplaints] = useState([]);
//   const [community, setCommunity] = useState("");
//   const [code, setCode] = useState("");
//   const [name, setName] = useState("");

//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [editData, setEditData] = useState(null);

//   useEffect(() => {
//     setCommunity(localStorage.getItem("communityName"));
//     setCode(localStorage.getItem("communityCode"));
//     setName(localStorage.getItem("loginName"));
//     fetchComplaints();
//   }, []);

//   const fetchComplaints = async () => {
//     const token = localStorage.getItem("token");
//     const res = await axios.get("/api/resident/complaints", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     setMyComplaints(res.data.myComplaints || []);
//     setOthersComplaints(res.data.othersComplaints || []);
//   };

//   /* ================= ADD COMPLAINT ================= */
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");

//     const data = new FormData();
//     data.append("title", formData.title);
//     data.append("description", formData.description);
//     if (formData.image) data.append("image", formData.image);

//     await axios.post("/api/resident/complaints", data, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     setFormData({ title: "", description: "", image: null });
//     setShowAddModal(false);
//     fetchComplaints();
//   };

//   /* ================= EDIT COMPLAINT ================= */
//   const handleEditSave = async () => {
//     await axios.put(
//       `/api/resident/complaints/${editData._id}`,
//       {
//         title: editData.title,
//         description: editData.description,
//       },
//       { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } },
//     );

//     setShowEditModal(false);
//     fetchComplaints();
//   };

//   const handleDelete = async (id) => {
//     await axios.delete(`/api/resident/complaints/${id}`, {
//       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//     });
//     fetchComplaints();
//   };

//   return (
//     <div className="container mt-4 pt-4">
//       <h3 className="fw-bold text-center mb-4 pt-4">
//         <u>Complaints Management</u>
//       </h3>

//       {/* ===== HEADER CARD ===== */}
//       <div className="card shadow-sm mb-2">
//         <div className="card-body d-flex justify-content-between align-items-center">
//           <div>
//             <h4 className="fw-bold mb-1">Welcome, {name} 👋</h4>
//             <p className="text-muted mb-0">
//               Community: <b>{community}</b> ({code})
//             </p>
//           </div>

//           <Button variant="dark" onClick={() => setShowAddModal(true)}>
//             + Add Complaint
//           </Button>
//         </div>
//       </div>

//       {/* ================= MY COMPLAINTS ================= */}
//       <h3 className="mb-4 fw-bold text-center pt-4">
//         <u>My Complaints</u>
//       </h3>

//       {myComplaints.length === 0 ? (
//         <div
//           className="alert alert-danger text-center fw-semibold py-4 shadow-sm"
//           role="alert"
//         >
//           <h5 className="mb-1">No Complaints Found</h5>
//         </div>
//       ) : (
//         <div className="row">
//           {myComplaints.map((c) => (
//             <div key={c._id} className="col-md-4 mb-4">
//               <div className="card shadow-sm h-100">
//                 {c.imageUrl && (
//                   <img
//                     src={c.imageUrl}
//                     className="card-img-top"
//                     style={{ height: "180px", objectFit: "cover" }}
//                     alt=""
//                   />
//                 )}

//                 <div className="card-body">
//                   <div className="d-flex justify-content-between">
//                     <h5>{c.title}</h5>
//                     <Badge bg={c.status === "Resolved" ? "success" : "warning"}>
//                       {c.status}
//                     </Badge>
//                   </div>
//                   <p className="text-muted">{c.description}</p>
//                 </div>

//                 <div className="card-footer d-flex justify-content-between">
//                   <Button
//                     size="sm"
//                     variant="outline-warning"
//                     onClick={() => {
//                       setEditData(c);
//                       setShowEditModal(true);
//                     }}
//                   >
//                     Edit
//                   </Button>
//                   <Button
//                     size="sm"
//                     variant="outline-danger"
//                     onClick={() => handleDelete(c._id)}
//                   >
//                     Delete
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* ================= OTHERS COMPLAINTS ================= */}
//       <h3 className="mb-4 fw-bold text-center pt-4">
//         <u>Others' Complaints</u>
//       </h3>

//       {othersComplaints.length === 0 ? (
//         <div
//           className="alert alert-danger text-center fw-semibold py-4 shadow-sm"
//           role="alert"
//         >
//           <h5 className="mb-1">No Complaints Found</h5>
//         </div>
//       ) : (
//         <div className="row">
//           {othersComplaints.map((c) => (
//             <div key={c._id} className="col-md-4 mb-4">
//               <div className="card border-secondary h-100">
//                 {c.imageUrl && (
//                   <img
//                     src={c.imageUrl}
//                     className="card-img-top"
//                     style={{ height: "180px", objectFit: "cover" }}
//                     alt=""
//                   />
//                 )}
//                 <div className="card-body">
//                   <h5>{c.title}</h5>
//                   <p className="text-muted">{c.description}</p>
//                   <small>
//                     By: {c.residentId?.firstName} ({c.residentId?.flatNumber})
//                   </small>
//                   <br />
//                   <Badge bg="secondary">{c.status}</Badge>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* ================= ADD MODAL ================= */}
//       <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Complaint</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleSubmit}>
//             <input
//               className="form-control mb-2"
//               placeholder="Title"
//               value={formData.title}
//               onChange={(e) =>
//                 setFormData({ ...formData, title: e.target.value })
//               }
//               required
//             />
//             <textarea
//               className="form-control mb-2"
//               placeholder="Description"
//               value={formData.description}
//               onChange={(e) =>
//                 setFormData({ ...formData, description: e.target.value })
//               }
//               required
//             />
//             <input
//               type="file"
//               className="form-control mb-3"
//               onChange={(e) =>
//                 setFormData({ ...formData, image: e.target.files[0] })
//               }
//             />
//             <Button type="submit" className="w-100" variant="dark">
//               Submit
//             </Button>
//           </form>
//         </Modal.Body>
//       </Modal>

//       {/* ================= EDIT MODAL ================= */}
//       <Modal
//         show={showEditModal}
//         onHide={() => setShowEditModal(false)}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Complaint</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {editData && (
//             <>
//               <input
//                 className="form-control mb-2"
//                 value={editData.title}
//                 onChange={(e) =>
//                   setEditData({ ...editData, title: e.target.value })
//                 }
//               />
//               <textarea
//                 className="form-control mb-3"
//                 value={editData.description}
//                 onChange={(e) =>
//                   setEditData({ ...editData, description: e.target.value })
//                 }
//               />
//               <Button
//                 variant="warning"
//                 className="w-100"
//                 onClick={handleEditSave}
//               >
//                 Update Complaint
//               </Button>
//             </>
//           )}
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default ResidentComplaint;

// import React, { useState, useEffect } from "react";
// import axios from "../../axiosInstance";
// import {
//   Modal,
//   Button,
//   Badge,
//   Form,
//   Alert,
//   ProgressBar,
// } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const ResidentComplaint = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     image: null,
//   });

//   const [myComplaints, setMyComplaints] = useState([]);
//   const [othersComplaints, setOthersComplaints] = useState([]);

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [editData, setEditData] = useState(null);
//   const [community, setCommunity] = useState("");
//   const [code, setCode] = useState("");
//   const [name, setName] = useState("");

//   const [showDuplicateModal, setShowDuplicateModal] = useState(false);
//   const [duplicateInfo, setDuplicateInfo] = useState(null);

//   /* ================= FETCH ================= */
//   const fetchComplaints = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.get("/api/resident/complaints", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setMyComplaints(res.data.myComplaints || []);
//       setOthersComplaints(res.data.othersComplaints || []);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchComplaints();
//   }, []);

//   /* ================= ADD ================= */
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setError("Please login first.");
//         return;
//       }

//       const data = new FormData();
//       data.append("title", formData.title);
//       data.append("description", formData.description);
//       if (formData.image) data.append("image", formData.image);

//       const res = await axios.post("/api/resident/complaints", data, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       // Duplicate case
//       if (res.data.isDuplicate) {
//         setDuplicateInfo(res.data);
//         setShowDuplicateModal(true);
//         setShowAddModal(false);
//         fetchComplaints();
//         return;
//       }

//       setSuccess("Complaint submitted successfully!");
//       setFormData({ title: "", description: "", image: null });
//       setShowAddModal(false);
//       fetchComplaints();
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to submit complaint");
//     }
//   };

//   /* ================= UPDATE ================= */
//   const handleEditSave = async () => {
//     try {
//       const res = await axios.put(
//         `/api/resident/complaints/${editData._id}`,
//         {
//           title: editData.title,
//           description: editData.description,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         },
//       );

//       setMyComplaints(
//         myComplaints.map((c) =>
//           c._id === editData._id ? res.data.complaint : c,
//         ),
//       );

//       setShowEditModal(false);
//     } catch (err) {
//       console.error("Update failed", err);
//     }
//   };

//   /* ================= DELETE ================= */
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/api/resident/complaints/${id}`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });

//       setMyComplaints(myComplaints.filter((c) => c._id !== id));
//     } catch (err) {
//       console.error("Delete failed", err);
//     }
//   };

//   return (
//     <div className="container mt-4 pt-4">
//       <h3 className="fw-bold text-center mb-4 pt-4">
//         <u>Complaints Management</u>
//       </h3>

//       {/* ===== HEADER CARD ===== */}
//       <div className="card shadow-sm mb-2">
//         <div className="card-body d-flex justify-content-between align-items-center">
//           <div>
//             <h4 className="fw-bold mb-1">Welcome, {name} 👋</h4>
//             <p className="text-muted mb-0">
//               Community: <b>{community}</b> ({code})
//             </p>
//           </div>

//           <Button variant="dark" onClick={() => setShowAddModal(true)}>
//             + Add Complaint
//           </Button>
//         </div>
//       </div>

//       {error && <Alert variant="danger">{error}</Alert>}
//       {success && <Alert variant="success">{success}</Alert>}

//       {/* ================= MY COMPLAINTS ================= */}
//       <h4 className="fw-bold text-center pt-4">
//         <u>My Complaints</u>
//       </h4>

//       <div className="row mt-3">
//         {myComplaints.map((c) => (
//           <div key={c._id} className="col-md-4 mb-4">
//             <div className="card shadow-sm h-100">
//               {c.imageUrl && (
//                 <img
//                   src={c.imageUrl}
//                   className="card-img-top"
//                   style={{ height: "180px", objectFit: "cover" }}
//                   alt=""
//                 />
//               )}

//               <div className="card-body">
//                 <div className="d-flex justify-content-between">
//                   <h5>{c.title}</h5>
//                   <Badge bg="secondary">{c.status}</Badge>
//                 </div>

//                 <p className="text-muted">{c.description}</p>

//                 {c.status === "In Progress" && (
//                   <ProgressBar animated striped now={60} className="mb-2" />
//                 )}

//                 {c.duplicateCount > 1 && (
//                   <p className="text-primary small">
//                     👥 {c.duplicateCount} residents reported this
//                   </p>
//                 )}

//                 {c.adminResponse && (
//                   <div className="border rounded p-2 mt-2 bg-light">
//                     <strong>Admin Response:</strong>
//                     <p className="mb-1">{c.adminResponse.text}</p>
//                     {c.adminResponse.imageUrl && (
//                       <img
//                         src={c.adminResponse.imageUrl}
//                         alt=""
//                         style={{ width: "80px", borderRadius: "8px" }}
//                       />
//                     )}
//                   </div>
//                 )}
//               </div>

//               <div className="card-footer d-flex justify-content-between">
//                 <Button
//                   size="sm"
//                   variant="outline-warning"
//                   onClick={() => {
//                     setEditData(c);
//                     setShowEditModal(true);
//                   }}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   size="sm"
//                   variant="outline-danger"
//                   onClick={() => handleDelete(c._id)}
//                 >
//                   Delete
//                 </Button>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* ================= OTHERS COMPLAINTS ================= */}
//         <h3 className="mb-4 fw-bold text-center pt-4">
//           <u>Others' Complaints</u>
//         </h3>

//         {othersComplaints.length === 0 ? (
//           <div
//             className="alert alert-danger text-center fw-semibold py-4 shadow-sm"
//             role="alert"
//           >
//             <h5 className="mb-1">No Complaints Found</h5>
//           </div>
//         ) : (
//           <div className="row">
//             {othersComplaints.map((c) => (
//               <div key={c._id} className="col-md-4 mb-4">
//                 <div className="card border-secondary h-100">
//                   {c.imageUrl && (
//                     <img
//                       src={c.imageUrl}
//                       className="card-img-top"
//                       style={{ height: "180px", objectFit: "cover" }}
//                       alt=""
//                     />
//                   )}
//                   <div className="card-body">
//                     <h5>{c.title}</h5>
//                     <p className="text-muted">{c.description}</p>
//                     <small>
//                       By: {c.residentId?.firstName} ({c.residentId?.flatNumber})
//                     </small>
//                     <br />
//                     <Badge bg="secondary">{c.status}</Badge>
//                   </div>
//                   {c.duplicateCount > 1 && (
//                     <p className="text-primary small">
//                       👥 {c.duplicateCount} residents reported this
//                     </p>
//                   )}
//                   {c.adminResponse && (
//                     <div className="border rounded p-2 mt-2 bg-light">
//                       <strong>Admin Response:</strong>
//                       <p className="mb-1">{c.adminResponse.text}</p>
//                       {c.adminResponse.imageUrl && (
//                         <img
//                           src={c.adminResponse.imageUrl}
//                           alt=""
//                           style={{ width: "80px", borderRadius: "8px" }}
//                         />
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* ================= ADD MODAL ================= */}
//       <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Complaint</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleSubmit}>
//             <input
//               className="form-control mb-2"
//               placeholder="Title"
//               value={formData.title}
//               onChange={(e) =>
//                 setFormData({ ...formData, title: e.target.value })
//               }
//               required
//             />
//             <textarea
//               className="form-control mb-2"
//               placeholder="Description"
//               value={formData.description}
//               onChange={(e) =>
//                 setFormData({ ...formData, description: e.target.value })
//               }
//               required
//             />
//             <input
//               type="file"
//               className="form-control mb-3"
//               onChange={(e) =>
//                 setFormData({ ...formData, image: e.target.files[0] })
//               }
//             />
//             <Button type="submit" className="w-100" variant="dark">
//               Submit
//             </Button>
//           </form>
//         </Modal.Body>
//       </Modal>

//       {/* ================= EDIT MODAL ================= */}
//       <Modal
//         show={showEditModal}
//         onHide={() => setShowEditModal(false)}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Complaint</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {editData && (
//             <>
//               <input
//                 className="form-control mb-2"
//                 value={editData.title}
//                 onChange={(e) =>
//                   setEditData({ ...editData, title: e.target.value })
//                 }
//               />
//               <textarea
//                 className="form-control mb-3"
//                 value={editData.description}
//                 onChange={(e) =>
//                   setEditData({ ...editData, description: e.target.value })
//                 }
//               />
//               <Button
//                 variant="warning"
//                 className="w-100"
//                 onClick={handleEditSave}
//               >
//                 Update Complaint
//               </Button>
//             </>
//           )}
//         </Modal.Body>
//       </Modal>
//       {/* ================= DUPLICATE MODAL ================= */}
//       <Modal
//         show={showDuplicateModal}
//         onHide={() => setShowDuplicateModal(false)}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Duplicate Complaint Detected</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {duplicateInfo && (
//             <>
//               <p>
//                 👥 {duplicateInfo.duplicateCount} residents already reported
//                 this issue.
//               </p>
//               <p className="text-success">
//                 ✔ Your priority vote has been added.
//               </p>
//               <Button
//                 variant="link"
//                 onClick={() =>
//                   navigate(
//                     `/resident/complaints/${duplicateInfo.originalComplaintId}`,
//                   )
//                 }
//               >
//                 View Original Complaint
//               </Button>
//             </>
//           )}
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default ResidentComplaint;

import React, { useState, useEffect } from "react";
import axios from "../../axiosInstance";
import {
  Modal,
  Button,
  Badge,
  Form,
  Alert,
  ProgressBar,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaTools, FaEdit, FaTrash, FaPlusCircle } from "react-icons/fa";

const ResidentComplaint = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

  const [myComplaints, setMyComplaints] = useState([]);
  const [othersComplaints, setOthersComplaints] = useState([]);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const [community, setCommunity] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");

  const [showDuplicateModal, setShowDuplicateModal] = useState(false);
  const [duplicateInfo, setDuplicateInfo] = useState(null);

  /* ================= FETCH ================= */
  const fetchComplaints = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("/api/resident/complaints", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMyComplaints(res.data.myComplaints || []);
      setOthersComplaints(res.data.othersComplaints || []);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchResidentProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("/api/resident/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const profile = res.data.profile;

      setName(profile.firstName);
      setCommunity(profile.communityId?.name);
      setCode(profile.code);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchComplaints();
    fetchResidentProfile();
  }, []);

  /* ================= ADD ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const token = localStorage.getItem("token");

      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);

      if (formData.image) data.append("image", formData.image);

      const res = await axios.post("/api/resident/complaints", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.isDuplicate) {
        setDuplicateInfo(res.data);
        setShowDuplicateModal(true);
        setShowAddModal(false);
        fetchComplaints();
        return;
      }

      setSuccess("Complaint submitted successfully!");
      setFormData({ title: "", description: "", image: null });

      setShowAddModal(false);
      fetchComplaints();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit complaint");
    }
  };

  /* ================= UPDATE ================= */

  const handleEditSave = async () => {
    try {
      const res = await axios.put(
        `/api/resident/complaints/${editData._id}`,
        {
          title: editData.title,
          description: editData.description,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      setMyComplaints(
        myComplaints.map((c) =>
          c._id === editData._id ? res.data.complaint : c,
        ),
      );

      setShowEditModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  /* ================= DELETE ================= */

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/resident/complaints/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      setMyComplaints(myComplaints.filter((c) => c._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="main-bg">
      {/* Background circles */}
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

      {/* Main Content */}
      <div className="container premium-wrapper">
        <h3 className="text-center premium-heading mt-5">
          Complaints Management
        </h3>

        <div className="heading-underline"></div>
        {/* Welcome Card */}

        <div className="card shadow-lg border-0 mb-4">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="fw-bold mb-1">Welcome, {name} 👋</h5>

              <p className="text-muted mb-0">
                Community ID : <b>{community}</b>
              </p>
            </div>
            <Button
              style={{ background: "#4e73df", border: "none" }}
              onClick={() => setShowAddModal(true)}
            >
              <FaPlusCircle /> Add Complaint
            </Button>
          </div>
        </div>

        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        {/* ================= MY COMPLAINTS ================= */}

        <div className="text-center mt-5">
          <h3 className="premium-heading">My Complaints</h3>
          <div className="heading-underline"></div>
        </div>
        <div className="row mt-3">
          {myComplaints.map((c) => (
            <div key={c._id} className="col-md-4 mb-4">
              <div className="card shadow border-warning h-100">
                {c.imageUrl && (
                  <img
                    src={c.imageUrl}
                    className="card-img-top"
                    style={{ height: "180px", objectFit: "cover" }}
                    alt=""
                  />
                )}

                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5>{c.title}</h5>

                    <Badge bg="danger">{c.status}</Badge>
                  </div>

                  <p className="text-muted">{c.description}</p>

                  {c.status === "In Progress" && (
                    <ProgressBar animated striped now={60} className="mb-2" />
                  )}

                  {c.duplicateCount > 1 && (
                    <p className="text-primary small">
                      👥 {c.duplicateCount} residents reported this
                    </p>
                  )}

                  {c.adminResponse && (
                    <div className="border rounded p-2 mt-2 bg-light">
                      <strong>Admin Response:</strong>

                      <p className="mb-1">{c.adminResponse.text}</p>

                      {c.adminResponse.imageUrl && (
                        <img
                          src={c.adminResponse.imageUrl}
                          alt=""
                          style={{ width: "80px", borderRadius: "8px" }}
                        />
                      )}
                    </div>
                  )}
                </div>

                <div className="card-footer d-flex justify-content-between">
                  <Button
                    size="sm"
                    variant="outline-warning"
                    onClick={() => {
                      setEditData(c);
                      setShowEditModal(true);
                    }}
                  >
                    <FaEdit /> Edit
                  </Button>

                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => handleDelete(c._id)}
                  >
                    <FaTrash /> Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= OTHERS ================= */}

        <div className="text-center mt-5">
          <h3 className="premium-heading">Others Complaints</h3>
          <div className="heading-underline"></div>
        </div>
        <div className="row mt-3">
          {othersComplaints.map((c) => (
            <div key={c._id} className="col-md-4 mb-4">
              <div className="card border-warning h-100">
                {c.imageUrl && (
                  <img
                    src={c.imageUrl}
                    className="card-img-top"
                    style={{ height: "180px", objectFit: "cover" }}
                    alt=""
                  />
                )}

                <div className="card-body">
                  <h5>{c.title}</h5>

                  <p className="text-muted">{c.description}</p>

                  <small>
                    By: {c.residentId?.firstName} ({c.residentId?.flatNumber})
                  </small>

                  <br />

                  <Badge bg="primary">{c.status}</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= ADD MODAL ================= */}

      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Complaint</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              className="mb-2"
              placeholder="Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />

            <Form.Control
              as="textarea"
              className="mb-2"
              placeholder="Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />

            <Form.Control
              type="file"
              className="mb-3"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.files[0] })
              }
            />

            <Button type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* ================= EDIT MODAL ================= */}

      <Modal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Complaint</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {editData && (
            <>
              <Form.Control
                className="mb-2"
                value={editData.title}
                onChange={(e) =>
                  setEditData({ ...editData, title: e.target.value })
                }
              />

              <Form.Control
                as="textarea"
                className="mb-3"
                value={editData.description}
                onChange={(e) =>
                  setEditData({ ...editData, description: e.target.value })
                }
              />

              <Button
                variant="warning"
                className="w-100"
                onClick={handleEditSave}
              >
                Update Complaint
              </Button>
            </>
          )}
        </Modal.Body>
      </Modal>

      {/* ================= DUPLICATE MODAL ================= */}

      <Modal
        show={showDuplicateModal}
        onHide={() => setShowDuplicateModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Duplicate Complaint Detected</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {duplicateInfo && (
            <>
              <p>
                👥 {duplicateInfo.duplicateCount} residents already reported
                this issue.
              </p>

              <p className="text-success">
                ✔ Your priority vote has been added.
              </p>

              <Button
                variant="link"
                onClick={() =>
                  navigate(
                    `/resident/complaints/${duplicateInfo.originalComplaintId}`,
                  )
                }
              >
                View Original Complaint
              </Button>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ResidentComplaint;
