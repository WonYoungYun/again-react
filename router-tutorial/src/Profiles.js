import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

const Profiles = () => {
    return (
        <div>
            <h3>유저 목록 :</h3>
            <ul>
                <li>
                    <NavLink to="/profiles/me" activeStyle={{ background: 'black', color: 'white' }}>Me</NavLink>
                </li>
                <li>
                    <NavLink to="/profiles/you" activeStyle={{ background: 'black', color: 'white' }}>you</NavLink>
                </li>

            </ul>

            <Route path="/profiles" exact render={() => <div>유저를 선택해주세요</div>} />
            {/* render를 통해 jsx자체를 render할 수 있으며, 상위에서 props나 기타값을 받을 수 있다. */}
            <Route path="/profiles/:username" component={Profile} />
            <WithRouterSample />
        </div>
    )
}

export default Profiles