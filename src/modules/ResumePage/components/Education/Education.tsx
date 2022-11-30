import React from 'react';
import { LifeHistory } from '..';
import { LifeHighlights } from '../../../../types/ResumePage';

const Education = () => {
  const data : LifeHighlights[] = [
    {
      id: 4,
      title: 'Full Stack Web Developer (MERN)',
      entity: 'DCI Digital Career Institute gGmbH',
      startDate: new Date(2021, 1, 1),
      endDate: new Date(2022, 2, 1),
      explanation: undefined,
      city: undefined,
      country: 'Germany',
      online: true,
      subtitle: 'Modules',
      highlights: [
        'Front-End Learning: Semantics, Accessibility, Mobile First, UI/UX, ES6 functions, DOM manipulation, Object Oriented Programming, debugging, React and fetching API.',
        'Back-End Learning: Controllers, Middleware, routes, HTTP Methods, RESTful API, MySQL, Postman, Compass, Databases, Tables / Collections, Error Handlings and Security.',
        'Hackathon 2.0 DCI: First Place - "Stir It Up"'
      ]
    },
   
    {
      id: 3,
      title: 'Master in Web Analytics and Big Data',
      entity: 'Spain Business School',
      startDate: new Date(2017, 1, 1),
      endDate: new Date(2018, 2, 1),
      explanation: undefined,
      city: 'Madrid',
      country: 'Spain',
      online: true,
      subtitle: 'Focus',
      highlights: [
        'Web Analytics (Google Analytics), digital presence, and E-commerce.',
        'Internet of Things and understanding of Big Data.',
      ]
    },
    {
      id: 2,
      title: 'International Hospitality Management',
      entity: 'Les Roches Jin Jiang International School of Hotel Management',
      startDate: new Date(2013, 10, 1),
      endDate: new Date(2015, 4, 1),
      explanation: undefined,
      city: 'Shanghai',
      country: 'China',
      online: false,
      subtitle: 'Modules',
    },
    {
      id: 1,
      title: 'Business Administration in Tourism',
      entity: 'Universidad Jorge Tadeo Lozano',
      startDate: new Date(2009, 1, 1),
      endDate: new Date(2013, 2, 1),
      explanation: undefined,
      city: 'Cartagena',
      country: 'Colombia',
      online: true,
      subtitle: 'Modules',
    },
  ]

  return  <LifeHistory mainTitle="Education" data={data}/> 
};

export default Education;