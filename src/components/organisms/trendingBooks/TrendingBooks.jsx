import { Text } from '../../atoms';

export const TrendingBooks = ({ books }) => {
  return (
      <div className="trending-books">
        <div className="trending-content">
          <Text type="h2">TRENDING BOOKS THIS MONTH</Text>
          <Text type="p">Listen to trending books in this month</Text>
          <button className="trending-button">View Now</button>
        </div>
        <div className="trending-images">
        <img src="assets\trending\trendingMan.png" alt="Trending Man" className="trending-man man" />
        <img src="assets\trending\books.png" alt="Books" className="trending-book books" />
        </div>
      </div>
    );
};






