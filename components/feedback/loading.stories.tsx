import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './spinner';
import { Skeleton } from './skeleton';

const meta: Meta<typeof Spinner> = {
  title: 'Feedback/Loading',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LoadingSpinner: Story = {
  args: {
    size: 'lg',
    label: 'Loading data...',
  },
};

export const SkeletonProfile: StoryObj<typeof Skeleton> = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
};
