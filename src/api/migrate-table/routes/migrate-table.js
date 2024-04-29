module.exports = {
  routes: [
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
