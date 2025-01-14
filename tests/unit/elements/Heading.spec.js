import { shallowMount } from '@vue/test-utils'

import Heading from '@/elements/Heading/Heading'

describe('Heading.vue', () => {
  let propsData, slots, options

  beforeEach(() => {
    let level = 1
    let slot = '<span>Slot</span>'
    let inverted = true

    propsData = {
      level,
      inverted
    }
    slots = {
      default: slot
    }
    options = {
      propsData,
      slots
    }
  })

  it('renders correct tag', () => {
    const wrapper = shallowMount(Heading, options)

    expect(wrapper.is('h1')).toBe(true)
  })

  it('renders correct style', () => {
    const wrapper = shallowMount(Heading, options)

    expect(wrapper.element.classList).toContain('inverted')
  })

  it('renders correct slot', () => {
    const wrapper = shallowMount(Heading, options)

    expect(wrapper.find('span').exists()).toBe(true)
  })

  it('renders correct text', () => {
    const wrapper = shallowMount(Heading, options)

    expect(wrapper.text()).toEqual('Slot')
  })
})
