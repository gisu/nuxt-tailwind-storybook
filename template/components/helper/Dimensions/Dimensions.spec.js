// Vue Testfile
import { shallowMount } from '@vue/test-utils'
import Dimensions from '@/components/helper/Dimensions/Dimensions.vue'

describe('Testing Dimensions', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Dimensions)
  })

  it('is vue instance', () => {
    expect(wrapper.name()).toBe('Dimensions')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
