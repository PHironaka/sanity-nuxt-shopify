/**
 * Plugins / Sanity / Client
 * ------------------------------------------------------------------------------
 * Creates the Sanity client and returns the config.
 * - Used by the @nuxtjs/apollo module in `nuxt.config.js`
 *
 */
require('dotenv').config()

const {
  IntrospectionFragmentMatcher,
  InMemoryCache
} = require('apollo-cache-inmemory')

const schema = require('./../apollo/schema.json')
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: schema
})

module.exports = () => {
  return {
    httpEndpoint:
      `https://yr958zd9.apicdn.sanity.io/v1/graphql/production/default`,
    cache: new InMemoryCache({ fragmentMatcher })
  }
}
