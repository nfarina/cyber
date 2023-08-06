import { action } from "@storybook/addon-actions";
import React from "react";
import Browser from "../../icons/Browser.svg";
import Trash from "../../icons/Trash.svg";
import { CyberAppDecorator } from "../theme/storybook.js";
import {
  MobileToolbar,
  MobileToolbarButton,
  MobileToolbarLayout,
  MobileToolbarSpace,
} from "./MobileToolbar.js";
import { NoContent } from "./NoContent.js";

export default {
  component: MobileToolbar,
  decorators: [CyberAppDecorator({ layout: "mobile" })],
  parameters: { layout: "centered" },
};

export const Default = () => (
  <MobileToolbarLayout>
    <NoContent title="Content Area" />
    <MobileToolbar>
      <MobileToolbarButton
        children={<Browser />}
        onClick={action("onBrowserClick")}
      />
      <MobileToolbarSpace />
      <MobileToolbarButton
        children={<Trash />}
        onClick={action("onTrashClick")}
      />
    </MobileToolbar>
  </MobileToolbarLayout>
);