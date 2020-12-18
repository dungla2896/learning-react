import React, {lazy, Suspense} from 'react';
import { Skeleton } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const HomeComponent = lazy(() => import('./pages/home'));
const UpcomingComponent = lazy(() => import('./pages/up-coming'));

export default function App() {

  return(
    <Router>
       <Suspense
          fallback={<Skeleton active />}
        >
        <Switch>
          <Route path="/home">
            <HomeComponent/>
          </Route>
          <Route path="/up-coming">
            <UpcomingComponent/>
          </Route>
          <Route exact path="/">
            <HomeComponent/>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}