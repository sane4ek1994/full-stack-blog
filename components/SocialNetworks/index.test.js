import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { SocialNetworks } from './index'

it('expect to render SocialNetworks component', () => {
  const SocialNetworksComponent = shallow(<SocialNetworks />)

  expect(toJson(SocialNetworksComponent)).toMatchSnapshot()
})
