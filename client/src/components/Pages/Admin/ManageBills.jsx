import { useState, useEffect } from "react";
import axios from "../../axiosInstance";
import { Modal, Button } from "react-bootstrap";

function ManageBills() {
  const [bills, setBills] = useState([]);
  const [filteredBills, setFilteredBills] = useState([]);
  const [filterType, setFilterType] = useState("ALL");

  const [residents, setResidents] = useState([]);
  const [formData, setFormData] = useState({
    residentId: "",
    month: "",
    year: "",
    amount: "",
    dueDate: "",
  });
  const [editData, setEditData] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchBills();
    fetchResidents();
  }, []);

  useEffect(() => {
    applyFilter(filterType);
  }, [bills, filterType]);

  const fetchBills = async () => {
    const res = await axios.get("/api/admin/maintenance/bills", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setBills(res.data);
    setFilteredBills(res.data);
  };

  const fetchResidents = async () => {
    const res = await axios.get("/api/admin/residents", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setResidents(res.data);
  };

  const applyFilter = (type) => {
    setFilterType(type);
    if (type === "PAID") {
      setFilteredBills(bills.filter((b) => b.status === "Paid"));
    } else if (type === "PENDING") {
      setFilteredBills(bills.filter((b) => b.status === "Pending"));
    } else {
      setFilteredBills(bills);
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCreateBill = async (e) => {
    e.preventDefault();
    await axios.post("/api/admin/maintenance/create", formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setShowModal(false);
    fetchBills();
  };

  const markAsPaid = async (id) => {
    await axios.put(
      `/api/admin/maintenance/bills/${id}/pay`,
      {},
      { headers: { Authorization: `Bearer ${token}` } },
    );
    fetchBills();
  };

  const deleteBill = async (id) => {
    if (window.confirm("Delete this bill?")) {
      await axios.delete(`/api/admin/maintenance/bills/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchBills();
    }
  };

  const openEditModal = (bill) => {
    setEditData({
      _id: bill._id,
      amount: bill.amount,
      dueDate: bill.dueDate.substring(0, 10),
      status: bill.status,
    });
    setShowEditModal(true);
  };

  const handleEditChange = (e) =>
    setEditData({ ...editData, [e.target.name]: e.target.value });

  const handleUpdateBill = async (e) => {
    e.preventDefault();
    await axios.put(`/api/admin/maintenance/bills/${editData._id}`, editData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setShowEditModal(false);
    fetchBills();
  };

  const paidCount = bills.filter((b) => b.status === "Paid").length;
  const pendingCount = bills.filter((b) => b.status === "Pending").length;

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

        {/* TITLE */}
        <h4 className="dashboard-title text-center mt-3 mb-4">
          Manage Maintenance Bills
        </h4>

        {/* 
    <div className="container mt-4 pt-5">
      
      <h3 className="fw-bold">
        Welcome Admin, {localStorage.getItem("loginName")}
      </h3>
      <p className="fw-semibold">
        Community: {localStorage.getItem("communityName")} (
        {localStorage.getItem("communityCode")})
      </p>

      <h4 className="text-center fw-bold text-decoration-underline mb-4">
        Manage Maintenance Bills
      </h4> */}

        {/* ===== DASHBOARD CARDS ===== */}
        {/* <div className="row g-3 mb-5">
          <div className="col-md-3">
            <div className="card shadow-sm rounded-4 h-100 text-center">
              <div className="card-body">
                <h6 className="fw-bold">Add Bills</h6>
                <Button
                  className="btn-dark w-100 mt-3"
                  onClick={() => setShowModal(true)}
                >
                  + Add Bill
                </Button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="card shadow-sm rounded-4 h-100 text-center"
              role="button"
              onClick={() => applyFilter("ALL")}
            >
              <div className="card-body">
                <h6 className="fw-bold">Total Bills</h6>
                <h2>{bills.length}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="card shadow-sm rounded-4 h-100 text-center"
              role="button"
              onClick={() => applyFilter("PAID")}
            >
              <div className="card-body">
                <h6 className="fw-bold text-success">Paid Bills</h6>
                <h2 className="text-success">{paidCount}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="card shadow-sm rounded-4 h-100 text-center"
              role="button"
              onClick={() => applyFilter("PENDING")}
            >
              <div className="card-body">
                <h6 className="fw-bold text-danger">Pending Bills</h6>
                <h2 className="text-danger">{pendingCount}</h2>
              </div>
            </div>
          </div>
        </div> */}

        <div className="row g-3 mb-5">
          {/* ADD BILL */}
          <div className="col-md-3">
            <div
              className="card shadow-sm rounded-4 h-100 text-center"
              style={{
                background: "linear-gradient(135deg,#84fab0,#8fd3f4)",
                border: "none",
              }}
            >
              <div className="card-body">
                <h6 className="fw-bold text-dark">Add Bills</h6>

                <Button
                  className="mt-3 fw-semibold"
                  style={{
                    background: "#ffffff",
                    color: "#333",
                    padding: "6px 16px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    border: "2px solid white",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  }}
                  onClick={() => setShowModal(true)}
                >
                  + Add Bill
                </Button>
              </div>
            </div>
          </div>

          {/* TOTAL BILLS */}
          <div className="col-md-3">
            <div
              className="card shadow-sm rounded-4 h-100 text-center"
              role="button"
              onClick={() => applyFilter("ALL")}
              style={{
                background: "linear-gradient(135deg,#fbc2eb,#a6c1ee)",
                border: "none",
                cursor: "pointer",
              }}
            >
              <div className="card-body">
                <h6 className="fw-bold text-dark">Total Bills</h6>
                <h2 className="text-dark">{bills.length}</h2>
              </div>
            </div>
          </div>

          {/* PAID BILLS */}
          <div className="col-md-3">
            <div
              className="card shadow-sm rounded-4 h-100 text-center"
              role="button"
              onClick={() => applyFilter("PAID")}
              style={{
                background: "linear-gradient(135deg,#d4fc79,#96e6a1)",
                border: "none",
                cursor: "pointer",
              }}
            >
              <div className="card-body">
                <h6 className="fw-bold text-dark">Paid Bills</h6>
                <h2 className="text-dark">{paidCount}</h2>
              </div>
            </div>
          </div>

          {/* PENDING BILLS */}
          <div className="col-md-3">
            <div
              className="card shadow-sm rounded-4 h-100 text-center"
              role="button"
              onClick={() => applyFilter("PENDING")}
              style={{
                background: "linear-gradient(135deg,#f6d365,#fda085)",
                border: "none",
                cursor: "pointer",
              }}
            >
              <div className="card-body">
                <h6 className="fw-bold text-dark">Pending Bills</h6>
                <h2 className="text-dark">{pendingCount}</h2>
              </div>
            </div>
          </div>
        </div>

        {/* ===== TABLE ===== */}
        <div className="table-responsive">
          <table className="table table-bordered table-striped align-middle">
            <thead className="table-light">
              <tr>
                <th>Flat</th>
                <th>Resident</th>
                <th>Month</th>
                <th>Year</th>
                <th>Amount</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Paid On</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBills.map((bill) => (
                <tr key={bill._id}>
                  <td>{bill.flatNumber}</td>
                  <td>
                    {bill.residentId?.firstName} {bill.residentId?.lastName}
                  </td>
                  <td>{bill.month}</td>
                  <td>{bill.year}</td>
                  <td>₹{bill.amount}</td>
                  <td>{new Date(bill.dueDate).toLocaleDateString()}</td>
                  <td>
                    <span
                      className={`badge ${
                        bill.status === "Paid" ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {bill.status}
                    </span>
                  </td>
                  <td>
                    {bill.paidAt
                      ? new Date(bill.paidAt).toLocaleDateString()
                      : "--"}
                  </td>
                  <td>
                    {bill.status === "Pending" && (
                      <Button
                        className=" btn btn-sm me-2"
                        variant="outline-success"
                        onClick={() => markAsPaid(bill._id)}
                      >
                        Mark Paid
                      </Button>
                    )}
                    <Button
                      className="btn btn-sm me-2"
                      variant="outline-dark"
                      onClick={() => openEditModal(bill)}
                    >
                      Edit
                    </Button>
                    <Button
                      className="btn btn-sm  me-2"
                      variant="outline-danger"
                      onClick={() => deleteBill(bill._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ===== CREATE BILL MODAL ===== */}
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Create Maintenance Bill</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleCreateBill} className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Resident</label>
                <select
                  name="residentId"
                  className="form-select"
                  value={formData.residentId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Resident</option>
                  {residents.map((res) => (
                    <option key={res._id} value={res._id}>
                      {res.firstName} {res.lastName} ({res.flatNumber})
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Month</label>
                <input
                  type="text"
                  name="month"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Year</label>
                <input
                  type="number"
                  name="year"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Amount</label>
                <input
                  type="number"
                  name="amount"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Due Date</label>
                <input
                  type="date"
                  name="dueDate"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <Button type="submit">Save</Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>

        {/* ===== EDIT MODAL ===== */}
        <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Bill</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {editData && (
              <form onSubmit={handleUpdateBill} className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Amount</label>
                  <input
                    type="number"
                    name="amount"
                    className="form-control"
                    value={editData.amount}
                    onChange={handleEditChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    className="form-control"
                    value={editData.dueDate}
                    onChange={handleEditChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Status</label>
                  <select
                    name="status"
                    className="form-select"
                    value={editData.status}
                    onChange={handleEditChange}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Paid">Paid</option>
                  </select>
                </div>
                <div className="col-12">
                  <Button type="submit">Update</Button>
                </div>
              </form>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default ManageBills;
