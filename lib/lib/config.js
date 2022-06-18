const getConfig = require('next/config').default
const get = require('lodash/get')

const config = {
  env: process.env.NODE_ENV || 'development',
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || '8080',
  selfHost: process.env.SELF_HOST || 'http://localhost:8080',
  debug: process.env.DEBUG || '',
}

function getSelfConfig() {
  const nextConfig = getConfig()
  return get(nextConfig, ['publicRuntimeConfig'], config)
}

module.exports = getSelfConfig()
