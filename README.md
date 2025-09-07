# 운동 방 관리 시스템

특정 운동 소모임의 운영진(방장, 부방장)이 멤버들의 활동을 체계적으로 관리하고, 규칙에 따른 제재를 자동화하기 위한 전용 웹 대시보드입니다.

## 🚀 주요 기능

### 관리자 시스템
- **방장 (Super Admin)**: 모든 기능 사용 가능, 부방장 임명 및 삭제 권한
- **부방장 (Admin)**: 멤버 관리 및 활동 체크 등 일반적인 관리 기능

### 멤버 관리
- 멤버 추가/수정/삭제
- 멤버 상태 관리 (활동중, 경고, 강퇴대상)
- 필터링 기능 (전체, 활동중, 가나다순, 경고대상)
- 역할별 아이콘 표시 (👑 방장, ⭐ 부방장, 🌱 신규멤버)

### 활동 관리
- 월별 달력 뷰
- 일일 활동 기록 (운동, 벙 참여 체크)
- 실시간 상태 알람 시스템

### 자동화 규칙
- 🟢 활동중: 모든 규칙 준수
- 🟡 주간경고: 해당 주 금요일까지 주간 운동 2회 미달
- 🟠 월간경고: 해당 월 25일 이후 월간 벙 1회 미달
- 🔴 강퇴대상: 지난주 운동 규칙 또는 지난달 벙 규칙 최종 미달

### 리포트 시스템
- 주간 리포트: 지난주 운동 규칙 미준수자 명단
- 월간 리포트: 지난달 벙 규칙 미준수자 명단

## 🛠️ 기술 스택

- **프론트엔드**: HTML5, CSS3, Vanilla JavaScript
- **스타일링**: TailwindCSS
- **데이터베이스**: Google Firebase Firestore
- **배포**: Netlify

## 📋 설치 및 설정

### 1. Firebase 설정

1. [Firebase 콘솔](https://console.firebase.google.com)에 접속
2. 새 프로젝트 생성
3. Firestore Database 활성화
4. 웹 앱 추가 후 설정 정보 복사
5. `index.html` 파일의 `firebaseConfig` 객체에 설정 정보 입력

```javascript
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
};
```

### 2. Firestore 보안 규칙 설정

Firebase 콘솔 > Firestore Database > 규칙 탭에서 다음 규칙 적용:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /v2_members/{document} {
      allow read, write: if request.auth != null;
    }
    match /v2_activities/{document} {
      allow read, write: if request.auth != null;
    }
    match /v2_config/{document} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 3. 배포 (Netlify)

1. [Netlify](https://www.netlify.com)에 가입
2. 새 사이트 배포 선택
3. `index.html` 파일을 드래그 앤 드롭으로 업로드
4. 자동으로 배포 완료

## 🔐 기본 로그인 정보

- **아이디**: 서아
- **비밀번호**: 1234
- **권한**: 방장 (Super Admin)

## 📊 데이터베이스 구조

### v2_members (멤버 정보)
```javascript
{
  id: "member_id",
  name: "성명",
  nickname: "닉네임",
  phone: "연락처",
  role: "member|admin|super_admin",
  isActive: true,
  joinDate: "2024-01-01T00:00:00.000Z",
  updatedAt: "2024-01-01T00:00:00.000Z",
  updatedBy: "admin_id"
}
```

### v2_activities (활동 기록)
```javascript
{
  date: "2024-01-01",
  workout: ["member_id1", "member_id2"],
  meeting: ["member_id1", "member_id3"],
  updatedAt: "2024-01-01T00:00:00.000Z",
  updatedBy: "admin_id"
}
```

### v2_config (설정 정보)
```javascript
{
  notice: {
    category: "필독|정보|공지",
    content: "공지사항 내용",
    updatedAt: "2024-01-01T00:00:00.000Z",
    updatedBy: "admin_id"
  }
}
```

## 🎨 디자인 특징

- **색상**: 전문적인 네이비/그레이 톤
- **레이아웃**: 2단 구조 (왼쪽 메인, 오른쪽 사이드바)
- **인터랙션**: 부드러운 그림자 효과 및 호버 애니메이션
- **반응형**: 모바일 및 태블릿 지원

## 📱 사용법

### 로그인
1. 기본 관리자 계정으로 로그인 (서아/1234)
2. 추가 관리자는 멤버 관리에서 역할 변경

### 멤버 관리
1. 우측 사이드바에서 "추가" 버튼 클릭
2. 멤버 정보 입력 후 저장
3. 기존 멤버 클릭으로 수정/삭제

### 활동 기록
1. 달력에서 날짜 클릭
2. 참여 멤버의 운동/벙 체크박스 선택
3. 저장 버튼 클릭

### 공지사항 관리
1. 방장 권한으로 로그인
2. 공지사항 섹션의 "공지수정" 버튼 클릭
3. 카테고리 선택 및 내용 입력

## 🔧 커스터마이징

### 색상 변경
`tailwind.config` 객체에서 `navy` 색상 팔레트 수정

### 규칙 변경
JavaScript 코드의 `getMemberStatus()` 함수에서 상태 판정 로직 수정

### 추가 기능
모달 구조를 참고하여 새로운 기능 추가 가능

## 🐛 문제 해결

### Firebase 연결 오류
- Firebase 설정 정보 확인
- Firestore 보안 규칙 확인
- 브라우저 콘솔에서 오류 메시지 확인

### 데이터 로드 실패
- 인터넷 연결 상태 확인
- Firebase 프로젝트 상태 확인
- 브라우저 캐시 삭제 후 재시도

## 📞 지원

추가 기능이나 문제 해결이 필요한 경우, 개발자에게 문의하세요.

---

**개발**: 2024년
**버전**: 1.0.0
**라이선스**: MIT
