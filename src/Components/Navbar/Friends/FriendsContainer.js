import React from "react";
import Friends from "./Friends";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    messegesPage: state.messegesPage
  }
}

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;
