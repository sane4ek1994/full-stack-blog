import cl from 'classnames'

import styles from './index.module.scss'

export const Title = ({ className, type, children }) => {
  if (type === 'small') {
    return <h3 className={cl(className, styles.title, styles.titleSmall)}>{children}</h3>
  }

  return <h2 className={cl(className, styles.title, styles.titleMedium)}>{children}</h2>
}
