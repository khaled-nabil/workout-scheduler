import React from 'react';
import { MainLayout } from 'views/templates';
import { Checkbox, Row } from 'views/molecules';
import useWorkout from './Workouts.hook';
import { Box, Paragraph, Image } from 'views/atoms';
import { InputField } from 'views/molecules';
import moment from 'moment';

const yearLaterDate = moment().add(1, 'years').format('YYYY-MM-DD');
const currentDate = moment().format('YYYY-MM-DD');

const Workouts: React.FC = () => {
  const { workouts } = useWorkout();
  return (
    <MainLayout>
      {/* TODO: Add internationalization value */}
      <Box mx={[2, null, 1]}>
        <InputField
          max={yearLaterDate}
          value={currentDate}
          label="Start Date"
          type="date"
          name="startDate"
          ml={2}
        />
        <Checkbox label="End Date" name="category[]" />
      </Box>
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
