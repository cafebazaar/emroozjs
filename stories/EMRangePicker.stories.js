import { EMRangePicker } from '../lib/index';

export default {
  title: 'Example/RangePicker',
  component: EMRangePicker,
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
  components: { EMRangePicker },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be mapped to keys in the returned object
    return { args };
  },
  // Then, those values can be accessed directly in the template
  template: '<EMRangePicker v-bind="args" />',
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

const lastWeek = new Date();
lastWeek.setDate(lastWeek.getDate() - 7);
export const WithCommonDates = Template.bind({});
WithCommonDates.args = {
  commonDates: [
    {
      to: new Date(),
      from: lastWeek,
      label: 'هفته اخیر',
    },
  ],
};

export const OnlyOddDays = Template.bind({});
OnlyOddDays.args = {
  allowedDates: (date) => date.getDay() % 2 === 1,
};
