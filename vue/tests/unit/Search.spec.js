import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Search from '@/components/Search.vue'

describe('Search.vue', () => {
  it('renders props.query when passed', () => {
    const query = 'new query'
    const wrapper = shallowMount(Search, {
      propsData: { query }
    })
    expect(wrapper.find('input').element.value).to.equal(query)
  })
})
