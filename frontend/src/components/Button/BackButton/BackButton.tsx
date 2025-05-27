import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1); // Go back one step in history
  };

  return (
    <button type="button" onClick={handleClick}>
      Back
    </button>
  );
};

export { BackButton };