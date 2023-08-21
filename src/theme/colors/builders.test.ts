import { expect, test } from "vitest";
import { colors } from "./colors";

test("transforms colors", () => {
  const rendered = colors.mediumBlue({
    alpha: 0.5,
    darken: 0.2,
    lighten: 0.2,
    saturate: 0.2,
    hue: 0.2,
  });

  // Using OKLCH.
  expect(rendered).toMatchInlineSnapshot('"rgba(102, 176, 212, 0.5)"');

  const rendered2 = colors.mediumBlue({
    darken: 0.5,
    saturate: 2,
    hue: 0,
  });

  // Using OKLCH.
  expect(rendered2).toMatchInlineSnapshot('"rgba(0, 72, 99, 1)"');
});
