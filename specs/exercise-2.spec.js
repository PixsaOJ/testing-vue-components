import ExerciseForm from '@/exercise-2';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue'

test('follow the user trough form', async () => {
    const wrapper = mount(ExerciseForm)
    expect(wrapper).toMatchSnapshot()

    const form = wrapper.find('form')

    const input = form.find('input')
    const tasksList = wrapper.find('ul')

    input.setValue('my todo')
    form.trigger('submit')

    await nextTick()
    expect(wrapper).toMatchSnapshot()

    // Exercise 2 click button and check if its removed
    tasksList.find('li').find('button').trigger('click')
    await nextTick()
    expect(wrapper).toMatchSnapshot()

    expect(tasksList.findAll('li').length).toBe(0)
}) 