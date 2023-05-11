import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Table() {
  const [departmentCounts, setDepartmentCounts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8090/candidate/department-report")
      .then(res => {
        setDepartmentCounts(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Department</th>
          <th>Number of Candidates Applied</th>
        </tr>
      </thead>
      <tbody>
        {departmentCounts.map(departmentCount => (
          <tr key={departmentCount.department}>
            <td>{departmentCount.department}</td>
            <td>{departmentCount.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
