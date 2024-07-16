import {Image} from '../../atoms';
import {Text} from '../../atoms';

export const AuthorCard = ({ author }) => {
  return (
    <div className="author-card">
      <Image src={author.image} alt={author.name} />
      <Text type="p">{author.name}</Text>
    </div>
  );
};



