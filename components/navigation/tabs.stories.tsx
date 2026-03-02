import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="p-4 border rounded-2xl bg-white mt-2">
          <p className="text-sm">Make changes to your account here. Click save when you're done.</p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="p-4 border rounded-2xl bg-white mt-2">
          <p className="text-sm">Change your password here. After saving, you'll be logged out.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};
