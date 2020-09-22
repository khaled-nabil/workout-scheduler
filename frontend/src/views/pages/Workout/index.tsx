import React from 'react';
import { MainLayout } from 'views/templates';
import { LinkBox, Row } from 'views/molecules';
import useWorkout from './Workout.hook';
import { Box, Image, Paragraph } from 'views/atoms';
import moment from 'moment';

const Workout = () => {
  const { workout } = useWorkout();
  return (
    <MainLayout>
      <Row mx="auto" mb={3} width={[1, null, 3 / 4, 1 / 2]} px="4">
        <LinkBox href="/">{'< All Workouts'}</LinkBox>
      </Row>
      {workout && (
        <Row mx="auto" width={[1, null, 3 / 4, 1 / 2]} px="4">
          <Box width={[1, null, 1 / 4]}>
            <Image src={workout.picture} alt={workout.name} />
          </Box>
          <Box pl="4">
            <Paragraph>{workout.name}</Paragraph>
            <Paragraph>{workout.description}</Paragraph>
            <Paragraph>{workout.category}</Paragraph>
            <Paragraph>
              {moment(workout.startDate).format('YYYY-MM-DD')}
            </Paragraph>
          </Box>
        </Row>
      )}
    </MainLayout>
  );
};

export default Workout;
