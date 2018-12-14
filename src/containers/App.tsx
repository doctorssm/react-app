import React, { Component } from "react";
import "./App.css";
import { Login } from "../components/login/login.component";

interface IProps {
  title: string;
  name?: string;
}

interface IState {}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    console.log("[App.js] constructor", props);
  }

  componentWillReceiveProps(props: any) {
    console.log("[App.js] componentWillReceiveProps", props);
  }

  componentWillMount() {
    console.log("[App.js] componentWillMount");
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  render(): JSX.Element {
    console.log("[App.js] render");

    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
