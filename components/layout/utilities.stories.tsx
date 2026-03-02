import type { Meta, StoryObj } from '@storybook/react';
import { Divider, Container, Grid } from './index';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Utilities',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HorizontalDivider: Story = {
  render: () => (
    <div className="w-[400px]">
      <p>Content Above</p>
      <Divider />
      <p>Content Below</p>
    </div>
  ),
};

export const VerticalDivider: Story = {
  render: () => (
    <div className="flex h-12 items-center">
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
  ),
};

export const ResponsiveGrid: StoryObj<typeof Grid> = {
  render: () => (
    <Grid cols={3} className="w-[600px]">
      <div className="bg-primary/10 p-4 rounded-xl text-center">Box 1</div>
      <div className="bg-primary/10 p-4 rounded-xl text-center">Box 2</div>
      <div className="bg-primary/10 p-4 rounded-xl text-center">Box 3</div>
    </Grid>
  ),
};
