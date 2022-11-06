import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { HonorAndAwardType } from '../../../../types/ResumePage';

const HonorsAndAwards = () => {

  const data: HonorAndAwardType[] = [
    {
      title: 'Hackathon 2.0 DCI',
      startDate: new Date(2021, 10, 1),
      description: 'First Place at Hackathon with "Stir It Up". Coding and Marketing competition.',
      city: undefined,
      country: 'Germany',
      online: true
    },
    {
      title: 'Start Up Weekend Cartagena',
      startDate: new Date(2017, 10, 1),
      description: 'Second place with "Mi Artesano" , a social ecommerce with products of San Jacinto, Colombia.',
      city: 'Cartagena',
      country: 'Colombia',
      online: false
    },
    {
      title: 'Marriott International',
      startDate: new Date(2015, 2, 1),
      description: '"The Spirit To Serve" , award for exemplary commitment to quality service.',
      city: 'Shanghai',
      country: 'China',
      online: false
    },
    {
      title: 'Les Roches Jin Jiang International School of Hotel Management',
      startDate: new Date(2013, 10, 1),
      endDate: new Date(2014, 10, 1),
      description: 'Student of the month Postgraduate (PGD) I Class, Student of the month PGD II Class, Class Delegate PGD I, Class Delegate PGD II, Student supervisor spring quarter and Student supervisor summer quarter.',
      city: 'Shanghai',
      country: 'China',
      online: false
    },
    {
      title: 'Universidad Jorge Tadeo Lozano (11/2012)',
      startDate: new Date(2021, 10, 1),
      description: 'First place with "True Sight", a new concept of tourist guidebooks for the city of Cartagena, Colombia.',
      city: 'Cartagena',
      country: 'Colombia',
      online: false
    },
  ]
  return (
    <Box py={1}>
      <Typography component="h2" variant="h5">Honors and awards</Typography>
      <Box>
        {
          data.map(item => {
            const { title, startDate, endDate, description, city, country, online } = item
            const start = startDate.toLocaleDateString(undefined, { month: '2-digit', year: 'numeric' })
            const end = endDate?.toLocaleDateString(undefined, { month: '2-digit', year: 'numeric' })
            return (
              <>
                <Box py={1} key={title}>
                  <Typography
                    component="h3" variant="h5" color='secondary.dark'
                  >{title}
                  </Typography>
                  <Box py={0.5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontStyle: "italic" }}>
                    <Box sx={{ display: 'flex' }}>
                      <Typography color="secondary.light">{start}</Typography>
                      {
                        endDate && <Typography color="secondary.light" ml={1}>{'-'} {end}</Typography>
                      }
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <Typography color="secondary.light">{city && `${city},`} {country}</Typography>
                      {
                        online && <Typography color="secondary.light" ml={1}>{' (Online)'}</Typography>
                      }
                    </Box>
                  </Box>
                  <Typography variant="body2" fontStyle='italic' sx={(theme) => ({ color: theme.palette.grey[500] })}>{description}</Typography>
                </Box>
                <Divider />
              </>
            )
          })
        }
      </Box>
    </Box>
  );
};

export default HonorsAndAwards;