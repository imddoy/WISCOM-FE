import React, { useState, useEffect } from 'react';
import './hashtag.css';

const HashTag = (props) => {
  //const [isClicked, setIsClicked] = useState(false);
  const { onTagClick, tagName, isSelected } = props;

  const handleTagClick = () => {
    //setIsClicked(!isClicked);
    onTagClick(tagName); // Notify the parent component about the tag click and its content
  };

  const tagBoxClass = isSelected ? 'tag-box clicked' : 'tag-box';

  return (
    <div className={tagBoxClass} onClick={handleTagClick}>
      {/* onClick={() => props.onTagClick(tagName)} */}
      {/* 배경 박스 */}

      <p>{tagName}</p>
    </div>
  );
};

export default HashTag;
