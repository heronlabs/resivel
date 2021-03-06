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
      const fileStringBase64 = faker.datatype.string();
      jest.spyOn(fs, 'readFileSync').mockImplementation(() => fileStringBase64);

      const resumeDtoMock: ResumeDto = {
        profile: {
          label: faker.lorem.word(),
          publicName: faker.name.firstName(),
          picture: faker.internet.url(),
          description: faker.lorem.words(),
          introduction: faker.lorem.words(),
          qrcode: fileStringBase64,
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
              id: fakeId,
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
              icon: fileStringBase64,
              link: faker.internet.url(),
              name: faker.lorem.word(),
            },
          ],
        },
        openSource: {
          label: faker.lorem.word(),
          projects: [
            {
              name: faker.lorem.word(),
              description: faker.lorem.word(),
              holder: faker.lorem.word(),
            },
          ],
        },
        presentation: {
          label: faker.lorem.word(),
          topics: [
            {
              name: faker.lorem.word(),
              host: faker.lorem.word(),
              period: faker.lorem.word(),
            },
          ],
        },
        communication: {
          label: faker.lorem.word(),
          metrics: {
            reading: faker.lorem.word(),
            conversation: faker.lorem.word(),
            writting: faker.lorem.word(),
          },
          languages: [
            {
              name: faker.lorem.word(),
              readingPercentageId: fakeId,
              readingPercentage: faker.lorem.word(),
              conversationPercentageId: fakeId,
              conversationPercentage: faker.lorem.word(),
              writtingPercentageId: fakeId,
              writtingPercentage: faker.lorem.word(),
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
