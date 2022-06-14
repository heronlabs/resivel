import {faker} from '@faker-js/faker';

export const ResumePtBrMock = {
  publicName: faker.name.firstName(),
  description: faker.lorem.words(),
  profile: {
    label: faker.lorem.word(),
    description: faker.lorem.words(),
  },
  workExperience: {
    title: faker.lorem.word(),
    jobs: [
      {
        start: `${faker.date.month({abbr: true})} ${faker.datatype.number({
          min: 2000,
        })}`,
        end: `${faker.date.month({abbr: true})} ${faker.datatype.number({
          min: 2000,
        })}`,
        title: faker.lorem.word(),
        description: faker.lorem.words(),
        companyName: faker.company.companyName(),
        achievements: [
          {
            title: faker.lorem.word(),
            descriptions: [faker.lorem.words()],
          },
        ],
      },
    ],
  },
};
