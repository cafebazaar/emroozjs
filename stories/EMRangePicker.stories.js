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
      table: {
        defaultValue: {
          summary: 'fa',
        },
        type: {
          summary: 'fa | en',
        },
      },
    },
    type: {
      options: ['shamsi', 'miladi'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: {
          summary: 'shamsi',
        },
        type: {
          summary: 'shamsi | miladi',
        },
      },
    },
    allowedDates: {
      description: 'A function which receives date as arg and returns boolean to specify whether the date should be disabled or not.',
      table: {
        defaultValue: {
          summary: 'null',
        },
        type: {
          summary: '(date: Date) => boolean',
        },
      },
    },
    commonDates: {
      description: 'List of common dates which can be selected by used.',
      table: {
        defaultValue: {
          summary: '[]',
        },
        type: {
          summary: `{
              label: string;
              from: Date;
              to: Date;
            }[]`,
        },
      },
    },
    rangePickerClass: {
      description: 'A class which will be added directly to RangePicker.',
      table: {
        defaultValue: {
          summary: '',
        },
        type: {
          summary: 'string',
        },
      },
    },
    modelValue: {
      table: {
        defaultValue: {
          summary: 'null',
        },
        type: {
          summary: 'Date',
        },
      },
    },
    '@update:modelValue': {
      control: {
        action: 'update:modelValue',
      },
      table: {
        type: {
          summary: `{
              from: Date;
              to: Date;
            }`,
        },
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
Persian.parameters = {
  docs: {
    source: {
      code: `
        <EMRangePicker />
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
        <EMRangePicker lang="en" />
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
        <EMRangePicker type="miladi" />
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
        <EMRangePicker type="shamsi" />
      `,
    },
  },
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
WithCommonDates.parameters = {
  docs: {
    source: {
      code: `
      <script setup>
        const lastWeek = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7);
      </script>
      <template>
        <EMRangePicker :commonDates="[
          {
            to: new Date(),
            from: lastWeek,
            label: 'هفته اخیر',
          },
        ]" />
      </template>
      `,
    },
  },
};

export const OnlyEvenDaysAllowed = Template.bind({});
OnlyEvenDaysAllowed.args = {
  allowedDates: (date) => date.getDay() % 2 === 0,
};
OnlyEvenDaysAllowed.parameters = {
  docs: {
    source: {
      code: `
        <EMRangePicker :allowedDates="(date) => date.getDay() % 2 === 0" />
      `,
    },
  },
};
