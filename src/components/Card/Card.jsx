import React, { useEffect } from "react";
import "./Card.scss";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slices/modalSlice";

const Card = ({ img, link, userToken,aos}) => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleNav = () => {
    if (userToken) {
      nav(`/${link}`);
    } else {
      dispatch(openModal());
    }
  };

  return (
    <div data-aos={`${aos}`}>
      <div className="card">
      <img src={img} alt="" onClick={handleNav} />
    </div>
    </div>
  );
};

export default Card;
