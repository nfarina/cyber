import React, { useState } from "react";
import { CyberAppDecorator } from "../../theme/storybook";
import { SeparatorDecorator } from "../SeparatorLayout";
import { LabeledTextArea } from "./LabeledTextArea";

export default {
  component: LabeledTextArea,
  decorators: [SeparatorDecorator, CyberAppDecorator({ width: "wide" })],
  parameters: { layout: "centered" },
};

export const Empty = () => {
  const [name, setName] = useState("");
  return <LabeledTextArea label="Name" value={name} onValueChange={setName} />;
};

export const WithPlaceholder = () => {
  const [name, setName] = useState("");
  return (
    <LabeledTextArea
      label="Note"
      placeholder="Add a Note"
      value={name}
      onValueChange={setName}
    />
  );
};

export const WithLabelAndLongPlaceholder = () => {
  const [name, setName] = useState("");
  return (
    <LabeledTextArea
      label="Filler Text"
      placeholder="Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated."
      value={name}
      onValueChange={setName}
    />
  );
};

export const WithValue = () => {
  const [name, setName] = useState("Nick Farina");

  return <LabeledTextArea label="Name" value={name} onValueChange={setName} />;
};

export const Disabled = () => (
  <LabeledTextArea label="Name" value="Nick Farina" disabled />
);
