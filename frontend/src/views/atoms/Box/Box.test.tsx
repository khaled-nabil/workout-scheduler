import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Box from './';

describe('atom / Box', () => {
  it('Renders in containment with default props', () => {
    const component = shallow(
      <Box>
        <span>Contained Span</span>
      </Box>,
    );
    expect(component.text()).toEqual('Contained Span');
    expect(component.find('span').exists()).toBeTruthy();
    expect(toJson(component)).toMatchSnapshot();
  });

  it('Renders with custom values when props passed', () => {
    const component = shallow(
      <Box className="class-name" flex={1}>
        <span>Contained Span</span>
      </Box>,
    );

    expect(component.find('span').exists()).toBeTruthy();
    expect(component.prop('className').trim()).toContain('class-name');
    expect(component.prop('flex')).toEqual(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
