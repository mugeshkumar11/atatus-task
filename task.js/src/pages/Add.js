import React from "react";
import "./add.css";
import { useState, useContext } from "react";
import { Button, TextField } from "@mui/material";
import { Link,useNavigate,useSearchParams} from "react-router-dom";
import { statecontext } from "./context/Context";

const Add = () => {

    const {state,dispatch}= useContext(statecontext);
    console.log("statecontext", state.event);

    const [param] = useSearchParams();
    const navigate = useNavigate();
    const id = parseInt(param.get("id"));
  
    let getid = state.event.findIndex((item) => item.id === id);
  
    const [title, settitle] = useState(state.event[getid]?.titleform || "");
    const [description, setdescription] = useState(state.event[getid]?.descripe || "");

    const handletitle = (eve) => {
       settitle(eve.target.value)
    }

    const handledescription = (eve) => {
        setdescription(eve.target.value)
    }

    const handlesum = (values) => {
        values.preventDefault();
        if (id) {
          const temp = {
            id: id,
            titleform: title,
            descripe: description,
          };
          dispatch({ type: "update", payload: temp });
          settitle("");
          setdescription("");
          navigate("/");
        } else {
          const temp = {
            id: state.event.length + 1,
            titleform:title,
            descripe: description,
          };
          dispatch({ type: "setevent", payload: [...state.event, temp] });
          settitle("");
          setdescription("");
        }
      };

  return (
    <div>
      <section className={"addtask"}>
        <section className={"container"}>
          <div className={"addflex"}>
            <div className="heading">
                <h3>Add this issue</h3>
            </div>
            <form>
              <div className={"title"}>
                <TextField
                  style={{ backgroundColor: "#fff" }}
                  id="outlined-basic"
                  label="Add-title"
                  variant="outlined"
                    value={title}
                  placeholder={"issue-name"}
                  onChange={handletitle}
                />
              </div>
              <div className={"taskdesc"}>
                <TextField
                  style={{ backgroundColor: "#fff" }}
                  id="outlined-basic"
                  label="Add-description"
                  variant="outlined"
                   value={description}
                  placeholder={"issue-description"}
                   onChange={handledescription}
                />
              </div>
              <div className={"taskbtn"}>
                <Button
                  variant="contained"
                  onClick={(values) => handlesum(values)}
                >
                  submit
                </Button>
                <Link to={"/"}>
                  <Button variant="contained">Home page</Button>
                </Link>
              </div>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Add;
