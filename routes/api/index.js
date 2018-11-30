const router = require("express").Router();
const cafamRoutes = require("./cafam");
const cafamProgramRoutes = require("./programs");
const cafamArtistConnectRoutes = require('./artistConnect');
const cafamAuthRoutes = require('./auth');

// Programs routes
router.use("/cafam", cafamRoutes);
router.use("/cafamPrograms", cafamProgramRoutes);
router.use("/cafamArtistConnect", cafamArtistConnectRoutes);
router.use("/cafamAuth", cafamAuthRoutes);


module.exports = router;
