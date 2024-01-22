const config = {
  status: {
    loading: true,
  },
  github: {
    username: 'peterchaotw',
    sortBy: 'stars',
    limit: 10,
    exclude: {
      forks: false,
      projects: [],
    },
  },
  social: {
    linkedin: 'peterchaotw',
    github: 'peterchaotw',
    email: 'peter.chao.forjob@gmail.com',
  },
  language: [
    {
      name: 'Chinese',
      proficiency: 'Native',
    },
    {
      name: 'Japanese',
      proficiency: 'Advanced',
    },
    {
      name: 'English',
      proficiency: 'Intermediate',
    },
  ],
  resume:
    'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  certifications: [
    {
      name: 'OCJP',
      description: 'Oracle Certified Java Programmer',
      date: '2012-06',
    },
    {
      name: 'N2',
      description: 'JLPT N2',
      date: '2018-12',
    },
    {
      name: 'N1',
      description: 'JLPT N1',
      date: '2024-01',
    },
  ],
  education: [
    {
      institution:
        'The Department of Information Engineering at National Quemoy University, Taiwan',
      degree: 'Degree',
      from: '2008-8',
      to: '2012-6',
    },
  ],
  workProjects: [
    {
      name: 'Bank System Upgrade',
      startTime: '2023-7',
      teamSize: 21,
      role: 'Member',
      company: 'A',
      location: 'Japan',
      description: `Due to the bank's internal system OS upgrade, program modifications, and new development.`,
      assignedPhase: [
        'Requirements analysis',
        'Development',
        'Testing',
        'Maintenance',
        'Progress Management',
        'Documentation',
      ],
      responsibilities: [
        'Survey of existing implementation specifications',
        'Propose modification methods to the customer, and coordinate upon them.',
        'Development, Testing',
        'Importing Accounting Report Data from Overseas Stores.',
      ],
      skills: [
        {
          name: 'Cobol',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Windows',
          type: 'OperationSystem',
        },
        {
          name: 'SQL Server',
          type: 'Database',
        },
        {
          name: 'Oracle',
          type: 'Database',
        },
        {
          name: 'Cobol2002',
          type: 'Tool',
        },
        {
          name: 'MIDMOST/DE',
          type: 'Framework',
        },
        {
          name: 'Waterfall',
          type: 'DevelopmentMethodology',
        },
      ],
    },
    {
      name: 'Telecommunications Company Login System',
      startTime: '2023-1',
      endTime: '2023-6',
      teamSize: 11,
      role: 'Member',
      company: 'A',
      location: 'Japan',
      description: `Recreating APIs and screens to enhance user experience.`,
      assignedPhase: ['Documentation ', 'Development', 'Testing'],
      responsibilities: [
        'design, development, testing',
        'code review',
        'source management',
        'API creation related to login functionality',
        'Create a sample of login usage for frontend teams',
        'Providing a new idea to improve testing efficiency.',
      ],
      skills: [
        {
          name: 'Typescript',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Java',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'DynamonDB',
          type: 'Database',
        },
        {
          name: 'Redis',
          type: 'Database',
        },
        {
          name: 'Expressjs',
          type: 'Framework',
        },
        {
          name: 'Jest',
          type: 'Framework',
        },
        {
          name: 'Nodejs',
          type: 'Framework',
        },
        {
          name: 'Reactjs',
          type: 'Framework',
        },
        {
          name: 'StoryBook',
          type: 'Framework',
        },
        {
          name: 'Docker',
          type: 'Tool',
        },
        {
          name: 'CodeServer',
          type: 'Tool',
        },
        {
          name: 'AWS',
          type: 'Tool',
        },
        {
          name: 'CI/CD pipelines',
          type: 'Tool',
        },
        {
          name: 'Git',
          type: 'Tool',
        },
        {
          name: 'VSCode',
          type: 'Tool',
        },
        {
          name: 'SVN',
          type: 'Tool',
        },
        {
          name: 'Agile',
          type: 'DevelopmentMethodology',
        },
        {
          name: 'Gitlab',
          type: 'Other',
        },
        {
          name: 'JIRA',
          type: 'Other',
        },
      ],
    },
    {
      name: 'Legal Document Creation System',
      startTime: '2022-9',
      endTime: '2023-3',
      teamSize: 7,
      location: 'Japan',
      role: 'Leader',
      company: 'A',
      description: `A labor and social insurance consultant, focusing on the creation of employment contracts, is responsible for:
      
      General membership management functions (login, password change, etc.).
      
      According customer requirements, Completing employment rules from templates, editing each clause, internal sharing, output, and management.
      
      Creating functions for sharing and editing existing internal documents.
      `,
      assignedPhase: [
        'Requirements analysis',
        'Software design',
        'Architecture',
        'Testing',
        'Deployment',
      ],
      responsibilities: [
        'Schedule Management',
        'Meeting with the customer',
        'Automation for all build and deployments',
        'Creating manufacturing samples and providing technical support for the team members',
        'Infrastructure development',
        'Release and Deployment',
        'Creating infrastructure',
        'Creating the custom component for editing template',
        'Release within the agreed-upon contract period',
        ' After completing the project, internal team members with enhanced skills immediately continue without standing next project.',
        'After the release, even if the focus is on inquiries from customers during the warranty period, there is no impact internally, and being assigned to another project.',
      ],
      skills: [
        {
          name: 'Typescript',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'PHP',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'T-SQL',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Windows',
          type: 'OperationSystem',
        },
        {
          name: 'Linux',
          type: 'OperationSystem',
        },
        {
          name: 'MySQL',
          type: 'Database',
        },
        {
          name: 'Vuejs',
          type: 'Framework',
        },
        {
          name: 'Jest',
          type: 'Framework',
        },
        {
          name: 'Docker',
          type: 'Tool',
        },
        {
          name: 'Laravel',
          type: 'Tool',
        },
        {
          name: 'Git',
          type: 'Tool',
        },
        {
          name: 'Bitbucket',
          type: 'Other',
        },
        {
          name: 'VSCode',
          type: 'Tool',
        },
        {
          name: 'JIRA',
          type: 'Other',
        },
        {
          name: 'Agile',
          type: 'DevelopmentMethodology',
        },
      ],
    },
    {
      name: 'Mobile App for Convenience Store Employees',
      startTime: '2022-02',
      endTime: '2022-08',
      teamSize: 30,
      location: 'Japan',
      skills: [
        {
          name: 'Typescript',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Javascript',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'HTML',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'CSS',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Java',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'T-SQL',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Windows',
          type: 'OperationSystem',
        },
        {
          name: 'Android',
          type: 'OperationSystem',
        },
        {
          name: 'Oracle',
          type: 'Database',
        },
        {
          name: 'SQLite',
          type: 'Database',
        },
        {
          name: 'Angular',
          type: 'Framework',
        },
        {
          name: 'OpenJDK',
          type: 'Framework',
          version: ['17'],
        },
        {
          name: 'Spring Servlet',
          type: 'Framework',
        },
        {
          name: 'Eclipse',
          type: 'Tool',
        },
        {
          name: 'Git',
          type: 'Tool',
        },
        {
          name: 'Waterfall',
          type: 'DevelopmentMethodology',
        },
      ],
      role: 'Sub Leader',
      description:
        'Inventory management, shelf stocking, product search, etc., can be operated on a mobile device instead of a tablet',
      company: 'A',
      assignedPhase: [
        'Requirements analysis',
        'Software design',
        'Architecture',
      ],
      responsibilities: [
        'Meeting with the customer',
        'Creating manufacturing samples and providing technical support for the team members',
        'Supplementing the features created by the team of infrastructure',
        'Schedule advancement through the development of common functionalities',
        'Improvement in user experience issues through features provided by the team of infrastructure',
        'Technical investigation and reporting on customer requirements',
      ],
    },
    {
      name: 'Convenience Store System Migration',
      startTime: '2021-06',
      endTime: '2022-02',
      teamSize: 50,
      location: 'Japan',
      role: 'Member',
      company: 'A',
      description: `Investigation of bugs in each subsystem due to infrastructure migration.`,
      assignedPhase: ['Technical support'],
      responsibilities: [
        'Technical investigation of unclear aspects regarding NeoSarf/DM usage',
        'Creation and modification of common functionalities.',
        'Follow up on tasks when team members are absent',
        'Provide technical support for using JAVA and NeoSarf/DM in practical work for the first time',
      ],
      skills: [
        {
          name: 'Java',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Javascript',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'HTML',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'CSS',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'T-SQL',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Windows',
          type: 'OperationSystem',
        },
        {
          name: 'Linux',
          type: 'OperationSystem',
        },
        {
          name: 'Oracle',
          type: 'Database',
        },
        {
          name: 'OpenJDK',
          type: 'Framework',
          vsersion: ['11'],
        },
        {
          name: 'Spring Servlet',
          type: 'Framework',
        },
        {
          name: 'NeoSarf/DM',
          type: 'Framework',
        },
        {
          name: 'SVN',
          type: 'Tool',
        },
        {
          name: 'Eclipse',
          type: 'Tool',
        },
        {
          name: 'Waterfall',
          type: 'DevelopmentMethodology',
        },
        {
          name: 'Redmine',
          type: 'Other',
        },
      ],
    },
    {
      name: 'Construction Industry System Migration',
      startTime: '2020-1',
      endTime: '2021-6',
      teamSize: 10,
      location: 'Japan',
      role: 'Sub Leader',
      company: 'A',
      description: `Following the discontinuation of Microsoft's SilverLight support, we will rebuild the common foundation for 17 business applications. We will conduct modifications to the business applications only to the extent necessary.`,
      assignedPhase: ['Requirements analysis', 'development', 'testing'],
      responsibilities: [
        'Requirements analysis',
        'Conducting technical investigations to establish a schedule',
        'Creating migration tool',
        'Creating new infrastructure ',
        'Migrate .Net Framework2.0 to .Net Framework 4.5',
        'Migrate VB→C#',
        'Migrate SilverLight→Xamarin',
        'Migrate Component One for Silverlight to Xamarin of GrapeCity',
        'Completion of migration without modifying the business logic of 17 business applications',
        ' Simultaneous migration of 17 business applications using migration tools, and completion with minor adjustments.',
      ],
      skills: [
        {
          name: 'C#',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'VB',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Windows',
          type: 'OperationSystem',
        },
        {
          name: 'Agile',
          type: 'DevelopmentMethodology',
        },
        {
          name: '.Net Standard 2',
          type: 'Framework',
        },
        {
          name: 'Xamarin',
          type: 'Framework',
        },
        {
          name: 'SilverLight',
          type: 'Framework',
        },
        {
          name: 'GrapeCity Component One',
          type: 'Framework',
        },
        {
          name: 'SVN',
          type: 'Tool',
        },
        {
          name: 'VisualStudio',
          type: 'Tool',
        },
        {
          name: 'Git',
          type: 'Tool',
        },
        {
          name: 'Redmine',
          type: 'Other',
        },
        {
          name: 'Agile',
          type: 'DevelopmentMethodology',
        },
      ],
    },
    {
      name: 'Pharmaceutical Management System',
      startTime: '2019-8',
      endTime: '2019-12',
      teamSize: 10,
      location: 'Japan',
      role: 'Member',
      company: 'A',
      description: `Development of a Pharmaceutical Management System`,
      assignedPhase: ['Development', 'Testing', 'Documentation'],
      responsibilities: [
        'Creating API and UI',
        'Testing',
        'System test',
        'Completion ahead of schedule without any delays.',
      ],
      skills: [
        {
          name: 'C#',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'VB',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'CSS',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'T-SQL',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Javascript',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'HTML',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Windows',
          type: 'OperationSystem',
        },
        {
          name: 'MSSQL',
          type: 'Database',
        },
        {
          name: 'ASP.NET MVC',
          type: 'Framework',
        },
        {
          name: '.Net Framework',
          type: 'Framework',
          version: ['2.0', '4.5'],
        },
        {
          name: 'JQuery',
          type: 'Framework',
        },
        {
          name: 'EntityFramework',
          type: 'Framework',
        },
        {
          name: 'SVN',
          type: 'Tool',
        },
        {
          name: 'VisualStudio',
          type: 'Tool',
        },
        {
          name: 'Waterfall',
          type: 'DevelopmentMethodology',
        },
      ],
    },
    {
      name: 'Unauthorized Fund Transfer System',
      startTime: '2019-6',
      endTime: '2019-7',
      teamSize: 3,
      role: 'Member',
      location: 'Japan',
      company: 'A',
      description: `Unauthorized Fund Transfer System of bank`,
      assignedPhase: ['Documentation', 'System design'],
      responsibilities: [
        'According requirements, creating documentation for development',
        'Completion without any initial on-site issues in Japan',
      ],
      skills: [
        {
          name: 'C#',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Windows',
          type: 'OperationSystem',
        },
        {
          name: 'T-SQL',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'MSSQL',
          type: 'Database',
        },
        {
          name: 'SVN',
          type: 'Tool',
        },
        {
          name: 'VisualStudio',
          type: 'Tool',
        },
        {
          name: 'Waterfall',
          type: 'DevelopmentMethodology',
        },
      ],
    },
    {
      name: 'Purchase Management System for Fabric Manufacturers',
      startTime: '2017-01',
      endTime: '2019-5',
      teamSize: 1,
      location: 'Taiwan',
      role: 'Leader',
      company: 'B',
      description: `A system for managing orders for fabric production from manufacturers, allowing coordination of orders, production progress, and shipping. This system is designed to integrate with the manufacturer's own ERP system. Simultaneously, it enables tracking of customer orders and associated production progress.`,
      assignedPhase: [
        'Requirements analysis',
        'Software design',
        'Architecture',
        'Testing',
        'Deployment',
      ],
      responsibilities: [
        `Requirements analysis, software design, development, deployment`,
        `Conducting technical investigations to establish a schedule`,
        `Creating API to enable integration with the manufacturer's ERP`,
        `Transitioning to paperless ordering`,
        `As the production progress of customer orders can be easily understood, it reduces the workload for internal team members`,
        `By exchanging data with the manufacturer's ERP, internal team operations become more efficient`,
      ],
      skills: [
        {
          name: 'C#',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'VB',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Javascript',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'HTML',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'CSS',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'T-SQL',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Windows',
          type: 'OperationSystem',
        },
        {
          name: 'MSSQL',
          type: 'Database',
        },
        {
          name: 'Boostrap',
          type: 'Framework',
        },
        {
          name: 'JQuery',
          type: 'Framework',
        },
        {
          name: 'EntityFramework',
          type: 'Framework',
        },
        {
          name: '.NET Framework',
          type: 'Framework',
        },
        {
          name: 'VisualStudio',
          type: 'Tool',
        },
        {
          name: 'ASP.NET MVC',
          type: 'Framework',
        },
        {
          name: 'Agile',
          type: 'DevelopmentMethodology',
        },
        {
          name: 'JIRA',
          type: 'Other',
        },
        {
          name: 'Team Foundation Server',
          type: 'Other',
        },
      ],
    },
    {
      name: 'Manufacturing Control System for Clothing Manufacturers',
      startTime: '2017-01',
      endTime: '2019-5',
      teamSize: 8,
      location: 'Taiwan',
      role: 'Sub Leader',
      company: 'B',
      description: `Due to excessive technical debt in the system, maintenance tasks have reached their limits, and there is a significant impact on adding new features. Therefore, reconstruction is necessary`,
      assignedPhase: [
        'Requirements analysis',
        'Software design',
        'Architecture',
        'Testing',
        'Deployment',
      ],
      responsibilities: [
        `Analyze the business logic of the order and production modules in the current system`,
        `Analyze the functions planned for addition in the upcoming system for the order and production modules`,
        `Add the customer claims module to the upcoming system`,
        `Conduct technical research`,
        `Perform migration tasks (from manufacturing to release)`,
        `Integrate with the purchase management system for fabric manufacturers`,
        `It is possible to work in parallel between the current and new systems before complete migration`,
        `Through integration with the purchase management system for fabric manufacturers, visualization of the production progress of orders is achieved`,
        `The customer complaints are recorded, and the progress of responses can be understood`,
        `Automatically placing orders based on customer complaints`,
      ],
      skills: [
        {
          name: 'C#',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'VB',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'T-SQL',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Windows',
          type: 'OperationSystem',
        },
        {
          name: 'MSSQL',
          type: 'Database',
        },
        {
          name: '.NET Framework',
          type: 'Framework',
        },
        {
          name: 'EntityFramework',
          type: 'Framework',
        },
        {
          name: 'DevExpress',
          type: 'Framework',
        },
        {
          name: 'Windows Presentation Foundation',
          type: 'Framework',
        },
        {
          name: 'CI/CD pipelines',
          type: 'Tool',
        },
        {
          name: 'Git',
          type: 'Tool',
        },
        {
          name: 'SVN',
          type: 'Tool',
        },
        {
          name: 'VisualStudio',
          type: 'Tool',
        },
        {
          name: 'Agile',
          type: 'DevelopmentMethodology',
        },
        {
          name: 'JIRA',
          type: 'Other',
        },
        {
          name: 'Team Foundation Server',
          type: 'Other',
        },
      ],
    },
    {
      name: 'System Migration (VB to Python, Windows to CENTOS)',
      startTime: '2016-08',
      endTime: '2016-12',
      teamSize: 5,
      location: 'Taiwan',
      role: 'Member',
      company: 'C',
      description: `To provide better customer service, we aim to improve the instability of the old system.`,
      assignedPhase: [
        'Software analysis',
        'Development',
        'Testing',
        'Deployment',
      ],
      responsibilities: [
        `Migrate VB to Python`,
        `Migrate WPF to Python Tornado API and Reactjs`,
        `As some games are developed by external companies, if information is unavailable and the customer center cannot provide an answer, collaborative efforts will be undertaken`,
      ],
      skills: [
        {
          name: 'C#',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'VB',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'CSS',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Python',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'T-SQL',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Javascript',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'HTML',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Windows',
          type: 'OperationSystem',
        },
        {
          name: 'Ubuntu',
          type: 'OperationSystem',
        },
        {
          name: 'MySQL',
          type: 'Database',
        },
        {
          name: 'Rabbitmq',
          type: 'Database',
        },
        {
          name: 'EntityFramework',
          type: 'Framework',
        },
        {
          name: '.NET Framework',
          type: 'Framework',
        },
        {
          name: 'JQuery',
          type: 'Framework',
        },
        {
          name: 'Seajs',
          type: 'Framework',
        },
        {
          name: 'Reactjs',
          type: 'Framework',
        },
        {
          name: 'Webpack',
          type: 'Framework',
        },
        {
          name: 'tornado',
          type: 'Framework',
        },
        {
          name: 'SublimeText',
          type: 'Tool',
        },
        {
          name: 'VisualStudio',
          type: 'Tool',
        },
        {
          name: 'greenlet',
          type: 'Framework',
        },
        {
          name: 'Agile',
          type: 'DevelopmentMethodology',
        },
      ],
    },
    {
      name: 'Enterprise Resource Planning (ERP) System for Retail Industry',
      startTime: '2016-04',
      endTime: '2016-07',
      teamSize: 50,
      location: 'Taiwan',
      role: 'Member',
      company: 'D',
      description: `The entire team is composed of two outsourcing companies and contract personnel, totaling around 50 participants. They are implementing the necessary functionalities based on documents provided by the contract company's system architect (SA)`,
      assignedPhase: ['Software development', 'Testing', 'Deployment'],
      responsibilities: ['Creating API and UI'],
      skills: [
        {
          name: 'C#',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'CSS',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'T-SQL',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Javascript',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'HTML',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Windows',
          type: 'OperationSystem',
        },
        {
          name: 'MSSQL',
          type: 'Database',
        },
        {
          name: 'ASP.NET MVC',
          type: 'Framework',
        },
        {
          name: '.NET Framework',
          type: 'Framework',
        },
        {
          name: 'EntityFramework',
          type: 'Framework',
        },
        {
          name: 'Angularjs',
          type: 'Framework',
        },
        {
          name: 'VisualStudio',
          type: 'Tool',
        },
        {
          name: 'JQuery',
          type: 'Framework',
        },
        {
          name: 'Agile',
          type: 'DevelopmentMethodology',
        },
        {
          name: 'JIRA',
          type: 'Other',
        },
        {
          name: 'Team Foundation Server',
          type: 'Other',
        },
      ],
    },
    {
      name: 'Maintenance work for the  E-commerce Website',
      startTime: '2014-02',
      endTime: '2016-04',
      teamSize: 4,
      location: 'Taiwan',
      role: 'Member',
      company: 'D',
      description: `Maintenance work for the existing system`,
      assignedPhase: ['Software analysis', 'design', 'development', 'Testing'],
      responsibilities: [
        `Requirements analysis and report the result to leader`,
        `Provide solution that based on system infrastructure to resolve business issue`,
      ],
      skills: [
        {
          name: 'C#',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Javascript',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'CSS',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'HTML',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'T-SQL',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Windows',
          type: 'OperationSystem',
        },
        {
          name: 'Agile',
          type: 'DevelopmentMethodology',
        },
        {
          name: 'ASP.NET MVC',
          type: 'Framework',
        },
        {
          name: 'EntityFramework',
          type: 'Framework',
        },
        {
          name: '.NET Framework',
          type: 'Framework',
        },
        {
          name: 'JQuery',
          type: 'Framework',
        },
        {
          name: 'Bootstrap',
          type: 'Framework',
        },
        {
          name: 'MSSQL',
          type: 'Database',
        },
        {
          name: 'VisualStudio',
          type: 'Tool',
        },
        {
          name: 'JIRA',
          type: 'Other',
        },
        {
          name: 'Team Foundation Server',
          type: 'Other',
        },
      ],
    },
    {
      name: 'Improvement of E-commerce Website Performance',
      startTime: '2015-08',
      endTime: '2015-12',
      teamSize: 4,
      location: 'Taiwan',
      role: 'Member',
      company: 'D',
      description: `Some stored procedures were created by a dedicated DBA in the past, but due to the growth in data volume, performance has significantly deteriorated. Therefore, measures are being taken to address this.`,
      assignedPhase: ['Software analysis', 'design', 'development', 'Testing'],
      responsibilities: [
        `Software analysis and report the result to leader`,
        `SQL Tuning`,
        `Handled stored procedures of more than 10,000 lines.`,
      ],
      skills: [
        {
          name: 'T-SQL',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'Windows',
          type: 'OperationSystem',
        },
        {
          name: 'MSSQL',
          type: 'Database',
        },
        {
          name: 'Agile',
          type: 'DevelopmentMethodology',
        },
        {
          name: 'VisualStudio',
          type: 'Tool',
        },
        {
          name: 'JIRA',
          type: 'Other',
        },
        {
          name: 'Team Foundation Server',
          type: 'Other',
        },
      ],
    },
    {
      name: 'Tax Calculation Module Modification',
      startTime: '2015-12',
      endTime: '2016-04',
      teamSize: 4,
      location: 'Taiwan',
      role: 'Member',
      company: 'D',
      description: `Due to the tax reform in the United States, it is necessary to revise the existing calculation methods. However, the customer has purchased an external tax calculation service and will integrate it`,
      assignedPhase: ['Software analysis', 'design', 'development', 'Testing'],
      responsibilities: [
        `Software analysis and report the result to leader`,
        `Conducting an impact scope investigation and integrating with external APIs.`,
        `All sections related to tax calculations have been addressed/completed`,
      ],
      skills: [
        {
          name: 'C#',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'T-SQL',
          type: 'ProgrammingLanguage',
        },
        {
          name: 'MSSQL',
          type: 'Database',
        },
        {
          name: 'ASP.NET MVC',
          type: 'Framework',
        },
        {
          name: 'EntityFramework',
          type: 'Framework',
        },
        {
          name: '.NET Framework',
          type: 'Framework',
        },
        {
          name: 'JQuery',
          type: 'Framework',
        },
        {
          name: 'VisualStudio',
          type: 'Tool',
        },
        {
          name: 'RestSharp',
          type: 'Framework',
        },
        {
          name: 'Windows',
          type: 'OperationSystem',
        },
        {
          name: 'Agile',
          type: 'DevelopmentMethodology',
        },
        {
          name: 'JIRA',
          type: 'Other',
        },
        {
          name: 'Team Foundation Server',
          type: 'Other',
        },
      ],
    },
  ],

  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
};

export default config;
