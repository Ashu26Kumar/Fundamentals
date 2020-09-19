import React from "react";

const ResultTable = ({ Clients, updateEntry, deleteEntry }) => {
  return (
    <div className="card card-intro">
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Clients.map((data, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{data.FirstName}</td>

                  <td>{data.LastName}</td>

                  <td>{data.Age}</td>
                  <td>
                    <span className="btn-group">
                      <button
                        className="btn btn-warning"
                        id={key}
                        onClick={updateEntry}
                      >
                        Update
                      </button>

                      <button
                        className="btn btn-danger"
                        id={key}
                        onClick={deleteEntry}
                      >
                        Delete
                      </button>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultTable;
