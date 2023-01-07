import cl from 'classnames'

import styles from './index.module.scss'

export const Button = ({ className, children, onClick, disabled }) => (
  <button disabled={disabled} onClick={onClick} className={cl(className, styles.button)}>
    {children}
  </button>
)
