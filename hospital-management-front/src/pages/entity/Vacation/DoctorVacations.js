import { Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import { fetchVacationsByDoctor } from "../../../services/requests/vacation";

const DoctorVacations = () => {
  const [vacations, setVacations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDoctorVacations = async () => {
      try {
        const response = await fetchVacationsByDoctor();
        
        // Konverto startDate dhe endDate nga array në Date objekt
        const transformedVacations = response.data.map((vacation) => ({
          ...vacation,
          startDate: new Date(vacation.startDate[0], vacation.startDate[1] - 1, vacation.startDate[2], vacation.startDate[3], vacation.startDate[4]),
          endDate: new Date(vacation.endDate[0], vacation.endDate[1] - 1, vacation.endDate[2], vacation.endDate[3], vacation.endDate[4]),
        }));
        
        setVacations(transformedVacations); // Vendos të dhënat e transformuara
      } catch (error) {
        console.error("Gabim gjatë ngarkimit të vacation për doktorët:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDoctorVacations();
  }, []);

  const columns = [
    {
      title: "Data e Fillimit",
      dataIndex: "startDate",
      key: "startDate",
      render: (text) => text.toLocaleDateString(),
    },
    {
      title: "Data e Mbarimit",
      dataIndex: "endDate",
      key: "endDate",
      render: (text) => text.toLocaleDateString(),
    },
    {
      title: "Arsyeja",
      dataIndex: "reason",
      key: "reason",
    },
    {
      title: "Certifikata",
      dataIndex: "certification",
      key: "certification",
    },
    {
      title: "Doctor ID",
      dataIndex: "doctorId",
      key: "doctorId",
      render: (doctorId) => (doctorId ? doctorId : "N/A"), // Shfaq "N/A" nëse doctorId është null
    },
  ];

  return (
    <div>
      <h2>Pushimet nga Doktorët</h2>
      {loading ? (
        <Spin />
      ) : (
        <Table
          dataSource={vacations}
          columns={columns}
          rowKey={(record) => record.id}
        />
      )}
    </div>
  );
};

export default DoctorVacations;
