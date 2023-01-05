import cl from 'classnames'

import styles from './index.module.scss'

export const Article = ({ children, className }) => (
  <article className={cl(className, styles.article)}>{children}</article>
)
