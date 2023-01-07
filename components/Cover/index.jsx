import cl from 'classnames'

import styles from './index.module.scss'

export const Cover = ({ title }) => (
  <div className={cl(styles.cover)}>
    <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
  </div>
)
