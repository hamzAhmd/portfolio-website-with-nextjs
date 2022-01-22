import React from 'react';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: ' Tech', info: 'Inspired by Industrial Revolution 4.0' },
  { text: 'Cricket', info: 'Enthusiast Player and a fan' },
  { text: ' History', info: 'Passionate to learn more about history' },
  { text: 'Traveling', info: 'Love to explore nature' },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Interests</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.text}</BoxNum>
          <BoxText>{card.info}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
