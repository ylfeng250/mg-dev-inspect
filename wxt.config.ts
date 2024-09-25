import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  manifest: {
    name: "MG",
    web_accessible_resources: [
      {
        resources: ["/ui.js"],
        matches: ["https://mastergo.com/*"],
      },
    ],
  },
});
