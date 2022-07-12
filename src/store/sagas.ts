import { takeLatest, put } from 'redux-saga/effects';
import { deleteTaskAction, getTasksAction, changeStatusTaskAction, editTaskAction } from './tasks.actions';
import { deleteTaskThunk, fetchTasks, changeStatusTaskThunk, editTaskThunk } from './tasks.thunk';

export function* getTasksWorkerSaga() {
  console.log('getTasksWorkerSaga!');
  yield put(fetchTasks() as any);
}

export function* deleteTaskWorkerSaga(action: ReturnType<typeof deleteTaskAction>) {
  console.log('deleteTasksWorkerSaga!');
  yield put(deleteTaskThunk(action.payload) as any);
}

export function* changeStatusTaskWorkerSaga(action: ReturnType<typeof changeStatusTaskAction>) {
    console.log('changeStatusTaskWorkerSaga!');
    yield put(changeStatusTaskThunk(action.payload) as any);
  }

  export function* editTaskWorkerSaga(action: ReturnType<typeof editTaskAction>) {
    console.log('editTaskWorkerSaga!');
    yield put(editTaskThunk({task: action.payload.task, newName: action.payload.newName}) as any);
  }

export function* tasksSagaWatcher() {
  console.log('tasksSagaWatcher!');
  yield takeLatest(getTasksAction, getTasksWorkerSaga);
  yield takeLatest(deleteTaskAction, deleteTaskWorkerSaga);
  yield takeLatest(changeStatusTaskAction, changeStatusTaskWorkerSaga);
  yield takeLatest(editTaskAction, editTaskWorkerSaga);
}
