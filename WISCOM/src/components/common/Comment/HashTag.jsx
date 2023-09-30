import React, { useState, useEffect } from 'react';
import './hashtag.css';

const HashTag = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const tagName = props.tagName;

  const handleTagClick = () => {
    setIsClicked(!isClicked);
  };

  const tagBoxClass = isClicked ? 'tag-box clicked' : 'tag-box';

  return (
    <div className={tagBoxClass} onClick={handleTagClick}>
      {/* onClick={() => props.onTagClick(tagName)} */}
      {/* 배경 박스 */}

      <p>{tagName}</p>
    </div>
  );
};

export default HashTag;
