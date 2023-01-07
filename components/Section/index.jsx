import cl from 'classnames'

import styles from './index.module.scss'

export const Section = ({ children }) => <section className={cl(styles.section)}>{children}</section>
