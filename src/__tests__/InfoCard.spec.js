import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InfoCard from '../components/InfoCard.vue'

const domain = {
  expires_at: '2021-01-15T00:00:00Z',
}

describe('InfoCard', () => {
  it('renders SHOW button initially', () => {
    const wrapper = mount(InfoCard, { props: { domain } })
    expect(wrapper.find('.show-btn').exists()).toBe(true)
    expect(wrapper.find('.auth-password').exists()).toBe(false)
  })

  it('shows password after clicking SHOW', async () => {
    const wrapper = mount(InfoCard, { props: { domain } })
    await wrapper.find('.show-btn').trigger('click')
    expect(wrapper.find('.show-btn').exists()).toBe(false)
    expect(wrapper.find('.auth-password').exists()).toBe(true)
  })

  it('renders expiry date', () => {
    const wrapper = mount(InfoCard, { props: { domain } })
    expect(wrapper.text()).toContain('Expires at:')
    expect(wrapper.text()).toContain('2021')
  })
})
