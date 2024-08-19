import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";

import "./Player.css";
import { useNavigate } from "react-router-dom";
const Player = () => {
  const navigate = useNavigate();

  return (
    <div className="playcontainer">
      <div className="player">
        <div className="playback">
          <IoArrowBackCircle
            style={{ cursor: "pointer" }}
            size={30}
            color="black"
            onClick={() => navigate(-1)}
          />
        </div>
        <video
          src="../../public/images/6548176-hd_1920_1080_24fps.mp4"
          autoplay
          loop
          controls
          muted
        ></video>
      </div>
    </div>
  );
};

export default Player;
