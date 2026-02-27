import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { HeroImage } from "./HeroImage";

const meta: Meta<typeof HeroImage> = {
  title: "UI/HeroImage",
  component: HeroImage,
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: "test.jpg",
    alt: "Hero Banner",
    title: "Welcome to UI Garden",
    subtitle: "Build beautiful components",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: "test.jpg",
    alt: "Disabled Hero",
    title: "Disabled Hero",
    subtitle: "Component disabled",
    disabled: true,
  },
};