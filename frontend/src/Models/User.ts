export type UserProfileToken = {
  username: string;
  userName: string;
  email: string;
  token: string;
};

export interface UserProfile {
  userName: string;
  email: string;
  token: string; // ✅ ESSENCIAL
}