import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/passmanager.css';

const TABLE_ROWS = [];

class PasswordManager extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: TABLE_ROWS,
      flag: false,
    };

    this.addNewRow = this.addNewRow.bind(this);
    this.renderTableBody = this.renderTableBody.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.changeRow = this.changeRow.bind(this);
    this.saveRowChanges = this.saveRowChanges.bind(this);
  }

  addNewRow() {
    let elements = document.querySelectorAll('.pass-table > tbody input');
    let elementsValue = {};
    let inputId;

    for (let i = 0; i < elements.length; i++) {
      inputId = elements[i].id;
      elementsValue[inputId] = elements[i].value;
      elements[i].value = "";
    }
    elementsValue.changeFlag = false;

    TABLE_ROWS.push(elementsValue);
    this.setState({data: TABLE_ROWS});
  }

  deleteRow(event) {
    let target = event.target;
    let tableRow = target.closest("tr");
    var countNumber = tableRow.id;

    TABLE_ROWS.splice(countNumber, 1);
    this.setState({data: TABLE_ROWS});
  }

  changeRow(event) {
    let target = event.target;
    let tableRow = target.closest("tr");
    let countNumber = tableRow.id;

    TABLE_ROWS[countNumber].changeFlag = true;
    this.setState({data: TABLE_ROWS});
  }

  saveRowChanges(event) {
    let target = event.target;
    let tableRow = target.closest("tr");
    let countNumber = tableRow.id;

    let elements = tableRow.querySelectorAll('input');
    let elementsValue = {};
    let inputId;

    for (let i = 0; i < elements.length; i++) {
      inputId = elements[i].id;
      elementsValue[inputId] = elements[i].value;
      elements[i].value = "";
    }
    elementsValue.changeFlag = false;

    TABLE_ROWS[countNumber] = elementsValue;
    this.setState({data: TABLE_ROWS});
  }

  renderTableBody() {
    const data = this.state.data;

    let result = [];
    let row;

    for (let i = 0; i < data.length; i++) {
      const changeFlag = data[i].changeFlag;
      let pass = data[i].password;
      let hiddenPass = "";

      for (let j = 0; j < pass.length; j++) {
        hiddenPass += '*';
      }

      if (changeFlag === false) {
        row = (
          <tr key={"data-" + i} id={i}>
            <td>{data[i].webpage}</td>
            <td>{data[i].username}</td>
            <td>{hiddenPass}</td>
            <td>
              <i className="fa fa-eye fa-lg table-icons" aria-hidden="true"></i>
              <i className="fa fa-pencil fa-lg table-icons" aria-hidden="true" onClick={this.changeRow}></i>
              <i className="fa fa-trash fa-lg table-icons" aria-hidden="true" onClick={this.deleteRow}></i>
            </td>
          </tr>
        );
      } else {
        row = (
          <tr key={"data-" + i} id={i}>
            <td>
              <input
                id="webpage"
                type="text"
                className="form-control"
                placeholder="Web page"
                defaultValue={data[i].webpage}
              />
            </td>
            <td>
              <input
                id="username"
                type="text"
                className="form-control"
                placeholder="Username"
                defaultValue={data[i].username}
              />
            </td>
            <td>
              <input
                id="password"
                type="text"
                className="form-control"
                placeholder="Password"
                defaultValue={data[i].password}
              />
            </td>
            <td>
              <i className="fa fa-check fa-lg table-icons" aria-hidden="true" onClick={this.saveRowChanges}></i>
              <i className="fa fa-close fa-lg table-icons" aria-hidden="true" onClick={this.deleteRow}></i>
            </td>
          </tr>
        );
      }
      result.push(row);
    }
    return result;
  }

  render() {
    return (
      <div className="container">
        <h2 className="table-title">Little Password Manager</h2>
        <table className="table pass-table">
          <thead>
            <tr>
              <th>Webpage or application</th>
              <th>Username</th>
              <th>Password</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableBody()}
            <tr>
              <td>
                <input
                  id="webpage"
                  type="text"
                  className="form-control"
                  placeholder="Web page"
                />
              </td>
              <td>
                <input
                  id="username"
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
              </td>
              <td>
                <input
                  id="password"
                  type="text"
                  className="form-control"
                  placeholder="Password"
                />
              </td>
              <td>
                <button className="btn btn-primary" onClick={this.addNewRow}>Store</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default PasswordManager;
