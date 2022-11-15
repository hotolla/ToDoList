import { Button, ButtonProps } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta <typeof Button>;

const Buttons: ComponentStory<typeof Button> = (props: ButtonProps) => {
  return <Button {...props} color={'primary'} />
};

const Template = (props: ButtonProps) => <Buttons {...props} />;

export const DefaultButton = Template.bind({});
(DefaultButton as any).props = {
   onClick(data: any) {
    console.log(data);
   },
};

