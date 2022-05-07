import React, { useState, useLayoutEffect } from "react";
import "./sidebar.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import QueueOutlinedIcon from "@mui/icons-material/QueueOutlined";
import AudioFileOutlinedIcon from "@mui/icons-material/AudioFileOutlined";
import SpatialAudioOffOutlinedIcon from "@mui/icons-material/SpatialAudioOffOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import MoreTimeOutlinedIcon from "@mui/icons-material/MoreTimeOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallIcon from "@mui/icons-material/Call";
import CallMadeIcon from "@mui/icons-material/CallMade";

 function Sidebar() {
 const [sidebarToggle, setToggle] = useState(false);

  const showSidebar = () => setToggle(!sidebarToggle);
  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth <= "800" && window.innerHeight <= "574") {
        setToggle(true);
      } else setToggle(false);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className=" row col-3 col-md-2 col-sm-2 ps-0 sidebar-bg">
      <div className={sidebarToggle ? "nav-menu active" : "nav-menu"}>
        <div className="sidebar text-white">
          <div className="  d-flex flex-column flex-shrink-0  ">
            <ul className="nav nav-pills nav-flush mt-3 flex-column mb-auto ">
              <li className="nav-item ps-1 mb-2">
                <Link className="my-link nav-link " to="/user">
                  <PeopleOutlinedIcon className="bi me-2 my-icon" />
                  <span className="title">Users</span>
                </Link>
              </li>

              {/* <li className="nav-item dropdown ">
                <Link
                  className="nav-link dropdown-toggle my-link"
                  id="dropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  to="/report"
                >
                  <AssessmentOutlinedIcon className="bi me-2 my-icon" />
                  <p className="title">Reports</p>
                </Link>
                <ul
                  className="dropdown-menu nav-pills nav-flush my-list"
                  aria-labelledby="dropdownUser3"
                >
                  <li className="nav-item ps-1 mb-2">
                    <button class="dropdown-item" type="button">
                      <Link className="my-link" to="/report/livecall">
                        Live Calls
                      </Link>
                    </button>
                  </li>
                  <li className="nav-item ps-1 mb-2">
                    <button className="dropdown-item" type="button">
                      <Link className="my-link" to="/report/inbound">
                        Inbound Reports
                      </Link>
                    </button>
                  </li>
                  <li className="nav-item ps-1 mb-2">
                    <button className="dropdown-item" type="button">
                      <Link className="my-link" to="/report/outbound">
                        Outbound Reports
                      </Link>
                    </button>
                  </li>
                  <li className="nav-item ps-1 mb-2">
                    <button className="dropdown-item" type="button">
                      <Link className="my-link" to="/report/agentreport">
                        Agent Activities
                      </Link>
                    </button>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar
