import BoxContainer from '@components/common/BoxContainer';
import { useState } from 'react';
import { Project } from 'src/models/project';
import LongCard from '../OpportunitiesAggregator/LongCard';
import ShortCard from '../OpportunitiesAggregator/ShortCard';
import PositionCard from './PositionCard';
import ProductHeader from './ProductHeader';
import {
  Card,
  CardButton,
  CardContent,
  CardWrapper,
  Container,
  PositionsList,
  Wrapper,
} from './styledProjectDetails';

interface Props {
  project: Project;
}

export default function ProjectDetails({ project }: Props) {
  const [expanded, setExpanded] = useState<string[]>([]);

  const IsExpanded = (id: string) => {
    return expanded.includes(id);
  };

  const handleExpand = (id: string) => {
    const items = IsExpanded(id)
      ? [...expanded.filter((el) => el !== id)]
      : [...expanded, id];

    setExpanded(items);
  };

  return (
    <Wrapper>
      <BoxContainer bgColor='OuterSpace' paddingVertical={32} marginTop={32}>
        <ProductHeader
          title={project.title}
          vision={project.vision}
          isPlatform={project.isPlatform}
          date={''}
          type='Product'
          maxCommitmentHours={8}
          minCommitmentHours={2}
          keywords={['Beginner friendly', 'Javascript', 'ReactJS', 'NodeJS']}
          username='Product Lead'
        />

        <LongCard
          longCard={{
            description: project.description,
            details: [
              {
                id: 0,
                detail: `Social media is constantly changing and coming up with something new, so come right in and expose us to your fresh ideas! We accept people of ALL skill levels, and want YOU to help us make this possible!
                `,
              },
              {
                id: 2,
                detail: `You! Yes, you! The one who understands the importance of building relationships and tailoring a unique experience for individuals. You will ...
                `,
              },
            ],
          }}
        ></LongCard>
      </BoxContainer>

      <BoxContainer bgColor='OuterSpace' paddingVertical={32}>
        <CardWrapper>
          {AboutCardsData.map(({ title, elements }, index) => (
            <Card key={index}>
              <h2>{title}</h2>
              <CardContent>
                {elements
                  .slice(0, IsExpanded(title) ? elements.length : 1)
                  .map((element, elIndex) => (
                    <p key={elIndex}>{element}</p>
                  ))}
                <CardButton onClick={() => handleExpand(title)}>
                  Read Full Description
                </CardButton>
              </CardContent>
            </Card>
          ))}
          {/* <Card>
            <h2>About Our Volunteers</h2>
            <CardContent>
              <p>
                You’re someone who cares about technology and the people whose
                lives it shapes. You’re looking to build something that matters
                alongside like-minded people. You are excited, ready to learn,
                and looking to grow.
              </p>
              <CardButton>Read Full Description</CardButton>
            </CardContent>
          </Card>

          <Card>
            <h2>About Dev Launchers</h2>
            <CardContent>
              <p>
                Dev Launchers is an international nonprofit organization
                dedicated to preparing people from diverse backgrounds to tackle
                future-proof careers. We are made up of people just like you.
              </p>
              <CardButton>Read Full Description</CardButton>
            </CardContent>
          </Card> */}
        </CardWrapper>
      </BoxContainer>
      <BoxContainer bgColor='OuterSpace' paddingVertical={32}>
        {/* <h1 style={{ marginTop: '0' }}>hello from project details page</h1>
        testing postion Card */}

        <Container>
          <h2>Available Positions</h2>

          <PositionsList>
            {[1, 2, 4, 5].map((position) => (
              <PositionCard
                key={position}
                position={samplePosition}
                projectSlug={project.slug}
              />
            ))}
          </PositionsList>
        </Container>
      </BoxContainer>
    </Wrapper>
  );
}

const samplePosition = {
  id: '1',
  title: 'Web Developer',
  level: 'Beginner',
  skills: ['React', 'html', 'css'],
  commitmentHoursPerWeek: '5 hrs per week',
  expectations: [
    'Self Sufficient learner',
    'Hands on learning experience',
    'Weekly meetings',
  ],
  description: `We are looking for a web developer who has some knowledge of React.js, HTML, and CSS. Experience using API's is appreciated but not required. All experience levels welcome, provided you are a willing and self-sufficient learner and a good communicator. You will: -work on a team of 6+ people -work alongside and coordinate with Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
};

const AboutCardsData = [
  {
    title: 'About Our Volunteers',
    elements: [
      `You’re someone who cares about technology and the people whose lives it shapes. You’re looking to build something that matters alongside like-minded people. You are excited, ready to learn, and looking to grow.`,
      `You want to work towards achieving a goal, you’re willing to work hard, and you’re not afraid to ask for help getting where you want to be! It's not about how much time you can spend, but about being here when you're here. When you work, you work hard.`,
    ],
  },
  {
    title: 'About Dev Launchers',
    elements: [
      `Dev Launchers is an international nonprofit organization dedicated to preparing people from diverse backgrounds to tackle future-proof careers. We are made up of people just like you.`,
      `Dev Launchers facilitates ambitious open source software projects, along with other projects centered around communities and products. We use those same projects to train our members in skills in the realm of software, leadership, community management, product development, marketing, and anything else that may be required to launch real world products. `,
    ],
  },
];