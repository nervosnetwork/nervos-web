import * as React from 'react'
import { Route } from 'react-router-dom'
import AsyncLoader from '../AsyncLoader'
import Loading from '../Loading'

/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const AsyncRender = mod => routerProps => {
  if (!mod) return null
  const Component = require(`bundle-loader?lazy!../../containers/${mod}`)
  return (
    <AsyncLoader load={Component}>
      {Comp => (Comp
        ? <Comp
          {...routerProps}
        />
        : <Loading />)}
    </AsyncLoader>
  )
}
/* eslint-enable import/no-dynamic-require */
/* eslint-enable global-require */

/* eslint-disable no-use-before-define */
interface AsyncRoutes {
  (
    routes: { path: string; key: string; module: string; exact?: boolean }[],
  ): React.ReactChild[]
}
const AsyncRoutes: AsyncRoutes = routes =>
  routes.map(route => <Route {...route} render={AsyncRender(route.module)} />)
/* eslint-enable no-use-before-define */

export default AsyncRoutes
