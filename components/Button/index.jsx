import cl from 'classnames'

import styles from './index.module.scss'

export const Button = ({ children, onClick, disabled }) => (
  <button disabled={disabled} onClick={onClick} className={cl(styles.button)}>
    {children}
  </button>
)
