import { Section, Cover, SocialNetworks, BuyMeCoffee, Title } from '../components'

export default function Home() {
  return (
    <div>
      <Section>
        <Cover title='Elena <br/> Litvinova' />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title> New Posts</Title>
      </Section>
    </div>
  )
}
