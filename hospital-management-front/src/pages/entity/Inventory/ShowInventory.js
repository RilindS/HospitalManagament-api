import React, { useEffect, useState } from 'react';
import { fetchAllInventory } from '../../../services/requests/inventory';
import "./create.scss";

const ShowInventory = () => {
  const [inventorys, setInventotys] = useState([]);

  useEffect(() => {
    const fetchInventotys = async () => {
      const response = await fetchAllInventory();
      setInventotys(response.data);
    };
    fetchInventotys();
  }, []);

  return (
    <div className="show-doctor">
      <h2>All Doctors</h2>
      <table className="doctor-table">
        <thead>
          <tr>
            <th>article</th>
            <th>description</th>
            <th>quantity</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {inventorys.map((inventoty, index) => (
            <tr key={index}>
              <td>{inventoty.article}</td>
              <td>{inventoty.description}</td>
              <td>{inventoty.quantity}</td>
              <td>{inventoty.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowInventory;
