import React from 'react';
import BlogPost from "../../components/BlogPost";
import './style.css';

export default class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount = async () => {
    let response = await fetch(`https://wp.joshuamk.com/wp-json/wp/v2/posts/?filter[posts_per_page]=-1`);
    let data = await response.json();
    this.setState({ posts: data });
  }

  render() {
    return (
      <div className='blog'>
        {this.state.posts.map(post => (
          <BlogPost post={post} />
        ))}
      </div>
    );
  }
}
