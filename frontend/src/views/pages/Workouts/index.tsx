import React from 'react';
import { MainLayout } from 'views/templates';
import { Row } from 'views/molecules';
import useWorkout from './Workouts.hook';
import { Box, Paragraph, Image } from 'views/atoms';
import { InputField } from 'views/molecules';
import moment from 'moment';
import { CategorySelector } from 'views/organisms';
import { startDateContext } from 'state/Filters.context';
import { useFilters } from 'state/Context.hook';

const yearLaterDate = moment().add(1, 'years').format('YYYY-MM-DD');
const currentDate = moment().format('YYYY-MM-DD');

const Workouts: React.FC = () => {
  const { workouts } = useWorkout();
  const startDate = useFilters();
  return (
    <startDateContext.Provider value={startDate}>
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
              ml={2}
            />
          </Box>
          <Row ml={'auto'}>
            <CategorySelector />
          </Row>
        </Row>
        <Row px={[3, null, 1]}>
          {workouts?.map((workout, i) => (
            <Box width={[1 / 2, 1 / 3, 1 / 5]} key={i}>
              <Image src={workout.picture} />
              <Paragraph>{workout.name}</Paragraph>
              <Paragraph>
                {moment(workout.startDate).format('YYYY-MM-DD')}
              </Paragraph>
            </Box>
          ))}
        </Row>
      </MainLayout>
    </startDateContext.Provider>
  );
};

export default Workouts;
