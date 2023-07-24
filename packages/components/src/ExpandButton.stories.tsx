import { CyberAppDecorator } from "@cyber/theme/storybook";
import React, { useState } from "react";
import { ExpandButton } from "./ExpandButton.js";

export default {
  component: ExpandButton,
  decorators: [CyberAppDecorator()],
  parameters: { layout: "centered" },
};

export const Default = () => <ExpandButton />;

export const Down = () => <ExpandButton rotate={180} />;

export const Dynamic = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ExpandButton
      rotate={expanded ? 180 : 0}
      onClick={() => setExpanded((e) => !e)}
    />
  );
};
