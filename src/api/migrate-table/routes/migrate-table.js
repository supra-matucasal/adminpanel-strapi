module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/migrate-table',
     handler: 'migrate-table.migrateTable',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'POST',
      path: '/generate-json-migrate-table',
      handler: 'migrate-table.generateJsonMigrateTable',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
