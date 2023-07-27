import {Frame1 as Component} from './Frame1';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Frame 1',
  component: Component,
};

export const Frame1: Story = {
  // ...
};

export default meta;
