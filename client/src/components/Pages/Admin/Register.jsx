// import axios from "../../axiosInstance";
// import { useState, useEffect } from "react";
// import { Link, useSearchParams, useNavigate } from "react-router-dom";

// function Register() {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const [showSuccessModal, setShowSuccessModal] = useState(false);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     password: "",
//     communityName: "",
//     communityType: "",
//     unit: "",
//     address: "",
//     state: "",
//     city: "",
//     pincode: "",
//   });

//   const [passwordError, setPasswordError] = useState("");
//   const [loading, setLoading] = useState(false);

//   /* ✅ EMAIL URL SE AUTO-FILL */
//   useEffect(() => {
//     const emailFromUrl = searchParams.get("email");
//     if (!emailFromUrl) {
//       alert("Please verify your email first");
//       navigate("/");
//       return;
//     }
//     setFormData((prev) => ({ ...prev, email: emailFromUrl }));
//   }, [searchParams, navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     if (name === "password") {
//       const strongPasswordRegex =
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
//       setPasswordError(
//         strongPasswordRegex.test(value)
//           ? ""
//           : "Password must contain 8+ chars, uppercase, lowercase, number & special char.",
//       );
//     }
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   if (passwordError) return;

//   //   try {
//   //     setLoading(true);
//   //     await axios.post("/api/auth/register", formData);
//   //     alert(
//   //       "Successfully Registered! Your application is pending for approval.",
//   //     );
//   //   } catch (err) {
//   //     alert("Registration failed");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (passwordError) return;

//     try {
//       setLoading(true);
//       await axios.post("/api/auth/register", formData);

//       // ✅ SUCCESS → modal open
//       setShowSuccessModal(true);
//     } catch (err) {
//       // ❌ ERROR → same page
//       alert(err.response?.data?.message || "Registration failed. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="main-bg">
//         {/* CIRCLES */}
//         <div className="circle c1"></div>
//         <div className="circle c2"></div>
//         <div className="circle c3"></div>
//         <div className="circle c4"></div>
//         <div className="circle c5"></div>
//         <div className="circle c6"></div>
//         <div className="circle c7"></div>
//         <div className="circle c8"></div>
//         <div className="circle c9"></div>
//         <div className="circle c10"></div>

//         <div className="row justify-content-center py-5 position-relative">
//           <div className="col-11 col-sm-10 col-md-8 col-lg-6">
//             <div className="register-glass">
//               <h3 className="text-center text-white mb-4 fw-bold">
//                 Register Here
//               </h3>

//               <form onSubmit={handleSubmit}>
//                 <div className="row">
//                   <div className="col-md-6 mb-2">
//                     <label>First Name</label>
//                     <input
//                       className="form-control"
//                       name="firstName"
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="col-md-6 mb-2">
//                     <label>Last Name</label>
//                     <input
//                       className="form-control"
//                       name="lastName"
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <label>Email</label>
//                 <input
//                   className="form-control mb-2"
//                   value={formData.email}
//                   readOnly
//                 />

//                 <label>Mobile</label>
//                 <input
//                   className="form-control mb-2"
//                   name="mobile"
//                   onChange={handleChange}
//                   required
//                 />

//                 <label>Password</label>
//                 <input
//                   type="password"
//                   className={`form-control mb-2 ${passwordError && "is-invalid"}`}
//                   name="password"
//                   onChange={handleChange}
//                   required
//                 />
//                 {passwordError && (
//                   <small className="text-danger">{passwordError}</small>
//                 )}

//                 <hr className="text-white" />

//                 <h5 className="text-white fw-bold">Community Details</h5>

//                 <label>Community Name</label>
//                 <input
//                   className="form-control mb-2"
//                   name="communityName"
//                   onChange={handleChange}
//                   required
//                 />

//                 <label>Community Type</label>
//                 <select
//                   className="form-control mb-2"
//                   name="communityType"
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Type</option>
//                   <option>Apartment</option>
//                   <option>Society</option>
//                   <option>Township</option>
//                   <option>Gated Community</option>
//                 </select>

//                 <label>Unit</label>
//                 <input
//                   className="form-control mb-2"
//                   name="unit"
//                   onChange={handleChange}
//                   required
//                 />

//                 <label>Address</label>
//                 <input
//                   className="form-control mb-2"
//                   name="address"
//                   onChange={handleChange}
//                   required
//                 />

//                 <div className="row">
//                   <div className="col-md-6 mb-2">
//                     <label>State</label>
//                     <select
//                       className="form-control"
//                       name="state"
//                       onChange={handleChange}
//                       required
//                     >
//                       <option value="">Select State</option>
//                       <option>Madhya Pradesh</option>
//                       <option>Rajasthan</option>
//                       <option>Maharashtra</option>
//                       <option>Delhi</option>
//                       <option>Gujarat</option>
//                     </select>
//                   </div>
//                   <div className="col-md-6 mb-2">
//                     <label>City</label>
//                     <input
//                       className="form-control"
//                       name="city"
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <label>PIN Code</label>
//                 <input
//                   className="form-control mb-3"
//                   name="pincode"
//                   onChange={handleChange}
//                   required
//                 />

//                 <button
//                   className="btn btn-light w-100 fw-bold"
//                   disabled={loading}
//                 >
//                   {loading ? "Registering..." : "Sign Up"}
//                 </button>
//               </form>

//               <p className="text-center mt-3">
//                 <Link
//                   to="/admin-login"
//                   className="text-white text-decoration-none"
//                 >
//                   Already have an account?
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {showSuccessModal && (
//         <div className="modal fade show d-block" tabIndex="-1">
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title text-success">
//                   Registration Successful 🎉
//                 </h5>
//               </div>

//               <div className="modal-body">
//                 <p>
//                   Your application has been submitted successfully and is
//                   pending admin approval.
//                 </p>
//               </div>

//               <div className="modal-footer">
//                 <button
//                   className="btn btn-success"
//                   onClick={() => {
//                     setShowSuccessModal(false);
//                     navigate("/admin-login"); // ✅ redirect
//                   }}
//                 >
//                   OK
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* 🔥 CSS */}
//       <style>{`
//         .register-bg {
//           background: #000;
//           min-height: 100vh;
//           overflow-y: auto;   /* ✅ SCROLL FIX */
//           position: relative;
//         }

//         .stars {
//           position: fixed;
//           inset: 0;
//           animation: starScroll linear infinite;
//           z-index: 0;
//         }

//         @keyframes starScroll {
//           from { background-position: 0 0; }
//           to { background-position: 0 -3000px; }
//         }

//         .layer1 {
//           background-image: radial-gradient(2px 2px at 20% 30%, white, transparent);
//           background-size: 180px 180px;
//           animation-duration: 25s;
//         }

//         .layer2 {
//           background-image: radial-gradient(3px 3px at 60% 70%, white, transparent);
//           background-size: 280px 280px;
//           animation-duration: 45s;
//         }

//         .layer3 {
//           background-image: radial-gradient(4px 4px at 80% 90%, white, transparent);
//           background-size: 450px 450px;
//           animation-duration: 70s;
//         }

//         .register-glass {
//           background: rgba(255,255,255,0.12);
//           backdrop-filter: blur(14px);
//           border-radius: 20px;
//           padding: 30px;
//           border: 1px solid rgba(255,255,255,0.25);
//           box-shadow: 0 0 40px rgba(0,0,0,0.6);
//           position: relative;
//           z-index: 2;
//         }

//         .register-glass label {
//           color: white;
//           font-weight: 500;
//         }

//         .register-glass .form-control,
//         .register-glass select {
//           background: rgba(255,255,255,0.9);
//         }
//       `}</style>
//     </>
//   );
// }

// export default Register;

import axios from "../../axiosInstance";
import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

function Register() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    communityName: "",
    communityType: "",
    unit: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
  });

  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  /* ✅ EMAIL URL SE AUTO-FILL */
  useEffect(() => {
    const emailFromUrl = searchParams.get("email");
    if (!emailFromUrl) {
      alert("Please verify your email first");
      navigate("/");
      return;
    }
    setFormData((prev) => ({ ...prev, email: emailFromUrl }));
  }, [searchParams, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      const strongPasswordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
      setPasswordError(
        strongPasswordRegex.test(value)
          ? ""
          : "Password must contain 8+ chars, uppercase, lowercase, number & special char.",
      );
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (passwordError) return;

  //   try {
  //     setLoading(true);
  //     await axios.post("/api/auth/register", formData);
  //     alert(
  //       "Successfully Registered! Your application is pending for approval.",
  //     );
  //   } catch (err) {
  //     alert("Registration failed");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordError) return;

    try {
      setLoading(true);
      await axios.post("/api/auth/register", formData);

      // ✅ SUCCESS → modal open
      setShowSuccessModal(true);
    } catch (err) {
      // ❌ ERROR → same page
      alert(err.response?.data?.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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

        <div className="row justify-content-center py-5 position-relative ">
          <div className="col-11 col-sm-10 col-md-8 col-lg-6 ">
            <div className="register-glass ">
              <h3 className="text-center text-dark mb-4 fw-bold">
                Register Here
              </h3>

              <form onSubmit={handleSubmit}>
                {/* STEP 1 */}
                {step === 1 && (
                  <>
                    <h5 className="text-dark mb-3 fw-bold">
                      Personal Information
                    </h5>

                    <div className="row ">
                      <div className="col-md-6 mb-2">
                        <label>First Name</label>
                        <input
                          className="form-control "
                          name="firstName"
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="col-md-6 mb-2">
                        <label>Last Name</label>
                        <input
                          className="form-control"
                          name="lastName"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <label>Email</label>
                    <input
                      className="form-control mb-2"
                      value={formData.email}
                      readOnly
                    />

                    <label>Mobile</label>
                    <input
                      className="form-control mb-2"
                      name="mobile"
                      onChange={handleChange}
                      required
                    />

                    <label>Password</label>
                    <input
                      type="password"
                      className={`form-control mb-2 ${passwordError && "is-invalid"}`}
                      name="password"
                      onChange={handleChange}
                      required
                    />

                    {passwordError && (
                      <small className="text-danger">{passwordError}</small>
                    )}

                    {/* NEXT BUTTON */}
                    <button
                      type="button"
                      className="btn w-100 mt-3 fw-bold"
                      style={{
                        background: "linear-gradient(135deg,#84fab0,#8fd3f4)",
                        border: "none",
                        color: "#000",
                      }}
                      onClick={() => setStep(2)}
                    >
                      Next →
                    </button>
                  </>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <>
                    <h5 className="text-white mb-3 fw-bold">
                      Community Details
                    </h5>

                    <label>Community Name</label>
                    <input
                      className="form-control mb-2"
                      name="communityName"
                      onChange={handleChange}
                      required
                    />

                    <label>Community Type</label>
                    <select
                      className="form-control mb-2"
                      name="communityType"
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Type</option>
                      <option>Apartment</option>
                      <option>Society</option>
                      <option>Township</option>
                      <option>Gated Community</option>
                    </select>

                    <label>Unit</label>
                    <input
                      className="form-control mb-2"
                      name="unit"
                      onChange={handleChange}
                      required
                    />

                    <label>Address</label>
                    <input
                      className="form-control mb-2"
                      name="address"
                      onChange={handleChange}
                      required
                    />

                    <div className="row">
                      <div className="col-md-6 mb-2">
                        <label>State</label>
                        <select
                          className="form-control"
                          name="state"
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select State</option>
                          <option>Madhya Pradesh</option>
                          <option>Rajasthan</option>
                          <option>Maharashtra</option>
                          <option>Delhi</option>
                          <option>Gujarat</option>
                        </select>
                      </div>

                      <div className="col-md-6 mb-2">
                        <label>City</label>
                        <input
                          className="form-control"
                          name="city"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <label>PIN Code</label>
                    <input
                      className="form-control mb-3"
                      name="pincode"
                      onChange={handleChange}
                      required
                    />

                    {/* BACK + REGISTER */}
                    <div className="d-flex gap-2">
                      <button
                        type="button"
                        className="btn w-50"
                        style={{
                          background: "#6c757d",
                          color: "white",
                        }}
                        onClick={() => setStep(1)}
                      >
                        ← Back
                      </button>

                      <button
                        type="submit"
                        className="btn w-50 fw-bold"
                        style={{
                          background: "linear-gradient(135deg,#f6d365,#fda085)",
                          border: "none",
                          color: "#000",
                        }}
                        disabled={loading}
                      >
                        {loading ? "Registering..." : "Register"}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {showSuccessModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-success">
                  Registration Successful 🎉
                </h5>
              </div>

              <div className="modal-body">
                <p>
                  Your application has been submitted successfully and is
                  pending admin approval.
                </p>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    setShowSuccessModal(false);
                    navigate("/admin-login"); // ✅ redirect
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🔥 CSS */}
      <style>{`
        .register-bg {
          background: #000;
          min-height: 100vh;
          overflow-y: auto;   /* ✅ SCROLL FIX */
          position: relative;
        }

        .stars {
          position: fixed;
          inset: 0;
          animation: starScroll linear infinite;
          z-index: 0;
        }

        @keyframes starScroll {
          from { background-position: 0 0; }
          to { background-position: 0 -3000px; }
        }

        .layer1 {
          background-image: radial-gradient(2px 2px at 20% 30%, white, transparent);
          background-size: 180px 180px;
          animation-duration: 25s;
        }

        .layer2 {
          background-image: radial-gradient(3px 3px at 60% 70%, white, transparent);
          background-size: 280px 280px;
          animation-duration: 45s;
        }

        .layer3 {
          background-image: radial-gradient(4px 4px at 80% 90%, white, transparent);
          background-size: 450px 450px;
          animation-duration: 70s;
        }

        .register-glass {
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(14px);
          border-radius: 20px;
          padding: 30px;
          border: 1px solid rgba(255,255,255,0.25);
          box-shadow: 0 0 40px rgba(0,0,0,0.6);
          position: relative;
          z-index: 2;
        }

        .register-glass label {
          color: white;
          font-weight: 500;
        }

        .register-glass .form-control,
        .register-glass select {
          background: rgba(255,255,255,0.9);
        }
      `}</style>
    </>
  );
}

export default Register;
