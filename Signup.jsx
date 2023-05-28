import React, { useRef } from "react";
import "./style.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import img1 from "../Login/images/img1.png";
import img2 from "../Login/images/img2.jpg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const styles = {
  height: "720px",
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Signup = () => {
  const navigate = useNavigate();
  // const handleClick1 = () => {
  //   debugger;
  //   navigate("/Login");
  // };
  // ==========validation functionality start===========
  const password = useRef({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/Login");
  };
  const passwordValidation = "^(?=.*d)[0-9]{8,}$";
  password.current = watch("password", "");
  // ==========validation functionality end===========

  return (
    <>
      <MDBContainer className="">
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src={img2}
              alt="login form"
              className="rounded-start w-100"
              style={styles}
            />
          </MDBCol>

          <MDBCol md="5" className="mx-auto">
            <div className="">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row">
                  <img
                    src={img1}
                    alt=""
                    style={{ height: 80, width: 80, marginLeft: "60px" }}
                  />
                  <span className="h3 fw-bold mb-3 mt-4 ml-5">
                    Zetta Circles
                  </span>
                </div>

                <p
                  className="fw-normal text-center"
                  style={{ letterSpacing: "1px" }}
                >
                  Please complete to create your account.
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 6 }}
                  >
                    <Grid item xs={6}>
                      <TextField
                        id="standard-basic"
                        label="First name"
                        variant="standard"
                        {...register("firstName", {
                          required: true,
                          pattern: /^[a-zA-Z]+$/,
                        })}
                      />
                      {errors.firstName &&
                        errors.firstName.type === "required" && (
                          <div className="text-danger">
                            First name is required
                          </div>
                        )}
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="standard-basic"
                        label="Last name"
                        variant="standard"
                        {...register("lastName", {
                          required: true,
                          pattern: /^[a-zA-Z]+$/,
                        })}
                      />
                      {errors.lastName &&
                        errors.lastName.type === "required" && (
                          <div className="text-danger">
                            First name is required
                          </div>
                        )}
                    </Grid>
                  </Grid>
                  {/* ==============row 2================= */}
                  <Grid container>
                    <TextField
                      id="standard-basic"
                      label="Username"
                      variant="standard"
                      fullWidth
                      style={{ margin: "10px 0" }}
                      {...register("username", {
                        required: "Username is required.",
                      })}
                    />
                    {errors.username && (
                      <div className="text-danger">
                        {errors.username.message}
                      </div>
                    )}
                  </Grid>
                  {/* ==============row 3================= */}
                  <Grid container>
                    <TextField
                      id="standard-basic"
                      label="Email"
                      variant="standard"
                      fullWidth
                      style={{ margin: "1px 0" }}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="text-danger">{errors.email.message}</div>
                    )}
                  </Grid>
                  {/* ==============row 4================= */}

                  <Grid container>
                    <TextField
                      id="standard-password-input1"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      variant="standard"
                      fullWidth
                      style={{ margin: "3px 0" }}
                      {...register("password", {
                        required: "You must specify a password",
                        pattern: {
                          value: passwordValidation,
                          message:
                            "Password should contain at least one digit, one lower case, one upper case and 8 characters",
                        },
                      })}
                    />
                    {errors.password && (
                      <div className="text-danger mt-1">
                        {errors.password.message}
                      </div>
                    )}
                  </Grid>
                  {/* ==============row 5================= */}
                  <Grid container>
                    <TextField
                      id="standard-password-input2"
                      label="Confirm Password"
                      type="password"
                      autoComplete="current-password"
                      variant="standard"
                      fullWidth
                      style={{ marginTop: "5px", marginBottom: "7px" }}
                      {...register("password_confirmation", {
                        required: "You must specify a password",

                        validate: (value) =>
                          value === password.current ||
                          "The passwords do not match",
                      })}
                    />
                    {errors.password_confirmation && (
                      <div className="text-danger mb-3">
                        {errors.password_confirmation.message}
                      </div>
                    )}
                  </Grid>
                  {/* ============================================ */}

                  <div className="row mb-4">
                    <div className="col d-flex justify-content-left">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="form1Example3"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form1Example3"
                        >
                          I agree with terms and conditions
                        </label>
                      </div>
                    </div>
                  </div>
                  <MDBBtn
                    className="mb-4 px-3 w-100 text-center mx-auto"
                    color="dark"
                    size="lg"
                    // onClick={handleClick1}
                  >
                    Sign up
                  </MDBBtn>
                </form>
                <p className="text-center">Term of use. Privacy policy</p>
              </MDBCardBody>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Signup;
