// import { useEffect, useState } from "react";
// import axios from "../../axiosInstance";
// import { Modal, Button, Badge } from "react-bootstrap";

// function ResidentBills() {
//   const [bills, setBills] = useState([]);
//   const [selectedBill, setSelectedBill] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [community, setCommunity] = useState("");
//   const [name, setName] = useState("");

//   const token = localStorage.getItem("token");
//   const residentName = localStorage.getItem("loginName");
//   const flatNumber = localStorage.getItem("flatNumber") || "A-101";
//   const communityName = localStorage.getItem("communityName");

//   useEffect(() => {
//     setCommunity(localStorage.getItem("communityName"));
//     setName(localStorage.getItem("loginName"));
//     fetchBills();
//   }, []);

//   const fetchBills = async () => {
//     try {
//       const res = await axios.get("/api/resident/maintenance/bills", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setBills(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // const handlePayNow = async (id) => {
//   //   try {
//   //     await axios.put(
//   //       `/api/resident/maintenance/bills/${id}/pay`,
//   //       {},
//   //       { headers: { Authorization: `Bearer ${token}` } },
//   //     );
//   //     alert("Bill Paid Successfully");
//   //     setShowModal(false);
//   //     fetchBills();
//   //   } catch {
//   //     alert("Payment Failed");
//   //   }
//   // };

//   const openModal = (bill) => {
//     setSelectedBill(bill);
//     setShowModal(true);
//   };

//   const handlePayNow = async (billId) => {
//     const { data } = await axios.post(
//       `/api/payment/create-order/${billId}`,
//       {},
//       { headers: { Authorization: `Bearer ${token}` } },
//     );

//     const options = {
//       key: data.key,
//       amount: data.amount * 100,
//       currency: "INR",
//       name: "MyColonyConnect",
//       description: "Maintenance Payment",
//       order_id: data.orderId,
//       handler: async function (response) {
//         await axios.post(
//           "/api/payment/verify-payment",
//           {
//             ...response,
//             billId,
//           },
//           { headers: { Authorization: `Bearer ${token}` } },
//         );

//         alert("✅ Payment Successful");
//         fetchBills();
//         setShowModal(false);
//       },
//       theme: { color: "#3399cc" },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   const handlePrint = () => {
//     const printContent = document.getElementById("bill-print-content");
//     const printWindow = window.open("", "", "width=900,height=650");

//     printWindow.document.write(`
//     <html>
//       <head>
//         <title>Maintenance Bill</title>
//         <style>
//           body {
//             font-family: Arial, sans-serif;
//             margin: 0;
//             padding: 20mm;
//           }
//           .bill {
//             width: 210mm;
//             min-height: 297mm;
//           }
//           h2,h3 {
//             text-align: center;
//             margin: 4px 0;
//           }
//           table {
//             width: 100%;
//             border-collapse: collapse;
//             margin-top: 20px;
//           }
//           table, th, td {
//             border: 1px solid #000;
//           }
//           th, td {
//             padding: 10px;
//             text-align: left;
//           }
//           .row {
//             display: flex;
//             justify-content: space-between;
//             margin-top: 10px;
//           }
//           .footer {
//             margin-top: 40px;
//             text-align: center;
//             font-size: 14px;
//           }
//         </style>
//       </head>
//       <body>
//         ${printContent.innerHTML}
//       </body>
//     </html>
//   `);

//     printWindow.document.close();
//     printWindow.focus();
//     printWindow.print();
//     printWindow.close();
//   };

//   return (
//     <div className="container mt-4 pt-4">
//       <h3 className="fw-bold text-center mb-4 pt-4">
//         <u>Maintenance Bills</u>
//       </h3>

//       {/* ===== HEADER CARD ===== */}
//       <div className="card shadow-sm mb-2">
//         <div className="card-body d-flex justify-content-between align-items-center">
//           <div>
//             <h4 className="fw-bold mb-1">Welcome, {name} 👋</h4>
//             <p className="text-muted mb-0">
//               Community: <b>{community}</b>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* <h3 className="fw-bold mb-4 text-center">
//         <u>Maintenance Bills Record</u>
//       </h3> */}

//       {/* ================= BILL LIST ================= */}
//       {bills.length === 0 ? (
//         <div className="alert alert-danger text-center fw-bold">
//           No bills generated yet
//         </div>
//       ) : (
//         <div className="d-flex flex-column gap-3 pt-2">
//           {bills.map((bill) => (
//             <div
//               key={bill._id}
//               className="card shadow-sm p-3"
//               style={{ borderLeft: "6px solid #212529" }}
//             >
//               <div className="row align-items-center">
//                 {/* LEFT : BILL INFO */}
//                 <div className="col-md-9">
//                   <h5 className="fw-bold mb-2">
//                     Maintenance Bill – {bill.month} {bill.year}
//                   </h5>

//                   <p className="mb-1">
//                     <strong>Amount:</strong> ₹{bill.amount}
//                   </p>

//                   <p className="mb-1">
//                     <strong>Status:</strong>{" "}
//                     <Badge bg={bill.status === "Paid" ? "success" : "danger"}>
//                       {bill.status}
//                     </Badge>
//                   </p>

//                   {bill.paidAt && (
//                     <p className="text-muted mb-0">
//                       Paid On: {new Date(bill.paidAt).toLocaleDateString()}
//                     </p>
//                   )}
//                 </div>

//                 {/* RIGHT : ACTION */}
//                 <div className="col-md-3 text-md-end text-start mt-3 mt-md-0">
//                   <Button
//                     variant="outline-dark"
//                     //className="w-100"
//                     onClick={() => {
//                       setSelectedBill(bill);
//                       setShowModal(true);
//                     }}
//                   >
//                     View Bill
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* ================= BILL MODAL ================= */}
//       <Modal
//         show={showModal}
//         onHide={() => setShowModal(false)}
//         size="lg"
//         centered
//       >
//         <Modal.Body>
//           {selectedBill && (
//             <div id="bill-print-content" className="bill">
//               {/* HEADER */}
//               <div className="bill-header">
//                 <h2>CONNECTOPIA</h2>
//                 <p>Smart Community Maintenance Bill</p>
//                 <p className="fw-bold">{communityName}</p>
//               </div>

//               {/* DETAILS */}
//               <div className="bill-info">
//                 <div>
//                   <p>
//                     <b>Resident Name:</b> {residentName}
//                   </p>
//                   <p>
//                     <b>Flat No:</b> {flatNumber}
//                   </p>
//                 </div>
//                 <div>
//                   <p>
//                     <b>Bill Month:</b> {selectedBill.month} {selectedBill.year}
//                   </p>
//                   <p>
//                     <b>Status:</b>{" "}
//                     <span
//                       className={
//                         selectedBill.status === "Paid"
//                           ? "text-success"
//                           : "text-danger"
//                       }
//                     >
//                       {selectedBill.status}
//                     </span>
//                   </p>
//                 </div>
//               </div>

//               {/* BILL TABLE */}
//               <table className="bill-table">
//                 <thead>
//                   <tr>
//                     <th>Description</th>
//                     <th>Amount</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>Monthly Maintenance Charges</td>
//                     <td>₹{selectedBill.amount}</td>
//                   </tr>
//                 </tbody>
//                 <tfoot>
//                   <tr>
//                     <th>Total Payable</th>
//                     <th>₹{selectedBill.amount}</th>
//                   </tr>
//                 </tfoot>
//               </table>

//               {/* FOOTER */}
//               <div className="bill-footer">
//                 {selectedBill.paidAt && (
//                   <p>
//                     Paid On:{" "}
//                     {new Date(selectedBill.paidAt).toLocaleDateString()}
//                   </p>
//                 )}
//                 <p>This is a system generated bill.</p>
//                 <p className="fw-bold">Powered by CONNECTOPIA</p>
//               </div>
//             </div>
//           )}
//         </Modal.Body>

//         <Modal.Footer className="d-print-none">
//           {selectedBill?.status === "Pending" && (
//             <Button
//               variant="success"
//               onClick={() => handlePayNow(selectedBill._id)}
//             >
//               Pay Now
//             </Button>
//           )}
//           <Button variant="secondary" onClick={handlePrint}>
//             Print / Save PDF
//           </Button>
//           <Button variant="outline-dark" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* ================= PRINT CSS ================= */}
//       <style>
//         {`
//           .bill-print-area {
//             width: 210mm;
//             min-height: 297mm;
//             padding: 25px;
//             background: white;
//             color: black;
//             font-family: Arial, sans-serif;
//           }

//           .bill-header {
//             text-align: center;
//             border-bottom: 2px solid #000;
//             margin-bottom: 20px;
//           }

//           .bill-info {
//             display: flex;
//             justify-content: space-between;
//             margin-bottom: 20px;
//           }

//           .bill-table {
//             width: 100%;
//             border-collapse: collapse;
//             margin-bottom: 25px;
//           }

//           .bill-table th,
//           .bill-table td {
//             border: 1px solid #000;
//             padding: 10px;
//             text-align: left;
//           }

//           .bill-footer {
//             text-align: center;
//             margin-top: 40px;
//           }

//           @media print {
//             body * {
//               visibility: hidden;
//             }
//             .bill-print-area,
//             .bill-print-area * {
//               visibility: visible;
//             }
//             .bill-print-area {
//               position: absolute;
//               left: 0;
//               top: 0;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default ResidentBills;

import { useEffect, useState } from "react";
import axios from "../../axiosInstance";
import { Modal, Button, Badge } from "react-bootstrap";

function ResidentBills() {
  const [bills, setBills] = useState([]);
  const [selectedBill, setSelectedBill] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [community, setCommunity] = useState("");
  const [name, setName] = useState("");

  const token = localStorage.getItem("token");
  const residentName = localStorage.getItem("loginName");
  const flatNumber = localStorage.getItem("flatNumber") || "A-101";
  const communityName = localStorage.getItem("communityName");

  useEffect(() => {
    setCommunity(localStorage.getItem("communityName"));
    setName(localStorage.getItem("loginName"));
    fetchBills();
    window.scrollTo(0, 0);
  }, []);

  const fetchBills = async () => {
    try {
      const res = await axios.get("/api/resident/maintenance/bills", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBills(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handlePayNow = async (billId) => {
    const { data } = await axios.post(
      `/api/payment/create-order/${billId}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } },
    );

    const options = {
      key: data.key,
      amount: data.amount * 100,
      currency: "INR",
      name: "Connectopia",
      description: "Maintenance Payment",
      order_id: data.orderId,
      handler: async function (response) {
        await axios.post(
          "/api/payment/verify-payment",
          { ...response, billId },
          { headers: { Authorization: `Bearer ${token}` } },
        );

        alert("✅ Payment Successful");
        fetchBills();
        setShowModal(false);
      },
      theme: { color: "#4e73df" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handlePrint = () => {
    const printContent = document.getElementById("bill-print-content");
    const printWindow = window.open("", "", "width=900,height=650");

    printWindow.document.write(`
      <html>
        <head>
          <title>Maintenance Bill</title>
          <style>
            body { font-family: Arial; padding:20mm; }
            table { width:100%; border-collapse: collapse; }
            th,td { border:1px solid #000; padding:10px; }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.print();
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
      <div className="text-center">
        <h3 className="premium-heading">Maintenance Bills</h3>
        <div className="heading-underline"></div>
      </div>
      <div className="container position-relative premium-wrapper">
        <div className="text-center mb-4">
          <h3 className="premium-heading">Maintenance Bills</h3>
          <div className="heading-underline "></div>
        </div>

        <div className="row justify-content-center g-4">
          {/* LEFT CARD */}
          <div className="col-lg-5 col-md-10 d-flex">
            <div className="glass-premium w-100">
              <h5 className="resident-title">👤 Resident Profile</h5>

              <div className="info-row">
                <span>Name</span>
                <span>{name}</span>
              </div>

              <div className="info-row">
                <span>Community</span>
                <span>{community}</span>
              </div>

              <div className="info-row">
                <span>Flat</span>
                <span>{flatNumber}</span>
              </div>

              <div className="info-row">
                <span>Member Since</span>
                <span>2024</span>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="col-lg-5 col-md-10 d-flex">
            {bills.length === 0 ? (
              <div className="glass-premium text-center w-100">
                No bills generated yet
              </div>
            ) : (
              <div className="w-100">
                {bills.map((bill) => (
                  <div key={bill._id} className="glass-premium mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="fw-bold mb-0">
                        {bill.month} {bill.year}
                      </h6>

                      <Badge bg={bill.status === "Paid" ? "success" : "danger"}>
                        {bill.status}
                      </Badge>
                    </div>

                    <hr />

                    <div className="info-row">
                      <span>Resident</span>
                      <span>{name}</span>
                    </div>

                    <div className="info-row">
                      <span>Flat</span>
                      <span>{flatNumber}</span>
                    </div>

                    <div className="info-row total-amount">
                      <span>Total</span>
                      <span>₹{bill.amount}</span>
                    </div>

                    <button
                      className="premium-btn"
                      onClick={() => {
                        setSelectedBill(bill);
                        setShowModal(true);
                      }}
                    >
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* MODAL */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
      >
        <Modal.Body>
          {selectedBill && (
            <div id="bill-print-content">
              <div className="text-center mb-4">
                <h4 className="fw-bold">CONNECTOPIA</h4>
                <p>{communityName}</p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <div>
                  <p>
                    <strong>Name:</strong> {residentName}
                  </p>
                  <p>
                    <strong>Flat:</strong> {flatNumber}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Month:</strong> {selectedBill.month}{" "}
                    {selectedBill.year}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span
                      className={
                        selectedBill.status === "Paid"
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {selectedBill.status}
                    </span>
                  </p>
                </div>
              </div>

              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monthly Maintenance Charges</td>
                    <td>₹{selectedBill.amount}</td>
                  </tr>
                </tbody>
              </table>

              <div className="text-center mt-4">
                <h5>Total: ₹{selectedBill.amount}</h5>
                <p className="small text-muted">System Generated Bill</p>
              </div>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          {selectedBill?.status === "Pending" && (
            <Button
              variant="success"
              onClick={() => handlePayNow(selectedBill._id)}
            >
              Pay Now
            </Button>
          )}
          <Button variant="secondary" onClick={handlePrint}>
            Print
          </Button>
          <Button variant="outline-dark" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Glass Card Styling */}
      <style>{`

.premium-wrapper{
  padding-top:50px;

}

.premium-heading {
  font-weight: 700;
  letter-spacing: 1px;
}

.heading-underline {
  width: 250px;
  height: 6px;
  background: linear-gradient(to right, #4361ee, #3a0ca3);
  margin: 10px auto 0;
  border-radius: 10px;
}

/* CARD */
.glass-premium {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(18px);
  border-radius: 18px;
  padding: 30px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  transition: 0.3s ease;
}

.glass-premium:hover {
  transform: translateY(-5px);
}

/* TITLE */
.resident-title{
  font-weight:700;
  font-size:16px;
  margin-bottom:25px;
  text-align:center;
  letter-spacing:0.5px;
}

/* INFO ROW */
.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  font-size: 14.5px;
}

.total-amount{
  font-weight:600;
  font-size:18px;
  margin-top:10px;
}

/* PREMIUM BUTTON */
.premium-btn{
  width:100%;
  margin-top:20px;
  padding:10px 0;
  border:none;
  border-radius:30px;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color:white;
  font-weight:500;
  transition:0.3s ease;
}

.premium-btn:hover{
  opacity:0.9;
  transform: scale(1.02);
}

`}</style>{" "}
    </div>
  );
}

export default ResidentBills;
