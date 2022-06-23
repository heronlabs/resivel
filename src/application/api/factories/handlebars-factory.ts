export class HandlebarsFactory {
  static compile(viewFile: string, payload: unknown): string {
    const handlebars = require('handlebars');
    const template = handlebars.compile(viewFile);
    const view = template(payload);

    return view;
  }
}
