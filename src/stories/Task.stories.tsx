import { ComponentMeta, ComponentStory } from '@storybook/react';
import { number } from 'yup/lib/locale';
import { Task } from '../components/Task';
import { ITask } from '../types/task.types';

export default {
  title: 'Task',
  component: Task
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => {
  return (
    <Task {...args} />
  );
};

export const Default = Template.bind({});
Default.args = {
  task: {
    "id": 1657549282376,
    "name": "тест модал",
    "description": "кункге",
    "isDone": true,
    time: null
  }
};

// export const Pinned = Template.bind({});
// Pinned.arguments = {
//   task: {
//     ...Default.arguments.task,
//     state: 'TASK_PINNED',
//   },
// };

// export const Archived = Template.bind({});
// Archived.arguments = {
//   task: {
//     ...Default.arguments.task,
//     state: 'TASK_ARCHIVED',
//   },
// };
