import { addParameters } from '@storybook/vue'
import { withKnobs, select } from '@storybook/addon-knobs'
import HeightExpander from './HeightExpander.vue'
import componentNotes from './HeightExpander.notes.md'

addParameters({ options: { showPanel: true } })

const timing = ['fast', 'slow', 'moderate']

const paddedList = () => {
  return {
    template: '<div style="padding: 40px"><story/></div>'
  }
}

export default {
  title: 'Components|helper/HeightExpander',
  decorators: [paddedList, withKnobs],
  parameters: {
    notes: { markdown: componentNotes }
  }
}

export const HeightExpanderTest = () => ({
  components: { HeightExpander },
  props: {
    timing: {
      default: select('timing', timing, 'fast')
    }
  },
  data () {
    return {
      expanded: false
    }
  },
  template: `
    <div>
      <HeightExpander :timing="timing">
        <div v-if="expanded">
          Magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor
          sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt
          ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores et
          ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
        </div>
      </HeightExpander>
      <div
        style="background: #dfdfdf; cursor: pointer; padding: 10px"
        @click="expanded = !expanded"
      >{{ expanded ? 'Shrink' : 'Expand' }}</div>
    </div>
  `
})


