export class ResumeQueryDto {
  fileName?: string;

  public getFileName() {
    return this.fileName || 'resume-pt-br.pdf';
  }
}
