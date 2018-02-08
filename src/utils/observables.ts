const { Observable, Subject, ReplaySubject } = require('rxjs')
const { from, of, range, fromEvent } = require('rxjs/create')
const {
  map,
  filter,
  switchMap,
  throttleTime,
  debounceTime,
} = require('rxjs/operators')

export const rangeObservable = range(1, 10).pipe(
  filter(x => x % 2 === 1),
  map(x => x + x),
)

export const scrollObservable = fromEvent(document, 'scroll').throttleTime(100)
