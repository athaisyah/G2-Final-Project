import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Main, Home } from "./Components/_index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  Home = () => {
    if (this.props.statusLogin === true) {
      return <Home />;
    }
  };

  render() {
    return (
      <>
        <Router>
          {/* <Main /> */}
          <Switch>
            {this.Home()}
            <Route exact path="/" component={Main} />
            <Route path="/Home" component={Home} />
            {/* <Home/> */}
          </Switch>
        </Router>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  statusLogin: state.main.isLogin,
});

export default connect(mapStateToProps)(App);
