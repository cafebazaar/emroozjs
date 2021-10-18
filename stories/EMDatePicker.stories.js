import { EMDatePicker } from '../lib/index';

export default {
  title: 'Example/DatePicker',
  component: EMDatePicker,
  argTypes: {
    lang: {
      options: ['fa', 'en'],
      control: {
        type: 'select',
      },
    },
    type: {
      options: ['shamsi', 'miladi'],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { EMDatePicker },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be mapped to keys in the returned object
    return { args };
  },
  // Then, those values can be accessed directly in the template
  template: '<EMDatePicker v-bind="args" />',
});

export const Persian = Template.bind({});
Persian.args = {
  lang: 'fa',
};

export const English = Template.bind({});
English.args = {
  lang: 'en',
};

export const Miladi = Template.bind({});
Miladi.args = {
  type: 'miladi',
};

export const Shamsi = Template.bind({});
Shamsi.args = {
  type: 'shamsi',
};
