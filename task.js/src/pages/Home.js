import React from "react";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import "./home.css";
import { Button } from "@mui/material";
import { useContext } from "react";
import { statecontext } from "./context/Context";

const Home = () => {
  const { state, dispatch } = useContext(statecontext);
  console.log("state", state);
  const navigate = useNavigate();

  const edititems = (id) => {
    navigate({
      pathname: "/Add",
      search: createSearchParams({
        id: id,
      }).toString(),
    });
  };

  const deleteitems = (id) => {
    dispatch({ type: "deltask", payload: id });
  };
  return (
    <div>
      <section className={"nav"}>
        <section className={"container"}>
          <div className={"navbarflex"}>
            <div className={"navlogo"}>
              <h2>Issue Page</h2>
            </div>
            <div className={"navbarlist"}>
              <Link to={"/Add"}>
                <Button variant="contained">Create-issue</Button>
              </Link>
            </div>
          </div>
        </section>
      </section>
      <section className="content">
        <section className="container">
          <div className="contentflex">
            <div className="welcome">
              <h2>Welcome to the page</h2>
            </div>
            <div className="listissue">
              {state.event?.map((item, index) => {
                return (
                  <div className="issue" key={item}>
                    <h3>{item.titleform}</h3>
                    <h4>{item.descripe}</h4>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => deleteitems(item.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => edititems(item.id)}
                    >
                      Edit
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
