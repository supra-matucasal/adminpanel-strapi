module.exports = ({ env }) => ({
  'import-export-entries': {
    enabled: true,
    config: {
      models: [
        {
          model: 'mission',
          contentTypes: ['mission'],
        },
      ],
  },
}
});

