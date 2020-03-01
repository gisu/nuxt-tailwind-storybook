import { storiesOf } from '@storybook/vue'

storiesOf('Basic|General', module)
  .addParameters({ options: { showPanel: false } })
  .add('Introduction', () => ({
    template: `
      <div style="padding: 50px;">
        <header class="mb-20px">
          <h1 class="text-5xl font-bold text-center">Introduction</h1>
        </header>
        <hr class="hairline">
      </div>
    `
  }))
