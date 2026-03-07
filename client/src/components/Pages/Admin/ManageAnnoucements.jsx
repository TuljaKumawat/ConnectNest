import { useEffect, useState } from "react";
import axios from "../../axiosInstance";
import { Modal, Button } from "react-bootstrap";

function ManageAnnouncements() {
  const [announcements, setAnnouncements] = useState([]);
  const [selected, setSelected] = useState(null);

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const [formData, setFormData] = useState({ title: "", message: "" });

  const [pageMsg, setPageMsg] = useState("");
  const [addModalMsg, setAddModalMsg] = useState("");
  const [editModalMsg, setEditModalMsg] = useState("");

  const token = localStorage.getItem("token");

  const authHeader = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const showTempMessage = (msg, ms = 2200) => {
    setPageMsg(msg);
    setTimeout(() => setPageMsg(""), ms);
  };

  const fetchAnnouncements = async () => {
    try {
      const res = await axios.get("/api/admin/announcements", authHeader);
      setAnnouncements(res.data || []);
    } catch {
      showTempMessage("❌ Failed to load announcements");
    }
  };

  useEffect(() => {
    fetchAnnouncements();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // ---------- Add ----------
  const openAddModal = () => {
    setFormData({ title: "", message: "" });
    setAddModalMsg("");
    setShowAdd(true);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/admin/add-announcements", formData, authHeader);
      setAddModalMsg("✅ Announcement created");
      setTimeout(() => {
        setShowAdd(false);
        fetchAnnouncements();
        showTempMessage("✅ Announcement created");
      }, 800);
    } catch {
      setAddModalMsg("❌ Failed to create announcement");
    }
  };

  // ---------- Edit ----------
  const openEditModal = (ann) => {
    setSelected(ann);
    setFormData({ title: ann.title, message: ann.message });
    setEditModalMsg("");
    setShowEdit(true);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `/api/admin/announcements/${selected._id}`,
        formData,
        authHeader,
      );
      setEditModalMsg("✏ Updated");
      setTimeout(() => {
        setShowEdit(false);
        fetchAnnouncements();
        showTempMessage("✏ Announcement updated");
      }, 800);
    } catch {
      setEditModalMsg("❌ Failed to update");
    }
  };

  // ---------- Delete ----------
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this announcement?")) return;
    try {
      await axios.delete(`/api/admin/announcements/${id}`, authHeader);
      fetchAnnouncements();
      showTempMessage("🗑 Announcement deleted");
    } catch {
      showTempMessage("❌ Failed to delete");
    }
  };

  // ---------- Publish / Unpublish ----------
  const toggleStatus = async (id) => {
    try {
      const res = await axios.put(
        `/api/admin/announcements/${id}/toggle`,
        {},
        authHeader,
      );
      fetchAnnouncements();
      showTempMessage(
        res.data.announcement.status === "published"
          ? "✅ Published"
          : "⏸ Unpublished",
      );
    } catch {
      showTempMessage("❌ Failed to change status");
    }
  };

  const formatDate = (iso) => (iso ? new Date(iso).toLocaleString() : "-");

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
        <div className="card welcome-card mt-4">
          <div className="card-body">
            <h5 className="fw-semibold mb-1">
              Welcome Admin, {localStorage.getItem("loginName")}
              {localStorage.getItem("lastName")}{" "}
            </h5>

            <p className="mb-0 small">
              <strong>Community:</strong>{" "}
              {localStorage.getItem("communityName")}
              {localStorage.getItem("communityCode")}{" "}
            </p>
          </div>
        </div>

        {/* TITLE */}
        <h4 className="dashboard-title text-center mt-3 mb-4">
          Manage Anncouncement
        </h4>

        {/* <div className="container mt-4 pt-5"> */}
        {/* ===== TOP HEADER ===== */}
        {/* <div className="mb-4">
        <h3 className="fw-bold mb-1">
          Welcome Admin, {localStorage.getItem("loginName")}
        </h3>
        <p className="fw-semibold mb-0">
          Community: {localStorage.getItem("communityName")} (
          {localStorage.getItem("communityCode")})
        </p>
      </div>
      <h4 className="text-center fw-bold text-decoration-underline mb-4">
        Manage Anncouncement
      </h4> */}

        {/* <div className="row g-4 mb-5">
    
          <div className="col-md-6">
            <div className="card shadow-sm rounded-4 h-100">
              <div className="card-body text-center">
                <h5 className="fw-bold">Add New Announcement</h5>
                <p className="text-muted">
                  Register a new Announcement in community
                </p>

                <button
                  className="btn btn-dark w-100 mt-3"
                  onClick={() => openAddModal(true)}
                >
                  + Add Announcement
                </button>
              </div>
            </div>
          </div>

          
          <div className="col-md-6">
            <div className="card shadow-sm rounded-4 h-100">
              <div className="card-body text-center">
                <h5 className="fw-bold">Total Announcements</h5>
                <h1 className="fw-bold my-2">{announcements.length}</h1>
                <span className="text-muted">Active announcements</span>
              </div>
            </div>
          </div>
        </div> */}

        <div className="row g-4 mb-5">
          {/* ADD ANNOUNCEMENT */}
          <div className="col-md-6">
            <div
              className="card shadow-sm rounded-4 h-100"
              style={{
                background: "linear-gradient(135deg,#84fab0,#8fd3f4)",
                border: "none",
              }}
            >
              <div className="card-body text-center">
                <h5 className="fw-bold text-dark">Add New Announcement</h5>

                <p className="text-dark">
                  Register a new Announcement in community
                </p>

                <button
                  className="btn mt-2 fw-semibold"
                  style={{
                    background: "#ffffff",
                    color: "#333",
                    padding: "6px 18px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    border: "2px solid white",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  }}
                  onClick={() => openAddModal(true)}
                >
                  + Add Announcement
                </button>
              </div>
            </div>
          </div>

          {/* TOTAL ANNOUNCEMENTS */}
          <div className="col-md-6">
            <div
              className="card shadow-sm rounded-4 h-100"
              style={{
                background: "linear-gradient(135deg,#fbc2eb,#a6c1ee)",
                border: "none",
              }}
            >
              <div className="card-body text-center">
                <h5 className="fw-bold text-dark">Total Announcements</h5>

                <h1 className="fw-bold my-2 text-dark">
                  {announcements.length}
                </h1>

                <span className="text-dark">Active announcements</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== TABLE ===== */}
        <div className="card shadow-sm rounded-4 mb-3">
          <div className="card-body">
            <h5 className="fw-bold mb-3">Announcement List</h5>

            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Title</th>
                    <th>Message</th>
                    <th>Status</th>
                    <th>Created</th>
                    <th style={{ width: 270 }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {announcements.map((ann) => (
                    <tr key={ann._id}>
                      <td>{ann.title}</td>
                      <td style={{ whiteSpace: "pre-wrap" }}>{ann.message}</td>
                      <td>
                        <span
                          className={`badge ${
                            ann.status === "published"
                              ? "bg-success"
                              : "bg-secondary"
                          }`}
                        >
                          {ann.status}
                        </span>
                      </td>
                      <td>{formatDate(ann.createdAt)}</td>

                      <td>
                        <button
                          className="btn btn-sm btn-outline-dark me-2"
                          onClick={() => openEditModal(ann)}
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-sm btn-outline-danger me-2"
                          onClick={() => handleDelete(ann._id)}
                        >
                          Delete
                        </button>

                        <button
                          className={`btn btn-sm ${
                            ann.status === "published"
                              ? "btn-outline-secondary"
                              : "btn-outline-success"
                          }`}
                          onClick={() => toggleStatus(ann._id)}
                        >
                          {ann.status === "published" ? "Unpublish" : "Publish"}
                        </button>
                      </td>
                    </tr>
                  ))}
                  {announcements.length === 0 && (
                    <tr>
                      <td colSpan="5" className="text-center">
                        No announcements yet
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ===== ADD MODAL ===== */}
        <Modal show={showAdd} onHide={() => setShowAdd(false)}>
          <Modal.Header closeButton>
            <Modal.Title>New Announcement</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {addModalMsg && (
              <div className="alert alert-light">{addModalMsg}</div>
            )}
            <form onSubmit={handleAdd}>
              <input
                className="form-control mb-2"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <textarea
                className="form-control mb-2"
                name="message"
                rows={4}
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button type="submit">Save</Button>
            </form>
          </Modal.Body>
        </Modal>

        {/* ===== EDIT MODAL ===== */}
        <Modal show={showEdit} onHide={() => setShowEdit(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Announcement</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {editModalMsg && (
              <div className="alert alert-light">{editModalMsg}</div>
            )}
            <form onSubmit={handleEdit}>
              <input
                className="form-control mb-2"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <textarea
                className="form-control mb-2"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button type="submit">Update</Button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default ManageAnnouncements;
