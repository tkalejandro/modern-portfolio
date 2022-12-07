import React from 'react';
import { LifeHistory } from '..';
import { LifeHighlights } from '../../../../types/ResumePage';

const WorkExperience = () => {

  const data: LifeHighlights[] = [
    {
      id: 7,
      title: 'Junior Developer',
      entity: 'COMPEON GmbH',
      startDate: new Date(2022, 4, 1),
      endDate: undefined,
      city: 'Düsseldorf',
      country: 'Germany',
      online: false,
      subtitle: 'Achievements/Tasks',
      highlights: [
        'FullStack Web developer mainly focus in React, TypeScript, ASP.NET (C#), APIs, and Microsoft SQL Management.',
        'Focus in innovation of new products for the personal.',
        'Leading role with the Timeline project.'
      ]
    },
    {
      id: 6,
      title: 'Co-founder',
      entity: '100BestApp OÜ',
      startDate: new Date(2022, 5, 1),
      endDate: undefined,
      explanation: `100Best.guide is an independent food & drink guide for world's key travel destinations.`,
      //city: 'Cartagena',
      country: 'Estonia',
      online: true,
      subtitle: 'Achievements/Tasks',
      highlights: [
        'Legal Representative.',
        'Front End Web Arquitect for 100 Best WebApp and 100 Best Mobile.',
        'Product Mananger.',
      ]
    },
    {
      id: 5,
      title: 'General Manager (Founder)',
      entity: 'Emprendedores Digitales SAS',
      startDate: new Date(2018, 0, 1),
      endDate: new Date(2020, 2, 1),
      explanation: 'Social E-commerce Enterprise (#MiArtesano) and International Shippings.',
      city: 'Cartagena',
      country: 'Colombia',
      online: false,
      subtitle: 'Achievements/Tasks',
      highlights: [
        'Legal Representative.',
        'Created the ecosystem for the company to be able to sell handicrafts from San Jacinto (village), Colombia to international, in partnership with DHL Express, with a􏰀ordable prices in a secure (SSL) user-friendly website made in WordPress with extra plugins hosted in GoDaddy.',
        'Offered tailor-made customer service to our international wholesale clients in Asia and help them in the customs process.',
        'Created a successful logistics side business offering to customers international shipping from/ to Colombia at a􏰀ordable prices. A Google Ads campaign was created with a daily 15% ~ 20% CTR, leading us to find recurrent customers on our website.'
      ]
    },
    {
      id: 4,
      title: 'F&B Operations Trainee',
      entity: 'CE LA VI Hong Kong',
      startDate: new Date(2017, 0, 1),
      endDate: new Date(2017, 5, 1),
      explanation: undefined,
      city: 'Hong Kong',
      country: 'Hong Kong',
      online: false,
      subtitle: 'Achievements/Tasks',
      highlights: [
        'Worked in the service team at the Japanese fusion restaurant and assisted in the Purchase department making sure all invoices were well documented for the accountability book.',
      ]
    },
    {
      id: 3,
      title: 'SITCAR Assistant',
      entity: 'Cartagena de Indias Tourism Board',
      startDate: new Date(2015, 7, 1),
      endDate: new Date(2015, 10, 1),
      explanation: 'System Indicators of Tourism Cartagena',
      city: 'Cartagena',
      country: 'Colombia',
      online: false,
      subtitle: 'Achievements/Tasks',
      highlights: [
        'Contributed to the publishing of "Indicadores Turisticos de Cartagena 2014 - 2015", a book of hospitality trends of Cartagena.',
      ]
    },
    {
      id: 2,
      title: 'F&B Management Trainee',
      entity: 'Shanghai Marriott City Centre',
      startDate: new Date(2014, 10, 1),
      endDate: new Date(2015, 4, 1),
      explanation: undefined,
      city: 'Shanghai',
      country: 'China',
      online: false,
      subtitle: 'Achievements/Tasks',
      highlights: [
        'Ensured quality service and customer satisfaction. Trained staff in customer service and helped to increase the work spirit. Responsible of Problem-solving in the buffet restaurant with an average of 1200 customers per day.',
      ]
    },
    {
      id: 1,
      title: 'Front Office Trainee',
      entity: 'Sofitel Legend Santa Clara',
      startDate: new Date(2012, 9, 1),
      endDate: new Date(2012, 11, 1),
      explanation: undefined,
      city: 'Cartagena',
      country: 'Colombia',
      online: false,
      subtitle: 'Achievements/Tasks',
      highlights: [
        'Internship of 4 Months in which i gained experience in the management from the Front Desk / Guest Service / Business Center.',
      ]
    },
  ]

  return <LifeHistory mainTitle='Work Experience' data={data} />
};

export default WorkExperience;