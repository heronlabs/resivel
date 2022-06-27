# Resume

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> This is an api to make your resume available.

#

[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![GTS](https://img.shields.io/badge/GTS-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://github.com/google/gts)
[![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)](https://github.com/facebook/jest)
[![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)](https://docs.nestjs.com/)

## TLTR (Too long to read)

First I tried to use the template files in Latex format. Through a CLI I would generate the PDF and make it available in an api. However, this idea was partially invalid, due to dynamically change the information of this type of template, you would need to reference it as a string and there was not a satisfactory behavior in this scenario.

The approach that had the most satisfactory result was to use templates in html/css format along with a library to create dynamic view. Then, a headless browser was used to render the html view and make it available in pdf.

Currently the project's main focus is to be an public api to make the curriculum available in pdf.

## How it works

A route will return the curriculum already in pdf format, given an assets folder containing:

* Information about your CV in JSON format.
* Images.
* html/css templates.


## Next steps

The base html/css template is still being generated along with the rest of the curriculum information.

Furthermore, the images must be read along with the i18n file and populated in the corresponding entity. In the future, this storage process can be done by a database.

It is also important to reinforce that the html-pdf project in the infrastructure will be migrated to a separate repository and it will be possible to configure the assets folder for the html templates.

Finally, the Dockerfile may change depending on the resources used in the headless browser.

## Built with

- [Puppeteer](https://github.com/puppeteer/puppeteer)
  - [Read this for Docker use](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-puppeteer-in-docker)
- [Handlebars](https://handlebarsjs.com/)
