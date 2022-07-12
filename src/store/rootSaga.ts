import { SagaIterator } from "redux-saga";
import { all, spawn, put, call } from "redux-saga/effects";
import { tasksSagaWatcher } from "./sagas";
import { getTasksAction } from "./tasks.actions";

export default function* rootSaga() {
    console.log('rootSaga!');
    const sagas: any[] = [tasksSagaWatcher];
    yield all(sagas.map((saga) => spawn(sagaLoop, saga)));
    yield put(getTasksAction());
  }
  
  function* sagaLoop(saga: () => SagaIterator) {
    while (true) {
      try {
        yield call(saga);
        break;
      } catch (e: any) {
        console.log(e.message);
      }
    }
  }