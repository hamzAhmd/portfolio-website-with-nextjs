import React from 'react';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  RecommendationBox,
} from '../../styles/GlobalComponents';

const Timeline = () => {
  return (
    <Section id='about'>
      <SectionTitle>Recommendations</SectionTitle>
      <SectionText>
        I work on Upwork as a freelance frontend developer. Here is what clients
        say about me:
        <RecommendationBox>
          "Hamza delivered good work on this React development project and I
          enjoyed working with him. His communication was top-notch, he met all
          deadlines, and his skills were reasonably strong. He wrote code that
          was easily maintained and could be read easily which helped us perform
          quick changes. His ability to perform complex tasks quickly and
          efficiently was impeccable. I enjoyed working with Hamza and would
          definitely work with him again in the future." ~Arash (Viubox)
        </RecommendationBox>
        <RecommendationBox>
          "He is a freelancer you can rely on 100%. I had a lot of fun working
          with him. He is professional and understands his job. Hamza, it was an
          honor for me. See you on the next projects." ~Philip Domke
          (ampere.cloud)
        </RecommendationBox>
      </SectionText>
    </Section>
  );
};

export default Timeline;
