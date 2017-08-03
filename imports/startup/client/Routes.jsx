import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { StyleRoot } from 'radium';

import store from '../../redux/store';

import MainLayout from '../../ui/layouts/Main.jsx';

import MingJuanContainer from '../../ui/containers/MingJuanContainer.jsx';
import ArticleContainer from '../../ui/containers/ArticleContainer.jsx';
import CounterContainer from '../../ui/containers/CounterContainer.jsx';
import MyTestContainer from '../../ui/containers/MyTestContainer.jsx';

const history = syncHistoryWithStore(browserHistory, store);
const route = store.getState().route;

Meteor.startup(() => {
  render(
    <StyleRoot>
      <Provider store={store}>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
          <Route path={route.root} component={MainLayout}>
            {/* 默认的首页*/}
            <IndexRoute component={MingJuanContainer} />
            {/* 下边的子页面*/}
            <Route path={route.mingjuan}>
              <IndexRoute component={ArticleContainer} />
              <Route path={route.counter} component={CounterContainer} />
            </Route>
            <Route path={route.mytest} component={MyTestContainer} />
          </Route>
        </Router>
      </Provider>
    </StyleRoot>,
    document.getElementById('main-container')
  );
});
