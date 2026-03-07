// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Modal, Button } from "react-bootstrap";

// function ResidentProfile() {
//   const [profile, setProfile] = useState(null);
//   const [family, setFamily] = useState([]);
//   const [newMember, setNewMember] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     relation: "",
//   });
//   const [editMember, setEditMember] = useState(null);
//   const [editProfile, setEditProfile] = useState(null);

//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditFamilyModal, setShowEditFamilyModal] = useState(false);
//   const [showProfileModal, setShowProfileModal] = useState(false);

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const fetchProfile = async () => {
//     try {
//       const res = await axios.get("/api/resident/profile", {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       setProfile(res.data.profile);
//       setFamily(res.data.family);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleAddFamily = async () => {
//     try {
//       const res = await axios.post("/api/resident/family-member", newMember, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       setFamily([...family, res.data.fam]);
//       setNewMember({ name: "", age: "", gender: "", relation: "" });
//       setShowAddModal(false);
//     } catch {
//       alert("Failed to add family member");
//     }
//   };

//   const handleUpdateFamily = async () => {
//     try {
//       const res = await axios.put(
//         `/api/resident/family-member/${editMember._id}`,
//         editMember,
//         {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         },
//       );
//       setFamily(
//         family.map((f) => (f._id === editMember._id ? res.data.fam : f)),
//       );
//       setShowEditFamilyModal(false);
//     } catch {
//       alert("Failed to update family member");
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/api/resident/family-member/${id}`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       setFamily(family.filter((f) => f._id !== id));
//     } catch {
//       alert("Failed to delete");
//     }
//   };

//   const handleUpdateProfile = async () => {
//     try {
//       const res = await axios.put("/api/resident/profile", editProfile, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       setProfile(res.data.user);
//       setShowProfileModal(false);
//     } catch {
//       alert("Failed to update profile");
//     }
//   };

//   return (
//     <div className="container mt-5 pt-5">
//       <h3 className="mb-4 fw-bold text-center">
//         <u>My Profile </u>
//       </h3>

//       {/* ===== PROFILE CARD ===== */}
//       {profile && (
//         <div className="card shadow-sm rounded-4 mb-4">
//           <div className="card-body">
//             <div className="d-flex justify-content-between align-items-center">
//               <h5 className="fw-bold mb-3">Resident Details</h5>
//               <Button
//                 variant="outline-warning"
//                 size="sm"
//                 onClick={() => {
//                   setEditProfile({
//                     firstName: profile.firstName,
//                     lastName: profile.lastName,
//                     mobile: profile.mobile,
//                     flatNumber: profile.flatNumber,
//                     communityId: profile.communityId,
//                   });
//                   setShowProfileModal(true);
//                 }}
//               >
//                 Edit Profile
//               </Button>
//             </div>

//             <div className="row">
//               <div className="col-md-6 mb-2">
//                 <strong>Name:</strong> {profile.firstName} {profile.lastName}
//               </div>
//               <div className="col-md-6 mb-2">
//                 <strong>Email:</strong> {profile.email}
//               </div>
//               <div className="col-md-6 mb-2">
//                 <strong>Mobile:</strong> {profile.mobile}
//               </div>
//               <div className="col-md-6 mb-2">
//                 <strong>Flat:</strong> {profile.flatNumber}
//               </div>
//               <div className="col-md-6 mb-2">
//                 <strong>Community:</strong> {profile.communityId?.name}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ===== FAMILY CARD ===== */}
//       <div className="card shadow-sm rounded-4">
//         <div className="card-body">
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <h5 className="fw-bold">Family Members</h5>
//             <Button
//               size="sm"
//               variant="dark"
//               onClick={() => setShowAddModal(true)}
//             >
//               + Add Member
//             </Button>
//           </div>

//           {family.length === 0 ? (
//             <p className="text-muted">No family members added</p>
//           ) : (
//             <div className="table-responsive">
//               <table className="table table-bordered align-middle">
//                 <thead className="table-light">
//                   <tr>
//                     <th>Name</th>
//                     <th>Age</th>
//                     <th>Gender</th>
//                     <th>Relation</th>
//                     <th width="150">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {family.map((f) => (
//                     <tr key={f._id}>
//                       <td>{f.name}</td>
//                       <td>{f.age}</td>
//                       <td>{f.gender}</td>
//                       <td>{f.relation}</td>
//                       <td>
//                         <Button
//                           size="sm"
//                           variant="outline-warning"
//                           className="me-2"
//                           onClick={() => {
//                             setEditMember(f);
//                             setShowEditFamilyModal(true);
//                           }}
//                         >
//                           Edit
//                         </Button>
//                         <Button
//                           size="sm"
//                           variant="outline-danger"
//                           onClick={() => handleDelete(f._id)}
//                         >
//                           Delete
//                         </Button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Add Family Modal */}
//       <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Family Member</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <input
//             className="form-control mb-2"
//             placeholder="Name"
//             value={newMember.name}
//             onChange={(e) =>
//               setNewMember({ ...newMember, name: e.target.value })
//             }
//           />
//           <input
//             className="form-control mb-2"
//             placeholder="Age"
//             type="number"
//             value={newMember.age}
//             onChange={(e) =>
//               setNewMember({ ...newMember, age: e.target.value })
//             }
//           />
//           <select
//             className="form-control mb-2"
//             value={newMember.gender}
//             onChange={(e) =>
//               setNewMember({ ...newMember, gender: e.target.value })
//             }
//           >
//             <option value="">Select Gender</option>
//             <option>Male</option>
//             <option>Female</option>
//             <option>Other</option>
//           </select>
//           <input
//             className="form-control mb-2"
//             placeholder="Relation"
//             value={newMember.relation}
//             onChange={(e) =>
//               setNewMember({ ...newMember, relation: e.target.value })
//             }
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={handleAddFamily}>Save</Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Edit Family Modal */}
//       <Modal
//         show={showEditFamilyModal}
//         onHide={() => setShowEditFamilyModal(false)}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Family Member</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {editMember && (
//             <>
//               <input
//                 className="form-control mb-2"
//                 placeholder="Name"
//                 value={editMember.name}
//                 onChange={(e) =>
//                   setEditMember({ ...editMember, name: e.target.value })
//                 }
//               />
//               <input
//                 className="form-control mb-2"
//                 placeholder="Age"
//                 type="number"
//                 value={editMember.age}
//                 onChange={(e) =>
//                   setEditMember({ ...editMember, age: e.target.value })
//                 }
//               />
//               <select
//                 className="form-control mb-2"
//                 value={editMember.gender}
//                 onChange={(e) =>
//                   setEditMember({ ...editMember, gender: e.target.value })
//                 }
//               >
//                 <option value="">Select Gender</option>
//                 <option>Male</option>
//                 <option>Female</option>
//                 <option>Other</option>
//               </select>
//               <input
//                 className="form-control mb-2"
//                 placeholder="Relation"
//                 value={editMember.relation}
//                 onChange={(e) =>
//                   setEditMember({ ...editMember, relation: e.target.value })
//                 }
//               />
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={handleUpdateFamily}>Update</Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Edit Profile Modal */}
//       <Modal
//         show={showProfileModal}
//         onHide={() => setShowProfileModal(false)}
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Profile</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {editProfile && (
//             <>
//               <input
//                 className="form-control mb-2"
//                 placeholder="First Name"
//                 value={editProfile.firstName}
//                 onChange={(e) =>
//                   setEditProfile({ ...editProfile, firstName: e.target.value })
//                 }
//               />
//               <input
//                 className="form-control mb-2"
//                 placeholder="Last Name"
//                 value={editProfile.lastName}
//                 onChange={(e) =>
//                   setEditProfile({ ...editProfile, lastName: e.target.value })
//                 }
//               />
//               <input
//                 className="form-control mb-2"
//                 placeholder="Mobile"
//                 value={editProfile.mobile}
//                 onChange={(e) => {
//                   const val = e.target.value;
//                   if (/^\d{0,10}$/.test(val)) {
//                     setEditProfile({ ...editProfile, mobile: val });
//                   }
//                 }}
//               />
//               <input
//                 className="form-control mb-2"
//                 placeholder="Flat Number"
//                 value={editProfile.flatNumber}
//                 onChange={(e) =>
//                   setEditProfile({ ...editProfile, flatNumber: e.target.value })
//                 }
//               />
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={handleUpdateProfile}>Update Profile</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default ResidentProfile;

import { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

function ResidentProfile() {
  const [profile, setProfile] = useState(null);
  const [family, setFamily] = useState([]);
  const [newMember, setNewMember] = useState({
    name: "",
    age: "",
    gender: "",
    relation: "",
  });
  const [editMember, setEditMember] = useState(null);
  const [editProfile, setEditProfile] = useState(null);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditFamilyModal, setShowEditFamilyModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axios.get("/api/resident/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setProfile(res.data.profile);
      setFamily(res.data.family);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddFamily = async () => {
    try {
      const res = await axios.post("/api/resident/family-member", newMember, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setFamily([...family, res.data.fam]);
      setNewMember({ name: "", age: "", gender: "", relation: "" });
      setShowAddModal(false);
    } catch {
      alert("Failed to add family member");
    }
  };

  const handleUpdateFamily = async () => {
    try {
      const res = await axios.put(
        `/api/resident/family-member/${editMember._id}`,
        editMember,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        },
      );
      setFamily(
        family.map((f) => (f._id === editMember._id ? res.data.fam : f)),
      );
      setShowEditFamilyModal(false);
    } catch {
      alert("Failed to update family member");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/resident/family-member/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setFamily(family.filter((f) => f._id !== id));
    } catch {
      alert("Failed to delete");
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const res = await axios.put("/api/resident/profile", editProfile, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setProfile(res.data.user);
      setShowProfileModal(false);
    } catch {
      alert("Failed to update profile");
    }
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
        <h3 className="premium-heading mt-30px">Profile Management</h3>
        <div className="heading-underline"></div>
      </div>
      <div className="container position-relative premium-wrapper">
        <div className="text-center">
          <h2 className="premium-heading mt-30px">Profile Management</h2>
          <div className="heading-underline"></div>
        </div>

        {/* ===== PROFILE CARD ===== */}
        {profile && (
          <div className="card premium-card mb-4">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold">Resident Details</h5>
                <Button
                  variant="outline-warning"
                  size="sm"
                  onClick={() => {
                    setEditProfile({
                      firstName: profile.firstName,
                      lastName: profile.lastName,
                      mobile: profile.mobile,
                      flatNumber: profile.flatNumber,
                      communityId: profile.communityName,
                      communityCode: profile.communityCode,
                    });
                    setShowProfileModal(true);
                  }}
                >
                  Edit Profile
                </Button>
              </div>

              <div className="row">
                <div className="col-md-6 mb-2">
                  <strong>Name:</strong> {profile.firstName} {profile.lastName}
                </div>
                <div className="col-md-6 mb-2">
                  <strong>Email:</strong> {profile.email}
                </div>
                <div className="col-md-6 mb-2">
                  <strong>Mobile:</strong> {profile.mobile}
                </div>
                <div className="col-md-6 mb-2">
                  <strong>Flat:</strong> {profile.flatNumber}
                </div>
                <div className="col-md-6 mb-2">
                  <strong>Community:</strong> {profile.communityId?.name}
                </div>

                <div className="col-md-6 mb-2">
                  <strong>Community Code:</strong>{" "}
                  {profile.communityId?.communityCode}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== FAMILY CARD ===== */}
        <div className="card premium-card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold">Family Members</h5>
              <Button
                size="sm"
                variant="dark"
                onClick={() => setShowAddModal(true)}
              >
                + Add Member
              </Button>
            </div>

            {family.length === 0 ? (
              <p className="text-muted">No family members added</p>
            ) : (
              <div className="table-responsive">
                <table className="table table-bordered align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Relation</th>
                      <th width="150">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {family.map((f) => (
                      <tr key={f._id}>
                        <td>{f.name}</td>
                        <td>{f.age}</td>
                        <td>{f.gender}</td>
                        <td>{f.relation}</td>
                        <td>
                          <Button
                            size="sm"
                            variant="outline-warning"
                            className="me-2"
                            onClick={() => {
                              setEditMember(f);
                              setShowEditFamilyModal(true);
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="outline-danger"
                            onClick={() => handleDelete(f._id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Add Family Modal */}
        <Modal
          show={showAddModal}
          onHide={() => setShowAddModal(false)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Family Member</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              className="form-control mb-2"
              placeholder="Name"
              value={newMember.name}
              onChange={(e) =>
                setNewMember({ ...newMember, name: e.target.value })
              }
            />
            <input
              className="form-control mb-2"
              placeholder="Age"
              type="number"
              value={newMember.age}
              onChange={(e) =>
                setNewMember({ ...newMember, age: e.target.value })
              }
            />
            <select
              className="form-control mb-2"
              value={newMember.gender}
              onChange={(e) =>
                setNewMember({ ...newMember, gender: e.target.value })
              }
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input
              className="form-control mb-2"
              placeholder="Relation"
              value={newMember.relation}
              onChange={(e) =>
                setNewMember({ ...newMember, relation: e.target.value })
              }
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleAddFamily}>Save</Button>
          </Modal.Footer>
        </Modal>

        {/* Edit Family Modal */}
        <Modal
          show={showEditFamilyModal}
          onHide={() => setShowEditFamilyModal(false)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Family Member</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {editMember && (
              <>
                <input
                  className="form-control mb-2"
                  placeholder="Name"
                  value={editMember.name}
                  onChange={(e) =>
                    setEditMember({ ...editMember, name: e.target.value })
                  }
                />
                <input
                  className="form-control mb-2"
                  placeholder="Age"
                  type="number"
                  value={editMember.age}
                  onChange={(e) =>
                    setEditMember({ ...editMember, age: e.target.value })
                  }
                />
                <select
                  className="form-control mb-2"
                  value={editMember.gender}
                  onChange={(e) =>
                    setEditMember({ ...editMember, gender: e.target.value })
                  }
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <input
                  className="form-control mb-2"
                  placeholder="Relation"
                  value={editMember.relation}
                  onChange={(e) =>
                    setEditMember({ ...editMember, relation: e.target.value })
                  }
                />
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleUpdateFamily}>Update</Button>
          </Modal.Footer>
        </Modal>

        {/* Edit Profile Modal */}
        <Modal
          show={showProfileModal}
          onHide={() => setShowProfileModal(false)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {editProfile && (
              <>
                <input
                  className="form-control mb-2"
                  placeholder="First Name"
                  value={editProfile.firstName}
                  onChange={(e) =>
                    setEditProfile({
                      ...editProfile,
                      firstName: e.target.value,
                    })
                  }
                />
                <input
                  className="form-control mb-2"
                  placeholder="Last Name"
                  value={editProfile.lastName}
                  onChange={(e) =>
                    setEditProfile({ ...editProfile, lastName: e.target.value })
                  }
                />
                <input
                  className="form-control mb-2"
                  placeholder="Mobile"
                  value={editProfile.mobile}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d{0,10}$/.test(val)) {
                      setEditProfile({ ...editProfile, mobile: val });
                    }
                  }}
                />
                <input
                  className="form-control mb-2"
                  placeholder="Flat Number"
                  value={editProfile.flatNumber}
                  onChange={(e) =>
                    setEditProfile({
                      ...editProfile,
                      flatNumber: e.target.value,
                    })
                  }
                />
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleUpdateProfile}>Update Profile</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
<style>{`

/* Premium Card */
.premium-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: none;
}`}</style>;

export default ResidentProfile;
