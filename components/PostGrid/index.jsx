import cl from 'classnames'

import styles from './index.module.scss'

export const PostGrid = ({ className, children }) => <div className={cl(className, styles.postGrid)}>{children}</div>
