export default function Radio({ isChecked }) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="5"
        width="50"
        height="50"
        rx="25"
        fill={isChecked ? "#6E85B2" : "#261C2C"}
        stroke="white"
        strokeWidth="5"
      />
    </svg>
  );
}
