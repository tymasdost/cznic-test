import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactsCard from '../components/ContactsCard.vue'

const contacts = [
  {
    handle: 'KNIHOVNIK',
    organization: 'Neviditelna univerzita',
    name: 'Knihovnik',
    publish: { organization: true, name: true },
  },
  {
    handle: 'MRAKOPLAS',
    organization: 'Neviditelna univerzita',
    name: 'Mrakoplas',
    publish: { organization: false, name: false },
  },
]

describe('ContactsCard', () => {
  it('shows brief view with names and handles', () => {
    const wrapper = mount(ContactsCard, {
      props: { contacts, verbose: false },
    })
    expect(wrapper.findAll('.card').length).toBe(1)
    expect(wrapper.text()).toContain('Administrative contacts:')
    expect(wrapper.text()).toContain('KNIHOVNIK')
    expect(wrapper.text()).toContain('MRAKOPLAS')
  })

  it('shows detailed view with separate cards per contact', () => {
    const wrapper = mount(ContactsCard, {
      props: { contacts, verbose: true },
    })
    expect(wrapper.findAll('.card').length).toBe(2)
    expect(wrapper.text()).toContain('Organization:')
    expect(wrapper.text()).toContain('Name:')
  })
})
