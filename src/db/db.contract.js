const DB_CONTRACT = {
  common: {
    columnID: 'id',
    propertyID: 'id',
    columnCreatedAt: 'created_at',
    propertyCreatedAt: 'createdAt',
    columnUpdatedAt: 'updated_at',
    propertyUpdatedAt: 'updatedAt',
  },
  todo: {
    tableName: 'todo',
    columnText: 'text',
    propertyText: 'text',
    columnIsDone: 'is_done',
    propertyIsDone: 'isDone',
  },
};

module.exports = {
  DB_CONTRACT,
};
