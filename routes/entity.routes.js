const express = require("express");
const router = express.Router();
const entityController = require("../controllers/entity.controller");

router.post("/entities", entityController.createEntity);
router.get("/entities", entityController.getAllEntities);
router.get("/entities/:id", entityController.getEntityById);
router.put("/entities/:id", entityController.updateEntity);
router.delete("/entities/:id", entityController.deleteEntity);

module.exports = router;
