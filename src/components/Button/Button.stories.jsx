import React from 'react';

import { Button } from './index';

export default {
    title: 'DEMO/Button',
    component: Button,
    argTypes: {
        backgroundColor: {control:'color'},
    }
}

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Primary Button',
};

export const Second = Template.bind({});
Second.args = {
    primary: false,
    label: 'Second Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Large Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Small Button',
};