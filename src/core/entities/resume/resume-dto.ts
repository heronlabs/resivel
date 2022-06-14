export type ResumeDto = {
  publicName: string;
  description: string;
  profile: {
    label: string;
    description: string;
  };
  workExperience: {
    title: string;
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
