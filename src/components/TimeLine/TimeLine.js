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
        Hello! I'm Hamza Ahmad from Pakistan. I'm a self taught developer,
        building efficient projects both for clients and to enhance my skillset.
        I started my web development journey after pandemic in 2020 by realizing
        the potential & growth opportunities. Later, while gradually enhancing
        my skills, I got my passion in this field.
      </SectionText>
      <SectionText>
        Web app development is something that I always wanted to do. I'm a
        Mechatronics Engineering graduate. When I was building my final year
        project with my team, the only thing lacking in my project was the
        application to complete the product.
      </SectionText>
      <SectionText>
        I'm a kind of person who doesn't stop unless explore something.
        Therefore, I keep exploring multiple methods of building web
        applications. Now, I feel more confident to build full scale
        applications and to solve business problems.
      </SectionText>
      <SectionText>
        Check out my projects on GitHub and I mostly share about my progress and
        web development tips and resoruces on Twitter. I'm also available to
        hire for your projects. Feel free to contact me.
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
