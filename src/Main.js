import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import LightSwitch from "./components/LightSwitch";
import { NavLink, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Slug from "./components/Slug";
import List from "./components/List";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Search from "./components/Search";
import values from "./config.js";
import AsyncFetch from "./util/helper.js";

function Main() {
  const theme = ["light", "dark"];
  const darkMode = useContext(DarkModeContext);
  const [results, setResults] = useState();
  const dispatch = useDispatch();

  const loadInitialData = () => {
    let data = AsyncFetch(
      `${values.base_url}/${values.api_version}/movie/popular?api_key=${values.api_key}&page=1`
    );
    data.then((data) => {
      setResults(data.results);
      dispatch({ type: "SET_MOVIES", payload: data.results });
    });
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  return (
    <div
      width="100%"
      height="150%"
      className={`container-${theme[darkMode.darkMode === true ? 1 : 0]}`}
      style={{ overflow: "visible" }}
    >
      <Navbar
        bg={theme[darkMode.darkMode === true ? 1 : 0]}
        variant={theme[darkMode.darkMode === true ? 1 : 0]}
        className={`customshadow`}
        expand="lg"
        fixed="top"
      >
        <NavLink className="navbar-brand" to={"/"}>
          <img src={"/logo.png"} alt={"Logo"} width="60" height="60"></img>
        </NavLink>
        <LightSwitch />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              className={"mr-auto"}
              title="Movies"
              id="basic-nav-dropdown"
            >
              {results &&
                results.map((item) => {
                  return (
                    <NavDropdown.Item href={`/details/${item.id}`}>
                      {item.original_title}
                    </NavDropdown.Item>
                  );
                })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Search className="input-large" initialData={results} />
      </Navbar>
      <div className="body-container">
        <Routes>
          <Route path="/category" exact={true} element={<Slug />} />
          <Route
            path="/details/:id"
            exact={true}
            element={<Detail initialData={results} />}
          />
          <Route path="/" exact={true} element={<List />} />
        </Routes>
      </div>
      <Navbar>
        <p></p>
      </Navbar>
    </div>
  );
}
export default Main;
