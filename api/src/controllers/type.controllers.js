
const { Type } = require('../db.js');
const typeController = require('../controllers/type.controllers');



// todos los tipos de pokemones//
async function getAllTypes(req, res, next) {
  try {
    const types = await Type.findAll();
    res.json(types);
  } catch (error) {
    next(error);
  }
}

// crear un nuevo tipo de pokemon//
async function createType(req, res, next) {
  const { name } = req.body;
  try {
    const newType = await Type.create({
      name
    });
    res.status(201).json(newType);
  } catch (error) {
    next(error);
  }
}


module.exports = {
  getAllTypes,
  createType
};