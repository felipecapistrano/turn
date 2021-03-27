import "./buttons.css";

export default function Button({
  children,
  onClick,
  disabled,
  pressed,
  ...props
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`button ${disabled ? "disabled" : ""} ${
        pressed ? "pressed" : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
