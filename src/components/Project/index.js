import React from 'react';
import ReactModal from 'react-modal';
import ImageGallery from 'react-image-gallery';
import './style.css';

export default class Project extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  wins = () => {
    const winsArr = Array.from("w".repeat(this.props.data.wins))
    return (<div className='project__wins'>{winsArr.map((obj, i) => (<i key={i} className="fas fa-award project__wins__win" ></i>))}</div>);
  };

  laurels = () => {
    const laurelArr = Array.from("l".repeat(this.props.data.laurels))
    return (<div className='project__laurels'>{laurelArr.map((obj, i) => (<i key={i} alt='laurels graphic' className='fas fa-leaf project__laurels__laurel' ></i>))}</div>);
  };

  distribution = () => {
    const distributed = this.props.data.distributed
    if (distributed)
      return (<div className='project__distributed'><i alt='distributed graphic' className='fas fa-solid fa-play project__distributed__distribution' ></i> </div>)
  }

  render() {
    const projImg = (this.props.data.img !== null && this.props.data.img !== '') ?
      require('../../images/projects/' + this.props.data.img) : ''

    const bigProjImg = (!this.props.data.embed && this.props.data.bigImg) ?
      require('../../images/projects/' + this.props.data.bigImg) : ''

    const el = document.getElementById('root');

    return (
      <div className='project' >
        <div className='project__shell' onClick={this.handleOpenModal}>
          {this.props.data.tbr && <div className='project__tbrBanner'><strong>TBR</strong></div>}
          <div className='project__image'><img alt={this.props.data.title + ' screengrab'} src={projImg} /></div>
          <p className='project__title'><strong>{this.props.data.title}</strong> ({this.props.data.year})</p>
          <p className='project__shortDesc'>{this.props.data.shortDesc}</p>
          <p className='project__role'>{this.props.data.role}</p>
          {
            this.props.type == "personal" && <div>
              {this.laurels()}
              {this.wins()}
              {this.distribution()}
            </div>
          }
        </div>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel={this.props.data.title}
          onRequestClose={this.handleCloseModal}
          appElement={el}
        >
          <button className='project__modal__button' onClick={this.handleCloseModal}><i className="far fa-times-circle"></i></button>
          {this.props.data.embed && <div className='project__modal__player'><iframe src={this.props.data.embed} title='iFrame' frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe></div>}
          {(this.props.data.bigImg && !this.props.data.embed) && <div className='project__modal__bigImg'><img alt={this.props.data.title + ' hero image'} src={bigProjImg} /></div>}
          {(this.props.data.gallery && (!this.props.data.embed && !this.props.data.bigImg)) && <div className='project__modal__gallery'><ImageGallery items={this.props.data.gallery} /></div>}
          <h3 className='project__modal__h3 special_text'>{this.props.data.title}</h3>
          <div className='project__modal__desc'><p>{this.props.data.description}</p></div>
          {this.props.data.links && <div className='project__modal__links'>{this.props.data.links.map((link, i) => (<p key={i}><a href={link.url} target='_blank'>{link.title}</a></p>))}</div>}
        </ReactModal>
      </div>
    );
  }
}
