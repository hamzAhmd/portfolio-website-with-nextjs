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
      <SectionTitle>Recommendations</SectionTitle>

      <SectionText>
        I work on Upwork as a freelance frontend developer. Here is what clients
        say about me:
      </SectionText>
      <SectionText>
        <i>
          "Hamza delivered good work on this React development project and I
          enjoyed working with him. His communication was top-notch, he met all
          deadlines, and his skills were reasonably strong. He wrote code that
          was easily maintained and could be read easily which helped us perform
          quick changes. His ability to perform complex tasks quickly and
          efficiently was impeccable. I enjoyed working with Hamza and would
          definitely work with him again in the future." ~Arash (Viubox)
        </i>
      </SectionText>
      <SectionText>
        <i>
          "Hamza is an extremely talented and skilled Web Developer, best that I
          have ever worked with. I recently collaborated with him to work on my
          portfolio site and he came up with amazing results. He knows his stuff
          very well. His clear communication, punctuality & intelligence is
          icing on the cake. I highly endorse him." ~M.Yamman (Brand designer)
        </i>
      </SectionText>

      <SectionDivider />
    </Section>
  );
};

export default Timeline;
