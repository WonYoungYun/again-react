import React, { Component } from 'react';
import Layout from './Layout';
import BlogPostForm from './BlogPostForm';
import LoginForm from './LoginForm';
import Output from './Output';
import FormManager from './FormManager';

class App extends Component {
  state = {
    blogPost: null,
    login: null,
  };
  handleSubmitLogin = login => {
    this.setState({
      login
    })
  };

  handleSubmitBlogPost = blogPost => {
    this.setState({
      blogPost
    })
  }

  render() {
    const { login, blogPost } = this.state;

    return (
      <Layout
        login={
          <FormManager
            initialForm={{
              username: '',
              password: ''
            }}
            onSubmit={this.handleSubmitLogin}
          >
            {({ form, onChange, onSubmit }) => (
              <LoginForm onChange={onChange} onSubmit={onSubmit} form={form} />
            )}
          </FormManager>
        }
        blogPost={
          <FormManager
            initialForm={{
              title: '',
              content: '',
              tags: ''
            }}
            onSubmit={this.handleSubmitBlogPost}
          >
            {({ form, onChange, onSubmit }) => (
              <BlogPostForm onChange={onChange} onSubmit={onSubmit} form={form} />
            )}
          </FormManager>
        }
        output={<Output blogPost={blogPost} login={login} />}
      />
    );
  }
}

export default App;
