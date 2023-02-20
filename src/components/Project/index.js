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

  render() {
    let projImg = '';
    let bigProjImg = '';
    if (this.props.data.img !== null && this.props.data.img !== '') {
      projImg = require('../../images/projects/' + this.props.data.img);
    }
    if (!this.props.data.embed && this.props.data.bigImg) {
      bigProjImg = require('../../images/projects/' + this.props.data.bigImg);
    }

    const el = document.getElementById('root');

    return (
      <div className='project'>
        <div className='project__shell' onClick={this.handleOpenModal}>
          <div className='project__image'><img alt={this.props.data.title + ' screengrab'} src={projImg} /></div>
          <p className='project__title'><strong>{this.props.data.title}</strong> ({this.props.data.year})</p>
          <p className='project__shortDesc'>{this.props.data.shortDesc}</p>
          <p className='project__role'>{this.props.data.role}</p>
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
