import GithubCard from '@/github-card'
import { mount } from '@vue/test-utils'

describe('methods', () => {
    test('composeUrl', () => {
        const { composeUrl } = GithubCard.methods
        expect(composeUrl(123)).toBe('https://api.github.com/users/123')
        expect(composeUrl('PixsaOJ')).toBe('https://api.github.com/users/PixsaOJ')
    })

    test('fetchData', async () => {
        const jsonMock = jest.fn().mockResolvedValue('GITHUB DATA') // response mock
        window.fetch = jest.fn().mockResolvedValue({ // fetch function mock
            json: jsonMock
        })

        const wrapper = mount(GithubCard, {
            methods: {
                composeUrl: () => 'url'
            }
        })

        await wrapper.vm.fetchData()

        expect(window.fetch).toHaveBeenCalledWith('url')
        expect(jsonMock).toHaveBeenCalled()
        expect(wrapper.vm.data).toBe('GITHUB DATA')

    })
})
