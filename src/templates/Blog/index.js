import React from 'react';
import BlogPost from "../../components/BlogPost";
import Construction from "../../components/Construction";
import './style.css';

export default class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      failed: false
    };
  }

  componentWillMount = async () => {
    let response = await fetch(`https://wp.joshuamk.com/wp-json/wp/v2/posts/?filter[posts_per_page]=-1`);
    let data = await response.json();
    if (this.state.posts.length === 0) {
      this.setState({ posts: [], failed: true })
    } else
      this.setState({ posts: data, failed: false });
  }

  render() {
    return (
      <div className='blog'>
        {!this.state.failed ? this.state.posts.map(post => (
          <BlogPost post={post} />
        )) : <Construction theName="Blog" />}
      </div>
    );
  }
}
