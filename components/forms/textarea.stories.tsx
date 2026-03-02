import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Forms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us a bit about yourself...',
  },
};

export const WithError: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message...',
    error: 'Message is too short.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Textarea',
    placeholder: 'Cannot edit this.',
    disabled: true,
  },
};
