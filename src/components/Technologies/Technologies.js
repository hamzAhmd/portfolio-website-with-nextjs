import React from 'react';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiDatabase,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiGit,
} from 'react-icons/di';
import { SiNextDotJs, SiMaterialUi, SiRedux, SiSass } from 'react-icons/si';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      My skills are not confined only to MERN stack but I've worked with
      multiple web technologies
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <div>
            <DiReact size='5rem' />
          </div>
          <ListParagraph>React</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <div>
            <DiDatabase size='5rem' />
          </div>
          <ListParagraph>MongoDB </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <div>
            <DiNodejs size='5rem' />
          </div>
          <ListParagraph>Node</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <div>
            <SiNextDotJs size='5rem' />
          </div>
          <ListParagraph>Next.js</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <div>
            <SiRedux size='5rem' />
          </div>
          <ListParagraph>Redux</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <div>
            <DiJavascript1 size='5rem' />
          </div>
          <ListParagraph>JavaScript</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <div>
            <SiMaterialUi size='5rem' />
          </div>
          <ListParagraph>Material-UI</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <div>
            <DiHtml5 size='5rem' />
          </div>
          <ListParagraph>HTML5</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <div>
            <DiCss3 size='5rem' />
          </div>
          <ListParagraph>CSS3</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <div>
            <SiSass size='5rem' />
          </div>
          <ListParagraph>Sass</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <div>
            <DiBootstrap size='5rem' />
          </div>
          <ListParagraph>Bootstrap</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <div>
            <DiGit size='5rem' />
          </div>
          <ListParagraph>Git</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
