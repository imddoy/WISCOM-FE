import { useState, useEffect } from 'react';
import HashTag from './HashTag';
import * as C from './CommentStyle';
import axios from 'axios';

const Comment = (post_id) => {
  const nextPostId = Number(post_id.id) + 1;
  const [data, setData] = useState('');
  const [name, setName] = useState(''); //이름
  const [inputText, setInputText] = useState(''); // 입력된 텍스트를 저장하는 상태
  const [entries, setEntries] = useState([]);
  const entriesPerPage = 6; // 한 페이지에 보일 엔트리 개수
  const [selectedTags, setSelectedTags] = useState([]); //해시태그 선택
  const maxLength = 150; // 최대 글자 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

  useEffect(() => {
    console.log(nextPostId);
    getDatas();
  }, []);

  const getDatas = async () => {
    await axios
      .get(`https://15.164.167.225/posts/${nextPostId}/comments`)
      .then((response) => {
        setData(response.data);
        console.log('성공');
        console.log(response.data);
      })
      .catch((error) => {
        console.log('전체 글 불러오기 실패', error.message);
      });
  };
  const CommentSubmit = (e) => {
    if (inputText.trim() !== '' && name.trim() !== '') {
      e.preventDefault();
      axios
        .post(`https://15.164.167.225/posts/${nextPostId}/comments`, {
          name: name,
          content: inputText,
          comment_tags: [],
        })
        .then((response) => {
          console.log('작성 성공');
          window.location.reload();
        })
        .catch((error) => {
          console.log('작성 실패');
          console.log(error.response.data);
        });
    }

    setName([]);
    setInputText([]);
    getDatas();
  };
  const handleNameChange = (event) => {
    const name = event.target.value;
    if (name.length <= 5) {
      setName(name);
    }
  };

  const handleInputChange = (e) => {
    const content = e.target.value;
    if (content.length > maxLength) {
      setInputText(content.slice(0, maxLength));
    } else {
      setInputText(content);
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

  const isSubmitDisabled = inputText === '' || inputText.length > maxLength || name === ''; //완료 버튼 비활성화 조건

  const tagList = ['1번', '2번', '3번', '4번', '5번'];

  const TagList = tagList.map((data, index) => {
    return <HashTag tagName={data} key={index} isSelected={selectedTags.includes(data)} onTagClick={handleTagClick} />; //onTagClick={handleTagClick}
  });
  // 현재 페이지의 댓글 배열
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentEntries = entries.slice(startIndex, endIndex);

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
          value={inputText}
          onChange={handleInputChange}
          maxLength={maxLength}
        />
        <C.CommentCharCount>
          {inputText.length} / {maxLength}
        </C.CommentCharCount>
      </C.CommentTextBox>

      <C.CommentButton onClick={CommentSubmit} disabled={isSubmitDisabled}>
        완료
      </C.CommentButton>

      <C.CommentList>
        {data &&
          data.map((comment, index) => (
            <C.CommentItem key={index}>
              <C.CommentInfoWrapper>
                <C.CommentInfo>
                  <C.CommentAuthor>{comment.name}</C.CommentAuthor>
                  <C.CommentDate>{comment.created_at}</C.CommentDate>
                </C.CommentInfo>

                <C.CommentContent>{comment.content}</C.CommentContent>
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
          {Array.from({ length: Math.ceil(data.count / entriesPerPage) }).map((_, index) => (
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
