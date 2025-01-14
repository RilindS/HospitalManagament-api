import { Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import { fetchVacationsByNurse } from "../../../services/requests/vacation";

const NurseVacations = () => {
  const [vacations, setVacations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNurseVacations = async () => {
      try {
        const response = await fetchVacationsByNurse();
        // Konverto startDate dhe endDate në data të formatizuara
        const transformedVacations = response.data.map((vacation) => ({
          ...vacation,
          startDate: new Date(vacation.startDate[0], vacation.startDate[1] - 1, vacation.startDate[2], vacation.startDate[3], vacation.startDate[4]),
          endDate: new Date(vacation.endDate[0], vacation.endDate[1] - 1, vacation.endDate[2], vacation.endDate[3], vacation.endDate[4]),
        }));
        setVacations(transformedVacations); // Vendos të dhënat e transformuara
      } catch (error) {
        console.error("Gabim gjatë ngarkimit të vacation për infermierët:", error);
      } finally {
        setLoading(false);
      }
    };

    loadNurseVacations();
  }, []);

  const columns = [
    {
      title: "Data e Fillimit",
      dataIndex: "startDate",
      key: "startDate",
      render: (text) => text.toLocaleDateString(), // Shfaq datën në formatin lokal
    },
    {
      title: "Data e Mbarimit",
      dataIndex: "endDate",
      key: "endDate",
      render: (text) => text.toLocaleDateString(), // Shfaq datën në formatin lokal
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
  ];

  return (
    <div>
      <h2>Pushimet nga Infermierët</h2>
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

export default NurseVacations;
