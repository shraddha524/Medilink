import { withSentryConfig } from "@sentry/nextjs";


const nextConfig = {};

export default withSentryConfig(nextConfig, {


  org: "javascript-mastery",
  project: "medilink",       


  silent: !process.env.CI,


  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,


});
