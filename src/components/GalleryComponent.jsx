"use client";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  styled,
  IconButton,
  Modal,
  ImageList,
  ImageListItem,
} from "@mui/material";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1684140044332-8b5285c699f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1684090110679-2f3dde062b9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1682862209878-c0639d05492c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 4,
    url: "https://plus.unsplash.com/premium_photo-1683299265247-d65a169c60a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1683808018689-ea8897c02c0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1684072108336-40bb8228888e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1683475962506-af6bb43c1b4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1684009195725-8a6ecc1194f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1681464716131-74bfa1d23606?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=730&q=80",
  },
];

const Img = styled("img")({
  cursor: "pointer",
  width: "100%",
  height: "100%",
});
export default function GalleryComponent() {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [disableNextButton, setDisableNextButton] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setDisableNextButton(!galleryImages.length);
  }, []);

  const handleOpenModal = (index) => {
    setSliderNumber(index);
    setOpenModal(true);
  };

  const handleNextImage = () => {
    if (sliderNumber >= galleryImages.length - 1) {
      setSliderNumber(0);
    } else {
      setSliderNumber(sliderNumber + 1);
    }
  };

  const handlePreviousImage = () => {
    sliderNumber === 0
      ? setSliderNumber(galleryImages.length - 1)
      : setSliderNumber(sliderNumber - 1);
  };

  const handleClose = () => setOpenModal(false);

  return (
    <Container>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ overflow: "scroll" }}
      >
        <Box
          sx={{
            minWidth: "100%",
            maxWidth: "600",
            bgcolor: "background.paper",
            boxShadow: 24,
          }}
        >
          <Grid container direction="column" alignItems="center">
            <Grid item zeroMinWidth>
              <Img src={galleryImages[sliderNumber].url} alt="Image" />
            </Grid>
            <Grid item>
              <IconButton
                color="error"
                aria-label="close"
                onClick={() => setOpenModal(false)}
              >
                <CloseFullscreenIcon />
              </IconButton>
              <IconButton
                color="info"
                aria-label="Go to the previous"
                onClick={handlePreviousImage}
              >
                <ArrowCircleLeftIcon />
              </IconButton>
              <IconButton
                color="info"
                aria-label="Go next"
                disabled={disableNextButton}
                onClick={handleNextImage}
              >
                <ArrowCircleRightIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      <ImageList variant="masonry" cols={3} gap={4}>
        {galleryImages.map((item, index) => (
          <ImageListItem key={item.url} onClick={() => handleOpenModal(index)}>
            <Img
              src={`${item.url}?w=100&fit=crop&auto=format`}
              srcSet={`${item.url}?w=100&fit=crop&auto=format&dpr=2 2x`}
              alt={item.url}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
