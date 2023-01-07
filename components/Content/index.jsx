import cl from 'classnames'
import BlockContent from '@sanity/block-content-to-react'
import { clientConfig } from '../../lib/client'

import styles from './index.module.scss'

export const Content = ({ body }) => (
  <div className={cl(styles.content)}>
    <BlockContent
      blocks={body}
      imageOptions={{ w: 100, h: 100, fit: 'max' }}
      projectId={clientConfig.projectId}
      dataset={clientConfig.dataset}
    />
  </div>
)
