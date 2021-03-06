import React, { Component } from "react";
import { connect } from "react-redux";
import { LogoutAction } from "../redux/Actions/LoginAction";
class Home extends Component {
  state = { logout: "Log Out" };
  componentDidMount() {
    if (!this.props.LoginDetails.isLoggedIn) {
      this.props.history.push(`/?preserved=${this.props.match.path}`);
    }
  }

  logout() {
    this.setState({ logout: <div class="spinner-border"></div> });
    this.props.LogoutAction(() => {
      this.props.history.push("/");
    });
  }

  render() {
    return (
      <>
        <div class="container" style={{ marginTop: "50px" }}>
          <div>This is Dashboard</div>
          <button
            style={{ marginTop: "20px" }}
            type="button"
            onClick={() => this.logout()}
          >
            {this.state.logout}
          </button>
        </div>
      </>
    );
  }
}

function mapStateToProps(states) {
  return {
    LoginDetails: states.LoginReducer
  };
}

export default connect(mapStateToProps, { LogoutAction })(Home);
