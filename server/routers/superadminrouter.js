// const express = require('express');
// const router = express.Router();
// const User = require('../models/user');
// const Community = require('../models/community');
// const { sendMail } = require("../helpers/Nodemailer");
// const frontendURL = process.env.FRONTEND_URL || "http://localhost:3000";

// router.get('/pending-admins', async (req, res) => {
//     try {
//         const pendingAdmins = await User.find({ role: "admin", status: "pending" }).populate("communityId");
//         res.json(pendingAdmins);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Error fetching pending admins" });
//     }
// });
// router.put('/approve/:id', async (req, res) => {
//     try {
//         const admin = await User.findByIdAndUpdate(
//             req.params.id,
//             { status: "approved" },
//             { new: true }
//         ).populate('communityId');

//         if (!admin) return res.status(404).json({ error: "Admin not found" });

//         // 🌟 PREMIUM EMAIL TEMPLATE
//         await sendMail(
//             admin.email,
//             "🎉 Your Admin Access is Approved - ConnectNest",
//             `
//         <div style="font-family: Arial, sans-serif; background: #f4f6f8; padding: 20px;">
          
//           <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 5px 20px rgba(0,0,0,0.1);">

//             <!-- HEADER -->
//             <div style="background: linear-gradient(45deg, #1f2937, #374151); padding: 20px; text-align: center;">
//               <h2 style="color: #ffffff; margin: 0;">ConnectNest</h2>
//               <p style="color: #d1d5db; margin: 5px 0 0;">Smart Community Platform</p>
//             </div>

//             <!-- BODY -->
//             <div style="padding: 25px;">
//               <h3 style="color: #111827;">🎉 Congratulations, ${admin.firstName}!</h3>

//               <p style="color: #374151; font-size: 15px;">
//                 Your admin registration has been <b style="color: green;">successfully approved</b>. 
//                 You can now access your dashboard and manage your community.
//               </p>

//               <!-- DETAILS BOX -->
//               <div style="background: #f9fafb; padding: 15px; border-radius: 10px; margin: 20px 0;">
//                 <p style="margin: 5px 0;"><b>📧 Email:</b> ${admin.email}</p>
//                 <p style="margin: 5px 0;"><b>🏢 Community Code:</b> ${admin.communityId.communityCode}</p>
//                 <p style="margin: 5px 0;"><b>🔑 Password:</b> (Your registered password)</p>
//               </div>

//               <!-- BUTTON -->
//               <div style="text-align: center; margin-top: 25px;">
//                 <a href="${frontendURL}/admin-login"
//                   style="background: #2563eb; color: white; padding: 12px 25px; 
//                   text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
//                   🚀 Login to Dashboard
//                 </a>
//               </div>

//               <p style="margin-top: 30px; font-size: 14px; color: #6b7280;">
//                 If you did not request this, please ignore this email.
//               </p>
//             </div>

//             <!-- FOOTER -->
//             <div style="background: #f3f4f6; padding: 15px; text-align: center;">
//               <p style="font-size: 13px; color: #6b7280; margin: 0;">
//                 © ${new Date().getFullYear()} ConnectNest. All rights reserved.
//               </p>
//             </div>

//           </div>
//         </div>
//       `
//         );

//         res.json({ message: "Admin approved and email sent." });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Something went wrong." });
//     }
// });



// module.exports = router;


const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Community = require('../models/community');
const { sendMail } = require("../helpers/Nodemailer");
const frontendURL = process.env.FRONTEND_URL || "http://localhost:3000";

router.get('/pending-admins', async (req, res) => {
    try {
        const pendingAdmins = await User.find({ role: "admin", status: "pending" }).populate("communityId");
        res.json(pendingAdmins);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error fetching pending admins" });
    }
});



router.put('/reject/:id', async (req, res) => {
    try {
        const { reason } = req.body;

        // 👉 1. Pehle admin data fetch karo
        const admin = await User.findById(req.params.id).populate('communityId');

        if (!admin) {
            return res.status(404).json({ error: "Admin not found" });
        }

        // 👉 2. Email bhejo (data yaha available hai)
        await sendMail(
            admin.email,
            "❌ Admin Request Update - ConnectNest",
            `
            <div style="font-family: Arial, sans-serif; background: #f4f6f8; padding: 20px;">
              
              <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 5px 20px rgba(0,0,0,0.1);">

                <!-- HEADER -->
                <div style="background: linear-gradient(45deg, #7f1d1d, #dc2626); padding: 20px; text-align: center;">
                  <h2 style="color: #ffffff; margin: 0;">ConnectNest</h2>
                  <p style="color: #fecaca; margin: 5px 0 0;">Admin Request Update</p>
                </div>

                <!-- BODY -->
                <div style="padding: 25px;">
                  <h3 style="color: #b91c1c;">Hello ${admin.firstName},</h3>

                  <p style="color: #374151;">
                    We regret to inform you that your admin request has been 
                    <b style="color: red;">rejected</b>.
                  </p>

                  <!-- REASON BOX -->
                  <div style="background: #fef2f2; padding: 15px; border-radius: 10px; margin: 20px 0;">
                    <p style="margin: 5px 0;"><b>📌 Reason:</b> ${reason || "Not specified"}</p>
                  </div>

                  <p style="color: #6b7280; font-size: 14px;">
                    You can review the reason and reapply with correct details.
                  </p>

                  <!-- BUTTON -->
                  <div style="text-align: center; margin-top: 25px;">
                    <a href="${frontendURL}/verify-email"
                      style="background: #dc2626; color: white; padding: 12px 25px; 
                      text-decoration: none; border-radius: 25px; font-weight: bold;">
                      🔁 Apply Again
                    </a>
                  </div>
                </div>

                <!-- FOOTER -->
                <div style="background: #f3f4f6; padding: 15px; text-align: center;">
                  <p style="font-size: 13px; color: #6b7280; margin: 0;">
                    © ${new Date().getFullYear()} ConnectNest. All rights reserved.
                  </p>
                </div>

              </div>
            </div>
            `
        );

        // 👉 3. Ab user ko delete karo
        await User.findByIdAndDelete(req.params.id);

        // 👉 4. Response bhejo
        res.json({ message: "Admin rejected, email sent & user deleted." });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong." });
    }
});

router.put('/approve/:id', async (req, res) => {
    try {
        const admin = await User.findByIdAndUpdate(
            req.params.id,
            { status: "approved" },
            { new: true }
        ).populate('communityId');

        if (!admin) return res.status(404).json({ error: "Admin not found" });

        // 🌟 PREMIUM EMAIL TEMPLATE
        await sendMail(
            admin.email,
            "🎉 Your Admin Access is Approved - ConnectNest",
            `
        <div style="font-family: Arial, sans-serif; background: #f4f6f8; padding: 20px;">
          
          <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 5px 20px rgba(0,0,0,0.1);">

            <!-- HEADER -->
            <div style="background: linear-gradient(45deg, #1f2937, #374151); padding: 20px; text-align: center;">
              <h2 style="color: #ffffff; margin: 0;">ConnectNest</h2>
              <p style="color: #d1d5db; margin: 5px 0 0;">Smart Community Platform</p>
            </div>

            <!-- BODY -->
            <div style="padding: 25px;">
              <h3 style="color: #111827;">🎉 Congratulations, ${admin.firstName}!</h3>

              <p style="color: #374151; font-size: 15px;">
                Your admin registration has been <b style="color: green;">successfully approved</b>. 
                You can now access your dashboard and manage your community.
              </p>

              <!-- DETAILS BOX -->
              <div style="background: #f9fafb; padding: 15px; border-radius: 10px; margin: 20px 0;">
                <p style="margin: 5px 0;"><b>📧 Email:</b> ${admin.email}</p>
                <p style="margin: 5px 0;"><b>🏢 Community Code:</b> ${admin.communityId.communityCode}</p>
                <p style="margin: 5px 0;"><b>🔑 Password:</b> (Your registered password)</p>
              </div>

              <!-- BUTTON -->
              <div style="text-align: center; margin-top: 25px;">
                <a href="${frontendURL}/admin-login"
                  style="background: #2563eb; color: white; padding: 12px 25px; 
                  text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
                  🚀 Login to Dashboard
                </a>
              </div>

              <p style="margin-top: 30px; font-size: 14px; color: #6b7280;">
                If you did not request this, please ignore this email.
              </p>
            </div>

            <!-- FOOTER -->
            <div style="background: #f3f4f6; padding: 15px; text-align: center;">
              <p style="font-size: 13px; color: #6b7280; margin: 0;">
                © ${new Date().getFullYear()} ConnectNest. All rights reserved.
              </p>
            </div>

          </div>
        </div>
      `
        );

        res.json({ message: "Admin approved and email sent." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong." });
    }
});



module.exports = router;
