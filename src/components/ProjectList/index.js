import React from 'react';
import './style.css';

import Project from '../Project';

export default class ProjectList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      atLeft: true,
      atRight: false,
      div: null,
      isSmall: false
    }
  }

  componentDidMount = () => {
    this.setState({ div: this.refs['project-list-reel-' + this.props.id].parentElement });
    if (this.refs['project-list-reel-' + this.props.id].offsetWidth <= this.refs['project-list-reel-' + this.props.id].parentElement.offsetWidth) {
      this.setState({ isSmall: true });
    }
  }

  scrollRight = () => {
    this.setState({ atLeft: false });
    const increment = (window.innerWidth < 360) ? 275 : (window.innerWidth <= 768) ? 314 : (window.innerWidth <= 1024) ? 626 : (window.innerWidth <= 1660) ? 852 : 1278;
    if (this.state.div.offsetWidth + this.state.div.scrollLeft > this.state.div.scrollWidth - increment)
      this.setState({ atRight: true });
    this.state.div.scrollBy({ left: increment, behavior: 'smooth' });
  }

  scrollLeft = () => {
    this.setState({ atRight: false });
    const increment = (window.innerWidth < 360) ? 275 : (window.innerWidth <= 768) ? 314 : (window.innerWidth <= 1024) ? 626 : (window.innerWidth <= 1660) ? 852 : 1278;
    if (this.state.div.scrollLeft <= 0 + increment)
      this.setState({ atLeft: true });
    this.state.div.scrollBy({ left: -increment, behavior: 'smooth' });
  }

  render() {
    return (
      <div className='projectListWrapper'>
        <div onClick={this.scrollLeft} className={(!this.state.isSmall) ? this.state.atLeft ? 'projectList__back projectList__hidden' : 'projectList__back' : 'projectList__back projectList__hidden'}><i className="fas fa-angle-left"></i></div>
        <div onClick={this.scrollRight} className={(!this.state.isSmall) ? this.state.atRight ? 'projectList__forward projectList__hidden' : 'projectList__forward' : 'projectList__forward projectList__hidden'}><i className="fas fa-angle-right"></i></div>
        <div className='projectList'>
          <div className='projectList__reel' ref={'project-list-reel-' + this.props.id}>
            <div className='projectList__reel__connector'></div>
            {this.props.projects.map((proj, i) => <Project key={i} data={proj} type={this.props.id} />)}
          </div>
        </div>
      </div>
    );
  }
}
