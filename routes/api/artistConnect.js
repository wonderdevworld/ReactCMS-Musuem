const router = require("express").Router();
const artistConnectController = require('../../controllers/artistConnectController');

// Matches with "/api/cafamArtistConnect"
router
    .route("/")
    .get(artistConnectController.findAll);
    // .post(artistConnectController.createProgram);

router
    .route("/:id")
    .get(artistConnectController.findByID)
    .put(artistConnectController.updateArtistConnect);
    // .put(artistConnectController.updateProgram)
    // .delete(artistConnectController.removeProgram);

router
    .route('/floor/:floor')
    .get(artistConnectController.findByFloor);

module.exports = router;