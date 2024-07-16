import {BookCard} from '../../molecules';
import { Text } from '../../atoms';

export const PopularBooks = ({ books }) => {
  return (
    <div className="popular-books">
      <div className="popular-books-header">
      <Text type="h2">Popular</Text>
      <Text type="p" className="view-all">View all</Text>
      </div>
      <div className="book-list">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <hr className="divider" />
    </div>
  );
};
