
export const Text = ({ children, type }) => {
  const Tag = type || 'p';
  return <Tag className="text">{children}</Tag>;
};




