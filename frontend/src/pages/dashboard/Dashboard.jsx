import React, { useEffect } from "react";
import "./Dashboard.css";
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGeneres } from "../../store";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const generesLoaded = useSelector((state) => state.netflix.generesLoaded);

  useEffect(() => {
    dispatch(getGeneres());
  }, []);

  useEffect(() => {
    if (generesLoaded) dispatch(fetchMovies({ type: "all" }));
  }, []);
  return (
    <div>
      <div className="hero">
        <img src="../../public/images/stranger.JPG" alt="" />
        <div className="dashcontainer">
          <div className="dashlogo">
            <h1 className="movieLogo">Stranger things</h1>
          </div>
          <div className="dashbuttons">
            <button className="playbutton " onClick={() => navigate("/player")}>
              <FaPlay size={18} color="black" />
              Play
            </button>
            <button className="infobutton">
              <FaInfoCircle /> More info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
