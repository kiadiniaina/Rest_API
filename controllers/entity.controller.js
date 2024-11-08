const Entity = require("../models/entity.model");

//Créer une entité
exports.createEntity = async (req, res) => {
  try {
    const entity = new Entity(req.body);
    await entity.save();
    res.status(201).json(entity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer toutes les entités
exports.getAllEntities = async (req, res) => {
  try {
    const entities = await Entity.findAll();
    res.status(200).json(entities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer une entité par son ID
exports.getEntityById = async (req, res) => {
  try {
    const entity = await Entity.findByPk(req.params.id);

    // Si l'entité n'existe pas
    if (!entity) {
      return res.status(404).json({ message: "Entity not found" });
    }
    res.status(200).json(entity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour une entité
exports.updateEntity = async (req, res) => {
  try {
    // Recherche de l'entité
    const entity = await Entity.findByPk(req.params.id);

    // Si l'entité n'existe pas
    if (!entity) {
      return res.status(404).json({ message: "Entity not found" });
    }

    // Mise à jour de l'entité avec request body
    await entity.update(req.body);
    res.status(200).json(entity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une entité
exports.deleteEntity = async (req, res) => {
  try {
    const deleted = await Entity.destroy({
      where: { id: req.params.id },
    });

    // Si l'entité n'existe pas
    if (!deleted) {
      return res.status(404).json({ message: "Entity not found" });
    }

    res.status(200).json({ message: "Entity deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
