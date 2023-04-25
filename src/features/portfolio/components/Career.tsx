import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';
import CareerCard from './Career/CareerCard';
import SectionHeader from './common/SectionHeader';
import TextHighlight from './common/TextHighlight';

export type CareerProps = {
  // No Props
};

const data = [
  {
    date: 'August 2017',
    title: 'Utalk',
    description:
      'Learned Vue.js, also was appointed to lead the team on the vue.js project for a School Management System',
  },
  {
    date: 'September 2019',
    title: 'YNS Philippines Inc.',
    description:
      'Learned many systems like Live streaming service, gambling sites and Website management system. Mainly used Laravel, CakePHP, VueJS and ReactJS',
  },
  {
    date: 'September 2021',
    title: 'Yondu',
    description:
      'Gambling site, election app, seat/room reservation app, hr management tool. Mainly used Nuxt.js and Next.js',
  },
];
const Career: FunctionComponent<CareerProps> = () => {
  return (
    <div className='max-w-screen-lg mx-auto my-32'>
      <Stack className='bg-transparent text-white py-32 space-y-24'>
        <SectionHeader
          title='CAREER'
          description={"A Software Engineer's tale"}
        />

        <Stack className='space-y-24'>
          <CareerCard
            HeaderComponent={
              <CareerCard.Header
                year={2017}
                title='Beijing Bangnishou Unlimited Philippines Inc'
                flag={<></>}
              ></CareerCard.Header>
            }
            DescriptionComponent={
              <p>
                Still a clumsy{' '}
                <TextHighlight textColor='text-green-500'>
                  Junior Software Application Developer
                </TextHighlight>{' '}
                who thinks he knows it all. Got a huge experience in
                implementing a{' '}
                <TextHighlight textColor='text-green-600'>VueJS</TextHighlight>{' '}
                single page application project back when it was still new.
              </p>
            }
            apps={['School Management System']}
          />
          <CareerCard
            HeaderComponent={
              <CareerCard.Header
                year={2019}
                title='YNS Philippines Inc'
                flag={<></>}
              ></CareerCard.Header>
            }
            DescriptionComponent={
              <p>
                Promoted to being a{' '}
                <TextHighlight textColor='text-blue-400'>
                  Mid Full-Stack Developer
                </TextHighlight>
                . Still flashy and over-engineered coding, was able to gain
                experience in 3rd party API integrations like{' '}
                <TextHighlight textColor='text-slate-200'>
                  FacebookAPI, Stripe, Twilio, etc.
                </TextHighlight>
              </p>
            }
            apps={[
              'Live Streaming Service',
              'Gambling Site',
              'Room for rent',
              'IT Management System',
            ]}
          />
          <CareerCard
            HeaderComponent={
              <CareerCard.Header
                year={2021}
                title='Yondu'
                flag={<></>}
              ></CareerCard.Header>
            }
            DescriptionComponent={
              <p>
                Specialized in{' '}
                <TextHighlight textColor='text-blue-400'>
                  Front-end Development
                </TextHighlight>{' '}
                and was in loved with
                <TextHighlight textColor='text-sky-300'>
                  {' '}
                  TailwindCSS
                </TextHighlight>
                . Trying hard to follow the{' '}
                <TextHighlight>“KISS”</TextHighlight> principle in most
                projects. Helped in developing a{' '}
                <TextHighlight textColor='text-yellow-400'>
                  {' '}
                  million dollar app
                </TextHighlight>
                .
              </p>
            }
            apps={[
              'Gambling Site',
              'Reservation App (Parking, Seats, Room)',
              'Election App',
              'Microfrontend',
              'Single Codebase App (React-native-web)',
            ]}
          />
        </Stack>
      </Stack>
    </div>
  );
};

export default Career;
