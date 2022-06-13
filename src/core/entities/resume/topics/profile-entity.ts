export class ProfileEntity {
  label: string;
  description: string;

  constructor(partial?: Partial<ProfileEntity>) {
    return Object.assign(this, partial);
  }
}
