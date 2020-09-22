import React from 'react';
import { MainLayout } from 'views/templates';
import { Row } from 'views/molecules';
import useWorkout from './Workouts.hook';
import { Box } from 'views/atoms';
import { InputField } from 'views/molecules';
import moment from 'moment';
import { CategorySelector, WorkoutCards } from 'views/organisms';
import { startDateContext } from 'state/Filters.context';
import { useFilters } from 'state/Context.hook';

const yearLaterDate = moment().add(1, 'years').format('YYYY-MM-DD');
const currentDate = moment().format('YYYY-MM-DD');

const Workouts: React.FC = () => {
  const { workouts, loading, onDateChange } = useWorkout();
  const filters = useFilters();
  return (
    <startDateContext.Provider value={filters}>
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
      </MainLayout>
    </startDateContext.Provider>
  );
};

export default Workouts;
