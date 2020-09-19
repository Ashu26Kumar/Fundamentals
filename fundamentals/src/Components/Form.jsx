import React, { Component } from "react";
import FormControl from "./Form-control";
import ResultTable from "./result-table";
export default class Form extends Component {
  state = {
    disableEverything: false,
    isEdit: false,
    editIndex: undefined,
    clientDetails: {
      FirstName: "",
      LastName: "",
      Age: "18",
    },
    FinalDetails: [],
  };
  handleSubmit = (e) => {
    let isEdit = this.state.isEdit;
    e.preventDefault();
    let clientData = { ...this.state.clientDetails };
    if (!isEdit) {
      this.setState(
        {
          FinalDetails: [...this.state.FinalDetails, clientData],
          clientDetails: {
            FirstName: "",
            LastName: "",
            Age: 18,
          },
          disableEverything: false,
        },
        () => console.log(this.state)
      );
    } else {
      let data = this.state.FinalDetails.map((t, index) => {
        if (
          (this.state.editIndex !== null ||
            this.state.editIndex !== undefined) &&
          this.state.editIndex === index
        ) {
          t = { ...this.state.clientDetails };
        }
        return t;
      });

      this.setState({
        FinalDetails: [...data],
        clientDetails: {
          FirstName: "",
          LastName: "",
          Age: 18,
        },
        disableEverything: false,
        isEdit: false,
        editIndex: undefined,
      });
    }
  };
  handleChange = (e) => {
    this.setState(
      {
        clientDetails: {
          ...this.state.clientDetails,
          [e.target.name]: e.target.value,
        },
      },
      () => console.log(this.state)
    );
  };

  handleUpdate = (e) => {
    let editData = this.state.FinalDetails[+e.target.id];

    this.setState({
      isEdit: true,
      editIndex: +e.target.id,
      clientDetails: {
        ...this.state.clientDetails,
        ...editData,
      },
      disableEverything: true,
    });
  };
  handleDelete = (e) => {
    let data = this.state.FinalDetails.filter((t, index) => {
      return index !== +e.target.id;
    });

    this.setState({
      FinalDetails: [...data],
      disableEverything: false,
    });
  };
  renderTable() {
    if (this.state.FinalDetails.length) {
      return (
        <>
          <ResultTable
            Clients={this.state.FinalDetails}
            updateEntry={this.handleUpdate}
            deleteEntry={this.handleDelete}
            disabled={this.state.disableEverything}
          />
        </>
      );
    }
  }
  render() {
    return (
      <div className="container">
        <div className="card card-intro">
          <div className="card-header">
            <h3 className="text-center">Client Details</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              {Object.keys(this.state.clientDetails).map((t, key) => (
                <FormControl
                  Name={t}
                  key={key}
                  Value={this.state.clientDetails[t]}
                  OnChange={this.handleChange}
                />
              ))}

              <button
                type="submit"
                className={
                  this.state.isEdit
                    ? "btn btn-block btn-warning"
                    : "btn btn-block btn-success"
                }
              >
                {this.state.isEdit ? "Update" : "Submit"}
              </button>
            </form>
          </div>
        </div>
        <br />
        <br />
        {this.renderTable()}
      </div>
    );
  }
}
