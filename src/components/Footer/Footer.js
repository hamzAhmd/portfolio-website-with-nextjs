import React from 'react';
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id='footer'>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem
            href='tel:+923030626882'
            target='_blank'
            rel='noopener noreferrer'
          >
            +92-303-0626882
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem
            href='mailto:hamzAhmd.dev@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            hamzAhmd.dev@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Keep Learning and Keep Growing</Slogan>
        </CompanyContainer>
        <SocialContainer>
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
