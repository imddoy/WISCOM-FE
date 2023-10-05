import React, { useState } from 'react';
import HashTag from './HashTag';

import * as C from './CommentStyle';

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [name, setName] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const maxLength = 150; // 최대 글자 수

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
    setCharCount(event.target.value.length);
  };

  const handleTagClick = (tagName) => {
    setSelectedTags((prevTags) => {
      if (prevTags.includes(tagName)) {
        return prevTags.filter((tag) => tag !== tagName);
      } else {
        return [...prevTags, tagName];
      }
    });
  };

  const handleCommentSubmit = () => {
    const date = new Date().toLocaleString(); // 현재 날짜 및 시간을 문자열로 가져옴
    // Add the new comment to the comments list
    const newCommentItem = { text: newComment, date, name, tags: selectedTags };
    setComments([newCommentItem, ...comments]);
    setNewComment(''); // Clear the input after submitting
    setCharCount(0); // Reset character count on submission
    setName('');
    setSelectedTags([]);
  };

  const isSubmitDisabled = newComment === '' || charCount > 150 || name === ''; //완료 버튼 비활성화 조건

  const tagList = ['1번', '2번', '3번', '4번', '5번'];

  const TagList = tagList.map((data, index) => {
    return <HashTag tagName={data} key={index} isSelected={selectedTags.includes(data)} onTagClick={handleTagClick} />; //onTagClick={handleTagClick}
  });

  return (
    <C.CommentWrapper>
      <C.CommetTextBox>
        <C.CommentTagList>{TagList}</C.CommentTagList>
        {/* name 받기 */}
        <C.CommentInput
          type="text"
          placeholder="이름을 입력해주세요" // 이름을 입력할 플레이스홀더 추가
          value={name}
          onChange={handleNameChange} // 이름을 입력하는 이벤트 핸들러 추가
        />
        <C.CommentTextArea
          placeholder="해시태그 선택 및 댓글을 작성해주세요"
          value={newComment}
          onChange={handleCommentChange}
          maxLength={maxLength}
        />
        <C.CommentCharCount className="charCount">{charCount} / 150</C.CommentCharCount>
      </C.CommetTextBox>

      <C.CommentButton onClick={handleCommentSubmit} disabled={isSubmitDisabled}>
        완료
      </C.CommentButton>

      <C.CommentList>
        {comments.map((comment, index) => (
          <C.CommentItem key={index}>
            <C.CommentInfoWrapper>
              <C.CommentInfo>
                <C.CommentAuthor>{comment.name}</C.CommentAuthor>
                <C.CommentDate>{comment.date}</C.CommentDate>
              </C.CommentInfo>

              <C.CommentContent>{comment.text}</C.CommentContent>
            </C.CommentInfoWrapper>

            {/* Display the selected tags */}
            {comment.tags && (
              <C.CommentTagsWrapper>
                {comment.tags.map((tag, index) => (
                  <C.CommentSelectedTag key={index}>
                    <C.CommentP>{tag}</C.CommentP>
                  </C.CommentSelectedTag>
                ))}
              </C.CommentTagsWrapper>
            )}
          </C.CommentItem>
        ))}
      </C.CommentList>
    </C.CommentWrapper>
  );
};

export default Comment;
