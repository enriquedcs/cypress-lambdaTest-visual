/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on('task', {
    testing (message) {
      console.log(message)

      return null
    }
  })
}

//const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin')

//module.exports = (on, config) => {
//  getCompareSnapshotsPlugin(on, config)
//}

//const { initPlugin } = require("cypress-plugin-snapshots/plugin")

//module.exports = (on, config) => {
//  initPlugin(on, config)
//  return config
//}

const { pa11y, prepareAudit } = require("@cypress-audit/pa11y")

module.exports = (on, config) => {
  on("before:browser:launch", (browser = {}, launchOptions) => {
    prepareAudit(launchOptions)
  })

  on("task", {
    pa11y: pa11y((pa11yReport) => {
      console.log(pa11yReport); // raw pa11y reports
    })
  })
}
