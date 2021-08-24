import React from 'react';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';

const Timeline = () => {
  return (
    <Section id='about'>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Hey! I am Hamza Ahmad and I'm a Full Stack Developer
      </SectionText>

      <SectionDivider />
    </Section>
  );
};

export default Timeline;
