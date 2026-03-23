import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppHeader from '../components/AppHeader.vue'

describe('AppHeader', () => {
  it('renders app name and user name', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.text()).toContain('Ferda')
    expect(wrapper.text()).toContain('JAN MUSILEK')
  })

  it('toggles user menu on click', async () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('.user-menu').exists()).toBe(false)
    await wrapper.find('.user-button').trigger('click')
    expect(wrapper.find('.user-menu').exists()).toBe(true)
    await wrapper.find('.user-button').trigger('click')
    expect(wrapper.find('.user-menu').exists()).toBe(false)
  })
})
