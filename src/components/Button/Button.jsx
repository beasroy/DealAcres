
const Button = ({ heading,onClick }) => {
  return (
    <button onClick={onClick} className={`py-1 px-6 mr-2 mb-2 rounded-xl border-solid border-y-4 border-x-2 border-blue-200 hover:border-blue-700`}>
      {heading}
    </button>
  );
};

export default Button;