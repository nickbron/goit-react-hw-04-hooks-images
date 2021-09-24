import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchPictures } from 'Services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './Button/Button';
import Modal from './Modal/Modal';
import Spinner from './Spinner/Spinner';

export default function App() {
  const [pictureName, setPictureName] = useState('');
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleBarSubmit = pictureName => {
    setPictureName(pictureName);
  };

  const handleSelectImage = selectedImage => {
    setSelectedImage(selectedImage);
    toggleModal();
  };

  const showMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPictures(pictureName, page);
      const imageInfo = data.map(({ id, largeImageURL, webformatURL }) => ({
        id,
        largeImageURL,
        webformatURL,
      }));
      if (imageInfo.length === 0) {
        toast.error('По данному запросу ничего не найдено');
      }
      return imageInfo;
    };

    if (pictureName.trim() === '') {
      return;
    }
    const imageInfo = fetchData();
    scroll();
    imageInfo.then(res => {
      setPictures(res);
    });
  }, [page, pictureName]);

  return (
    <div className="App">
      <Searchbar onSearch={handleBarSubmit} />
      {pictures.length > 0 && (
        <>
          <Spinner />
          <ImageGallery pic={pictures} onSelect={handleSelectImage} />;
          <LoadMoreBtn onClick={showMore} />
          {showModal && (
            <Modal onClose={toggleModal}>
              <img src={selectedImage} alt="" />
            </Modal>
          )}
        </>
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
