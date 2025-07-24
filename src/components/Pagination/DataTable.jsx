import { useState } from "react";
import users from "./Users";
import { Pagination } from "./Pagination";

export default function DataTable() {
  const [message] = useState("Data Table");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentpage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = users.slice(startIndex, endIndex);

  const handleChange = (e) => {
    setItemsPerPage(Number(e.target.value));
  };

  const prevBtnClicked = () => {
    console.log(startIndex, endIndex);
    if (startIndex >= 1) setCurrentpage((prev) => prev - 1);
  };
  const nextBtnClicked = () => {
    if (endIndex <= users.length) setCurrentpage((prev) => prev + 1);
  };

  return (
    <div>
      <h1>{message}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <input
          placeholder="how many users you want to see..?"
          type="text"
          onChange={handleChange}
          value={itemsPerPage}
        />
        <table style={{ marginTop: "20px" }}>
          <thead>
            <tr>
              {[
                { label: "ID", key: "id" },
                { label: "Name", key: "name" },
                { label: "Age", key: "age" },
                { label: "Occupation", key: "occupation" },
              ].map(({ label, key }) => (
                <th key={key}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map(({ id, name, age, occupation }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{occupation}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          prevBtnClicked={prevBtnClicked}
          nextBtnClicked={nextBtnClicked}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          isLastPage={endIndex > users.length}
        />
      </div>
    </div>
  );
}
