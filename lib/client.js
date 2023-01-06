import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const clientConfig = {
  projectId: 'xu6emnmj',
  dataset: 'production'
}

export const client = sanityClient({
  projectId: clientConfig.projectId,
  dataset: clientConfig.dataset,
  apiVersion: '2023-01-06',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true,
  ignoreBrowserTokenWarning: true
})

const builder = imageUrlBuilder(client)

export const urlFor = source => builder.image(source)
