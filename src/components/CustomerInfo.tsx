//CustomerInfo.tsx
import React from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
interface CustomerInfoProps {
  customer: {
    name: string;
    title: string;
    address: string;
  } | null;
}
const CustomerInfo: React.FC<CustomerInfoProps> = ({ customer }) => {
  const photos = useFetchPhotos();
  if (!customer) {
    return (
      <>
        <h4>Select a customer</h4>
      </>
    );
  }
  return (
    <div>
      <h2>{customer.name}</h2>
      <h4>{customer.title}</h4>
      <p>{customer.address}</p>
      <br />
      <div className="display-photo">
        {photos.map((photo, index) => (
          <img
            src={photo}
            alt=""
            key={index}
            style={{ width: "100%", height: "400px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerInfo;
