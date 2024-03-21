const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-20 w-60 text-2xl mt-30"
    >
      {text}
    </button>
  );
};

export default Button;
