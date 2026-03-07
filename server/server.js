const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
require('./dbconnection/dbconfig')
require('./jobs/remiderJobs')

app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000" }))
app.use(express.json()); // To parse JSON request body

// Routers
const authRouter = require('./routers/authrouter');
const paymentRouter = require('./routers/paymentrouter');
const adminRouter = require('./routers/adminrouter');
const residentRouter = require('./routers/residentrouter');
const superAdminRouter = require('./routers/superadminrouter');

// Route Prefixes
app.use('/api/auth', authRouter);             // register, login
app.use('/api/payment', paymentRouter);   // razorpay payment
app.use('/api/admin', adminRouter);           // admin dashboard, add user
app.use('/api/resident', residentRouter);             // user actions
app.use('/api/super-admin', superAdminRouter); // approve/reject admins


app.listen(process.env.PORT, () => { console.log(`server is running on PORT ${process.env.PORT}`) })