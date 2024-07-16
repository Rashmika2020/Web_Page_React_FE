export const UpperBox = ({ books, currentBook }) => {
  return (
    <div className="upper-box">
      <div className="book-carousel">
        {books.map((book, index) => (
          <img
            key={index}
            src={book.image}
            alt={book.title}
            className={`book-image ${book.id === currentBook.id ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="book-info">
        <div className="book-title">
          <p>{currentBook.title}</p>
          <p>{currentBook.author}</p>
        </div>
        <div className="book-controls">
          <button className="control-button">{'<'}</button>
          <button className="control-button">||</button>
          <button className="control-button">{'>'}</button>
        </div>
      </div>
    </div>
  );
};
