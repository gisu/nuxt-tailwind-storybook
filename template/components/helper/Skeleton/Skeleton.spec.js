// Vue Testfile
import { shallowMount } from '@vue/test-utils'
import Skeleton from '@/components/helper/Skeleton/Skeleton.vue'

describe('Testing Skeleton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Skeleton)
  })

  it('is vue instance', () => {
    expect(wrapper.name()).toBe('Skeleton')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
