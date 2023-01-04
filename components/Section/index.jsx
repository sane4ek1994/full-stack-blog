import cl from 'classnames'

import styles from './index.module.scss'

export const Section = ({ className, children }) => {
  return <section className={cl(className, styles.section)}>{children}</section>
}
