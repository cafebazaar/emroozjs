// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
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
    datePickerClass: {
      description: 'A class which will be added directly to DatePicker.',
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
          summary: 'Date',
        },
      },
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { EMDatePicker },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const updateModelValue = action('update:modelValue');
    // Story args can be mapped to keys in the returned object
    return { args, updateModelValue };
  },
  // Then, those values can be accessed directly in the template
  template: '<EMDatePicker @update:modelValue="updateModelValue" v-bind="args" />',
});

export const Persian = Template.bind({});
Persian.parameters = {
  docs: {
    source: {
      code: `
<script setup>
  import { EMDatePicker } from '@cafebazaar/emrooz';
</script>
<template>
  <EMDatePicker />
</template>
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
<script setup>
  import { EMDatePicker } from '@cafebazaar/emrooz';
</script>
<template>
  <EMDatePicker lang="en" />
</template>
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
<script setup>
  import { EMDatePicker } from '@cafebazaar/emrooz';
</script>
<template>
  <EMDatePicker type="miladi" />
</template>
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
<script setup>
  import { EMDatePicker } from '@cafebazaar/emrooz';
</script>
<template>
  <EMDatePicker type="shamsi" />
</template>
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
<script setup>
  import { EMDatePicker } from '@cafebazaar/emrooz';
</script>
<template>
  <EMDatePicker :allowedDates="(date) => date.getDate() % 2 === 0" />
</template>
      `,
    },
  },
};
