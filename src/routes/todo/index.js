const router = require('express').Router();
const { HTTP_STATUS_CODES, ROUTES_ID } = require('../../constants');
const { TODO } = require('../route.contract');
const validate = require('../../validation');
const todoValidationSchema = require('../../validation/schemas/todo.schema');
const { NotFoundError } = require('../../errors-handler/errors/not-found.error');
const { todoModel } = require('../../db');
const { DB_CONTRACT } = require('../../db/db.contract');

// Get all items
router.get(`/${TODO.list}`, async (req, res, next) => {
  try {
    const result = await todoModel.findAll();

    if (!result.length) res.json([]);
    else res.json(result);
  } catch (err) {
    next(err);
  }
});

// Get item by ID
router.get(`/${TODO.byID}`, async (req, res, next) => {
  try {
    const itemID = req.params[ROUTES_ID.todoID];
    const result = await todoModel.findByPk(itemID);

    if (!result) throw new NotFoundError(`The item "${itemID}" was not found`);

    res.json(result);
  } catch (err) {
    next(err);
  }
});

// Save or update item
router.post('/', validate(todoValidationSchema), async (req, res, next) => {
  try {
    const itemDto = req.body;

    const result = await todoModel.findOrCreate({
      where: {
        [DB_CONTRACT.common.propertyID]: itemDto[DB_CONTRACT.common.propertyID],
      },
      defaults: itemDto,
    });

    if (result[1]) {
      res.status(HTTP_STATUS_CODES.ok.code).send(`The item "${itemDto[DB_CONTRACT.common.propertyID]}" has been saved successfully`);

      return;
    }

    await todoModel.update(
      { ...itemDto },
      {
        where: {
          [DB_CONTRACT.common.propertyID]: itemDto[DB_CONTRACT.common.propertyID],
        },
      },
    );

    res.status(HTTP_STATUS_CODES.ok.code).send(`The item "${itemDto[DB_CONTRACT.common.propertyID]}" has been updated successfully`);
  } catch (err) {
    next(err);
  }
});

// Remove item
router.delete(`/${TODO.byID}`, async (req, res, next) => {
  try {
    const itemID = req.params[ROUTES_ID.todoID];
    const result = await todoModel.destroy({
      where: {
        [DB_CONTRACT.common.propertyID]: itemID,
      },
    });

    if (!result) {
      res.status(HTTP_STATUS_CODES.ok.code).send(`The item "${itemID}" was not found`);

      return;
    }

    res.status(HTTP_STATUS_CODES.ok.code).send(`The item "${itemID}" has been removed successfully`);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
