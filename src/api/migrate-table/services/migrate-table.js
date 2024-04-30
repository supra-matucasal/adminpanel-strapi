'use strict';

const fs = require('fs');

/**
 * migrate-table service
 */

module.exports = () => ({

  migrateTable: async (body, file) => {
    try {
      const filePath = file.files.path;
      const rawData = fs.readFileSync(filePath, 'utf-8');
      const data = JSON.parse(rawData);

     const bodyEntityName = body.entity;

      const transformedData = {
        version: 2,
        data: {
          [bodyEntityName]: {}
        }
      };

      data.data.forEach((item, index) => {
        transformedData.data[bodyEntityName][index + 1] = item;
      });

      const importService = strapi.service('plugin::import-export-entries.import');

      await importService.importDataV2(transformedData, {
        slug: bodyEntityName,
        format: "json",
      });

      return {
        message: data.data.length + ' entries have been imported successfully'
      };
    }

    catch (e) {
      console.log('Error: ', e)
      return e;
    }
  },

  generateJsonMigrateTable: async (body, file) => {
    try {
      const filePath = file.files.path;
      const rawData = fs.readFileSync(filePath, 'utf-8');
      const data = JSON.parse(rawData);

     const bodyEntityName = body.entity;

      const transformedData = {
        version: 2,
        data: {
          [bodyEntityName]: {}
        }
      };

      data.data.forEach((item, index) => {
        transformedData.data[bodyEntityName][index + 1] = item;
      });

      const importService = strapi.service('plugin::import-export-entries.import');

      await importService.importDataV2(transformedData, {
        slug: bodyEntityName,
        format: "json",
      });

      return {};
    }

    catch (e) {
      console.log('Error: ', e)
      return e;
    }
  }
});
