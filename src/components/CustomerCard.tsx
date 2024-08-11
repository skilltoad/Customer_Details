//CustomerCard.tsx
import React from "react";
import "../App.css";
interface CustomerProps {
  name: string;
  title: string;
  onClick: () => void;
  isSelected: boolean;
}
const CustomerCard: React.FC<CustomerProps> = ({
  name,
  title,
  onClick,
  isSelected,
}) => {
  return (
    <>
      <div
        className="card"
        onClick={onClick}
        style={{ backgroundColor: isSelected ? "#ebebed" : "", borderRight: isSelected?"3px solid #9b9c9c":"" }}
      >
        <h4>{name}</h4>
        <p>{title}</p>
      </div>
    </>
  );
};
export default CustomerCard;
