import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface Customer {
  shopifyId: string;
  email: string;
  phone: string;
  acceptsMarketing: boolean;
  firstName: string;
  lastName: string;
  totalSpent: number;
  subtotalSpent: number;
  shopifyState: string;
  note: string;
  deletedAt: string;
  [key: string]: string | number | boolean;
}

interface Info {
  currency: string;
  amount: number;
  customer: Customer;
  [key: string]: string | number | Customer;
}

export default function App() {
  let [submitting, setSubmitting] = useState(true);
  // Get the object
  let myObj: Info = {
    currency: "USD",
    amount: 320000,
    customer: {
      shopifyId: "3547125055619",
      email: "andrewc@ultra.me",
      phone: "7896542385",
      acceptsMarketing: false,
      firstName: "Andrew",
      lastName: "Cacayuran",
      totalSpent: 1500,
      subtotalSpent: 1600,
      shopifyState: "enabled",
      note: "",
      deletedAt: "01/06/2020"
    }
  }

  function createContent(cotentData: Array<string>, object: Info | Customer) {
    return cotentData.map((post) => {
      let value = object[post];
      return (
        <ul key={post}>
          <li>
            {post}:{" "}
            {typeof value === "object"
              ? createContent(Object.keys(value), value)
              : value || "No data"}
          </li>
        </ul>
      );
    });
  }
  let content = createContent(Object.keys(myObj), myObj);

  setTimeout(() => {
    setSubmitting(false);
  }, 1500);

  return (
    <div className="App">
      <h1>Payment Info</h1>
      {submitting && <h2>Loading data...</h2>}
      {!submitting && content}
    </div>
  );
}