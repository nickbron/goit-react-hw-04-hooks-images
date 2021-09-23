import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ pic, onSelect }) => {
  return (
    <Gallery>
      {pic.map(image => (
        <ImageGalleryItem
          key={image.webformatURL}
          item={image}
          imageLarge={image.largeImageURL}
          onSelect={onSelect}
        />
      ))}
    </Gallery>
  );
};
