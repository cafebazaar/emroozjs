// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { ref } from 'vue';
import { EMRangePickerInput } from '../lib/index';
import EMRangePickerStories from './EMRangePicker.stories';

export default {
  title: 'Example/RangePickerInput',
  component: EMRangePickerInput,
  argTypes: {
    ...EMRangePickerStories.argTypes,
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { EMRangePickerInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const val = ref(null);
    const updateModelValue = action('update:modelValue');

    function update(value) {
      updateModelValue(value);
      val.value = value;
    }
    // Story args can be mapped to keys in the returned object
    return { args, val, update };
  },
  // Then, those values can be accessed directly in the template
  template: `
    <div style="max-width: 300px; width: 100%; margin: auto;">
      <EMRangePickerInput v-bind="args" @update:modelValue="update" :modelValue="val" />
    </div>
    `,
});

export const Persian = Template.bind({});
Persian.args = {
  lang: 'fa',
};
Persian.parameters = {
  docs: {
    source: {
      code: `
<script setup>
  import { EMRangePickerInput } from '@cafebazaar/emrooz';
</script>
<template>
  <EMRangePickerInput />
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
  import { EMRangePickerInput } from '@cafebazaar/emrooz';
</script>
<template>
  <EMRangePickerInput lang="en"  />
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
  import { EMRangePickerInput } from '@cafebazaar/emrooz';
</script>
<template>
  <EMRangePickerInput type="miladi"  />
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
  import { EMRangePickerInput } from '@cafebazaar/emrooz';
</script>
<template>
  <EMRangePickerInput type="shamsi"  />
</template>
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
  import { EMRangePickerInput } from '@cafebazaar/emrooz';

  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);
</script>
<template>
  <EMRangePickerInput :commonDates="[
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
<script setup>
  import { EMRangePickerInput } from '@cafebazaar/emrooz';
</script>
<template>
  <EMRangePickerInput :allowedDates="(date) => date.getDay() % 2 === 0"  />
</template>
      `,
    },
  },
};
