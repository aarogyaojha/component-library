import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  title: 'Forms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Airplane Mode',
  },
};

export const Checked: Story = {
  args: {
    label: 'Wi-Fi',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Bluetooth',
    disabled: true,
  },
};
