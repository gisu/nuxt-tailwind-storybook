import { addParameters } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import Dimensions from './Dimensions.vue'
import componentNotes from './Dimensions.notes.md'

addParameters({ options: { showPanel: true } })

const paddedList = () => {
  return {
    template: '<div style="padding: 40px"><story/></div>'
  }
}

export default {
  title: 'Components|helper/Dimensions',
  decorators: [paddedList, withKnobs],
  parameters: {
    notes: { markdown: componentNotes }
  }
}

export const DimensionsTest = () => ({
  components: { Dimensions },
  props: {},
  template: `
    <Dimensions>
      <h3
        slot-scope="{ width }"
        :class="[width > 400 ? 'bg-red-500' : 'bg-blue-500']"
      >
        Some text
      </h3>
    </Dimensions>
  `
})
