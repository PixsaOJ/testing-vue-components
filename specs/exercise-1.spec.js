import UserList from '@/exercise-1';
import { mount } from '@vue/test-utils';
import { name } from 'faker'

test('component renders the users', () => {
    const wrapper = mount(UserList, {
        propsData: {
            users: [ name.findName(), name.findName(), name.findName() ]
        }
    })
    const li = wrapper.find('li')

    // Exercise 1 part 1 make sure users get rendered
    let userNameElems = wrapper.findAll('li');
    expect(userNameElems.length).toBe(wrapper.props('users').length)

    // Exercise 1 part 2 make sure filter works
    const filter = wrapper.find('input')
    filter.element.value = wrapper.props('users')[0]
    filter.trigger('input')

    wrapper.vm.$nextTick(() => {
        expect(userNameElems.length).toBe(1)
    })

    expect(li.text()).toBe(wrapper.props('users')[0])

})