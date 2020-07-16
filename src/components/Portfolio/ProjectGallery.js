import React, { useState, useCallback } from "react"
import { render } from "react-dom"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

class ProjectGallery extends React.Component {
  state = {
    currentImage: 0,
    // setCurrentImage: 0,
    viewerIsOpen: false,
    // setViewerIsOpen: false,
  }

  openLightbox = index => {
    console.log(index)
    this.setState({
      currentImage: 0,
      //   setCurrentImage: 0,
      //   setViewerIsOpen: true,
      viewerIsOpen: true,
    })
  }

  //   openLightbox = useCallback((event, { photo, index }) => {
  //     this.setState({
  //       setCurrentImage: index,
  //       setViewerIsOpen: true,
  //     })
  //   }, [])

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      viewerIsOpen: false,
      //   setCurrentImage: 0,
      //   setViewerIsOpen: false,
    })
  }
  render() {
    return (
      <div>
        <Gallery
          photos={this.props.photos}
          onClick={this.openLightbox}
          direction={"column"}
          columns={4}
          margin={7}
        />
        <ModalGateway>
          {this.state.viewerIsOpen ? (
            <Modal onClose={this.closeLightbox}>
              <Carousel
                currentIndex={this.state.currentImage}
                views={this.props.photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    )
  }
}

export default ProjectGallery
