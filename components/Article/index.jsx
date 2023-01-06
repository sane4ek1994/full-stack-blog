import Link from 'next/link'
import cl from 'classnames'

import styles from './index.module.scss'
import React from 'react'

export const Article = ({ children, className, backUrl }) => (
  <article className={cl(className, styles.article)}>
    <Link href={backUrl}>
      <a className={styles.acticleBack}>Back</a>
    </Link>
    <div className={styles.acticleContent}> {children}</div>
  </article>
)
