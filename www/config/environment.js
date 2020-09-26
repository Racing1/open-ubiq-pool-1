/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'pool',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // API host and port
      ApiUrl: '//ubiqpool.phoenixmax.org/',

      // HTTP mining endpoint
      HttpHost: 'http://ubiqpool.phoenixmax.org',
      HttpPort: 9999,

      // Stratum mining endpoint
      StratumHost: 'ubiqpool.phoenixmax.org',
      StratumPort: 9009,

      // Fee and payout details
      PoolFee: '0.25%',
      PayoutThreshold: '0.5 Ubiq',

      // For network hashrate (change for your favourite fork)
      BlockTime: 88
    }
  };

  if (environment === 'development') {
    /* Override ApiUrl just for development, while you are customizing
      frontend markup and css theme on your workstation.
    */
    ENV.APP.ApiUrl = 'http://ubiqpool.phoenixmax.org:8080/'
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
