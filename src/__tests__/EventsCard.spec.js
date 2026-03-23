import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EventsCard from '../components/EventsCard.vue'

const events = {
  registered: { timestamp: '2002-01-14T14:56:00Z', registrar_handle: 'REG-CZNIC' },
  transferred: { timestamp: '2010-06-10T10:49:20.614Z', registrar_handle: 'REG-GENREG' },
  updated: { timestamp: '2016-12-27T14:12:25.714Z', registrar_handle: 'REG-GENREG' },
  unregistered: null,
}

describe('EventsCard', () => {
  it('renders all event rows', () => {
    const wrapper = mount(EventsCard, { props: { events } })
    expect(wrapper.text()).toContain('Create date:')
    expect(wrapper.text()).toContain('Update date:')
    expect(wrapper.text()).toContain('Transfer date:')
    expect(wrapper.text()).toContain('Delete date:')
  })

  it('renders registrar links for existing events', () => {
    const wrapper = mount(EventsCard, { props: { events } })
    expect(wrapper.text()).toContain('REG-CZNIC')
    expect(wrapper.text()).toContain('REG-GENREG')
  })

  it('leaves delete date empty when unregistered is null', () => {
    const wrapper = mount(EventsCard, { props: { events } })
    const rows = wrapper.findAll('tr')
    const deleteRow = rows[3]
    expect(deleteRow.text()).toBe('Delete date:')
  })
})
