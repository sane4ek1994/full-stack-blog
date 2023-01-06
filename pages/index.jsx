import { useState } from 'react'
import { Section, Cover, SocialNetworks, BuyMeCoffee, Title, PostGrid, Post } from '../components'
import { loadPosts } from './api/posts'

const LOAD_MORE_STEP = 4
export default function Home({ initialPosts, total }) {
  const [posts, setPosts] = useState(initialPosts)

  return (
    <div>
      <Section>
        <Cover title='Elena <br/> Litvinova' />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title> New Posts</Title>
        <PostGrid>
          {posts.map(post => (
            <Post key={post.slug.current} {...post} />
          ))}
        </PostGrid>
      </Section>
    </div>
  )
}

export const getServerSideProps = async () => {
  const { posts, total } = await loadPosts(0, LOAD_MORE_STEP)

  return {
    props: {
      initialPosts: posts,
      total
    }
  }
}
