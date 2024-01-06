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
