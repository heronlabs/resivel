import {IsString} from 'class-validator';

export class ResumeQueryDto {
  @IsString()
  fileName?: string;

  public getFileName() {
    return this.fileName || 'resume-pt-br.pdf';
  }
}
