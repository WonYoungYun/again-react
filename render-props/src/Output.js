import React from 'react';

const Output = ({ login, blogPost }) => (
    <div className="Output">
        <h3>LoginForm results: </h3>
        <div className="json">{JSON.stringify(login, null, 2)}</div>
        <hr />
        <h3>BlogPostForm results: </h3>
        <div className="json">{JSON.stringify(blogPost, null, 2)}</div>
    </div>
);

export default Output;