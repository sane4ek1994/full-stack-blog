import cl from 'classnames'

import { ScreenEgg } from '../ScreenEgg'

import styles from './index.module.scss'

export const BuyMeCoffee = () => (
  <ScreenEgg type='right'>
    <div className={cl(styles.buyCoffee)}>
      <a
        className={styles.buttonBuyCoffee}
        rel='noreferrer'
        href='https://buy.stripe.com/test_7sI29p5r31W5geYeUU'
        target='_blank'
      >
        Buy me a coffee...
      </a>
    </div>
  </ScreenEgg>
)
