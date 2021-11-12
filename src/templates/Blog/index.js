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
    let response = await fetch(`https://wp.joshuamk.com/wp-json/wp/v2/posts/?per_page=100`);
    let data = await response.json();
    this.setState({ posts: data });
  }

  render() {
    const empty = this.state.posts.length === 0;
    return (
      <div className='blog'>
        {empty ? <div className="loader"> <h3>Loading Blog Posts...</h3> <svg width="100" height="100" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(2 2)" stroke-width="4">
              <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="1s"
                  repeatCount="indefinite" />
              </path>
            </g>
          </g>
        </svg></div> : this.state.posts.map(post => (
          <BlogPost post={post} />
        ))}
      </div>
    );
  }
}
