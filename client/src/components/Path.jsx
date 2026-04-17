// import { Link } from "react-router-dom";

// function Path() {
//   return (
//     <>
//       <div className="container-fluid vh-100 bg-dark position-relative overflow-hidden">
//         {/* STAR BACKGROUND */}
//         <div className="stars layer1"></div>
//         <div className="stars layer2"></div>
//         <div className="stars layer3"></div>

//         {/* CONTENT */}
//         <div className="row h-100 justify-content-center align-items-center text-center position-relative">
//           <div
//             className="col-11 col-sm-8 col-md-6"
//             style={{ marginTop: "-80px" }}
//           >
//             <h1 className="text-white fw-bold mb-2">Welcome</h1>
//             <p className="text-secondary mb-5">Choose Your Role</p>

//             <div className="d-flex justify-content-center gap-4 flex-wrap">
//               <Link to="/verify-email" className="text-decoration-none">
//                 <div className="btn btn-lg px-5 py-5 white-btn scale-hover">
//                   👨‍💼 Admin
//                 </div>
//               </Link>

//               <Link to="/resident-login" className="text-decoration-none">
//                 <div className="btn btn-lg px-5 py-5 white-btn scale-hover">
//                   👤 User
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CSS */}
//       <style>
//         {`
//         /* STAR ANIMATION (INFINITE) */
//         .stars {
//           position: absolute;
//           inset: 0;
//           background-repeat: repeat;
//           animation: starScroll linear infinite;
//         }

//         @keyframes starScroll {
//           from { background-position: 0 0; }
//           to { background-position: 0 -3000px; }
//         }

//         .layer1 {
//           background-image:
//             radial-gradient(2px 2px at 10% 20%, white, transparent),
//             radial-gradient(2px 2px at 30% 80%, white, transparent),
//             radial-gradient(2px 2px at 50% 40%, white, transparent),
//             radial-gradient(2px 2px at 70% 60%, white, transparent),
//             radial-gradient(2px 2px at 90% 10%, white, transparent);
//           background-size: 180px 180px;
//           animation-duration: 25s;
//           opacity: 0.9;
//         }

//         .layer2 {
//           background-image:
//             radial-gradient(3px 3px at 20% 30%, white, transparent),
//             radial-gradient(3px 3px at 60% 70%, white, transparent),
//             radial-gradient(3px 3px at 80% 50%, white, transparent);
//           background-size: 280px 280px;
//           animation-duration: 45s;
//           opacity: 0.7;
//         }

//         .layer3 {
//           background-image:
//             radial-gradient(4px 4px at 40% 20%, white, transparent),
//             radial-gradient(4px 4px at 70% 80%, white, transparent);
//           background-size: 450px 450px;
//           animation-duration: 70s;
//           opacity: 0.6;
//         }

//         /* WHITE CARD */
//         .white-btn {
//           background: #ffffff !important;
//           color: #000000 !important;
//           min-width: 320px;
//           min-height: 120px;
//           border-radius: 18px;
//           font-weight: 600;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 20px;
//           transition: transform 0.25s ease;  /* smooth */
//         }

//         /* SCALE DOWN ON HOVER */
//         .scale-hover:hover {
//           transform: scale(0.92);   /* chhoti ho jaaye */
//           box-shadow: inset 0 0 25px rgba(0,0,0,0.35);
//         }

//         /* CLICK FIX */
//         .white-btn:active,
//         .white-btn:focus {
//           background: #ffffff !important;
//           color: #000000 !important;
//           outline: none !important;
//         }
//         `}
//       </style>
//     </>
//   );
// }

// export default Path;

// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Path() {
//   return (
//     <div className="main-bg d-flex justify-content-center align-items-center">
//       {/* SCATTERED BACKGROUND CIRCLES */}
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

//       {/* CENTER CARD */}
//       <div className="mobile-card shadow-lg">
//         <h3 className="fw-bold text-center mb-4 heading-text">
//           Choose Your Role?
//         </h3>

//         <Link to="/verify-email" className="text-decoration-none">
//           <div className="option-card blue mb-4">
//             <div className="row align-items-center">
//               <div className="col-5 text-center">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//                   alt="admin"
//                   className="img-fluid option-img"
//                 />
//               </div>
//               <div className="col-7">
//                 <h6 className="fw-bold mb-1 text-primary">Admin</h6>
//                 <small>Manage system & users</small>
//               </div>
//             </div>
//           </div>
//         </Link>

//         <Link to="/resident-login" className="text-decoration-none">
//           <div className="option-card yellow">
//             <div className="row align-items-center">
//               <div className="col-5 text-center">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
//                   alt="user"
//                   className="img-fluid option-img"
//                 />
//               </div>
//               <div className="col-7">
//                 <h6 className="fw-bold mb-1 text-warning">User</h6>
//                 <small>Raise & track complaints</small>
//               </div>
//             </div>
//           </div>
//         </Link>
//       </div>

//       <style>{`

//         .main-bg {
//           height: 100vh;
//           background: #f4f4f4;
//           position: relative;
//           overflow: hidden;
//         }

//         .circle {
//           position: absolute;
//           border-radius: 50%;
//           z-index: 0;
//         }

//         /* BIG BLUE */
//         .c1 { width: 400px; height: 400px; background:#5c7cfa; top:-120px; left:-120px; }

//         /* MEDIUM BLUE */
//         .c2 { width: 220px; height: 220px; background:#4e73df; top:200px; left:120px; }

//         /* SMALL BLUE OUTLINE */
//         .c3 { width: 80px; height: 80px; border:3px solid #4e73df; top:420px; left:60px; }

//         /* BIG YELLOW */
//         .c4 { width: 350px; height: 350px; background:#fbb034; bottom:-140px; left:0px; }

//         /* SMALL YELLOW */
//         .c5 { width: 90px; height: 90px; border:3px solid #fbb034; bottom:180px; left:220px; }

//         /* BIG GREEN */
//         .c6 { width: 250px; height: 250px; background:#7ed957; top:80px; right:-80px; }

//         /* MEDIUM GREEN */
//         .c7 { width: 160px; height: 160px; background:#a0e66e; top:320px; right:120px; }

//         /* SMALL GREEN */
//         .c8 { width: 100px; height: 100px; background:#c9f7a1; top:150px; right:220px; }

//         /* EXTRA SMALL OUTLINE GREEN */
//         .c9 { width: 70px; height: 70px; border:3px solid #7ed957; bottom:120px; right:60px; }

//         /* EXTRA MID BLUE CENTER AREA */
//         .c10 { width: 140px; height: 140px; background:#4e73df; top:60px; left:45%; opacity:0.2; }

//         .mobile-card {
//           width: 380px;
//           background: white;
//           border-radius: 30px;
//           padding: 40px 25px;
//           position: relative;
//           z-index: 2;
//         }

//         .heading-text {
//           font-size: 28px;
//           color: #444;
//         }

//         .option-card {
//           padding: 20px;
//           border-radius: 22px;
//           border: 3px solid;
//           transition: 0.3s ease;
//           cursor: pointer;
//         }

//         .option-card:hover {
//           transform: scale(0.96);
//         }

//         .option-img {
//           max-height: 85px;
//         }

//         .blue {
//           background: #e7efff;
//           border-color: #4e73df;
//         }

//         .yellow {
//           background: #fff4d6;
//           border-color: #fbb034;
//         }

//         @media (max-width: 768px) {
//           .mobile-card { width: 92%; }
//         }

//       `}</style>
//     </div>
//   );
// }

// export default Path;
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Path() {
  return (
    <div className="main-bg d-flex justify-content-center align-items-center flex-column">
      {/* BACKGROUND CIRCLES (UNCHANGED) */}
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

      {/* MAIN CONTENT */}
      <div
        className="container text-center position-relative"
        style={{ zIndex: 2 }}
      >
        {/* TOP HEADING */}
        <h1 className="fw-bold mb-2 title-main">ConnectNest</h1>
        <p className="mb-4 description">
          A smart community management platform for admins and residents to
          manage, track and resolve issues efficiently.
        </p>

        {/* ROLE TITLE */}
        <h2 className="fw-bold mb-2">Select Your Role</h2>
        <p className="text-bold mb-5">
          Choose your role to continue based on your access level
        </p>

        {/* CARDS */}
        <div className="row justify-content-center g-4">
          {/* ADMIN CARD */}
          <div className="col-md-5">
            <div className="role-card">
              <div className="icon">👨‍💼</div>
              <h4 className="fw-bold mt-2">Admin Login</h4>
              <p>
                For <b>society managers, admins</b> and authorized personnel.
                Manage users, approvals and system operations.
              </p>

              <Link to="/verify-email">
                <button className="btn role-btn mt-3">Go to Admin</button>
              </Link>
            </div>
          </div>

          {/* USER CARD */}
          <div className="col-md-5">
            <div className="role-card">
              <div className="icon">👤</div>
              <h4 className="fw-bold mt-2">Resident / User Login</h4>
              <p>
                For <b>residents and users</b>. Raise complaints, access
                services and track requests.
              </p>

              <Link to="/resident-login">
                <button className="btn role-btn mt-3">Go to User</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`

        .title-main {
  font-size: 60px;
  font-weight: 800;
  background: linear-gradient(45deg, #345bcf, #1cc88a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
        .description {
  max-width: 700px;
  margin: auto;
  font-size: 18px;   /* 👈 paragraph bhi bada */
  color: black;
  line-height: 1.6;
}

        .role-card {
          background: white;
          border-radius: 20px;
          padding: 30px 25px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          transition: 0.3s ease;
          height: 100%;
        }

        .role-card:hover {
          transform: translateY(-5px);
        }

        .icon {
          font-size: 40px;
        }

        .role-btn {
          background: #2c3e50;
          color: white;
          border-radius: 30px;
          padding: 10px 25px;
          border: none;
          width: 100%;
        }

        .role-btn:hover {
          background: #1a252f;
        }
@media (max-width: 768px) {
  .title-main {
    font-size: 36px;
  }

  .description {
    font-size: 16px;
  }
}
        }

      `}</style>
    </div>
  );
}

export default Path;

