import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'hello@example.com',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    description: 'Must be at least 8 characters long.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Username',
    placeholder: 'Aarogya',
    error: 'This username is already taken.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'You cannot type here',
    disabled: true,
  },
};
