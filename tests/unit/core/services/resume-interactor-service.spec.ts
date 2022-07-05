import faker from '@faker-js/faker';
import * as fs from 'fs';
import * as uuid from 'uuid';
jest.mock('uuid');

import {ResumeDto} from '../../../../src/core/entities/resume/resume-dto';
import {ResumeEntity} from '../../../../src/core/entities/resume/resume-entity';
import {ResumeInteractor} from '../../../../src/core/interfaces/resume-interactor';
import {ResumeInteractorService} from '../../../../src/core/services/resume-interactor-service';

describe('Given resume interactor service', () => {
  let service: ResumeInteractor;

  beforeEach(() => {
    service = new ResumeInteractorService();
  });

  describe('Given pt br find method', () => {
    it('Should render resume by i18n file', () => {
      const fakeId = faker.datatype.uuid();
      jest.spyOn(uuid, 'v4').mockImplementation(() => fakeId);

      const resumeDtoMock: ResumeDto = {
        profile: {
          label: faker.lorem.word(),
          publicName: faker.name.firstName(),
          picture: faker.internet.url(),
          description: faker.lorem.words(),
          introduction: faker.lorem.words(),
        },
        workExperience: {
          label: faker.lorem.word(),
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
        knowledge: {
          label: faker.lorem.word(),
          skillsPercentage: [
            {
              id: `id-${fakeId}`,
              name: faker.lorem.word(),
              levelPercentage: faker.datatype.number({max: 100}).toString(),
            },
          ],
        },
        education: {
          label: faker.lorem.word(),
          institutions: [
            {
              name: faker.lorem.word(),
              type: faker.lorem.word(),
              duration: faker.lorem.word(),
            },
          ],
        },
        contact: {
          label: faker.lorem.word(),
          socialMedias: [
            {
              icon: faker.internet.url(),
              link: faker.internet.url(),
              name: faker.lorem.word(),
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
