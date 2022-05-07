import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { Card } from "@mui/material";
import axios from "axios";
import { API_URL } from "../../Config";
import swal from "sweetalert";
import { useNavigate,useParams } from "react-router-dom";
function AddUser() {
  let navigate = useNavigate();
  let {id} = useParams();
  const [userData, setData] = useState({first_name:"",last_name:"",age:"",email:""});
  useEffect(() => {
      axios({
        method : "get",
        url : `${API_URL}users/get_user_by_id/${id}`,
        headers : { "Content-Type" : "application/json"},
        })
        .then(function (response){
          setData(response.data.result);
        })
      .catch(function (error) {
        console.log(error);
      });
}, []);
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  setValue("first_name", userData.first_name);
  setValue("last_name", userData.last_name);
  setValue("age", userData.age);
  setValue("email", userData.email);
  const onSubmit = (data) => {
    axios({
      method: "post",
      url : `${API_URL}users/update-user/${id}`,
      headers: {"Content-Type": "application/json"},
      data: {
        data,
      },
    })
    .then(function (response){
      swal({
        title: "Users",
        text: "Updation Successful",
        icon: "success",
        timer: 3500,
        button: false
    })
      navigate("/user");
    })
    .catch(function(error){
      console.log(error);
      swal({
        title: "Users",
        text: "Updation Failed",
        icon: "error",
        timer: 3500,
        button: false
    })
    });
  };
  const validateName = (value) => {
    let name = getValues("first_name")+getValues("last_name");
  if (name.length <= 20) {
    return true;
  } else {
    return 'Name cannot exceed 20 charecter';
  }
};
  return (
    <Card className="d-flex flex-column mt-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row p-4">
          <div className="col-6">
            <label className="form-label  mb-2 ">First Name</label>
            <input
              defaultValue={userData != undefined && userData.first_name }
              {...register("first_name", { required: true,minLength: 2,validate: validateName,pattern: {
      value:/^[a-zA-Z]+$/,
      message: 'Invalid format'
    } })}
              name="first_name"
              type="text"
              className="form-control mb-2 capitalise"
              placeholder="Enter your first name"

            />
            <span className="text-danger">
            {errors.first_name && errors.first_name.type === "required" && (
            <p className="errorMsg">First Name is required.</p>
            )}
            {errors.first_name && errors.first_name.type === "minLength" && (
              <p className="errorMsg">Please enter atleast two charectors.</p>
            )}
            {errors.first_name && errors.first_name.type === "validate" && (
              <p className="errorMsg">{errors.first_name.message}.</p>
            )}
            {errors.first_name && errors.first_name.type === "pattern" && (
              <p className="errorMsg">{errors.first_name.message}.</p>
            )}
            </span>
          </div>
          <div className="col-6">
            <label className="form-label  mb-2 ">Last Name</label>
            <input
              defaultValue={userData != undefined && userData.last_name }
              {...register("last_name", { required: true,minLength: 2,validate: validateName,pattern: {
      value:/^[a-zA-Z]+$/,
      message: 'Invalid format'
    } })}
              name="last_name"
              type="text"
              className="form-control mb-2 capitalise"
              placeholder="Enter your last name"
            />
            <span className="text-danger">
            {errors.last_name && errors.last_name.type === "required" && (
            <p className="errorMsg">Last Name is required.</p>
            )}
            {errors.last_name && errors.last_name.type === "minLength" && (
              <p className="errorMsg">Please enter atleast two charectors.</p>
            )}
            {errors.last_name && errors.last_name.type === "pattern" && (
              <p className="errorMsg">{errors.last_name.message}.</p>
            )}
            </span>
          </div>
          <div className="col-6">
            <label className="form-label mb-2">Email</label>
            <input
              defaultValue={userData != undefined && userData.email }
              {...register("email", { required: true,pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: 'Email is not valid.'
              } })}
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
            />
            <span className="text-danger">
            {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">Email is required.</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="errorMsg">{errors.email.message}.</p>
            )}
            </span>
          </div>
          <div className="col-6">
            <label className="form-label mb-2">Age</label>
            <input
              defaultValue={userData != undefined && userData.age }
              {...register("age", { required: true,min:18,max:70 })}
              name="age"
              type="number"
              className="form-control"
              placeholder="Age"
            />
            <span className="text-danger">
            {errors.age && errors.age.type === "required" && (
            <p className="errorMsg">Age is required.</p>
            )}
            {errors.age && (errors.age.type === "min" || errors.age.type === "max") && (
              <p className="errorMsg">Age Cannot be less than 18 and higher than 70</p>
            )}
            </span>
          </div>
          <div className="col-6">
            <button className="btn-success mt-3" >Updation</button>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default AddUser;
