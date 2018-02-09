import { Observable } from 'rxjs'
import throttleTime from 'rxjs/add/operator/throttleTime'

export const scrollObservable = Observable.fromEvent(
  document,
  'scroll',
).throttleTime(10)

export default {
  scrollObservable,
}
