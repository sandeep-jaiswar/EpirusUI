import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@repo/ui";

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

export const Default: Story = {
  args: {
    label: "Default Field",
    placeholder: "Curator's Name",
  },
};

export const Error: Story = {
  args: {
    label: "Error State",
    value: "invalid@entry",
    error: "Please enter a valid administrative email.",
  },
};
