import React from 'react';
import BlogPost from "../../components/BlogPost";
import './style.css';

export default class News extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount = async () => {
    try {
      const response = await fetch('`https://wp.joshuamk.com/wp-json/wp/v2/posts/?per_page=100&categories=9', {
        signal: AbortSignal.timeout(5000)
      });
      const data = await response.json();
      this.setState({ posts: data });
    } catch (error) {
      return
    }
  }

  render() {
    const empty = this.state.posts.length === 0;
    return (
      <div className='blog'>
        <h2 className='blog__underConstruction'>News Section Under Construction</h2>
        {/* {empty ? <div className="loader"> <h3>Loading News Posts...</h3> <svg width="100" height="100" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
          <g fill="none" fillRule="evenodd">
            <g transform="translate(2 2)" strokeWidth="4">
              <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
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
        </svg></div> : this.state.posts.map((post, i) => (
          <BlogPost post={post} key={i} />
        ))} */}
      </div>
    );
  }
}
