export class AchievementEntity {
  title: string;
  descriptions: Array<string> = [];

  constructor(partial?: Partial<AchievementEntity>) {
    return Object.assign(this, partial);
  }
}
