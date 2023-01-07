import cl from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { Title } from '../../components'

import { urlFor } from '../../lib/client'

import styles from './index.module.scss'

export const Post = ({ title, description, image, slug }) => (
  <Link className={cl(styles.post)} href={`/post/${encodeURIComponent(slug.current)}`}>
    <a className={styles.postLink}>
      <Title type='small' className={styles.postTitle}>
        {title}
      </Title>
      <div className={styles.postContent}>
        <div>
          <Image src={urlFor(image).url()} alt={image.capton} width='100' height='100' />
        </div>
        <p className={styles.postDescription}>{description}</p>
      </div>
    </a>
  </Link>
)
