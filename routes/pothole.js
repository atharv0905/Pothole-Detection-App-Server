const multer = require('multer');
const Router = require('express');
const router = Router();
const bodyParser = require('body-parser');
const potholeController = require('../controllers/potholeController');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// ----------------------------------------------------------------------------------------------------------------------------------
// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/') // save uploaded files in the 'uploads' directory
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // use the original file name
    }
  });
  
  const upload = multer({ storage: storage });

// Multer configuration
// ----------------------------------------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------------------------------------
// add new pothole
router.post("/addPothole", upload.single('photo'), potholeController.addNewPothole)
// add new pothole
// ----------------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------------
// get all pothole data
router.get("/getAllPothole", potholeController.getAllPotholeData)

router.get("/getLatLngOfAllPothole", potholeController.getLatLngOfAllPothole)

router.get("/getImageOfSpecificPothole", potholeController.getImageOfSpecificPothole)
// get all pothole data
// ----------------------------------------------------------------------------------------------------------------------------------


module.exports = router;