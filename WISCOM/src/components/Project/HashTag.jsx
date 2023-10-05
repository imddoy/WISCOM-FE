import React, { useState, useEffect } from 'react';
import '../common/Comment/hashtag.css';
import * as H from './HashTagStyle';

const HashTag = (props) => {
  //const [isClicked, setIsClicked] = useState(false);
  const { onTagClick, tagName, isSelected } = props;

  const handleTagClick = () => {
    //setIsClicked(!isClicked);
    onTagClick(tagName); // Notify the parent component about the tag click and its content
  };

  const tagBoxClass = isSelected ? 'tag-box clicked' : 'tag-box';

  return (
    <H.HashTagWrapper className={tagBoxClass} onClick={handleTagClick}>
      {/* onClick={() => props.onTagClick(tagName)} */}
      {/* 배경 박스 */}

      <H.HashTagSpan>{tagName}</H.HashTagSpan>
    </H.HashTagWrapper>
  );
};

export default HashTag;
