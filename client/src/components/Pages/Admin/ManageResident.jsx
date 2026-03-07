import { useState, useEffect } from "react";
import axios from "../../axiosInstance";
import { Modal, Button } from "react-bootstrap";

function ManageResidents() {
  const [residents, setResidents] = useState([]);
  const [selectedResident, setSelectedResident] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    flatNumber: "",
    totalFamilyMembers: "",
  });

  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  const showTempMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 2500);
  };

  const validatePassword = (value) => {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!strongPasswordRegex.test(value)) {
      setPasswordError(
        "Password must be 8+ chars with uppercase, lowercase, number & special symbol",
      );
    } else {
      setPasswordError("");
    }
  };

  // Fetch Residents
  const fetchResidents = async () => {
    try {
      const res = await axios.get("/api/admin/residents-with-family", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setResidents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchResidents();
  }, []);

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      validatePassword(value);
    }
  };

  // Add Resident
  const [addModalMessage, setAddModalMessage] = useState(""); // ✅ Add modal-specific message

  // Add Resident
  // const handleAddResident = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post("/api/admin/add-resident", formData, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });

  //     setAddModalMessage("✅ Resident successfully added");

  //     // 1 sec delay, then close modal and show main message
  //     setTimeout(() => {
  //       setShowAddModal(false);
  //       setAddModalMessage("");
  //       fetchResidents();
  //       showTempMessage("✅ Resident successfully added");
  //     }, 1000);
  //   } catch (err) {
  //     const errorMsg = err?.response?.data?.error || "❌ Error adding resident";
  //     setAddModalMessage(errorMsg);
  //   }
  // };

  const handleAddResident = async (e) => {
    e.preventDefault();

    if (passwordError) {
      setAddModalMessage(passwordError);
      return;
    }

    try {
      const res = await axios.post("/api/admin/add-resident", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setAddModalMessage("✅ Resident successfully added");

      setTimeout(() => {
        setShowAddModal(false);
        setAddModalMessage("");
        fetchResidents();
        showTempMessage("✅ Resident successfully added");
      }, 1000);
    } catch (err) {
      const errorMsg = err?.response?.data?.error || "❌ Error adding resident";
      setAddModalMessage(errorMsg);
    }
  };

  // Edit Resident
  const handleEditResident = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `/api/admin/residents/${selectedResident._id}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      setShowEditModal(false);
      fetchResidents();
      showTempMessage("✏ Resident successfully updated");
    } catch (err) {
      console.error(err);
    }
  };

  // Delete Resident
  const handleDeleteResident = async (id) => {
    if (window.confirm("Are you sure you want to delete this resident?")) {
      try {
        await axios.delete(`/api/admin/residents/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchResidents();
        showTempMessage("🗑 Resident successfully deleted");
      } catch (err) {
        console.error(err);
      }
    }
  };

  const openEditModal = (resident) => {
    setSelectedResident(resident);
    setFormData(resident);
    setShowEditModal(true);
  };

  const openDetailsModal = (resident) => {
    setSelectedResident(resident);
    setShowDetailsModal(true);
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
              Welcome Admin, {localStorage.getItem("loginName")}{" "}
              {localStorage.getItem("lastName")}
            </h5>

            <p className="mb-0 small">
              <strong>Community:</strong>{" "}
              {localStorage.getItem("communityName")} (
              {localStorage.getItem("communityCode")})
            </p>
          </div>
        </div>

        {/* ===== PAGE HEADING ===== */}
        <h4 className="dashboard-title text-center mt-3 mb-4">
          Manage Resident
        </h4>

        {/* ===== ACTION CARDS ===== */}
        {/* <div className="row g-4 mb-4"> */}
        {/* ADD RESIDENT CARD */}
        {/* <div className="col-md-6">
            <div className="card shadow rounded-4 h-100 hover-shadow">
              <div className="card-body d-flex flex-column justify-content-center text-center">
                <div>
                  <h4 className="fw-bold">Add New Resident</h4>
                  <p className="text-muted small mb-0">
                    <h5>Register a new resident in community</h5>
                  </p>
                </div>

                <button
                  className="btn btn-primary mt-3 "
                  onClick={() => setShowAddModal(true)}
                >
                  + Add Resident
                </button>
              </div>
            </div>
          </div> */}

        {/* TOTAL RESIDENTS CARD */}
        {/* <div className="col-md-6">
            <div className="card shadow rounded-4 h-100 hover-shadow  ">
              <div className="card-body  d-flex flex-column justify-content-center text-center">
                <h4 className="fw-bold mb-2">Total Residents</h4>
                <h2 className="fw-bold">{residents.length}</h2>
                <span className="text-muted small">
                  <h5>Active residents</h5>
                </span>
              </div>
            </div>
          </div>
        </div> */}

        <div className="row g-4 mb-4">
          {/* ADD RESIDENT CARD */}
          <div className="col-md-6">
            <div
              className="card shadow rounded-4 h-100 hover-shadow"
              style={{
                background: "linear-gradient(135deg,#fbc2eb,#a6c1ee)",
                border: "none",
              }}
            >
              <div className="card-body d-flex flex-column justify-content-center text-center">
                <div>
                  <h4 className="fw-bold text-dark">Add New Resident</h4>

                  <p className="small mb-0 text-dark">
                    <h5 className="text-dark">
                      Register a new resident in community
                    </h5>
                  </p>
                </div>

                <button
                  className="mt-3 fw-semibold"
                  style={{
                    background: "white",
                    color: "black",
                    border: "2px solid black",
                    padding: "5px 14px",
                    fontSize: "13px",
                    borderRadius: "20px",
                    width: "130px",
                    margin: "0 auto",
                    transition: "0.3s",
                  }}
                  onClick={() => setShowAddModal(true)}
                >
                  + Add Resident
                </button>
              </div>
            </div>
          </div>

          {/* TOTAL RESIDENTS CARD */}
          <div className="col-md-6">
            <div
              className="card shadow rounded-4 h-100 hover-shadow"
              style={{
                background: "linear-gradient(135deg,#fddb92,#d1fdff)",
                border: "none",
              }}
            >
              <div className="card-body d-flex flex-column justify-content-center text-center">
                <h4 className="fw-bold mb-2 text-dark">Total Residents</h4>

                <h2 className="fw-bold text-dark">{residents.length}</h2>

                <span className="small text-dark">
                  <h5 className="text-dark">Active residents</h5>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== MESSAGE BAR ===== */}
        {message && <div className="alert alert-success py-2">{message}</div>}

        {/* ===== RESIDENT TABLE ===== */}
        <div className="card shadow-sm rounded-4 hover-shadow">
          <div className="card-body">
            <h6 className="fw-bold mb-3">Resident List</h6>

            <div className="table-responsive">
              <table className="table table-bordered align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Flat No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th style={{ width: "220px" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {residents.map((res) => (
                    <tr key={res._id}>
                      <td>{res.flatNumber}</td>
                      <td>
                        {res.firstName} {res.lastName}
                      </td>
                      <td>{res.email}</td>
                      <td>{res.status}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-dark me-2"
                          onClick={() => openEditModal(res)}
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-sm btn-outline-danger me-2"
                          onClick={() => handleDeleteResident(res._id)}
                        >
                          Delete
                        </button>

                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => openDetailsModal(res)}
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Add Resident Modal */}
        <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Resident</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* ✅ Show message inside modal */}
            {addModalMessage && (
              <div
                style={{
                  background: addModalMessage.includes("✅")
                    ? "#d1e7dd"
                    : "#f8d7da",
                  padding: "8px",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  color: addModalMessage.includes("✅") ? "#0f5132" : "#842029",
                }}
              >
                {addModalMessage}
              </div>
            )}

            {/* <form onSubmit={handleAddResident}>
            {[
              "firstName",
              "lastName",
              "email",
              "mobile",
              "password",
              "flatNumber",
              "totalFamilyMembers",
            ].map((field) => (
              <div key={field} className="mb-2">
                <label>{field}</label>
                <input
                  type={field === "password" ? "password" : "text"}
                  name={field}
                  className="form-control"
                  value={formData[field] || ""}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
            <Button type="submit" className="mt-2">
              Save
            </Button>
          </form> */}

            <form onSubmit={handleAddResident}>
              {[
                "firstName",
                "lastName",
                "email",
                "mobile",
                "password",
                "flatNumber",
                "totalFamilyMembers",
              ].map((field) => (
                <div key={field} className="mb-2">
                  <label>{field}</label>

                  <input
                    type={field === "password" ? "password" : "text"}
                    name={field}
                    className={`form-control ${
                      field === "password" && passwordError ? "is-invalid" : ""
                    }`}
                    value={formData[field] || ""}
                    onChange={handleChange}
                    required
                  />

                  {/* ✅ ONLY FOR PASSWORD */}
                  {field === "password" && passwordError && (
                    <small className="text-danger">{passwordError}</small>
                  )}
                </div>
              ))}

              <Button type="submit" className="mt-2">
                Save
              </Button>
            </form>
          </Modal.Body>
        </Modal>

        {/* Edit Resident Modal */}
        <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Resident</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleEditResident}>
              {[
                "firstName",
                "lastName",
                "email",
                "mobile",
                "flatNumber",
                "totalFamilyMembers",
              ].map((field) => (
                <div key={field} className="mb-2">
                  <label>{field}</label>
                  <input
                    type="text"
                    name={field}
                    className="form-control"
                    value={formData[field] || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}
              <Button type="submit" className="mt-2">
                Update
              </Button>
            </form>
          </Modal.Body>
        </Modal>

        {/* More Details Modal */}
        <Modal
          show={showDetailsModal}
          onHide={() => setShowDetailsModal(false)}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Resident Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedResident && (
              <>
                <h5>👤 Resident Info</h5>
                <p>
                  <strong>Name:</strong> {selectedResident.firstName}{" "}
                  {selectedResident.lastName}
                </p>
                <p>
                  <strong>Email:</strong> {selectedResident.email}
                </p>
                <p>
                  <strong>Mobile:</strong> {selectedResident.mobile}
                </p>
                <p>
                  <strong>Flat Number:</strong> {selectedResident.flatNumber}
                </p>
                <p>
                  <strong>Total Family Members:</strong>{" "}
                  {selectedResident.totalFamilyMembers}
                </p>
                <p>
                  <strong>Status:</strong> {selectedResident.status}
                </p>

                {/* Family Members */}
                <hr />
                <h5>👨‍👩‍👧 Family Members</h5>
                {selectedResident.family &&
                selectedResident.family.length > 0 ? (
                  <table className="table table-sm table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Relation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedResident.family.map((f) => (
                        <tr key={f._id}>
                          <td>{f.name}</td>
                          <td>{f.age}</td>
                          <td>{f.gender}</td>
                          <td>{f.relation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No family members added.</p>
                )}
              </>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default ManageResidents;
