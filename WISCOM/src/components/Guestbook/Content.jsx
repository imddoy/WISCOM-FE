import React, { useState } from 'react';
import * as C from './ContentStyle';

export default function Content() {
  const [inputText, setInputText] = useState(''); // 입력된 텍스트를 저장하는 상태
  const maxLength = 200; // 최대 글자 수
  const [entries, setEntries] = useState([]); // 입력된 내용을 저장하는 배열
  const [anonymousN, setAnonymousN] = useState(0); // 익명 N 카운터
  const entriesPerPage = 6; // 한 페이지에 보일 엔트리 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지


  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    return `${year}-${month}-${day}`;
  };

  // 입력된 텍스트가 변경될 때 호출되는 함수
  const handleInputChange = (e) => {
    const text = e.target.value;
    if (text.length > maxLength) {
      setInputText(text.slice(0, maxLength));
    } else {
      setInputText(text);
    }
  
  };
  // 완료 버튼 클릭 시 입력된 내용을 목록에 추가하는 함수
  const handleAddEntry = () => {
    if (inputText.trim() !== '') {
      const newEntry = {
        text: inputText,
        date: getCurrentDate(),
        anonymous: `익명 ${anonymousN + 1}`,
      };

      setEntries([newEntry, ...entries]); 
      setInputText(''); // 입력 필드 초기화
      setAnonymousN(anonymousN + 1); // 익명 N 증가
    }
  };
    // 현재 페이지의 엔트리 배열
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;
    const currentEntries = entries.slice(startIndex, endIndex);
  
    // 페이지 변경 처리
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  

  return (
    <C.ContentContainer>
      <C.Title>방명록을 남겨주세요</C.Title>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <C.InputBox>
        <C.ContentInput  
        placeholder="방명록을 작성해주세요"
        value={inputText}
        onChange={handleInputChange}
        maxLength={maxLength}  />
        <C.InputCount>{inputText.length}/{maxLength}</C.InputCount>
      </C.InputBox>
      <br/>

      <C.Button onClick={handleAddEntry}>완료</C.Button>
      <C.Entries>
        {currentEntries.map((entry, index) => (
          <C.EntryItem key={index}>
            <C.EntryDate>{entry.anonymous} {entry.date}</C.EntryDate>
            <br/> 
            <C.EntryText>{entry.text}</C.EntryText>
          </C.EntryItem>
        ))}
      </C.Entries>

      <C.Pagination>
      <ul>
        {Array.from({ length: Math.ceil(entries.length / entriesPerPage)}).map((_, index) => (
          <li
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </C.Pagination>

    </C.ContentContainer>
  );
}