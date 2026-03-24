import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "ghost", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Action Label",
    variant: "primary",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Action",
    variant: "ghost",
  },
};

export const Loading: Story = {
  args: {
    children: "Syncing...",
    isLoading: true,
  },
};
