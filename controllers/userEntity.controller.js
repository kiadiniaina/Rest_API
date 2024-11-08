const UserEntity = require("../models/userEntity.model");

// Associer une entité à un utilisateur
exports.createUserEntity = async (req, res) => {
  try {
    const userEntity = await UserEntity.create(req.body);
    res.status(201).json(userEntity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer toutes les associations
exports.getAllUserEntities = async (req, res) => {
  try {
    const userEntities = await UserEntity.findAll();
    res.status(200).json(userEntities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer une association par son ID
exports.getUserEntityById = async (req, res) => {
  try {
    const userEntity = await UserEntity.findByPk(req.params.id);
    if (!userEntity) {
      return res.status(404).json({ message: "UserEntity not found" });
    }
    res.status(200).json(userEntity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour une association
exports.updateUserEntity = async (req, res) => {
  try {
    // recherche de l'association
    const userEntity = await UserEntity.findByPk(req.params.id);
    if (!userEntity) {
      return res.status(404).json({ message: "UserEntity not found" });
    }

    // mise à jour de l'association
    await userEntity.update(req.body);
    res.status(200).json(userEntity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une association
exports.deleteUserEntity = async (req, res) => {
  try {
    const deleted = await UserEntity.destroy({
      where: { id: req.params.id },
    });

    if (!deleted) {
      return res.status(404).json({ message: "UserEntity not found" });
    }

    res.status(200).json({ message: "UserEntity deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
