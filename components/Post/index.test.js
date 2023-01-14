import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Post } from './index'

it('expect to render Post component', () => {
  const mockPost = {
    title: 'Additional post',
    description: 'text',
    image: { asset: { _ref: 'image-17019027e1c135d42a7d79d9529b6463856eb408-119x124-svg' } },
    slug: { _type: 'slug', current: 'additional-post' }
  }
  const postComponent = shallow(<Post {...mockPost} />)

  expect(toJson(postComponent)).toMatchSnapshot()
})
