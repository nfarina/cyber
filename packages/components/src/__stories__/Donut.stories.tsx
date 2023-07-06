import { colors } from "@cyber/theme";
import { CyberAppDecorator } from "@cyber/theme/storybook";
import React from "react";
import { Donut } from "../Donut.js";

export default {
  title: "components/Donut",
  decorators: [CyberAppDecorator()],
  parameters: { layout: "centered" },
};

export const OneSection = () => (
  <Donut size="50px" sections={[{ amount: 1, color: colors.purple }]} />
);

export const TwoSections = () => (
  <Donut
    size="50px"
    sections={[
      { amount: 0.35, color: colors.purple },
      { amount: 0.65, color: colors.mediumBlue },
    ]}
  />
);

export const ThreeSections = () => (
  <Donut
    size="50px"
    sections={[
      { amount: 0.35, color: colors.purple },
      { amount: 0.65, color: colors.mediumBlue },
      { amount: 0.65, color: colors.red },
    ]}
  />
);