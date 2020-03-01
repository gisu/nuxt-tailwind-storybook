// Vue Testfile
import { shallowMount } from '@vue/test-utils'
import HeightExpander from '@/components/helper/HeightExpander/HeightExpander.vue'

describe('Testing HeightExpander', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(HeightExpander)
  })

  it('is vue instance', () => {
    expect(wrapper.name()).toBe('HeightExpander')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
