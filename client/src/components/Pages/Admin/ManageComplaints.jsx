// import React, { useEffect, useState } from "react";
// import axios from "../../axiosInstance";
// import { Card, Button, Modal, Form, Row, Col } from "react-bootstrap";

// function ManageComplaints() {
//   const [allComplaints, setAllComplaints] = useState([]); // for cards count
//   const [complaints, setComplaints] = useState([]); // for list
//   const [filter, setFilter] = useState(""); // "", "Pending", "In Progress", "Resolved"
//   const [loading, setLoading] = useState(false);

//   const [showModal, setShowModal] = useState(false);
//   const [selected, setSelected] = useState(null);
//   const [adminText, setAdminText] = useState("");
//   const [responseImage, setResponseImage] = useState(null);
//   const [statusSelect, setStatusSelect] = useState("");

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetchList();
//     // eslint-disable-next-line
//   }, [filter]);

//   const fetchList = async () => {
//     try {
//       setLoading(true);

//       // 🔹 Always fetch ALL complaints
//       const res = await axios.get("/api/admin/complaints", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const data = res.data.complaints || [];
//       setAllComplaints(data);

//       // 🔹 Filter only for list
//       const filteredData = filter
//         ? data.filter((c) => c.status === filter)
//         : data;

//       setComplaints(filteredData);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to load complaints");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ===== COUNTS (STATIC) =====
//   const totalCount = allComplaints.length;
//   const pendingCount = allComplaints.filter(
//     (c) => c.status === "Pending",
//   ).length;
//   const progressCount = allComplaints.filter(
//     (c) => c.status === "In Progress",
//   ).length;
//   const resolvedCount = allComplaints.filter(
//     (c) => c.status === "Resolved",
//   ).length;

//   const openModal = (c) => {
//     setSelected(c);
//     setAdminText(c.adminResponse?.text || "");
//     setStatusSelect(c.status);
//     setResponseImage(null);
//     setShowModal(true);
//   };

//   const handleUpdate = async () => {
//     try {
//       const fd = new FormData();
//       fd.append("status", statusSelect);
//       fd.append("adminText", adminText);
//       if (responseImage) fd.append("responseImage", responseImage);

//       await axios.put(`/api/admin/complaints/${selected._id}`, fd, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setShowModal(false);
//       fetchList();
//     } catch (e) {
//       console.error(e);
//       alert("Update failed");
//     }
//   };

//   return (
//     <div className="container mt-4 pt-5">
//       {/* HEADER */}
//       <h3 className="fw-bold">
//         Welcome Admin, {localStorage.getItem("loginName")}
//       </h3>
//       <p className="fw-semibold">
//         Community: {localStorage.getItem("communityName")} (
//         {localStorage.getItem("communityCode")})
//       </p>

//       <h4 className="text-center fw-bold text-decoration-underline mb-4">
//         Complaints Management
//       </h4>

//       {/* ===== DASHBOARD CARDS ===== */}
//       <Row className="g-3 mb-5">
//         <Col md={3}>
//           <Card
//             className="shadow-sm rounded-4 text-center"
//             role="button"
//             onClick={() => setFilter("")}
//           >
//             <Card.Body>
//               <h6 className="fw-bold">Total Complaints</h6>
//               <h2>{totalCount}</h2>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={3}>
//           <Card
//             className="shadow-sm rounded-4 text-center"
//             role="button"
//             onClick={() => setFilter("Pending")}
//           >
//             <Card.Body>
//               <h6 className="fw-bold text-danger">Pending</h6>
//               <h2 className="text-danger">{pendingCount}</h2>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={3}>
//           <Card
//             className="shadow-sm rounded-4 text-center"
//             role="button"
//             onClick={() => setFilter("In Progress")}
//           >
//             <Card.Body>
//               <h6 className="fw-bold text-warning">In Progress</h6>
//               <h2 className="text-warning">{progressCount}</h2>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={3}>
//           <Card
//             className="shadow-sm rounded-4 text-center"
//             role="button"
//             onClick={() => setFilter("Resolved")}
//           >
//             <Card.Body>
//               <h6 className="fw-bold text-success">Resolved</h6>
//               <h2 className="text-success">{resolvedCount}</h2>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* ===== COMPLAINT LIST ===== */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : complaints.length === 0 ? (
//         <p>No complaints found.</p>
//       ) : (
//         <Row>
//           {complaints.map((c) => (
//             <Col md={4} key={c._id} className="mb-4">
//               <Card className="h-100 shadow-sm">
//                 {c.imageUrl && (
//                   <Card.Img
//                     variant="top"
//                     src={c.imageUrl}
//                     style={{ height: 180, objectFit: "cover" }}
//                   />
//                 )}
//                 <Card.Body>
//                   <Card.Title>{c.title}</Card.Title>
//                   <Card.Text>{c.description}</Card.Text>
//                   <small className="text-muted">
//                     {c.residentId?.firstName} {c.residentId?.lastName} (
//                     {c.residentId?.flatNumber})
//                   </small>
//                   <br />
//                   <small>
//                     Status: <b>{c.status}</b>
//                   </small>
//                 </Card.Body>
//                 <Card.Footer className="d-flex justify-content-between">
//                   <Button
//                     size="sm"
//                     variant="outline-dark"
//                     onClick={() => openModal(c)}
//                   >
//                     Open
//                   </Button>
//                 </Card.Footer>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       )}

//       {/* ===== MODAL ===== */}
//       <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>Complaint Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selected && (
//             <>
//               <h5>{selected.title}</h5>
//               <p>{selected.description}</p>

//               <Form.Group className="mb-2">
//                 <Form.Label>Status</Form.Label>
//                 <Form.Select
//                   value={statusSelect}
//                   onChange={(e) => setStatusSelect(e.target.value)}
//                 >
//                   <option value="Pending">Pending</option>
//                   <option value="In Progress">In Progress</option>
//                   <option value="Resolved">Resolved</option>
//                 </Form.Select>
//               </Form.Group>

//               <Form.Group className="mb-2">
//                 <Form.Label>Admin Response</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={3}
//                   value={adminText}
//                   onChange={(e) => setAdminText(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group>
//                 <Form.Label>Response Image</Form.Label>
//                 <Form.Control
//                   type="file"
//                   onChange={(e) => setResponseImage(e.target.files[0])}
//                 />
//               </Form.Group>
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//             variant="outline-secondary"
//             onClick={() => setShowModal(false)}
//           >
//             Close
//           </Button>
//           <Button variant="dark" onClick={handleUpdate}>
//             Save
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default ManageComplaints;

import React, { useEffect, useState } from "react";
import axios from "../../axiosInstance";
import { Card, Button, Modal, Form, Row, Col } from "react-bootstrap";

function ManageComplaints() {
  const [allComplaints, setAllComplaints] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [adminText, setAdminText] = useState("");
  const [responseImage, setResponseImage] = useState(null);
  const [statusSelect, setStatusSelect] = useState("");

  const [pageMsg, setPageMsg] = useState("");

  // 🔥 Residents modal
  const [showResidentsModal, setShowResidentsModal] = useState(false);
  const [selectedResidents, setSelectedResidents] = useState([]);

  const token = localStorage.getItem("token");
  const authHeader = { headers: { Authorization: `Bearer ${token}` } };

  const showTempMessage = (msg, ms = 2000) => {
    setPageMsg(msg);
    setTimeout(() => setPageMsg(""), ms);
  };

  const openResidentsModal = (residents) => {
    setSelectedResidents(residents || []);
    setShowResidentsModal(true);
  };

  useEffect(() => {
    fetchList();
    // eslint-disable-next-line
  }, [filter]);

  const fetchList = async () => {
    try {
      setLoading(true);

      const res = await axios.get("/api/admin/complaints", authHeader);
      const data = res.data.complaints || [];

      // 🔥 Sort by duplicateCount (high priority first)
      const sortedData = data.sort(
        (a, b) => (b.duplicateCount || 1) - (a.duplicateCount || 1),
      );

      setAllComplaints(sortedData);

      const filteredData = filter
        ? sortedData.filter((c) => c.status === filter)
        : sortedData;

      setComplaints(filteredData);
    } catch (err) {
      showTempMessage("❌ Failed to load complaints");
    } finally {
      setLoading(false);
    }
  };

  // ===== COUNTS =====
  const totalCount = allComplaints.length;
  const pendingCount = allComplaints.filter(
    (c) => c.status === "Pending",
  ).length;
  const progressCount = allComplaints.filter(
    (c) => c.status === "In Progress",
  ).length;
  const resolvedCount = allComplaints.filter(
    (c) => c.status === "Resolved",
  ).length;

  const openModal = (c) => {
    setSelected(c);
    setAdminText(c.adminResponse?.text || "");
    setStatusSelect(c.status);
    setResponseImage(null);
    setShowModal(true);
  };

  const handleUpdate = async () => {
    try {
      const fd = new FormData();
      fd.append("status", statusSelect);
      fd.append("adminText", adminText);
      if (responseImage) fd.append("responseImage", responseImage);

      await axios.put(`/api/admin/complaints/${selected._id}`, fd, authHeader);

      setShowModal(false);
      fetchList();
      showTempMessage("✅ Complaint updated");
    } catch (e) {
      showTempMessage("❌ Update failed");
    }
  };

  // 🔥 Quick Status Update
  const quickUpdateStatus = async (id, newStatus) => {
    try {
      const fd = new FormData();
      fd.append("status", newStatus);
      await axios.put(`/api/admin/complaints/${id}`, fd, authHeader);
      fetchList();
      showTempMessage(`✅ Marked as ${newStatus}`);
    } catch (err) {
      showTempMessage("❌ Failed to update status");
    }
  };

  return (
    <div className="container mt-4 pt-5">
      <h3 className="fw-bold">
        Welcome Admin, {localStorage.getItem("loginName")}
      </h3>
      <p className="fw-semibold">
        Community: {localStorage.getItem("communityName")} (
        {localStorage.getItem("communityCode")})
      </p>

      <h4 className="text-center fw-bold text-decoration-underline mb-4">
        Complaints Management
      </h4>

      {pageMsg && <div className="alert alert-info text-center">{pageMsg}</div>}

      {/* ===== DASHBOARD CARDS (SAME UI) ===== */}
      <Row className="g-3 mb-5">
        <Col md={3}>
          <Card
            className="shadow-sm rounded-4 text-center"
            role="button"
            onClick={() => setFilter("")}
          >
            <Card.Body>
              <h6 className="fw-bold">Total Complaints</h6>
              <h2>{totalCount}</h2>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card
            className="shadow-sm rounded-4 text-center"
            role="button"
            onClick={() => setFilter("Pending")}
          >
            <Card.Body>
              <h6 className="fw-bold text-danger">Pending</h6>
              <h2 className="text-danger">{pendingCount}</h2>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card
            className="shadow-sm rounded-4 text-center"
            role="button"
            onClick={() => setFilter("In Progress")}
          >
            <Card.Body>
              <h6 className="fw-bold text-warning">In Progress</h6>
              <h2 className="text-warning">{progressCount}</h2>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card
            className="shadow-sm rounded-4 text-center"
            role="button"
            onClick={() => setFilter("Resolved")}
          >
            <Card.Body>
              <h6 className="fw-bold text-success">Resolved</h6>
              <h2 className="text-success">{resolvedCount}</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* ===== LIST ===== */}
      {loading ? (
        <p>Loading...</p>
      ) : complaints.length === 0 ? (
        <p>No complaints found.</p>
      ) : (
        <Row>
          {complaints.map((c) => (
            <Col md={4} key={c._id} className="mb-4">
              <Card className="h-100 shadow-sm">
                {c.imageUrl && (
                  <Card.Img
                    variant="top"
                    src={c.imageUrl}
                    style={{ height: 180, objectFit: "cover" }}
                  />
                )}
                <Card.Body>
                  <Card.Title>{c.title}</Card.Title>
                  <Card.Text>{c.description}</Card.Text>

                  <small className="text-muted">
                    {c.residentId?.firstName} {c.residentId?.lastName} (
                    {c.residentId?.flatNumber})
                  </small>
                  <br />
                  <small>
                    Status: <b>{c.status}</b>
                  </small>

                  {/* 🔥 High Priority */}
                  {c?.duplicateCount > 1 && (
                    <div className="mt-2">
                      <span className="badge bg-danger">🔥 High Priority</span>
                      <br />
                      <small
                        className="text-primary"
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                        onClick={() => openResidentsModal(c.reportedResidents)}
                      >
                        👥 {c.duplicateCount} residents reported this
                      </small>
                    </div>
                  )}
                </Card.Body>

                <Card.Footer className="d-flex justify-content-between">
                  <Button
                    size="sm"
                    variant="outline-dark"
                    onClick={() => openModal(c)}
                  >
                    Open
                  </Button>

                  <div>
                    <Button
                      size="sm"
                      variant="warning"
                      className="me-2"
                      onClick={() => quickUpdateStatus(c._id, "In Progress")}
                    >
                      In Progress
                    </Button>

                    <Button
                      size="sm"
                      variant="success"
                      onClick={() => {
                        if (!window.confirm("Mark as Resolved?")) return;
                        quickUpdateStatus(c._id, "Resolved");
                      }}
                    >
                      Resolve
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* SAME MODAL */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Complaint Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selected && (
            <>
              <h5>{selected.title}</h5>
              <p>{selected.description}</p>

              <Form.Group className="mb-2">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  value={statusSelect}
                  onChange={(e) => setStatusSelect(e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Admin Response</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={adminText}
                  onChange={(e) => setAdminText(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Response Image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => setResponseImage(e.target.files[0])}
                />
              </Form.Group>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="dark" onClick={handleUpdate}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Residents Modal */}
      <Modal
        show={showResidentsModal}
        onHide={() => setShowResidentsModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Residents Who Reported</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedResidents.length === 0 ? (
            <p>No data available</p>
          ) : (
            selectedResidents.map((r, index) => (
              <div key={index} className="mb-2 p-2 border rounded">
                <strong>
                  {r.firstName} {r.lastName}
                </strong>
                <br />
                Flat No: {r.flatNumber}
              </div>
            ))
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ManageComplaints;
