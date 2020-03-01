import { addParameters } from '@storybook/vue'
import { withKnobs, number, text, boolean } from '@storybook/addon-knobs'
import Skeleton from './Skeleton.vue'
import componentNotes from './Skeleton.notes.md'

addParameters({ options: { showPanel: true } })

const paddedList = () => {
  return {
    template: '<div style="padding: 40px"><story/></div>'
  }
}

export default {
  title: 'Components|helper/Skeleton',
  decorators: [paddedList, withKnobs],
  parameters: {
    notes: { markdown: componentNotes }
  }
}

export const SkeletonTest = () => ({
  components: { Skeleton },
  props: {
    maxWidth: {
      default: number('minWidth', 100)
    },
    minWidth: {
      default: number('minWidth', 80)
    },
    height: {
      default: text('height', '100px')
    },
    width: {
      default: text('width', '100px')
    },
    round: {
      default: boolean('round', true)
    },
    fullSize: {
      default: boolean('fullSize', false)
    }
  },
  template: `
    <Skeleton :maxWidth="maxWidth" :minWidth="minWidth" :width="width" :height="height" :round="round" :fullSize="fullSize"/>
  `
})


