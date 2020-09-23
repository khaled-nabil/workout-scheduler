import React from 'react';
import { shallow } from 'enzyme';
import { mocked } from 'ts-jest/utils';
import Workout from './';
import { Workout as WorkoutType } from 'types/workout';
import useWorkout from './Workout.hook';
import toJson from 'enzyme-to-json';

jest.mock('./Workout.hook');

const mockedUseWorkout = mocked(useWorkout, true);

const workoutData: WorkoutType = {
  _id: '123',
  name: 'elit Lorem amet',
  description: 'Eu laborum duis reprehenderit minim.',
  category: 'c1',
  picture: 'http://placehold.it/200x200',
  startDate: new Date('2020-09-22'),
};

const useWorkoutResponse = (workout?: WorkoutType) => ({
  workout: workout,
  loading: false,
  hasError: false,
});

describe('Workout', () => {
  it('Should display workout details when workout date exists', () => {
    mockedUseWorkout.mockReturnValueOnce(useWorkoutResponse(workoutData));
    const component = shallow(<Workout />);
    const Image = component.find('Image');
    expect(Image).toHaveLength(1);
    expect(Image.props().src).toBe(workoutData.picture);
    const Paragraph = component.find('Paragraph');
    expect(Paragraph).toHaveLength(4);
    expect(toJson(component)).toMatchSnapshot();
  });
  it('Should display only back button when no workout passed', () => {
    mockedUseWorkout.mockReturnValueOnce(useWorkoutResponse());
    const component = shallow(<Workout />);
    const Image = component.find('Image');
    expect(Image.exists()).toBeFalsy();
    const Row = component.find('Row');
    expect(Row).toHaveLength(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
