import { createRoot } from "react-dom/client";
import waitFor from "p-wait-for";
import { CUSTOM_TAG_NAME } from "@/constant";
function Test() {
  useEffect(() => {
    console.log("?????????????", window.mg);
  }, []);
  return null;
}

export function getCanvas() {
  // Need to ensure the whole plugin is rendered after canvas is ready
  // so that we can cast the result to HTMLElement here.
  // The `waitFor` logic is in `./index.ts`.
  return document.querySelector("#canvas") as HTMLElement;
}

export function getLeftPanel() {
  // Similar to `getCanvas()`.
  return document.querySelector(".left-bar") as HTMLElement;
}

export default defineUnlistedScript(async () => {
  await waitFor(() => getCanvas() != null && getLeftPanel() != null);
  try {
    await waitFor(() => window.mg != null, { timeout: 1000 });
  } catch (e) {
    console.error(e);
  }
  const root = createRoot(document.querySelector(CUSTOM_TAG_NAME)!);
  root.render(<Test />);
});
