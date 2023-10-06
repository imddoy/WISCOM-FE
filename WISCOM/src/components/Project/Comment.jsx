import React, { useState, useEffect } from 'react';
import HashTag from './HashTag';
import * as C from './CommentStyle';

const Comment = () => {
  const [comments, setComments] = useState([]); // 입력된 내용을 저장하는 배열
  const [newComment, setNewComment] = useState(''); //댓글
  const [name, setName] = useState(''); //이름
  const [selectedTags, setSelectedTags] = useState([]); //해시태그 선택
  const maxLength = 150; // 최대 글자 수

  const commentsPerPage = 6; // 한 페이지에 보일 댓글 수
  const [currentPage, setCurrentPage] = useState(1); //페이지

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    const text = event.target.value;
    if (text.length > maxLength) {
      setNewComment(text.slice(0, maxLength));
    } else {
      setNewComment(text);
    }
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

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    return `${year} - ${month} - ${day}`;
  };

  const handleCommentSubmit = () => {
    const date = getCurrentDate(); // yyyy-mm-dd
    // Add the new comment to the comments list
    const newCommentItem = { text: newComment, date, name, tags: selectedTags };
    setComments([newCommentItem, ...comments]);
    setNewComment(''); // 댓글 입력창 초기화
    setName(''); //이름 입력창 초기화
    setSelectedTags([]); //해시태그 선택 초기화
  };

  const isSubmitDisabled = newComment === '' || newComment.length > maxLength || name === ''; //완료 버튼 비활성화 조건

  const tagList = ['1번', '2번', '3번', '4번', '5번'];

  const TagList = tagList.map((data, index) => {
    return <HashTag tagName={data} key={index} isSelected={selectedTags.includes(data)} onTagClick={handleTagClick} />; //onTagClick={handleTagClick}
  });

  // 현재 페이지의 댓글 배열
  const startIndex = (currentPage - 1) * commentsPerPage;
  const endIndex = startIndex + commentsPerPage;
  const currentComments = comments.slice(startIndex, endIndex);

  // 페이지 이동
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <C.CommentWrapper>
      <C.CommentTextBox>
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
        <C.CommentCharCount>{newComment.length} / 150</C.CommentCharCount>
      </C.CommentTextBox>

      <C.CommentButton onClick={handleCommentSubmit} disabled={isSubmitDisabled}>
        완료
      </C.CommentButton>

      <C.CommentList>
        {currentComments.map((comment, index) => (
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

      {/* 페이지네이션 */}
      <C.CommentPagination>
        <ul>
          {Array.from({ length: Math.ceil(comments.length / commentsPerPage) }).map((_, index) => (
            <li
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}>
              {index + 1}
            </li>
          ))}
        </ul>
      </C.CommentPagination>
    </C.CommentWrapper>
  );
};

export default Comment;
