import "./containers.css";

export default function MenuContainer({
  children,
  transparent = false,
  ...props
}) {
  return (
    <div
      className={`menu-container ${transparent ? "transparent" : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
