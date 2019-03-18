import React from 'react';

const Layout = ({ blogPost, login, output }) => (
    <div className="Layout">
        <div className="forms">
            {login}
            {blogPost}
        </div>
        <div className="output">{output}</div>
    </div>
);

export default Layout;