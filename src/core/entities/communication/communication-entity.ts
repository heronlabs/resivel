import {LanguageEntity} from './language-entity';
import {MetricEntity} from './metric-entity';

export class CommunicationEntity {
  label: string;
  metrics: MetricEntity;
  languages: LanguageEntity[] = [];
}
