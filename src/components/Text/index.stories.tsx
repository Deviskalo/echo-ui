import type { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    as: "h1",
    children:
      "The biggest risk is not taking any risk...In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
  },
};
