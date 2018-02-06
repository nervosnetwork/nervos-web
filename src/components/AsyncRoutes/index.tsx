import * as React from 'react'
import { Route } from 'react-router-dom'
import AsyncLoader from '../AsyncLoader'
import Loading from '../Loading'
import { IPage } from '../../routes'

/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const AsyncRender = (mod, routes) => routerProps => {
  if (!mod) return null
  const Component = require(`bundle-loader?lazy!../../containers/${mod}`)
  return (
    <AsyncLoader load={Component}>
      {Comp => (Comp ? <Comp {...routerProps} routes={routes} /> : <Loading />)}
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
const AsyncRoutes: AsyncRoutes = (routes: IPage[]) =>
  routes.map(route => (
    <Route {...route} render={AsyncRender(route.module, routes)} />
  ))
/* eslint-enable no-use-before-define */

export default AsyncRoutes
