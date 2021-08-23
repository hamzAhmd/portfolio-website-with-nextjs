import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm Hamza,
        <br />
        Full Stack Developer
      </SectionTitle>
      <SectionText>
        Building modern and medium to large scale web applications, Business
        Portfolios and Ecommerce websites with MERN stack and multiple other
        technologies by providing efficient solutions.
      </SectionText>
      <Button>My Portfolio</Button>
    </LeftSection>
  </Section>
);

export default Hero;
