import './styles.css';

type Props = {
  title: string;
  description: string;
};

const ResultCard = ({ title, description }: Props) => {
  return (
    <div className="result-container">
      <p className="result-description">
        <h6 className="result-title">{title}:</h6>
        {description}
      </p>
    </div>
  );
};

export default ResultCard;
