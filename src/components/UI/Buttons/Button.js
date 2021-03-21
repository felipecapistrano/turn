import "./buttons.css";

export default function Button({ children, onClick, ...props }) {
  return (
    <button onClick={onClick} className="button" {...props}>
      {children}
    </button>
  );
}
