import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Clinton Brito",
  initials: "CB",
  location: "Aracaju, Brazil, GMT-3",
  locationLink: "https://www.google.com/maps/place/Aracaju",
  about:
    "Desenvolvedor Full Stack focado em ajudar as pessoas a entregarem valor e fazer a diferença.",
  summary:
    "Desenvolvedor Full Stack com uma passagem anterior de 6 anos no mercado financeiro. Migrei para tecnologia pela paixão em resolver problemas de TI. Como sócio na Wert Investimentos, cresci de estagiário para funções-chave, fortalecendo relações e impulsionando o escritório. Formando-me na Trybe, integro programação e habilidades interpessoais, trabalhando com TypeScript, JavaScript, Node, React, Redux, TDD, Jest, RTL, Docker, SQL, ORM, POO, SOLID, Git & GitHub, HTML & CSS, Scrum, Slack, Zoom, Trello, Teams.",
  avatarUrl: "https://avatars.githubusercontent.com/u/105871036?v=4",
  personalWebsiteUrl: "https://clintonbrito.com",
  contact: {
    email: "clintoncsb@gmail.com",
    tel: "+5579991615769",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/clintonbrito",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/clintonbrito/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/clintonbrito_",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Trybe",
      degree: "Desenvolvimento Web Full Stack",
      start: "2023",
      end: "2024",
    },
    {
      school: "Universidade Federal de Sergipe",
      degree: "Bacharelado em Administração, com ênfase em Finanças",
      start: "2011",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Wert - Assessoria de Investimentos BTG Pactual",
      link: "https://wertinvestimentos.com",
      badges: ["Onsite"],
      title: "Líder de Equipe Comercial",
      logo: ParabolLogo,
      start: "jan/2022",
      end: "dez/2022",
      description:
        "Definir estratégias para atrair clientes, liderar e motivar a equipe, monitorar metas e relacionamentos, identificar oportunidades de negócios, elaborar relatórios e apresentar os resultados à diretoria.",
    },
    {
      company: "Wert - Assessoria de Investimentos BTG Pactual",
      link: "https://wertinvestimentos.com",
      badges: ["Onsite"],
      title: "Diretor de Expansão",
      logo: ClevertechLogo,
      start: "set/2021",
      end: "dez/2022",
      description:
        "Realizar entrevistas e triagem, alinhar informações para Recrutamento & Seleção, padronizar processos seletivos, prospectar ativamente candidatos, treinar e acompanhar Onboarding, promover eventos para fortalecer a marca do escritório.",
    },
    {
      company: "Wert - Assessoria de Investimentos BTG Pactual",
      link: "https://wertinvestimentos.com",
      badges: ["Onsite"],
      title: "Assessor de Investimentos",
      logo: JojoMobileLogo,
      start: "nov/2017",
      end: "nov/2021",
      description:
        "Construir e manter relacionamentos de longo prazo, prospectar novos clientes, atualizar-se sobre cenários econômicos, entender e comunicar estratégias aos clientes de forma clara, oferecer serviço de excelência.",
    },
    {
      company: "Wert - Assessoria de Investimentos BTG Pactual",
      link: "https://wertinvestimentos.com",
      badges: ["Onsite"],
      title: "Head de Fundos de Investimentos",
      logo: NSNLogo,
      start: "fev/2019",
      end: "ago/2021",
      description: "Monitorar e avaliar o desempenho da indústria de fundos, manter relacionamento com gestoras, apresentar estudos para clientes, prestar suporte técnico e comercial, fornecer treinamentos, acompanhar mercado, ministrar eventos.",
    },
    {
      company: "Wert - Assessoria de Investimentos BTG Pactual",
      link: "https://wertinvestimentos.com",
      badges: ["Onsite"],
      title: "Estagiário",
      logo: NSNLogo,
      start: "jan/2017",
      end: "out/2017",
      description: "Acompanhar e auxiliar Assessores, realizar pesquisas de mercado, atender clientes, abrir e acompanhar SLAs, monitorar mercado, participar de reuniões e treinamentos, fornecer suporte administrativo e operacional.",
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express",
    "Sequelize",
    "React",
    "Redux",
    "Docker",
    "MySQL",
    "Jest",
    "Chai",
    "Testing Library",
    "Mocha",
    "Git",
    "GitHub",
    "Linux"
  ],
  projects: [
    {
      title: "Football League Table",
      techStack: [
        "TypeScript",
        "Node",
        "Express",
        "Sequelize",
        "Docker",
        "Joi",
        "JWT",
        "BCrypt",
        "Mocha",
        "Chai"
      ],
      description: "Uma tabela de classificação do Brasileirão desenvolvida como projeto final do curso de Back-end da Trybe",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/clintonbrito/football-league-table",
      },
    },
    {
      title: "Dungeons & Dragons",
      techStack: [
      "TypeScript", 
      "Node", 
      "Express", 
      "OOP", 
      "SOLID",
    ],
      description:
        "Jogo de RPG aplicando conceitos de POO e SOLID, desenvolvido como parte do curso de Back-end da Trybe",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/clintonbrito/dungeons-and-dragons",
      },
    },
    {
      title: "Taste Journey",
      techStack: [
        "JavaScript",
        "React",
        "Redux",
        "Docker",
        "CSS",
        "Jest",
        "RTL"
      ],
      description:
        "App de receitas desenvolvido como projeto final do curso de Front-end da Trybe",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://github.com/clintonbrito/recipes-app",
      },
    },
    {
      title: "Star Wars Planets Search",
      techStack: [
      "JavaScript",
      "React",
      "Redux",
      "Docker",
      "CSS",
      "Tailwind",
      "Jest",
      "RTL"
    ],
      description:
        "Aplicação web de busca por planetas da galáxia de Star Wars consumindo uma API externa",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/clintonbrito/starwars-planets-search",
      },
    },
    {
      title: "Blogs API",
      techStack: [
      "JavaScript",
      "Node",
      "Express",
      "Sequelize",
      "API RESTful",
      "MySQL",
      "Docker",
      "JWT"
    ],
      description: "API de um blog fictício onde é possível fazer um CRUD de posts, utilizando autenticação de usuário",
      logo: YearProgressLogo,
      link: {
        label: "github.com",
        href: "https://github.com/clintonbrito/blogs-api",
      },
    },
    {
      title: "WiseWallet",
      techStack: [
      "JavaScript",
      "React",
      "Redux",
      "Jest",
      "React Testing Library"
    ],
      description:
        "Gerenciador de gastos desenvolvido como parte do curso de Front-end da Trybe",
      logo: BarepapersLogo,
      link: {
        label: "github.com",
        href: "https://github.com/clintonbrito/wisewallet",
      },
    },
  ],
} as const;
