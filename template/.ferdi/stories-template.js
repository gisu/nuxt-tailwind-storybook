import { addParameters } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import <%= moduleName %> from './<%= moduleName %>.vue'
import componentNotes from './<%= moduleName %>.notes.md'

addParameters({ options: { showPanel: true } })

const paddedList = () => {
  return { template: '<div style="padding: 40px"><story/></div>'}
}

export default {
  title: 'Components|<%= modulePath.split('/')[0] %>/<%= moduleName %>',
  decorators: [paddedList, withKnobs],
  parameters: { notes: { markdown: componentNotes } }
}

export const <%= moduleName %>Test = () => ({
  components: { <%= moduleName %> },
  props: {},
  template: `
    <<%= moduleName %>>
      Hello World
    </<%= moduleName %>>
  `
})
