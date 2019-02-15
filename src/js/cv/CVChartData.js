const labels = {
  languages: {
    html: 'HTML',
    css: 'CSS',
    less: 'Less CSS',
    sass: 'Sass',
    js: 'JS',
    jquery: 'jQuery',
    d3: 'D3',
    angular1: 'Angular 1',
    react: 'React',
    node: 'Node.js',
    php: 'PHP',
    wordpress: 'WordPress',
    csharp: 'C#',
    mysql: 'MySQL',
    mongo: 'MongoDB',
  },
  companies: {
    actualweb: 'Actualweb',
    m2mobi: 'M2Mobi',
    twctnw: 'TwitterCounter / TNW',
    ayondo: 'ayondo',
  },
};

const colors = {
  html: '#7798AB',
  css: '#C3DBC5',
  js: '#f9d88b',
  php: '#bcadd1',
  csharp: '#d19064',
  db: '#b0b0b0',
};

const data = {

  cvChartData: {
    companies: [
      {
        name: labels.companies.actualweb,
        span: ['08-07', '10-09'],
      },
      {
        name: labels.companies.m2mobi,
        span: ['10-09', '12-08'],
      },
      {
        name: labels.companies.twctnw,
        span: ['12-08', Infinity],
      },
    ],
    languages: [
      {
        name: labels.languages.html,
        span: ['08-07', Infinity],
        fill: colors.html,
        type: 'primary',
      },
      {
        name: labels.languages.css,
        span: ['08-07', Infinity],
        fill: colors.css,
        type: 'primary',
      },
      {
        name: labels.languages.less,
        span: ['13-01', '15-11'],
        fill: colors.css,
        type: 'primary',
      },
      {
        name: labels.languages.sass,
        span: ['15-06', Infinity],
        fill: colors.css,
        type: 'primary',
      },
      {
        name: labels.languages.jquery,
        span: ['09-06', '12-08'],
        fill: colors.js,
        type: 'secondary',
      },
      {
        name: labels.languages.jquery,
        span: ['12-08', '17-06'],
        fill: colors.js,
        type: 'primary',
      },
      {
        name: labels.languages.angular1,
        span: ['12-08', '15-12'],
        fill: colors.js,
        type: 'personal',
      },
      {
        name: labels.languages.angular1,
        span: ['17-07', '19-01'],
        fill: colors.js,
        type: 'primary',
      },
      {
        name: labels.languages.angular1,
        span: ['19-01', Infinity],
        fill: colors.js,
        type: 'secondary',
      },
      {
        name: labels.languages.react,
        span: ['14-03', '19-01'],
        fill: colors.js,
        type: 'personal',
      },
      {
        name: labels.languages.react,
        span: ['19-01', Infinity],
        fill: colors.js,
        type: 'primary',
      },
      {
        name: labels.languages.d3,
        span: ['12-12', '15-06'],
        fill: colors.js,
        type: 'primary',
      },
      {
        name: labels.languages.d3,
        span: ['15-06', Infinity],
        fill: colors.js,
        type: 'personal',
      },
      {
        name: labels.languages.node,
        span: ['14-11', Infinity],
        fill: colors.js,
        type: 'personal',
      },
      {
        name: labels.languages.php,
        span: ['08-07', '12-08'],
        fill: colors.php,
        type: 'primary',
      },
      {
        name: labels.languages.php,
        span: ['12-08', '17-06'],
        fill: colors.php,
        type: 'secondary',
      },
      {
        name: labels.languages.wordpress,
        span: ['15-06', '17-06'],
        fill: colors.php,
        type: 'secondary',
      },
      {
        name: labels.languages.csharp,
        span: ['18-01', Infinity],
        fill: colors.csharp,
        type: 'secondary',
      },
      {
        name: labels.languages.mysql,
        span: ['08-07', '10-09'],
        fill: colors.db,
        type: 'primary',
      },
      {
        name: labels.languages.mysql,
        span: ['10-09', '14-10'],
        fill: colors.db,
        type: 'personal',
      },
      {
        name: labels.languages.mongo,
        span: ['14-02', Infinity],
        fill: colors.db,
        type: 'personal',
      },
    ],
  },

  yAxisValues: [
    {
      name: labels.languages.html,
      pos: '08-07',
    },
    {
      name: labels.languages.css,
      pos: '08-07',
    },
    {
      name: labels.languages.less,
      pos: '13-01',
    },
    {
      name: labels.languages.sass,
      pos: '15-06',
    },
    {
      name: labels.languages.jquery,
      pos: '09-06',
    },
    {
      name: labels.languages.d3,
      pos: '12-12',
    },
    {
      name: labels.languages.node,
      pos: '14-11',
    },
    {
      name: labels.languages.angular1,
      pos: '12-08',
    },
    {
      name: labels.languages.react,
      pos: '14-03',
    },
    {
      name: labels.languages.php,
      pos: '08-07',
    },
    {
      name: labels.languages.csharp,
      pos: '18-01',
    },
    {
      name: labels.languages.wordpress,
      pos: '15-06',
    },
    {
      name: labels.languages.mysql,
      pos: '08-07',
    },
    {
      name: labels.languages.mongo,
      pos: '14-02',
    },
  ],

  xAxisValues: [
    {
      name: labels.companies.actualweb,
      span: ['08-07', '10-09'],
    },
    {
      name: labels.companies.m2mobi,
      span: ['10-09', '12-08'],
    },
    {
      name: labels.companies.twctnw,
      span: ['12-08', '17-06'],
    },
    {
      name: labels.companies.ayondo,
      span: ['17-06', Infinity],
    },
  ],

  yearTicks: ['09-01', '10-01', '11-01', '12-01', '13-01', '14-01', '15-01', '16-01', '17-01', '18-01', '19-01'],
};

export default data;
