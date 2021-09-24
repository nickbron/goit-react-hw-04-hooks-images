import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchPictures } from 'Services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './Button/Button';
import Modal from './Modal/Modal';
import Spinner from './Spinner/Spinner';

export default function App() {
  const [pictureName, setPictureName] = useState(() => {
    return '';
  });
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
    console.log('1');
    const fetchData = async () => {
      const data = await fetchPictures(pictureName, page);
      const imageInfo = data.map(({ id, largeImageURL, webformatURL }) => ({
        id,
        largeImageURL,
        webformatURL,
      }));

      return imageInfo;
    };
    const imageInfo = fetchData();
    scroll();

    imageInfo.then(res => {
      setPictures(res);
    });
  }, [page, pictureName]);

  // useEffect(() => {
  //   const imageInfo = fetchData();
  //   scroll();

  //   imageInfo.then(res => {
  //     setPictures(prevPictures => [...prevPictures, ...res]);
  //   });
  // }, [page]);

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

// export default class App extends Component {
//   state = {
//     pictureName: null,
//     pictures: [],
//     page: 1,
//     selectedImage: null,
//     showModal: false,
//   };

//   fetchData = async () => {
//     const { pictureName, page } = this.state;
//     const data = await fetchPictures(pictureName, page);
//     const imageInfo = data.map(({ id, largeImageURL, webformatURL }) => ({
//       id,
//       largeImageURL,
//       webformatURL,
//     }));

//     return imageInfo;
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const imageInfo = this.fetchData();

//     this.scroll();
//     if (prevState.pictureName !== this.state.pictureName) {
//       imageInfo.then(res => {
//         this.setState({ pictures: res });
//       });
//     }

//     if (prevState.page !== this.state.page) {
//       imageInfo.then(res => {
//         this.setState({ pictures: [...prevState.pictures, ...res] });
//       });
//     }
//   }

//   scroll = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth',
//     });
//   };

//   toggleModal = () => {
//     this.setState(state => ({ showModal: !state.showModal }));
//   };

//   handleBarSubmit = pictureName => {
//     this.setState({ pictureName });
//   };

//   handleSelectImage = selectedImage => {
//     this.setState({ selectedImage });
//     this.toggleModal();
//   };

//   showMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   render() {
//     const { pictures, showModal, selectedImage } = this.state;

//     return (
//       <div className="App">
//         <Searchbar onSearch={this.handleBarSubmit} />
//         {pictures.length > 0 && (
//           <>
//             <Spinner />
//             <ImageGallery pic={pictures} onSelect={this.handleSelectImage} />;
//             <LoadMoreBtn onClick={this.showMore} />
//             {showModal && (
//               <Modal onClose={this.toggleModal}>
//                 <img src={selectedImage} alt="" />
//               </Modal>
//             )}
//           </>
//         )}
//         <ToastContainer
//           position="top-right"
//           autoClose={3000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//         />
//       </div>
//     );
//   }
// }
