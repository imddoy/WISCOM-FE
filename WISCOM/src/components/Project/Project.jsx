import React from 'react';
import './Project.css';
import WorkInfo from './../components/Project/WorkInfo';
import IntroWork from './../components/Project/IntroWork';
import Developer from './../components/Project/Developer';

function Project() {
  return (
    <div className="Project">
      <WorkInfo />
      <IntroWork />
      <Developer />
    </div>
  );
}
export default Project;
