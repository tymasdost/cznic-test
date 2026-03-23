import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StateFlagsCard from '../components/StateFlagsCard.vue'

const stateFlags = {
  flags: [
    { name: 'serverDeleteProhibited', active: true, description: 'Deletion forbidden' },
    { name: 'expired', active: false, description: 'Domain expired' },
    { name: 'expirationWarning', active: true, description: 'The domain expires in 30 days' },
  ],
  groups: [],
}

describe('StateFlagsCard', () => {
  it('shows only active flags in brief mode', () => {
    const wrapper = mount(StateFlagsCard, {
      props: { stateFlags, verbose: false },
    })
    const items = wrapper.findAll('.flag-item')
    expect(items.length).toBe(2)
    expect(wrapper.text()).toContain('Deletion forbidden')
    expect(wrapper.text()).toContain('The domain expires in 30 days')
    expect(wrapper.text()).not.toContain('Domain expired')
  })

  it('shows all flags in verbose mode', () => {
    const wrapper = mount(StateFlagsCard, {
      props: { stateFlags, verbose: true },
    })
    const items = wrapper.findAll('.flag-item')
    expect(items.length).toBe(3)
    expect(wrapper.text()).toContain('Domain expired')
  })
})
