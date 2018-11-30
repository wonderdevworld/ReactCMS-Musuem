const router = require("express").Router();
const cafamController = require("../../controllers/cafamController");

// Matches with "/api/cafam"
router.route("/")
    .get(cafamController.findAll)
    // should be at the route they are posting from form
    // .post(cafamController.create)

router.route("/exhibitionFloor" + ":floor")
    .get(cafamController.findByFloor)
    .post(cafamController.addImgToGallery)
    .put(cafamController.updateLinks);
    // .delete(cafamController.deleteImg);
    // .put(cafamController.updateAnImgLink);

router.route("/:id")
    .get(cafamController.findByID)
    // .put(cafamController.update)
    // .delete(cafamController.remove);


module.exports = router;
