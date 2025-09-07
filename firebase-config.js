// Firebase 설정 파일
// 실제 사용 시 Firebase 콘솔에서 받은 설정으로 교체하세요

const firebaseConfig = {
    // Firebase 프로젝트 설정
    // 1. Firebase 콘솔(https://console.firebase.google.com)에 접속
    // 2. 새 프로젝트 생성 또는 기존 프로젝트 선택
    // 3. 프로젝트 설정 > 일반 탭에서 '웹 앱 추가'
    // 4. 아래 설정값들을 복사해서 교체
    
    apiKey: "your-api-key-here",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef123456789012345678"
};

// Firestore 보안 규칙 (Firebase 콘솔에서 설정)
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // v2_members 컬렉션: 관리자만 읽기/쓰기 가능
    match /v2_members/{document} {
      allow read, write: if request.auth != null && 
        (resource.data.role == 'admin' || resource.data.role == 'super_admin');
    }
    
    // v2_activities 컬렉션: 관리자만 읽기/쓰기 가능
    match /v2_activities/{document} {
      allow read, write: if request.auth != null;
    }
    
    // v2_config 컬렉션: 관리자만 읽기/쓰기 가능
    match /v2_config/{document} {
      allow read, write: if request.auth != null;
    }
  }
}
*/

export default firebaseConfig;
