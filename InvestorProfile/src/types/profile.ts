export interface Profile {
  picture: string;
  name: string;
  gender: string;
  role: string;
}

export type ProfileUpdateFunction = (field: keyof Profile, value: any) => void;