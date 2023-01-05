import cl from 'classnames'

import styles from './index.module.scss'

export const Cover = ({ className, title }) => (
  <div className={cl(className, styles.cover)}>
    <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
  </div>
)
