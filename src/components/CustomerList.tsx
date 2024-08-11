//CustomerList.tsx
import React from "react";
import CustomerCard from "./CustomerCard";

interface Customer {
  id: number;
  name: string;
  title: string;
}
interface CustomerListProps {
  customers: Customer[];
  selectedCustomerId:number|null;
  onCustomerSelect:(id:number)=>void;
}
const CustomerList: React.FC<CustomerListProps> = ({ customers, selectedCustomerId,onCustomerSelect}) => {
  return (
    <>
      <div>
        {customers.map((customer) => (
          <CustomerCard
            key={customer.id}
            name={customer.name}
            title={customer.title}
            onClick={() => onCustomerSelect(customer.id)}
            isSelected={selectedCustomerId === customer.id}
          />
        ))}
      </div>
    </>
  );
};

export default CustomerList;
