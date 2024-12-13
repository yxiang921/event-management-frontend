// eslint-disable-next-line react/prop-types
const Button = ({ children, width, height, variant }) => {

  const buttonStyle = {
    primary: "bg-primary-900 text-white hover:bg-primary-hover",
    danger: "bg-red-600 text-white hover:bg-red-700",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600",
    success: "bg-green-600 text-white hover:bg-green-700",
    disable: "bg-gray-300 text-gray-500 cursor-not-allowed",
  };

  const style = variant ? buttonStyle[variant] : "bg-primary-900 text-white hover:bg-primary-hover";

  return (
    <button
      className={`${width} ${height} ${style} px-4 py-2 rounded-md transition-all duration-500 flex flex-row justify-center items-center`}
    >
      {children}
    </button>
  );
};

export default Button;
