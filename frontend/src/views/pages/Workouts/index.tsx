import React from 'react';
import { MainLayout } from 'views/templates';
import { Row } from 'views/molecules';
import useWorkout from './Workouts.hook';
import { Box } from 'views/atoms';
import { InputField } from 'views/molecules';
import moment from 'moment';
import { CategorySelector, Pagination, WorkoutCards } from 'views/organisms';

const yearLaterDate = moment().add(1, 'years').format('YYYY-MM-DD');
const currentDate = moment().format('YYYY-MM-DD');

const Workouts: React.FC = () => {
  const { workouts, loading, onDateChange } = useWorkout();
  return (
    <MainLayout>
      {/* TODO: Add internationalization value */}
      <Row
        mx={[2, null, null, null, 'auto']}
        mb={3}
        width={[1, null, null, null, 3 / 4, 1 / 2]}
      >
        <Box>
          <InputField
            max={yearLaterDate}
            defaultValue={currentDate}
            label="Start Date"
            type="date"
            name="startDate"
            onChange={onDateChange}
            ml={2}
          />
        </Box>
        <Row ml={'auto'}>
          <CategorySelector />
        </Row>
      </Row>
      <Row px={[3, null, 1]}>
        {!loading && workouts && <WorkoutCards workouts={workouts} />}
      </Row>
      <Row justifyContent="center" mb={5} mt={3}>
        <Pagination />
      </Row>
    </MainLayout>
  );
};

export default Workouts;
