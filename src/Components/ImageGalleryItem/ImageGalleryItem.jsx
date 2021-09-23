import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item, imageLarge, onSelect }) => {
  return (
    <GalleryItem key={item.id}>
      <GalleryItemImage
        src={item.webformatURL}
        alt=""
        onClick={() => onSelect(imageLarge)}
      />
    </GalleryItem>
  );
};
