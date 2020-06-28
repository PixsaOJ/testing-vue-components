import TestComponent from '@/test'
import List from '@/list'
import {
    mount,
    shallowMount
} from '@vue/test-utils'


test('mount  a vue component', () => {
    const wrapper = mount(TestComponent, {
        propsData: {
            value: 'VueSchool'
        }
    })
    expect(wrapper).toMatchSnapshot()
})

// test('ListComponent shallow', () => {
//     console.log(mount(List).html())
//     console.log(shallowMount(List).html())
// })

test('ListComonent:', () => {
    const wrapper = mount(List)
    const movies = wrapper.vm.marvelMovies;
    wrapper.setData({
        marvelMovies: [...movies, 'Endgame']
    });
    wrapper.vm.$nextTick(() => {
        expect(wrapper).toMatchSnapshot();
    })
});