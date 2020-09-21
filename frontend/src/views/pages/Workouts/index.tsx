import React from 'react';
import { MainLayout } from 'views/templates';
import { Row } from 'views/molecules';
import useWorkout from './Workouts.hook';
import { Box, Paragraph, Image } from 'views/atoms';

const Workouts: React.FC = () => {
  const { workouts } = useWorkout();
  return (
    <MainLayout>
      <Row px={[3, null, 1]}>
        {workouts?.map((workout, i) => (
          <Box width={1 / 5} key={i}>
            <Image src={workout.picture} />
            <Paragraph>{workout.name}</Paragraph>
          </Box>
        ))}
      </Row>
    </MainLayout>
  );
};

export default Workouts;
