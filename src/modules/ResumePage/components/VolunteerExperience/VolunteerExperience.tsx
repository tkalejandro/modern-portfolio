import React from 'react';
import { LifeHighlights } from '../../../../types/ResumePage';

const VolunteerExperience = () => {

  const data: LifeHighlights[] = [
    {
      title: 'Global Shaper Member (Hub CARTAGENA)',
      entity: 'Global Shaper',
      startDate: new Date(2018, 3, 1),
      endDate: new Date(2019, 10, 1),
      explanation: 'The Global Shapers Community is a network of young people driving dialogue, action, and change in pro of their communities.',
      city: 'Cartagena',
      country: 'Colombia',
      online: false,
      subtitle: 'Task/Achievements',
      highlights: [
        'Successfully planned and executed with all the team members project #BOSKE, for the city of Cartagena. #BOSKE is a leadership school that was created to tackle the lack of leadership that exists in Cartagena.',
        'We empowered 30 young kids from Cartagena, between the ages of 12 and 16 years old, and train them to be citizens who add value to their communities and help them to be self-advocate for the improvement of their quality of life.'
      ]
    },
  ]

  return (
    <>
      <h1>Volunter experience</h1>
    </>
  );
};

export default VolunteerExperience;