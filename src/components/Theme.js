import React from "react";
import Navbar from "./Common/Navbar";
import Sidebar from "./Common/Sidebar";
import Breadcrumbs from "./Common/Breadcrumbs";
export default class Theme extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid ">
          <div className="row h-100">
            <Navbar />
            <Sidebar />
            <div className="col-md-10 col-9">
              <div className="container-fluid ">{this.props.children}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
