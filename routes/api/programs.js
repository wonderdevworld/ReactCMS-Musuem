const router = require("express").Router();
const cafamProgramsController = require("../../controllers/programsController");

// Matches with "/api/cafamPrograms"
router
    .route("/")
    .get(cafamProgramsController.findAll)
    .post(cafamProgramsController.createProgram);

router
    .route("/:id")
    .get(cafamProgramsController.findByID)
    .put(cafamProgramsController.updateProgram)
    .delete(cafamProgramsController.removeProgram);
    

module.exports = router;