import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Insert text here",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Insert password here",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Insert email here",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Insert number here",
  },
};

export const Date: Story = {
  args: {
    type: "date",
    placeholder: "Date",
  },
};

export const Color: Story = {
  args: {
    type: "color",
    placeholder: "Color",
  },
};
