import styled from 'styled-components';
import WorkInfo from '../components/Project/WorkInfo';
import IntroWork from '../components/Project/IntroWork';
import ImageSlider from '../components/Project/ImageSlider';
import Developer from '../components/Project/Developer';
import Likes from '../components/Project/Likes';
import Comment from '../components/Project/Comment';

export default function Project() {
  return (
    <ProjectWrapper>
      <WorkInfo />
      <IntroWork />
      <ImageSlider />
      <Developer />
      <Likes />
      <Comment />
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 320px) {
    display: none;
  }
`;
