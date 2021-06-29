import React from "react";

import styled from "styled-components";

function Home() {
  return (
    <HomeContainer>
      <SubContainer>
        <TitleText
          style={{
            fontSize: 30,
          }}
        >
          토이 프로젝트{" "}
          <span role="img" aria-label="emoji">
            🎉
          </span>
        </TitleText>
        <ContentText
          style={{
            fontSize: 20,
          }}
        >
          Redux와 Styled-component 연습을 위해 제작한
          <br />
          <br />
          React 게시판입니다.
          <span role="img" aria-label="emoji">
            😊
          </span>
          <br />
          <br />
          게시글은 동일한 아이디만 수정 권한이 존재합니다.
          <br />
          <br />
          설정 탭에서 아이디와 야간모드 실행이 가능합니다!
        </ContentText>
      </SubContainer>

      <SubContainer>
        <TitleText
          style={{
            fontSize: 30,
          }}
        >
          기술 스택{" "}
          <span role="img" aria-label="emoji">
            🔧
          </span>
        </TitleText>
        <article>
          <ContentText
            style={{
              fontSize: 18,
            }}
          >
            React <br />
            <br /> Redux <br />
            <br /> styled-component
          </ContentText>
        </article>
      </SubContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  align-items: flex-start;
`;

const SubContainer = styled.div``;
const TitleText = styled.article`
  font-family: "KOTRA_BOLD-Bold";
  color: ${(props) => props.theme.defaultText};
`;

const ContentText = styled.p`
  font-family: "NanumBarunGothic";
  color: ${(props) => props.theme.defaultText};
`;

export default Home;
