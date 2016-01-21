'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://heroku_ffj3n01b:bn21vecqnp78k78ru1f4n5qjg2@ds047315.mongolab.com:47315/heroku_ffj3n01b'
  },
  sequelize: {
    uri: 'sqlite://',
    options: {
      logging: false,
      storage: 'test.sqlite',
      define: {
        timestamps: false
      }
    }
  }
};
