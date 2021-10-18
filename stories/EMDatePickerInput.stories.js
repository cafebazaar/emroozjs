import { ref } from 'vue';
import { EMDatePickerInput } from '../lib/index';
import EMDatePickerStories from './EMDatePicker.stories';

export default {
  title: 'Example/DatePickerInput',
  component: EMDatePickerInput,
  argTypes: {
    ...EMDatePickerStories.argTypes,
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { EMDatePickerInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const val = ref(null);
    // Story args can be mapped to keys in the returned object
    return { args, val };
  },
  // Then, those values can be accessed directly in the template
  template: '<div style="max-width: 300px; width: 100%;"><EMDatePickerInput v-model="val" v-bind="args" /></div>',
});

export const Persian = Template.bind({});
Persian.args = {
  lang: 'fa',
};
Persian.parameters = {
  docs: {
    source: {
      code: `
        <EMDatePickerInput />
      `,
    },
  },
};

export const English = Template.bind({});
English.args = {
  lang: 'en',
};
English.parameters = {
  docs: {
    source: {
      code: `
        <EMDatePickerInput lang="en" />
      `,
    },
  },
};

export const Miladi = Template.bind({});
Miladi.args = {
  type: 'miladi',
};
Miladi.parameters = {
  docs: {
    source: {
      code: `
        <EMDatePickerInput type="miladi" />
      `,
    },
  },
};

export const Shamsi = Template.bind({});
Shamsi.args = {
  type: 'shamsi',
};
Shamsi.parameters = {
  docs: {
    source: {
      code: `
        <EMDatePickerInput type="shamsi" />
      `,
    },
  },
};

export const OnlyEvenDaysAllowed = Template.bind({});
OnlyEvenDaysAllowed.args = {
  allowedDates: (date) => date.getDate() % 2 === 0,
};
OnlyEvenDaysAllowed.parameters = {
  docs: {
    source: {
      code: `
        <EMDatePickerInput :allowedDates="(date) => date.getDate() % 2 === 0" />
      `,
    },
  },
};
