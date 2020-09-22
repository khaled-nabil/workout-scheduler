import moment from 'moment';
import React from 'react';
import { Workout } from 'types/workout';
import { Paragraph, Image, Link } from 'views/atoms';

const WorkoutCards = ({ workouts }: { workouts: Array<Workout> }) => (
  <>
    {workouts?.map((workout, i) => (
      <Link
        href={`/workout/${workout._id}`}
        width={[1 / 2, 1 / 3, 1 / 5]}
        key={i}
      >
        <Image src={workout.picture} />
        <Paragraph>{workout.name}</Paragraph>
        <Paragraph>{workout.category}</Paragraph>
        <Paragraph>{moment(workout.startDate).format('YYYY-MM-DD')}</Paragraph>
      </Link>
    ))}
  </>
);

export default WorkoutCards;
