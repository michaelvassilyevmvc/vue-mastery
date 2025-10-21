// eslint-disable no-undef
import axios from 'axios'
import { mount, flushPromises } from '@vue/test-utils'
import PostCard from '@/components/PostCard.vue'

const mockPost = {
  userId: 1,
  id: 1,
  title: 'Post title 1',
  body: 'Simple post body...'
}

describe('Post Card Component', () => {
  test('created posts render correctly', () => {
    const title = 'Test Post'
    const body = 'test post body...'
    const wrapper = mount(PostCard, {
      props: { title, body }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
