# 타임어택 프로젝트

정해진 기간 내에 개발 완료 및 배포하는 프로젝트

### Period
2025-05-17 ~ 2025-05-20 (4일)

### Rules (나와의 약속)
- master(최종), develop(기능 merge), feature/기능별 브랜치를 이용해서 개발할 것. 
- 프로젝트 기간동안 매일 개발일지를 작성할 것.
- 프로젝트 종료시 최종 정리 및 느낀 점 블로그에 정리할 것

### 프로젝트 종료시 내가 바라는 내 모습
- 개발할 때마다 로그인 쪽 (ex. token 저장위치) 고민이 많은데 확실하게 나만의 개념 정립시키기
- 비록 혼자하는 프로젝트이지만 git-flow 전략에 익숙해지기
- 공공 api에 대한 공포 극복하기 -> 매번 해야지 하면서 카카오 로그인, 카카오맵 api 등 제대로 해본 적 이 없다.
- 내가 약점이 무엇인지 하나라도 얻는다면 이득

## 프로젝트 주제

채용 공고를 제공해주는 서비스 개발

## 주요 기능

- 회원가입
- 로그인
- 로그아웃
- 아이디,비밀번호 찾기
- 조건에 맞게 채용공고 정보 제공
- 채용지 지도로 확인 가능
- 가상으로 공고 지원 (로그인 시에만)

## 이용 api
- 사람인 api
- 카카오 api (카카오맵, 카카오로그인)

## 기술스택
- react
- tailwind
- zustand
- tanstack query
- mongodb + express


# 프로젝트 시작

## 백엔드

### 라우팅

#### User
- 회원가입 : /api/user POST (userId, password, checkPassword, name, age, email,gender,addr1, addr2)
- 로그인 : /api/user/login POST (userId, password)
- 회원정보 수정 : /api/user PATCH
- 회원탈퇴 : /api/user DELETE
- 유저정보 불러오기 : /api/user GET
- 공고 신청 : /api/user/application POST
- 공고 신청 취소 : /api/user/application DELETE

### 스키마 모델

#### User
- userId : String,
- password : String,
- name : String,
- age : Number,
- email : String,
- address : String,
- applicationList : String,  (공고 신청 내역)


## 프론트엔드


## 개발일지
 - [2025-05-16 개발일지]()

## 프로젝트 결과