import {Image} from '../../atoms';
import {Text} from '../../atoms';

export const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <Image src={book.image} alt={book.title} />
      <Text type="h4">{book.title}</Text>
      <Text type="p">{book.author}</Text>
    </div>
  );
};


