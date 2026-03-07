// import { useContext } from "react";
// import { Contextapi } from "../contextapi/Contextapi";

// function Footer() {
//   const { token, role } = useContext(Contextapi);

//   if (!token) return null;

//   return (
//     <footer className="footer-glass mt-5">
//       <div className="container py-4">
//         <div className="row align-items-center">
//           {/* LEFT */}
//           <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
//             <h6 className="fw-bold mb-1">CONNECTOPIA</h6>
//             <small className="">Smart Community Management System</small>
//           </div>

//           {/* RIGHT */}
//           <div className="col-md-6 text-center text-md-end">
//             <small>
//               {role === "admin"
//                 ? "Admin Portal © 2025"
//                 : "Resident Portal © 2025"}
//             </small>
//           </div>
//         </div>

//         <hr className="footer-line my-3" />

//         <div className="text-center">
//           <small>Designed & Developed with ❤️ for better communities</small>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import { useContext } from "react";
import { Contextapi } from "../contextapi/Contextapi";

function Footer() {
  const { token, role } = useContext(Contextapi);

  if (!token) return null;

  return (
    <>
      <footer className="modern-footer">
        <div className="container py-4">
          <div className="row align-items-center">
            {/* LEFT */}
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <div className="footer-brand">CONNECTOPIA</div>
              <small className="footer-tag">
                Smart Community Management System
              </small>
            </div>

            {/* RIGHT */}
            <div className="col-md-6 text-center text-md-end">
              <small className="footer-role">
                {role === "admin"
                  ? "Admin Portal © 2025"
                  : "Resident Portal © 2025"}
              </small>
            </div>
          </div>

          <hr className="footer-divider my-3" />

          <div className="text-center footer-bottom">
            <h6>Designed & Developed with ❤️ for better communities</h6>
          </div>
        </div>
      </footer>

      <style>{`

        .modern-footer{
          background: linear-gradient(135deg,#21385a,#111827);
          color:#fff;
          border-top:1px solid #222;
        }

        .footer-brand{
          font-size:20px;
          font-weight:800;
          letter-spacing:1px;
        }

        .footer-tag{
          color:#cbd5e1;
        }

        .footer-role{
          color:#cbd5e1;
          font-weight:500;
        }

        .footer-divider{
          border-color:#fff;
        }

        .footer-bottom{
          color:#9ca3af;
          font-size:14px;
        }

        /* MOBILE */
        @media(max-width:768px){

          .footer-brand{
            font-size:16px;
          }

          .footer-bottom{
            font-size:13px;
          }

        }

      `}</style>
    </>
  );
}

export default Footer;
