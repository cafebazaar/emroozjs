import { EMRangePicker } from '../lib/index';

export default {
  title: 'Example/RangePicker',
  component: EMRangePicker,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { EMRangePicker },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be mapped to keys in the returned object
    return { lang: args.lang };
  },
  // Then, those values can be accessed directly in the template
  template: '<EMRangePicker :lang="lang" />',
});

export const Persian = Template.bind({});
Persian.args = {
  lang: 'fa',
};
