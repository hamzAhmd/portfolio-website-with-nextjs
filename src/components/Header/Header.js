import Link from 'next/link';
import React from 'react';
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';
import Image from 'next/image';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: '#f3f3f3' }}>
          <Image src='/logo192.png' width={64} height={64} alt='logo' />
          <Span>Hamza</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons
        aria-label='Github'
        href='https://github.com/hamzAhmd/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons
        aria-label='LinkedIn'
        href='https://linkedin.com/in/hamzAhmd'
        target='_blank'
        rel='noopener noreferrer'
      >
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons
        aria-label='Twitter'
        href='https://twitter.com/hamxahmd'
        target='_blank'
        rel='noopener noreferrer'
      >
        <AiFillTwitterCircle size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
