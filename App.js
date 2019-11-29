import React from 'react';
import navigator from './routes';
import {createAppContainer} from 'react-navigation';
import {initialState, reducer} from './utils/globalState';
import {StateProvider} from './utils/provider';

const AppContainer = createAppContainer(navigator);

export default () => {
  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <AppContainer />
    </StateProvider>
  );
};
