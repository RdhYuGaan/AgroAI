interface ContentCardProps {
  title: string;
  description: string;
}

const ContentCard_01: React.FC<ContentCardProps> = ({ title, description }) => {
  return (
    <div className="rounded-lg bg-white shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ContentCard_01;
