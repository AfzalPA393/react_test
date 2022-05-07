import React, { useState, useEffect,forwardRef  } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import { API_URL } from "../../Config";
import swal from "sweetalert";
import "./user.css";
import MaterialTable from "material-table";
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Refresh from '@material-ui/icons/Refresh';
import Delete from '@material-ui/icons/Delete';
export default function Users() {


  const columns = [
      {
        title: 'Avatar',
        field: 'avatar',
        render: rowData => (
          <img
            style={{ height: 36, borderRadius: '50%' }}
            src={rowData.avatar}
          />
        ),
      },
      { title: 'Id', field: 'id' },
      { title: 'First Name', field: 'first_name' },
      { title: 'Last Name', field: 'last_name' },
      { title: 'Email', field: 'email' },
      { title: 'Age', field: 'age' },
    ];


  let navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {

    getUserList();
  }, []);
  function getUserList() {
    let url = `${API_URL}users`;
    axios({
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        setData(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const tableIcons = {
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  };
  function DeleteUser(id) {
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover this user!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
		.then((willDelete) => {
			if (willDelete) {
				axios({
					method: 'post',
					url: API_URL + 'users/delete-user',
					data: { id: id },
					headers: { 'Content-Type': 'application/json'}
				}).then(function (response) {
          getUserList();
					swal("Poof! Your file has been deleted!", {
						icon: "success",
					});
				}).catch(function (response) {
					console.log(response);
				});

			}
		});
	}
  return (
    <div className="container-fluid">
      <div className=" row pt-4 mb-auto">
        <Card>
          <CardContent>
            <div className="row mb-3">

              <div className="col-sm-12 me-0 text-end">
                <button
                  className="btn btn-success"
                  onClick={() => navigate("/user/add")}
                >
                  Add User
                </button>
              </div>
            </div>
            <MaterialTable
            title="Static Data Example"
        columns={columns}
        actions={[
            {
              icon: Refresh,
              tooltip: 'Refresh Data',
              isFreeAction: true,
            },{
              icon: Edit,
              tooltip: 'Edit',
              onClick:(event, rowData)=>
                 navigate(`/user/edit/${rowData.id}`)
            },
            {
              icon: Delete,
              tooltip: 'Delete User',
              onClick: (event, rowData) => DeleteUser(rowData.id)
            }
          ]}
          options={{
        actionsColumnIndex: -1
      }}
        data={data}
        icons={tableIcons}

            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
