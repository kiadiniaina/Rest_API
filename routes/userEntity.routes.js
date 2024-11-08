const express = require("express");
const router = express.Router();
const userEntityController = require("../controllers/userEntity.controller");

router.post("/user-entities", userEntityController.createUserEntity);
router.get("/user-entities", userEntityController.getAllUserEntities);
router.get("/user-entities/:id", userEntityController.getUserEntityById);
router.put("/user-entities/:id", userEntityController.updateUserEntity);
router.delete("/user-entities/:id", userEntityController.deleteUserEntity);

module.exports = router;
