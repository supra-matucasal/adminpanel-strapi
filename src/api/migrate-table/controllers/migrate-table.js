'use strict';

/**
 * A set of functions called "actions" for `migrate-table`
 */

module.exports = {

  migrateTable: async (ctx) => {
    try {
      const { body, files } = ctx.request;
      
      const data = await strapi
        .service("api::migrate-table.migrate-table").migrateTable(body, files);
      ctx.body = data;

      

    } catch (err) {
      ctx.body = err;
    }
  },

  generateJsonMigrateTable: async (ctx) => {
    try {
      const { body, files } = ctx.request;
      
      const data = await strapi
        .service("api::migrate-table.migrate-table").generateJsonMigrateTable(body, files);
      ctx.body = data;

      

    } catch (err) {
      ctx.body = err;
    }
  }
};
