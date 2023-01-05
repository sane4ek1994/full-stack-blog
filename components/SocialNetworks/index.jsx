import cl from 'classnames'
import React from 'react'
import { AiFillYoutube, AiFillGithub, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

import { ScreenEgg } from '../ScreenEgg'

import styles from './index.module.scss'

const socialNetworks = [
  { id: 1, href: 'https://github.com/sane4ek1994', icon: AiFillGithub },
  { id: 2, href: 'https://www.youtube.com/', icon: AiFillYoutube },
  { id: 3, href: 'https://www.twitter.com/', icon: AiFillTwitterCircle },
  { id: 4, href: 'https://www.instagram.com/', icon: AiFillInstagram },
  { id: 5, href: 'https://www.linkedin.com/', icon: AiFillLinkedin }
]

export const SocialNetworks = ({ className }) => (
  <ScreenEgg>
    <ul className={cl(className, styles.list)}>
      {socialNetworks.map(socialNetwork => (
        <li key={socialNetwork.id} className={styles.listItem}>
          <a className={styles.listLink} href={socialNetwork.href} target='_blank' rel='noreferrer'>
            {React.createElement(socialNetwork.icon, {
              color: 'black',
              size: 50
            })}
          </a>
        </li>
      ))}
    </ul>
  </ScreenEgg>
)
