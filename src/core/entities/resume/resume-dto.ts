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
  knowledge: {
    label: string;
    skillsPercentage: Array<{
      id?: string;
      name: string;
      levelPercentage: string;
    }>;
  };
  education: {
    label: string;
    institutions: Array<{
      name: string;
      type: string;
      duration: string;
    }>;
  };
  contact: {
    label: string;
    socialMedias: Array<{
      name: string;
      link: string;
      icon: string;
    }>;
  };
};
