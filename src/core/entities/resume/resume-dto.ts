export type ResumeDto = {
  profile: {
    label: string;
    publicName: string;
    picture: string;
    description: string;
    introduction: string;
  };
  workExperience: {
    label: string;
    jobs: Array<{
      start: string;
      end: string;
      title: string;
      description: string;
      companyName: string;
      achievements: Array<{
        title: string;
        descriptions: Array<string>;
      }>;
    }>;
  };
};
