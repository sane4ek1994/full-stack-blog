import cl from 'classnames'

import styles from './index.module.scss'

export const Title = ({ className, children }) => <h2 className={cl(className, styles.title)}>{children}</h2>
