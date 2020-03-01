import { addParameters } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import ModalPorter from './ModalPorter.vue'
import componentNotes from './ModalPorter.notes.md'

addParameters({ options: { showPanel: true } })

const paddedList = () => {
  return {
    template: '<div style="padding: 40px"><story/></div>'
  }
}

export default {
  title: 'Components|helper/ModalPorter',
  decorators: [paddedList, withKnobs],
  parameters: {
    notes: { markdown: componentNotes }
  }
}

export const ModalPorterTest = () => ({
  components: { ModalPorter },
  props: {},
  data () {
    return {
      modalState: false
    }
  },
  template: `
    <div>
      <button @click="modalState = true">
        Open Modal
      </button>
      <ModalPorter
        :open-state="modalState"
        modal-style="rounded mx-4"
        modal-width="max-w-md w-full p-10"
        @closeModal="modalState = false"
      >
        Hello World
      </ModalPorter>
      <portal-target
        name="modal-place"
        multiple
      />
    </div>
  `
})


