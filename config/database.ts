import path from 'path';

export default ({ env }) => {


  const connections = {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URI', 'mongodb://localhost:27017/strapi'),
      },
      options: {
        ssl: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      },
    },
  };

  return {
    connection: {
      ...connections["default"],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
