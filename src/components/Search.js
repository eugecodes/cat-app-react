import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Search({ initialData }) {
  const [movNames, setMovNames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const data = useSelector((state) => state.titles);
  //const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    let mvnames = [];
    if (initialData) {
      initialData.map((item) => {
        mvnames.push({
          value: item.id,
          label: item.original_title,
        });
      });
      setMovNames(mvnames);
    }
  }, [initialData]);

  const handleClick = (value, actionMeta) => {
    setSearchTerm("");
    if (
      ["menu-close", "input-blur"].includes(actionMeta.action) &&
      actionMeta.prevInputValue
    ) {
      setSearchTerm({ value: "none", label: actionMeta.prevInputValue });
      let data = initialData.filter((item) =>
        item.original_title.includes(actionMeta.prevInputValue)
      );
      if (data) {
        try {
          console.log(`/details/${data[0].id}`);
          navigate(`/details/${data[0].id}`);
        } catch (e) {
          console.log(e);
          new Swal({
            icon: "error",
            title: "Oops...",
            text: "No movie was found with the written initials.",
          });
        }
      }
    }
  };
  const handleGo = (value) => {
    console.log(value.value);
    navigate(`/details/${value.value}`);
  };
  //useDispatch({ type: 'SET_MOVIE_LIST', payload: results })
  return (
    <Select
      options={movNames}
      onChange={handleGo}
      onInputChange={handleClick}
      value={searchTerm ? searchTerm : ""}
      placeholder="Search..."
      className="input-large"
    ></Select>
  );
}
export default Search;
