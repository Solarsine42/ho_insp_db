const express = require("express");
const router = express.Router();
const inspections = require("../controllers/inspections");

/* GET list of inspections*/
router.get("/", inspections.getAllInspections);

/*GET one inspection*/
router.get("/:id", inspections.getOneInspection);

/*POST a new inspection*/
router.post("/", inspections.addOneInspection);

/*PATCH an inspection*/
router.patch("/:id", inspections.updateOneInspection);

/*DEL an inspection*/
router.delete("/:id", inspections.removeOneInspection);

module.exports = router;
