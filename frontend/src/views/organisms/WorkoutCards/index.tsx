import moment from 'moment';
import React from 'react';
import { Workout } from 'types/workout';
import { Paragraph, Image, Link, Box } from 'views/atoms';

const WorkoutCards = ({ workouts }: { workouts: Array<Workout> }) => (
  <>
    {workouts?.map((workout, i) => (
      <Link
        href={`/workout/${workout._id}`}
        width={[1 / 2, 1 / 3, 1 / 4, 1 / 5]}
        key={i}
      >
        <Box m={[2, null, null, 3]}>
          <Image width={'100%'} src={workout.picture} />
          <Paragraph>{workout.name}</Paragraph>
          <Paragraph>{workout.category}</Paragraph>
          <Paragraph>
            {moment(workout.startDate).format('YYYY-MM-DD')}
          </Paragraph>
        </Box>
      </Link>
    ))}
  </>
);

export default WorkoutCards;
