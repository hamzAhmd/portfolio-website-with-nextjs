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
        <br />a Frontend Developer
      </SectionTitle>
      <SectionText>
        I build high-performing & modern applications <br />
        with React.js by consuming backend APIs
      </SectionText>

      <Link href='#footer'>
        <Button>Let's Connect </Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
