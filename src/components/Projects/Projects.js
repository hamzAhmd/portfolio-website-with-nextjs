import React from 'react';
import Image from 'next/image';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Featured Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, alt, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Image
              src={image}
              width={640}
              height={360}
              alt={alt}
              style={{ objectFit: 'cover', overflow: 'hidden' }}
            />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <li>
                <ExternalLinks
                  href={source}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Code
                </ExternalLinks>
              </li>
              <li>
                <ExternalLinks
                  href={visit}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Visit
                </ExternalLinks>
              </li>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
