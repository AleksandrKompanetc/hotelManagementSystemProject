import { takeEvery, takeLatest, takeLeading, select } from "@redux-saga/core/effects";

const delay = (time) => new Promise((resolve, reject) => {
    setTimeout(resolve, time * 1000);
})

export function* workerSaga() {
    const count = yield select(({counter}) => counter.count);
    yield delay(2);
    console.log(`request ${count}`);
}

export function* watchClickSaga() {
    
}

export default function* rootSaga() {
    yield watchClickSaga();
}