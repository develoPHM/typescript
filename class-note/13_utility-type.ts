interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl:string
}

// 완성 단계 미리보기
interface CompleteUserProfile {
  username?: string;
  email?: string;
  profilePhotoUrl?:string
}
// 1. 각각의 키를 가져와 넣기
type step_1 = {
  username: UserProfile['username'];
  email: UserProfile['email'];
  profilePhotoUrl: UserProfile['profilePhotoUrl'];
}
// 2. 반복해서 넣어주기 ( 맵드 타입 )
type step_2 = {
  [p in 'username' | 'email' | 'profilePhotoUrl' ]?: UserProfile[p]
}
// 3. 반복해서 넣어주기
type update = keyof UserProfile
type step_3 = {
  [p in keyof UserProfile]?: UserProfile[p]
}
// partial 구현
type step_4<T> = {
  [p in keyof T]?: T[p]
}
// 완성