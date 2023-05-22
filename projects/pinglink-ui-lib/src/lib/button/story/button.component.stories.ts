import type { Meta, StoryObj } from '@storybook/angular';
import { PLButtonComponent } from '../button.component';

const meta: Meta<PLButtonComponent> = {
    title: 'Components/Button',
    component: PLButtonComponent
}
export default meta;

type Story = StoryObj<PLButtonComponent>;

export const Default: Story = {
    args: {
        label: 'My Button'
    }
}