import React, { useState } from "react";

const XTable = () => {
  const [data] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);
  const [sortedData, setSortedData] = useState(data);

  const sortByDate = () => {
    const sorted = [...data].sort((a, b) => {
      if (a.date === b.date) {
        return b.views - a.views; // Sort by views if dates are the same
      }
      return new Date(b.date) - new Date(a.date); // Sort by date
    });
    setSortedData(sorted);
  };

  const sortByViews = () => {
    const sorted = [...data].sort((a, b) => {
      if (a.views === b.views) {
        return new Date(b.date) - new Date(a.date); // Sort by date if views are the same
      }
      return b.views - a.views; // Sort by views
    });
    setSortedData(sorted);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Date and Views Table</h1>
      <button
        onClick={sortByDate}
        style={{ marginRight: "10px", padding: "10px" }}
      >
        Sort by Date
      </button>
      <button onClick={sortByViews} style={{ padding: "10px" }}>
        Sort by Views
      </button>
      <table
        style={{ marginTop: "20px", borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Date</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Views</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>
              Article
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {item.date}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {item.views}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {item.article}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XTable;
