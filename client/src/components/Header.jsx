// import { useNavigate, useLocation } from "react-router-dom";
// import { useContext } from "react";
// import { Contextapi } from "../contextapi/Contextapi";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Header() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { token, role, clearAuthData } = useContext(Contextapi);

//   const handleLogout = () => {
//     clearAuthData();
//     navigate("/");
//   };

//   if (!token) return null;

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark header-main fixed-top">
//         <div className="container-fluid px-3 ">
//           {/* BRAND */}
//           <div className="navbar-brand brand-zoom text-center">
//             <div className="brand-main">CONNECTOPIA</div>
//             <div className="brand-sub">
//               {role === "admin" ? "Admin" : "Resident"}
//             </div>
//           </div>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* CENTER MENU */}
//           <div
//             className="collapse navbar-collapse justify-content-center"
//             id="navbarNav"
//           >
//             <ul className="navbar-nav gap-lg-4 gap-2 align-items-center mt-2 mt-lg-0">
//               {role === "admin" && (
//                 <>
//                   <NavItem
//                     text="Dashboard"
//                     onClick={() => navigate("/admin/dashboard")}
//                     active={location.pathname === "/admin/dashboard"}
//                   />
//                   <NavItem
//                     text="Residents"
//                     onClick={() => navigate("/admin/manage-residents")}
//                     active={location.pathname === "/admin/manage-residents"}
//                   />
//                   <NavItem
//                     text="Announcements"
//                     onClick={() => navigate("/admin/manage-announcements")}
//                     active={location.pathname === "/admin/manage-announcements"}
//                   />
//                   <NavItem
//                     text="Bills"
//                     onClick={() => navigate("/admin/manage-bills")}
//                     active={location.pathname === "/admin/manage-bills"}
//                   />
//                   <NavItem
//                     text="Complaints"
//                     onClick={() => navigate("/admin/complaints")}
//                     active={location.pathname === "/admin/complaints"}
//                   />
//                 </>
//               )}

//               {role === "resident" && (
//                 <>
//                   <NavItem
//                     text="Dashboard"
//                     onClick={() => navigate("/resident/dashboard")}
//                     active={location.pathname === "/resident/dashboard"}
//                   />
//                   <NavItem
//                     text="My Bills"
//                     onClick={() => navigate("/resident/bills")}
//                     active={location.pathname === "/resident/bills"}
//                   />
//                   <NavItem
//                     text="Profile"
//                     onClick={() => navigate("/resident/profile")}
//                     active={location.pathname === "/resident/profile"}
//                   />
//                   <NavItem
//                     text="Complaints"
//                     onClick={() => navigate("/resident/complaints")}
//                     active={location.pathname === "/resident/complaints"}
//                   />
//                 </>
//               )}

//               {/* LOGOUT INSIDE TOGGLE (MOBILE) */}
//               <li className="nav-item d-lg-none">
//                 <button className="logout-btn-mobile" onClick={handleLogout}>
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </div>

//           {/* LOGOUT DESKTOP */}
//           <button
//             className="logout-btn d-none d-lg-block"
//             onClick={handleLogout}
//           >
//             Logout
//           </button>
//         </div>
//       </nav>

//       {/* CSS */}
//       <style>
//         {`
//         /* HEADER */
//         .header-main {
//           background: rgba(10, 10, 10, 0.85);
//           border-bottom: 1px solid #222;
//           z-index: 1000;
//         }

//         /* BRAND */
//         .brand-main {
//           font-size: 20px;
//           font-weight: 800;
//           letter-spacing: 1px;
//           color: #fff;
//         }

//         .brand-sub {
//           font-size: 12px;
//           color: #bbb;
//           margin-top: -4px;
//         }

//         .brand-zoom {
//           transition: transform 0.25s ease;
//         }

//         .brand-zoom:hover {
//           transform: scale(1.12);
//         }

//         /* NAV ITEMS */
//         .nav-item-btn {
//           background: none;
//           border: none;
//           color: #e0e0e0;
//           font-size: 15px;
//           font-weight: 600;
//           padding: 4px 2px; /* mobile spacing reduced */
//           transition: transform 0.25s ease, color 0.25s ease;
//         }

//         .nav-item-btn:hover {
//           transform: scale(1.15);
//           color: #fff;
//         }

//         /* ACTIVE UNDERLINE */
//         .active-link {
//           color: #fff !important;
//           position: relative;
//         }

//         .active-link::after {
//           content: "";
//           position: absolute;
//           left: 0;
//           bottom: -6px;
//           width: 100%;
//           height: 2px;
//           background: #fff;
//           border-radius: 2px;
//         }

//         /* LOGOUT */
//         .logout-btn,
//         .logout-btn-mobile {
//           background: none;
//           border: 1px solid #444;
//           color: #fff;
//           padding: 5px 16px;
//           font-weight: 600;
//           transition: transform 0.25s ease;
//         }

//         .logout-btn:hover,
//         .logout-btn-mobile:hover {
//           transform: scale(1.12);
//           background: none;
//         }
//         `}
//       </style>
//     </>
//   );
// }

// function NavItem({ text, onClick, active }) {
//   return (
//     <li className="nav-item">
//       <button
//         className={`nav-item-btn ${active ? "active-link" : ""}`}
//         onClick={onClick}
//       >
//         {text}
//       </button>
//     </li>
//   );
// }

// export default Header;

// import { useNavigate, useLocation } from "react-router-dom";
// import { useContext } from "react";
// import { Contextapi } from "../contextapi/Contextapi";

// function Header() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { token, role, clearAuthData } = useContext(Contextapi);

//   const handleLogout = () => {
//     clearAuthData();
//     navigate("/");
//   };

//   if (!token) return null;

//   return (
//     <>
//       <nav className="modern-header fixed-top">
//         <div className="header-inner container-fluid">
//           {/* LEFT LOGO */}
//           <div className="logo-section">
//             <div className="brand-main">CONNECTOPIA</div>
//             <div className="brand-sub">
//               {role === "admin" ? "Admin" : "Resident"}
//             </div>
//           </div>

//           {/* CENTER MENU */}
//           <div className="menu-pill">
//             {role === "admin" && (
//               <>
//                 <NavItem
//                   text="Dashboard"
//                   onClick={() => navigate("/admin/dashboard")}
//                   active={location.pathname === "/admin/dashboard"}
//                 />
//                 <NavItem
//                   text="Residents"
//                   onClick={() => navigate("/admin/manage-residents")}
//                   active={location.pathname === "/admin/manage-residents"}
//                 />
//                 <NavItem
//                   text="Announcements"
//                   onClick={() => navigate("/admin/manage-announcements")}
//                   active={location.pathname === "/admin/manage-announcements"}
//                 />
//                 <NavItem
//                   text="Bills"
//                   onClick={() => navigate("/admin/manage-bills")}
//                   active={location.pathname === "/admin/manage-bills"}
//                 />
//               </>
//             )}

//             {role === "resident" && (
//               <>
//                 <NavItem
//                   text="Dashboard"
//                   onClick={() => navigate("/resident/dashboard")}
//                   active={location.pathname === "/resident/dashboard"}
//                 />
//                 <NavItem
//                   text="My Bills"
//                   onClick={() => navigate("/resident/bills")}
//                   active={location.pathname === "/resident/bills"}
//                 />
//                 <NavItem
//                   text="Profile"
//                   onClick={() => navigate("/resident/profile")}
//                   active={location.pathname === "/resident/profile"}
//                 />
//                 <NavItem
//                   text="Complaints"
//                   onClick={() => navigate("/resident/complaints")}
//                   active={location.pathname === "/resident/complaints"}
//                 />
//               </>
//             )}
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="header-actions">
//             <button className="logout-modern" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* CSS INSIDE COMPONENT */}
//       <style>{`

//         .modern-header {
//           background: rgba(15, 15, 20, 0.95);
//           backdrop-filter: blur(8px);
//           padding: 14px 0;
//           z-index: 1000;
//           border-bottom: 1px solid #1f1f25;
//         }

//         .header-inner {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }

//         /* LOGO */
//         .logo-section {
//           line-height: 1;
//         }

//         .brand-main {
//           font-size: 20px;
//           font-weight: 800;
//           color: #ffffff;
//           letter-spacing: 1px;
//         }

//         .brand-sub {
//           font-size: 12px;
//           color: #aaa;
//         }

//         /* CENTER PILL MENU */
//         .menu-pill {
//           background: #1c1c22;
//           padding: 6px;
//           border-radius: 40px;
//           display: flex;
//           gap: 8px;
//           align-items: center;
//         }

//         /* NAV BUTTON */
//         .nav-item-btn {
//           border: none;
//           background: transparent;
//           color: #bbb;
//           padding: 6px 16px;
//           border-radius: 30px;
//           font-weight: 600;
//           transition: all 0.25s ease;
//         }

//         .nav-item-btn:hover {
//           background: #2b2b35;
//           color: #fff;
//         }

//         /* ACTIVE */
//         .active-link {
//           background: #4e73df;
//           color: #fff !important;
//         }

//         /* RIGHT */
//         .header-actions {
//           display: flex;
//           align-items: center;
//         }

//         .logout-modern {
//           background: transparent;
//           border: 1px solid #444;
//           color: #fff;
//           padding: 6px 18px;
//           border-radius: 25px;
//           font-weight: 600;
//           transition: all 0.25s ease;
//         }

//         .logout-modern:hover {
//           background: #4e73df;
//           border-color: #4e73df;
//         }

//         /* RESPONSIVE */
//         @media (max-width: 992px) {
//           .menu-pill {
//             display: none;
//           }
//         }

//       `}</style>
//     </>
//   );
// }

// function NavItem({ text, onClick, active }) {
//   return (
//     <button
//       className={`nav-item-btn ${active ? "active-link" : ""}`}
//       onClick={onClick}
//     >
//       {text}
//     </button>
//   );
// }

// export default Header;

import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { Contextapi } from "../contextapi/Contextapi";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { token, role, clearAuthData } = useContext(Contextapi);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    clearAuthData();
    navigate("/");
  };

  if (!token) return null;

  const NavLinks = () => (
    <>
      {role === "admin" && (
        <>
          <NavItem
            text="Dashboard"
            onClick={() => navigate("/admin/dashboard")}
            active={location.pathname === "/admin/dashboard"}
          />
          <NavItem
            text="Residents"
            onClick={() => navigate("/admin/manage-residents")}
            active={location.pathname === "/admin/manage-residents"}
          />
          <NavItem
            text="Announcements"
            onClick={() => navigate("/admin/manage-announcements")}
            active={location.pathname === "/admin/manage-announcements"}
          />
          <NavItem
            text="Bills"
            onClick={() => navigate("/admin/manage-bills")}
            active={location.pathname === "/admin/manage-bills"}
          />
        </>
      )}

      {role === "resident" && (
        <>
          <NavItem
            text="Dashboard"
            onClick={() => navigate("/resident/dashboard")}
            active={location.pathname === "/resident/dashboard"}
          />
          <NavItem
            text="My Bills"
            onClick={() => navigate("/resident/bills")}
            active={location.pathname === "/resident/bills"}
          />
          <NavItem
            text="Profile"
            onClick={() => navigate("/resident/profile")}
            active={location.pathname === "/resident/profile"}
          />
          <NavItem
            text="Complaints"
            onClick={() => navigate("/resident/complaints")}
            active={location.pathname === "/resident/complaints"}
          />
        </>
      )}
    </>
  );

  return (
    <>
      <nav className="modern-header fixed-top">
        <div className="header-inner container-fluid">
          {/* Logo */}
          <div className="logo-section">
            <div className="brand-main">CONNECTOPIA</div>
            <div className="brand-sub">
              {role === "admin" ? "Admin" : "Resident"}
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="menu-pill d-none d-lg-flex">
            <NavLinks />
          </div>

          {/* Right Side */}
          <div className="header-actions">
            <button
              className="logout-modern d-none d-lg-block"
              onClick={handleLogout}
            >
              Logout
            </button>

            {/* Hamburger */}
            <div
              className="hamburger d-lg-none"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              ☰
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="mobile-menu">
            <NavLinks />
            <button className="logout-mobile" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </nav>

      <style>{`

        .modern-header {
          background: linear-gradient(135deg, #21385a, #111827);
          padding: 14px 0;
          z-index: 1000;
          border-bottom: 1px solid #222;
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-main {
          font-size: 20px;
          font-weight: 800;
          color: #fff;
        }

        .brand-sub {
          font-size: 12px;
          color: #ccc;
        }

        .menu-pill {
          background: rgba(255,255,255,0.08);
          padding: 6px;
          border-radius: 40px;
          gap: 8px;
        }

        .nav-item-btn {
          border: none;
          background: transparent;
          color: #ccc;
          padding: 6px 16px;
          border-radius: 30px;
          font-weight: 600;
          transition: 0.25s;
        }

        .nav-item-btn:hover {
          background: rgba(255,255,255,0.1);
          color: #fff;
        }

        .active-link {
          background: #4e73df;
          color: #fff !important;
        }

        .logout-modern {
          background: transparent;
          border: 1px solid #444;
          color: #fff;
          padding: 6px 18px;
          border-radius: 25px;
          font-weight: 600;
        }

        .logout-modern:hover {
          background: #4e73df;
          border-color: #4e73df;
        }

        .hamburger {
          font-size: 22px;
          color: #fff;
          cursor: pointer;
        }

        .mobile-menu {
          background: #111827;
          padding: 15px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .logout-mobile {
          background: #4e73df;
          border: none;
          color: white;
          padding: 8px;
          border-radius: 8px;
        }

        

      `}</style>
    </>
  );
}

function NavItem({ text, onClick, active }) {
  return (
    <button
      className={`nav-item-btn \${active ? "active-link" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Header;
