import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require("@cypress/code-coverage/task")(on, config);
      // implement node event listeners here
      return config;
    },
  },
  video: false,
});
