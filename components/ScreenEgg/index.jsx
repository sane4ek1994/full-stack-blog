import cl from 'classnames'

import styles from './index.module.scss'

export const ScreenEgg = ({ className, type, children }) => {
  return (
    <div className={cl(className, styles.screenEgg, type === 'right' ? styles.screenEggRight : styles.screenEggLeft)}>
      {children}
    </div>
  )
}
