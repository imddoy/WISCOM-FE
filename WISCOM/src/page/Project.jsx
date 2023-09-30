import styled from 'styled-components';

import WorkInfo from '../components/Project/WorkInfo';
import IntroWork from '../components/Project/IntroWork';
import Developer from '../components/Project/Developer';

export default function Project() {
  return (
    <ProjectWrapper>
      <WorkInfo />
      <IntroWork />
      <Developer />
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
