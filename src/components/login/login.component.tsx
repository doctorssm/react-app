import React, { Component } from "react";
import { ADCService } from "../../services/ADCService";
import exportJson from './../../models/export.json';
import "./login.component.css";

import "@elf/polyfills";
import "@elf/coral-button";
import "@elf/coral-input";
import "@elf/elf-theme-elemental/light/coral-button";
import "@elf/elf-theme-elemental/light/coral-input";
import { ADCRequest, ADCResponse } from "../../models";
import { ExportService } from "../../services/export.service";

export class Login extends Component {
  public userName: string = "Sergii";
  public password: string = "123";

  state = {
    load: false,
    isLoggedIn: false,
    data: {} as ADCResponse
  };

  login = () => {
    if (this.userName === "Sergii" && this.password === "123") {
      this.setState({
        isLoggedIn: true
      });
    }

    console.log("Login clicked", this.state);
  };

  load = () => {
    if(!window.confirm('Are you sure? Think twice man...')) {
      return;
    }

    console.log("log data", this.props);

    let request = new ADCRequest(
      "TR.F.ASRIncomeStatement",
      "CAIV.VI",
      "Row,  LiName"
    );

    this.setState({data: {r: [[{v: 'Hello World'}]]}}) 
    // ADCService.sendRequest(request)
    //   .then(data => {
    //     console.log("data", data);
    //     this.setState({
    //       data: data
    //     });
    //   })
    //   .catch(error => alert(error));
  };

  setUserName = (e: any) => {
    this.userName = e.target.value;
  };

  setPassword = (e: any) => {
    this.password = e.target.value;
  };

  exportToExcel = () => {
    console.log('exportJson',exportJson)
    ExportService.exportToFile(exportJson)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="inline-block">
        {this.state.isLoggedIn ? (
          <div>
            <button onClick={this.exportToExcel}>Export to Excel</button>
            <section className="section-data">
              <button onClick={this.load}>Load Data</button>
            </section>
            {this.state.data.r ? (
              <ul className="align-left">
                {this.state.data.r[0].map((item: any) => (
                  <li>{item.v}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : (
          <div>
            <div className="container">
              <h3>Login</h3>
              <input
                type="text"
                onChange={this.setUserName}
                placeholder="User name"
              />
              <input
                type="password"
                onChange={this.setPassword}
                placeholder="Password"
              />
            </div>
            <div className="align-right">
              <coral-button onClick={this.login}>Login</coral-button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
