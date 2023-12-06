import React, { useState } from "react";
import Report from "./Report";
import axios from 'axios';
import GbswChar from '../src/img/gbsw_char.png'

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

    axios('', {
      method: "get",
      data: {
        password:"number",
        title: "string",
        tag: "string",
        text:"string"
      }
    })
    axios('', {
      method: "post",
      data: {
        
      }
    })

    //테스트용 데이터 지워도됨
    const postData = [
      {
        id: 1,
        date: "2023년 12월 5일 12:01",
        title: "경대숲",
        text: "10글자 이상시 자세히 보기를 누르셔야 보ㅛㅓㅇㅇㅅㅇ성ㅅ성홍제색개힙밣렪ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ입니다 ㅁㄴㅇㄹsdfjkasdfjal;skdfjas;lkdfjas;lfdfdfdfdfdfdfsdfdsfdsdqwrasfzsfjnsjkflkzjfsdf",
        tag: "기타",
      },
      {
        id: 2,
        date: "2023년 12월 5일 12:01",
        title: "경대숲",
        text: "ㄸㄱ",
        tag: "기타",
      },
      {
        id: 3,
        date: "2023년 12월 5일 12:01",
        title: "경대숲",
        text: "ㄸㄱ",
        tag: "기타",
      },
      {
        id: 4,
        date: "2023년 12월 5일 12:01",
        title: "경대숲",
        text: "ㄸㄱ",
        tag: "기타",
      },
    ];
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitted(true);
    e.preventDefault();
  };

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <>
      <div className={`background ${isDarkTheme ? "dark-theme" : ""}`}></div>
      <div className={`inner ${isDarkTheme ? "dark-theme" : ""}`}>
            <img src={GbswChar} className="gbsw-logo"/>
        <header>
          <h3>
            <div>경</div>소고<div>&nbsp;대</div>나무<div>숲</div>
          </h3>
          <div onClick={toggleTheme} className="theme-btn">
            {isDarkTheme ? "밝은 테마" : "어두운 테마"}
          </div>
        </header>
        <form
          onSubmit={handleSubmit}
          className={`${isDarkTheme ? "dark-theme" : ""}`}
        >
          <div className="input-container">
            <input
              type="text"
              placeholder="제목 (최대 20자)"
              id="title"
              className={`${isDarkTheme ? "dark-theme" : ""}`}
            />
            <input
              type="password"
              placeholder="비밀번호"
              id="password"
              className={`${isDarkTheme ? "dark-theme" : ""}`}
            />
            <select
              name="tag"
              defaultValue="none"
              className={`${isDarkTheme ? "dark-theme" : ""}`}
            >
              <option value="none" disabled>태그 선택</option>
              {/* none이면 제출 안되게 */}
              <option value="궁금증">궁금증</option>
              <option value="토론">토론</option>
              <option value="진로진학">진로진학</option>
              <option value="학교생활">학교생활</option>
              <option value="인간관계">인간관계</option>
              <option value="유머">유머</option>
              <option value="개인">개인</option>
              <option value="기타">기타</option>
            </select>
          </div>
          <textarea
            name=""
            id=""
            className={`${isDarkTheme ? "dark-theme" : ""}`}
            placeholder="타인을 향한 욕설 및 비방은 징계 대상입니다. (최대 3000자)"
          ></textarea>
          <button
            type="submit"
            className={`${isDarkTheme ? "dark-theme" : ""}`}
          >
            제보하기
          </button>
          {/* {isSubmitted && (
          <div className="submit-check">제보가 성공적으로 완료되었습니다!</div>
        )} */}
        </form>
        
        {postData.map((post) => (
          <Report isDarkTheme={isDarkTheme} key={post.id} {...post} />
        ))}
        
      </div>
    </>
  );
};

export default App;
