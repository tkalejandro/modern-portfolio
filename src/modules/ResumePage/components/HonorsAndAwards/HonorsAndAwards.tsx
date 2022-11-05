import React from 'react';
import { HonorAndAwardType } from '../../../../types/ResumePage';

const HonorsAndAwards = () => {

  const data: HonorAndAwardType[] = [
    {
      title: 'Hackathon 2.0 DCI',
      startDate: new Date(2021, 10, 1),
      description: 'First Place at Hackathon with "Stir It Up". Coding and Marketing competition.'
    },
    {
      title: 'Start Up Weekend Cartagena',
      startDate: new Date(2017, 10, 1),
      description: 'Second place with "Mi Artesano" , a social ecommerce with products of San Jacinto, Colombia.'
    },
    {
      title: 'Marriott International',
      startDate: new Date(2015, 2, 1),
      description: '"The Spirit To Serve" , award for exemplary commitment to quality service.'
    },
    {
      title: 'Les Roches Jin Jiang International School of Hotel Management',
      startDate: new Date(2013, 10, 1),
      endDate: new Date(2014, 10,1),
      description: 'Student of the month Postgraduate (PGD) I Class, Student of the month PGD II Class, Class Delegate PGD I, Class Delegate PGD II, Student supervisor spring quarter and Student supervisor summer quarter.'
    },
    {
      title: 'Universidad Jorge Tadeo Lozano (11/2012)',
      startDate: new Date(2021, 10, 1),
      description: 'First place with "True Sight", a new concept of tourist guidebooks for the city of Cartagena, Colombia.'
    },
  ]
  return (
    <>
      <h1>Honors and awards</h1>
    </>
  );
};

export default HonorsAndAwards;