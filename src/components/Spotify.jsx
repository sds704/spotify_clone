import React from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Body from "./Body";
import Footer from "./Footer";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";

export default function Spotify() {
  const [{token}, dispatch] = useStateProvider();
  const [navBackground, setNavBackground] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);
  const bodyRef = useRef();
  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30
      ? setNavBackground(true)
      : setNavBackground(false);
    bodyRef.current.scrollTop >= 268
      ? setHeaderBackground(true)
      : setHeaderBackground(false);
  };

  useEffect(()=>{
    const getUserInfo = async ()=>{
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      const userInfo = {
        userName : data.display_name,
        userId : data.id,
      }
      dispatch({type:reducerCases.SET_USER, userInfo});
    }
    
    getUserInfo(); 
  },[token, dispatch])

  return (
    <Container>
      <div className="spotify_body">
        <SideBar />
        <div className="body" ref={bodyRef} onScroll={bodyScrolled}>
          <NavBar navBackground={navBackground}/>
          <div className="body_contents">
            <Body headerBackground={headerBackground}/>
          </div>
        </div>
      </div>
      <div className="spotify_footer">
        <Footer />
      </div>
    </Container>
  );
}

const Container = styled.div`
height:100vh;
width:100vw;
overflow:hidden;
display:grid;
grid-template-rows:85vh 15vh;

.spotify_body{
    display:grid;
    grid-template-columns:15vw 85vw;
    height:100%;
    width:100%;
    // background:linear-gradient(transparent, rgba(0,0,0,1));
    // background-color:rgb(32,87,100);
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(91, 87, 115);

    .body{
        height:100%;
        width:100%;
        overflow:auto;
    }
}
`;
