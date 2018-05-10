// import { expect } from 'chai'
import { shallow, mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import HelloWorld from '@/components/HelloWorld.vue'
import { FETCH_USERS } from '@/store/user.mutations'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HelloWorld.vue', () => {
  const msg = 'new message'
  let actions
  let getters
  let store

  beforeEach(() => {
    actions = {
      [FETCH_USERS]: jest.fn()
    }
    getters = {
      users: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      actions,
      getters
    })
  })

  it('renders props.msg when passed', () => {
    const wrapper = shallow(HelloWorld, { propsData: { msg }, store, localVue })
    expect(wrapper.text()).toMatch(msg)
  })

  it(`calls store action '${[FETCH_USERS]}' when mounted`, () => {
    mount(HelloWorld, { propsData: {msg}, store, localVue })
    expect(actions.fetchUsers).toHaveBeenCalled()
  })
})
