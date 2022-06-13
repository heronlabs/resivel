import {ResumeEntity} from './resume-entity';

export const resumePtBr: Partial<ResumeEntity> = {
  publicName: 'Lucas Lacerda',
  description: 'Arquiteto | Software',
  profile: {
    label: 'Perfil',
    description:
      'Há mais de uma decada tenho me dedicado ao desenvolvimento de software. Ao longo desse tempo, passei por diversos setores e processos, mas principalmente tive a oportunidade de conhecer excelentes profissionais em todos os lugares que passei. Atualmente, todo esse aprendizado me permitiu entender melhor a importância individual de cada uma das pessoas e os problemas que elas estão enfrentando. Em um quebra-cabeça começamos a resolver a imagem pelos cantos,  eu procurei entender as limitações ténicas da área de desenvolvimento primeiro. Só então, eu pude dar um passo atrás para começar a construir minha própria imagem. Nessa imagem, pessoas, setores e processos se encaixam de modo harmonico onde bom ou ruim são apenas perspectivas a serem exploradas. Através do conhecimento podemos estabelecer a comunicação entre contextos diferentes, e então de maneira coletiva propor ideias que façam sentido para todos. Contudo, o status de arquiteto pode dizer mais do que de fato entrega, é importante deixar claro que minha missão é apresentar ideias que possam ser embasadas técnicamente e validadas empiricamente, de modo que as pessoas possam pensar por si próprias e propor soluções adequadas.',
  },
  workExperience: {
    title: 'Experiência de trabalho',
    jobs: [
      {
        start: 'Fev 2020',
        end: 'Atualmente',
        title: 'Arquiteto',
        description: 'Artesão de Software & Comunity Manager',
        companyName: 'U4crypto',
        achievements: [
          {
            title:
              'A U4crypto é uma fintech que atua como solução financeira para arranjos entre instituições bancárias e pessoas.  Atualmente a relação entre os arranjos gera um serviço de software que permite encontrar planos financeiros mais acessiveis. Como complemento aos sistemas que relacionam os arranjos, são fornecidas soluções financeiras no formato de serviço bancário. Para compor essa solução, procuro implementar soluções embasadas nas seguintes obras:',
            descriptions: [
              'Arquitetura Limpa & Código Limpo (Martin C. Robert).',
              'Desenvolvimento Orientado a Testes (Kent Beck) & Refatoração (Martin Fowler).',
              'Desing Orientado a Domínio (Eric Evans).',
            ],
          },
        ],
      },
      {
        start: 'Fev 2019',
        end: 'Out 2019',
        title: 'Engenheiro Front-end',
        description: 'Desenvolvedor React no squad Hotmart Club',
        companyName: 'Hotmart',
        achievements: [
          {
            title:
              'Conheci a Hotmart através de eventos como DevDay e FrontInBh. Atuando como desenvolvedor front-end no squad da Hotmart Club, utilizamos React para construir nosso aplicativo e MobX para controle de estado. Integramos com as equipes de design e back-end para complementar as entregas. Além disso, participei de ações para melhoria contínua do código e aplicações de conceitos de arquitetura para entregar mais qualidade no longo prazo. Algumas realizações incluem:',
            descriptions: [
              'Desafio técnico em MeteorJs para Fire Festival.',
              'Palestra cultural sobre responsabilidade e respeito com as pessoas.',
              'Criação de canvas para elaboração de certificados personalizados.',
            ],
          },
        ],
      },
      {
        start: 'Dez 2017',
        end: 'Nov 2018',
        title: 'Líder técnico',
        description: 'Desenvolvedor full-stack e Scrum Master',
        companyName: 'Meep',
        achievements: [
          {
            title:
              'Atuação como Scrum master guiando a equipe de acordo com as regras do produto.',
            descriptions: [
              'Utilizando a plataforma Azure Dev-Ops auxiliei a implementar pipelines para CI-CD em todos os produtos para entregas mais efetivas. Como front-end participei da criação de plug-ins nativos para Ionic 3.',
              'Em back-end atuei no desenvolvimento completo de funcionalidades em API Web (ASPNET CORE2) com integração em banco de dados relacionais (MySql) e não relacionais (MongoDB).',
              'Também realizava a manutenção e elaboração de novas funcionalidades em Microsserviços e participei ativamento do desenvolvimento e arquitetura do front-end para elaboração de portais em Angular 4+ com suporte para PWA.',
            ],
          },
        ],
      },
      {
        start: 'Dez 2016',
        end: 'Dez 2017',
        title: 'Desenvolvedor Full-stack',
        description: 'Desenvolvedor Full-stack em um produto interno',
        companyName: 'Teknisa',
        achievements: [
          {
            title:
              'Criação do front-end em Angular com integração no back-end em PHP, ambos baseados no padrão MVC, para o desenvolvimento mobile.',
            descriptions: [
              'Elaboração de WebView em Android e Swift 3 com integração em diversas bibliotecas como por exemplo: Facebook, Google, Waze e CardIO.',
              'Utilização de funções nativas no Android, como por exemplo: conexão bluetooth e acesso a impressora térmica. Desenvolvimento de arquitetura orientada a objetos para transações financeiras com implementação em Gateways de pagamento como por exemplo: MundiPagg, Software Express, Zoop e Cielo. Todo o projeto feito em PHP com o padrão PSR-4, implementação do design de orientação a objeto S.O.L.I.D e cobertura total de testes unitários.',
            ],
          },
        ],
      },
      {
        start: 'Jan 2015',
        end: 'Jul 2015',
        title: 'Desenvolvedor Júnior',
        description: 'Suporte e manutenção',
        companyName: 'Akmos',
        achievements: [
          {
            title: 'Principais atividades:',
            descriptions: [
              'Desenvolvimento na parte de front-end utilizando um framework em PHP.',
              'Criação de views e configuração de controllers, além de atuar na parte de tickets, recebendo e solucionando possíveis erros.',
              'Eventualmente criação de querys para pesquisa especificas em banco de dados.',
            ],
          },
        ],
      },
      {
        start: 'Jan 2013',
        end: 'Dez 2014',
        title: 'Webdesigner',
        description: 'Criação de sites e identidade visual',
        companyName: 'Freelancer',
        achievements: [
          {
            title: 'Principais atividades:',
            descriptions: [
              'Criação completa de sites, front-end back-end, utilizando PHP/HTML e sistemas completos, baseados em CRUD.',
              'Realizava todas as etapas, desde reuniões com clientes até o produto final.',
              'Exemplos de sites já desenvolvidos: Hotel, Congresso, Banda, Otica, Madeireira.',
            ],
          },
        ],
      },
    ],
  },
};
