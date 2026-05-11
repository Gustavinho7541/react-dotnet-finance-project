export type UserProfileToken = {
  userName: string;
  email: string;
  token: string;
};

export interface UserProfile {
  userName: string;
  email: string;
  token: string; // ✅ ESSENCIAL
}