import React from "react";
import "./style.css";

export default class BlogPost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  toggleExpand = () => {
    this.state.isExpanded ? this.setState({ isExpanded: false }) : this.setState({ isExpanded: true })
  }

  render() {
    return (
      <div className="blog__post">
        <p onClick={this.toggleExpand} className="blog__post__time clickable">{this.props.post.date.split("T")[0]}</p>
        <div onClick={this.toggleExpand} className="blog__post__body">
          <h3 className="blog__post__title clickable" dangerouslySetInnerHTML={{ __html: this.props.post.title.rendered }}></h3>
          <i class={!this.state.isExpanded ? "fas fa-plus-circle clickable" : "fas fa-minus-circle clickable"} ></i>
          <div className={this.state.isExpanded ? "blog__post__content expandedPost" : "blog__post__content"} dangerouslySetInnerHTML={{ __html: this.props.post.content.rendered }} />
        </div>
      </div >
    );
  }
}
