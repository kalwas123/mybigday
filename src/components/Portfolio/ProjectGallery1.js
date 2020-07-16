import React, { useState, useCallback } from "react"
import { render } from "react-dom"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import { size } from "src/components/brakePoints"
import styled from "styled-components"
import ProjectGallery from "src/components/Portfolio/ProjectGallery.css"

const TestGalerry = props => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
  let col = 4
  let w = window.innerWidth

  if (w < size.mobile) {
    col = 2
  }

  return (
    <>
      <Gallery
        photos={props.photos}
        onClick={openLightbox}
        direction={"column"}
        columns={col}
        margin={7}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={props.photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  )
}

export default TestGalerry
