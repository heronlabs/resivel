import faker from '@faker-js/faker';
import * as fs from 'fs';

import {ResumeEntity} from '../../../../src/core/entities/resume/resume-entity';
import {Resume} from '../../../../src/core/interfaces/resume';
import {ResumeService} from '../../../../src/core/services/resume-service';

describe('Given resume service', () => {
  let service: Resume;

  beforeEach(() => {
    service = new ResumeService();
  });

  describe('Given pt br find method', () => {
    it('Should render resume by i18n file', () => {
      const resumeDtoMock = {
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
              start: `${faker.date.month({abbr: true})} ${faker.datatype.number(
                {
                  min: 2000,
                }
              )}`,
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

      jest
        .spyOn(fs, 'readFileSync')
        .mockReturnValueOnce(JSON.stringify(resumeDtoMock));

      const entity = service.findPtBr();

      expect(entity).toEqual(ResumeEntity.make(resumeDtoMock));
    });
  });
});
