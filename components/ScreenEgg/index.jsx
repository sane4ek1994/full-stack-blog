import cl from 'classnames'

import styles from './index.module.scss'

export const ScreenEgg = ({ type, children }) => (
  <div className={cl(styles.screenEgg, type === 'right' ? styles.right : styles.left)}>{children}</div>
)
