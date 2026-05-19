# 감정 일기장 📔

React로 만든 감정 기반 일기 CRUD 앱입니다.

## 📌 프로젝트 소개
일기 작성 / 수정 / 삭제 / 조회 기능을 모두 갖추고 있으며
localStorage로 새로고침 후에도 데이터가 유지됩니다.
감정을 5단계로 선택해 기록할 수 있습니다.

## ⚙️ 주요 기능
- 일기 작성 / 수정 / 삭제 / 조회 (CRUD)
- 감정 5단계 선택 (완전 좋음 / 좋음 / 그럭저럭 / 나쁨 / 완전 나쁨)
- 월별 일기 필터링 및 최신순 / 오래된순 정렬
- localStorage 데이터 자동 저장 및 불러오기
- useReducer + Context API 전역 상태 관리
- useDiary / useTitle 커스텀 훅으로 로직 분리
- 존재하지 않는 일기 접근 시 홈 리다이렉트
- 페이지별 브라우저 탭 제목 동적 변경

## 📁 폴더 구조
```
src/
├── components/   # Button, Header, Editor, Viewer, DiaryList, DiaryItem, EmotionItem
├── pages/        # Home, New, Edit, Diary, NotFound
├── hooks/        # useDiary, useTitle
└── util/         # constants, getEmotionImage, getStringedDate
```

## 🛠 사용 기술
- React (useReducer, useRef, useState, useEffect, useContext, createContext)
- React Router DOM
- localStorage
- Vite
- CSS

## 🚀 실행 방법
```bash
npm install
npm run dev
```
