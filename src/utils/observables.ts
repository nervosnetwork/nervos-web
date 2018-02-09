import { Observable } from 'rxjs'
import throttleTime from 'rxjs/add/operator/throttleTime'

// const { fromEvent } = require('rxjs/create')
// const { throttleTime } = require('rxjs/operators')

export const scrollObservable = Observable.fromEvent(
  document,
  'scroll',
).throttleTime(10)

export default {
  scrollObservable,
}
