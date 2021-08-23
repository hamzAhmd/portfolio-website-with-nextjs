import React from 'react';

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
        <br />a Full Stack Developer
      </SectionTitle>
      <SectionText>
        I build modern applications, business portfolios & ecommerce websites
        with latest technologies by providing high-performing & efficient
        solutions.
      </SectionText>
      <Button>Let's Talk</Button>
    </LeftSection>
  </Section>
);

export default Hero;
