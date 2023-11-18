import { action } from "@storybook/addon-actions";
import { Suspense, lazy, useState } from "react";
import { useRouter } from "../router/context/RouterContext";
import {
  BrowserSimulator,
  RouterDecorator,
} from "../router/storybook/RouterDecorator";
import { wait } from "../shared/wait";
import { CrosswingAppDecorator } from "../theme/storybook";
import { LoadingCurtain } from "./LoadingCurtain";
import { NoContent } from "./NoContent";
import { TabbedButton, TabbedButtonLayout } from "./TabbedButtonLayout";

export default {
  component: TabbedButtonLayout,
  decorators: [CrosswingAppDecorator({ layout: "mobile" }), RouterDecorator],
  parameters: { layout: "centered" },
};

export const TwoTabs = () => (
  <TabbedButtonLayout onValueChange={action("onValueChange")}>
    <TabbedButton title="Red Fish" value="red">
      <NoContent title="Red Fish" />
    </TabbedButton>
    <TabbedButton title="Blue Fish" value="blue">
      <NoContent style={{ background: "blue" }} title="Blue Fish" />
    </TabbedButton>
  </TabbedButtonLayout>
);

export const OneTab = () => (
  <TabbedButtonLayout onValueChange={action("onValueChange")}>
    <TabbedButton title="Red Fish" value="red">
      <NoContent title="Red Fish" />
    </TabbedButton>
  </TabbedButtonLayout>
);

export const Primary = () => (
  <TabbedButtonLayout primary onValueChange={action("onValueChange")}>
    <TabbedButton title="Red Fish" value="red">
      <NoContent title="Red Fish" />
    </TabbedButton>
    <TabbedButton title="Blue Fish" value="blue">
      <NoContent style={{ background: "blue" }} title="Blue Fish" />
    </TabbedButton>
  </TabbedButtonLayout>
);

export const DefaultSelected = () => (
  <TabbedButtonLayout
    defaultValue="blue"
    onValueChange={action("onValueChange")}
  >
    <TabbedButton title="Red Fish" value="red">
      <NoContent title="Red Fish" />
    </TabbedButton>
    <TabbedButton title="Blue Fish" value="blue">
      <NoContent title="Blue Fish" />
    </TabbedButton>
  </TabbedButtonLayout>
);

export const NoValues = () => (
  <TabbedButtonLayout onValueChange={action("onValueChange")}>
    <TabbedButton title="Red Fish">
      <NoContent title="Red Fish" />
    </TabbedButton>
    <TabbedButton title="Blue Fish">
      <NoContent title="Blue Fish" />
    </TabbedButton>
  </TabbedButtonLayout>
);

export const SomeValues = () => (
  <TabbedButtonLayout onValueChange={action("onValueChange")}>
    <TabbedButton title="Red Fish" value="red">
      <NoContent title="Red Fish" />
    </TabbedButton>
    <TabbedButton title="Blue Fish">
      <NoContent title="Blue Fish" />
    </TabbedButton>
  </TabbedButtonLayout>
);

export const LazyChild = () => {
  const DynamicContent = lazy(async () => {
    await wait(2000);
    return { default: () => <NoContent title="Loaded" /> };
  });

  return (
    <TabbedButtonLayout onValueChange={action("onValueChange")}>
      <TabbedButton title="Home" value="home">
        <NoContent title="Home" />
      </TabbedButton>
      <TabbedButton lazy title="Discover" value="discover">
        <Suspense fallback={<LoadingCurtain />}>
          <DynamicContent />
        </Suspense>
      </TabbedButton>
    </TabbedButtonLayout>
  );
};

export const Controlled = () => {
  const [value, setValue] = useState<"red" | "blue" | "green">("red");

  return (
    <TabbedButtonLayout value={value} onValueChange={setValue}>
      <TabbedButton title="Red Fish" value="red">
        <NoContent title="Red" />
      </TabbedButton>
      <TabbedButton title="Blue Fish" value="blue">
        <NoContent title="Blue" />
      </TabbedButton>
      <TabbedButton title="Green Fish" value="green">
        <NoContent title="Green" />
      </TabbedButton>
    </TabbedButtonLayout>
  );
};

export const WithRouter = () => (
  <BrowserSimulator initialPath="?color=blue">
    <TabbedButtonLayout searchParam="color">
      <TabbedButton title="Red Fish" value="red">
        <RoutedRedFish />
      </TabbedButton>
      <TabbedButton title="Blue Fish" value="blue">
        <RoutedBlueFish />
      </TabbedButton>
      <TabbedButton title="Green Fish" value="green">
        <NoContent title="Green Fish" />
      </TabbedButton>
    </TabbedButtonLayout>
  </BrowserSimulator>
);

// This has to be a separate component to get the Router context from
// BrowserSimulator.
function RoutedRedFish() {
  const { history } = useRouter();

  return (
    <NoContent
      title="Red"
      action="Go to Root"
      onActionClick={() => history.navigate("/")}
    />
  );
}

function RoutedBlueFish() {
  const { history, location } = useRouter();

  function onGoGreenClick() {
    const newLocation = location.withParam("color", "green");
    history.navigate(newLocation.href(), { replace: true });
  }

  return (
    <NoContent
      title="Blue Fish"
      action="Go Green"
      onActionClick={onGoGreenClick}
    />
  );
}
