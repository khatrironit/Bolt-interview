import classNames from "classnames";
import React, { Component } from "react";
import { connect } from "react-redux";
import { changeMobileSidebarVisibility } from "../../redux/actions/sidebarActions";
import Sidebar from "./sidebar/Sidebar";

class Layout extends Component {
  changeMobileSidebarVisibility = () => {
    this.props.dispatch(changeMobileSidebarVisibility());
  };

  render() {
    const layoutClass = classNames({
      layout: true,
      "layout--collapse": this.props.sidebar.collapse,
    });

    return (
      <div className={layoutClass}>
        <Sidebar
          sidebar={this.props.sidebar}
          changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
        />
      </div>
    );
  }
}

export default connect((state) => ({
  sidebar: state.sidebar,
}))(Layout);
