import { defineConfig } from "cypress";
import webpack from "@cypress/webpack-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import allureWriter from '@shelex/cypress-allure-plugin/writer';

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: "ts-loader",
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  allureWriter(on, config);

  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: "https://conduit.realworld.how/",
    specPattern: "**/*.feature",
    setupNodeEvents,
    pageLoadTimeout: 60000, // Increased timeout to 60 seconds for GH Pages
  },
});