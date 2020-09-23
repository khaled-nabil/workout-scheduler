import React from 'react';
import { MainLayout } from 'views/templates';
import { Row } from 'views/molecules';
import useWorkout from './Workouts.hook';
import { Box, Container, LoadingScreen } from 'views/atoms';
import { InputField } from 'views/molecules';
import { CategorySelector, Pagination, WorkoutCards } from 'views/organisms';
import moment from 'moment';

const yearLaterDate = moment().add(1, 'years').format('YYYY-MM-DD');
const currentDate = moment().format('YYYY-MM-DD');

const Workouts: React.FC = () => {
  const { workouts, register, filterSubmit, loading } = useWorkout();

  return (
    <MainLayout>
      {/* TODO: Add internationalization value */}
      <form>
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
              ref={register}
              onChange={filterSubmit}
              ml={2}
            />
          </Box>
          <Row ml={'auto'}>
            <CategorySelector ref={register} submit={filterSubmit} />
          </Row>
        </Row>
      </form>
      <Container>
        <LoadingScreen display={loading}/>
        <Row px={[3, null, 1]}>
          {workouts && <WorkoutCards workouts={workouts} />}
        </Row>
      </Container>
      <Row justifyContent="center" mb={5} mt={3}>
        <Pagination />
      </Row>
    </MainLayout>
  );
};

export default Workouts;
