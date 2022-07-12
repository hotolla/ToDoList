import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  applyMiddleware,
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const createRootReducer = () => {
  return combineReducers({
    todo: tasksReducer,
  })
}

export const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: createRootReducer(),
    middleware: getDefaultMiddleware({
      serializableCheck: false, // not used in current project
    }).concat([sagaMiddleware]),
  });

  sagaMiddleware.run(rootSaga);

  return store
};

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
export type AppDispatch = ReturnType<typeof createStore>['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
