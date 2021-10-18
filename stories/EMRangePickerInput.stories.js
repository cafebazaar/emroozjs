import { ref, computed } from 'vue';
import { EMRangePickerInput } from '../lib/index';

export default {
  title: 'Example/RangePickerInput',
  component: EMRangePickerInput,
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
  components: { EMRangePickerInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const val = ref(null);
    const direction = computed(() => (args.lang === 'fa' ? 'rtl' : 'ltr'));
    // Story args can be mapped to keys in the returned object
    return { args, val, direction };
  },
  // Then, those values can be accessed directly in the template
  template: `
    <div :direction="direction" style="max-width: 300px; width: 100%;">
      <EMRangePickerInput v-bind="args" v-model="val" />
    </div>
    `,
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
