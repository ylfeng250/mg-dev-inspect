import { CUSTOM_TAG_NAME } from "@/constant";

export default defineContentScript({
  matches: ["https://mastergo.com/file/*"],
  runAt: "document_end",
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      tag: CUSTOM_TAG_NAME,
      position: "inline",
      onMount(root) {
        const script = document.createElement("script");
        script.src = browser.runtime.getURL("/ui.js");
        root.appendChild(script);
        script.onload = () => {
          script.remove();
        };

        // Prevent Figma's event capture so that text selection works.
        // Both of the following are required.
        root.tabIndex = -1;
        root.classList.add("js-fullscreen-prevent-event-capture");
      },
    });

    ui.mount();
  },
});
