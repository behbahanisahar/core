require("dotenv").config();
const { whenDev } = require("@craco/craco");
const CracoLessPlugin = require("craco-less");
const BabelRcPlugin = require("@jackwilsdon/craco-use-babelrc");

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }, { plugin: BabelRcPlugin }],
  devServer: whenDev(() => {
    const hostname = process.env.SPRestProxy_Hostname || process.env.HOSTNAME || "localhost";
    const protocol = process.env.SPRestProxy_Protocol || "http";
    const port = process.env.SPRestProxy_Port || 3001;
    return {
      proxy: [
        {
          context: ["/_api", "/_vti_bin"],
          target: `${protocol}://${hostname}:${port}`,
        },
      ],
    };
  }),
};


module.exports = (api) => {
  // This caches the Babel config by environment.
  api.cache.using(() => process.env.NODE_ENV);
  return {
    // ... other options
    plugins: [
      { plugin: CracoLessPlugin }, { plugin: BabelRcPlugin },      // ... other plugins
      // Applies the react-refresh Babel plugin on non-production modes only
      !api.env('production') && 'react-refresh/babel',
    ].filter(Boolean),

    devServer: whenDev(() => {
      const hostname = process.env.SPRestProxy_Hostname || process.env.HOSTNAME || "localhost";
      const protocol = process.env.SPRestProxy_Protocol || "http";
      const port = process.env.SPRestProxy_Port || 3001;
      return {
        proxy: [
          {
            context: ["/_api", "/_vti_bin"],
            target: `${protocol}://${hostname}:${port}`,
          },
        ],
      };
    }),
  };
};
