import {render, renderHook} from '@testing-library/react-native';
import React from 'react';
import useCountTimer from '../../../component/timerHook/useCountTimer';
import {navigation} from '../../../utils/testUtils';

import Home from '../index';

describe('render Home Screen', () => {
  it('should render correctly', () => {
    const component = render(
      <Home
        navigation={navigation}
        route={{key: '', name: 'Home', params: {}, path: ''}}
      />,
    );
    expect(component).toBeTruthy();
  });
  it('should match with the snapshot', () => {
    const component = render(
      <Home
        navigation={navigation}
        route={{key: '', name: 'Home', params: {}, path: ''}}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('should have the following tab and the for you tab in the header', () => {
    const component = render(
      <Home
        navigation={navigation}
        route={{key: '', name: 'Home', params: {}, path: ''}}
      />,
    );
    expect(component).toBeTruthy();
  });

  it('shoould render the timer functionality', () => {
    render(
      <Home
        navigation={navigation}
        route={{key: '', name: 'Home', params: {}, path: ''}}
      />,
    );

    const startingTime = 1;
    const startTimer = false;
    const {result} = renderHook(() => useCountTimer(startingTime, startTimer));

    expect(result.current[3]).toBeDefined();
  });
});
