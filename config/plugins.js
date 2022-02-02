module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'chan@fullstack.ph',
        defaultReplyTo: 'chan@fullstack.ph',
        testAddress: 'chan@fullstack.ph',
      },
    },
  },
});
