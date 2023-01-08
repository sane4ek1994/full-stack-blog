import cl from 'classnames'

import styles from './index.module.scss'

export const Title = ({ type, children }) => {
  if (type === 'small') {
    return <h3 className={cl(styles.title, styles.small)}>{children}</h3>
  }

  return <h2 className={cl(styles.title, styles.medium)}>{children}</h2>
}
