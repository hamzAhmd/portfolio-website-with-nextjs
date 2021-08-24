import React from 'react';
import Link from 'next/link';
import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm Hamza,
        <br />
        Full Stack Developer
      </SectionTitle>
      <SectionText>
        I build modern applications, business portfolios & ecommerce websites by
        providing high-performing & efficient solutions.
      </SectionText>

      <Link href='#footer'>
        <Button>Let's Connect </Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
