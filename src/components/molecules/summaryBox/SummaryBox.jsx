import { Text } from '../../atoms';

export const SummaryBox = ({ summary }) => {
  return (
    <div className="summary-box">
      <div className="summary-box-list">
        {summary.map(summary => (
          <div key={summary.id} className="summary-box-card">
            <img src={summary.image} alt={summary.title} className="summary-image" />
            <div className="summary-details">
              <Text type="h3">{summary.number}</Text>
              <Text type="p">{summary.title}</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


