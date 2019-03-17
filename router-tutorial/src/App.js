import React, { Component } from 'react';

import { Route, Link, Switch } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profiles">프로필 선택 목록</Link>
          </li>
          <li>
            <Link to="/history">히스토리</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profiles" component={Profiles} />
          <Route path="/history" component={HistorySample} />
          <Route //path를 따로잡지 않으면 모든상황에 렌더링된다.
            render={({ location }) => (
              <div>
                <h2>이 페이지는 존재하지 않습니다.</h2>
                <p>{location.pathname}</p>
              </div>
            )}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
