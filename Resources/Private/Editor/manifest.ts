import manifest from "@neos-project/neos-ui-extensibility";

import ColorPicker from "./ColorPicker";

manifest("Carbon.ColorPicker:OKLCH", {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");

    editorsRegistry.set("Carbon.ColorPicker/OKLCH", {
        component: ColorPicker,
        hasOwnLabel: true,
    });
});
