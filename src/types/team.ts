import type { ISocialLink } from "./common";

// ----------------------------------------------------------------------

export type ITeamMember = {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
  socialLinks?: ISocialLink;
};
