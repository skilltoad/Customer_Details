import { useState } from "react";
import CustomerList from "./components/CustomerList";
import CustomerInfo from "./components/CustomerInfo";
import { customers  as allCustomers } from "./customData/customersData";
import "./App.css";

const PAGE_SIZE = 15;

function App() {
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(allCustomers[0]?.id);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentCustomers = allCustomers.slice(startIndex, startIndex + PAGE_SIZE);
  const selectedCustomer = allCustomers.find((customer) => customer.id === selectedCustomerId) || null;

  const handleNextPage = () => {
    if (startIndex + PAGE_SIZE < allCustomers.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="heading" style={{ height: "14vh" }}>
        <h1 style={{ margin: "0", padding: "15px" }}>Customers</h1>
      </div>
      <div className="container">
        <div className="customer-list" style={{ overflowY: "scroll", height: "85vh" }}>
          <CustomerList
            customers={currentCustomers}
            selectedCustomerId={selectedCustomerId}
            onCustomerSelect={setSelectedCustomerId}
          />
          <div className="pagination-controls">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={startIndex + PAGE_SIZE >= allCustomers.length}
            >
              Next
            </button>
          </div>
        </div>
        <div className="details" style={{ overflowY: "scroll", height: "85vh" }}>
          <CustomerInfo customer={selectedCustomer} />
        </div>
      </div>
    </>
  );
}

export default App;
