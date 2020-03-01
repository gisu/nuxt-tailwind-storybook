// Vue Testfile
import { shallowMount } from '@vue/test-utils'
import ModalPorter from '@/components/helper/ModalPorter/ModalPorter.vue'

describe('Testing ModalPorter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(ModalPorter)
  })

  it('is vue instance', () => {
    expect(wrapper.name()).toBe('ModalPorter')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
