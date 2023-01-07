import Link from 'next/link'
import cl from 'classnames'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import styles from './index.module.scss'
import React from 'react'

export const Article = ({ children, backUrl }) => (
  <article className={cl(styles.article)}>
    <Link href={backUrl}>
      <a className={styles.back}>
        <AiOutlineArrowLeft />
      </a>
    </Link>
    <div className={styles.content}> {children}</div>
  </article>
)
