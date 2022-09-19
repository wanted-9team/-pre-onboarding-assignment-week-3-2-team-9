# 원티드 프리온보딩 6차 4차 과제

## 9팀 소개

| <img src="https://avatars.githubusercontent.com/u/92010078?v=4"/> | <img src="https://avatars.githubusercontent.com/u/92101831?v=4"/> | <img src="https://avatars.githubusercontent.com/u/69101321?v=4"/> | <img src="https://avatars.githubusercontent.com/u/85508157?v=4"/> | <img src="https://avatars.githubusercontent.com/u/97271725?v=4"> |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| <a href="https://github.com/many-yun">[팀장] 김다윤</a>           | <a href="https://github.com/blcklamb">김채정</a>                  | <a href="https://github.com/jaehyeon74">박재현</a>                | <a href="https://github.com/sacultang">오영재</a>                 | <a href="https://github.com/jungdeokwoo">정덕우</a>              |

## 과제 소개

- API 서버와 통신해서 작동하는 댓글 프로젝트를 Redux를 통해 구현
- 작업기간: 2022.09.16 ~ 2022.09.19

## ⚙️ 설치 및 실행

```bash
#프로젝트 클론 및 패키지 설치
> git clone https://github.com/wanted-9team/pre-onboarding-assignment-week-3-2-team-9.git
> cd pre-onboarding-assignment-week-3-2-team-9
> npm install

#실행
> npm run start

# 서버 실행
> npm run api
```

## 영상

## 구현 기능

- [x] 예시 이미지와 같이 댓글 불러오기, 작성, 수정, 삭제가 동작하도록 기능 구현
- [x] 페이지네이션 구현
  - 페이지 전체를 보여주는 게 아닌 페이지를 5개씩 끊어서 UI에 반영
- [x] 댓글 작성, 수정, 삭제 후 동작
  - [x] 댓글 작성하고 난 뒤: 다른 페이지에 위치하고 있었더라도 1페이지로 이동, 입력 폼 초기화
  - [x] 댓글 수정하고 난 뒤: 현재 보고있는 페이지 유지, 입력 폼 초기화
  - [x] 삭제하고 난 뒤: 1페이지로 이동

### 요구 사항

- [x] Redux 환경설정은 자유롭게 진행
  - Redux-thunk로 구현
- [x] Redux logger, Redux-Devtools 설정 필수
  - devtools는 Redux toolkit에 이미 깔려있어서 그대로 사용
- [x] Redux를 이용한 비동기 처리 필수

## 기술 스택

<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux saga-999999?style=for-the-badge&logo=reduxsaga&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/>
</div>

## 파일구조

```bash
│  App.js
│  index.js
│  reportWebVitals.js
│
├─api
│      index.js
│
├─components
│      CommentList.js
│      Form.js
│      PageList.js
│
├─redux
│  ├─sagas
│  │      comment.js
│  │      index.js
│  │
│  ├─slice
│  │      comment.js
│  │      comments.js
│  │
│  └─type
│          index.js
│
├─store
│      index.js
│
└─styles
        GlobalStyle.js
        theme.js
```
