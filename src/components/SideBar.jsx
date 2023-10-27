import React from "react";
import styled from "styled-components";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import Playlists from "./Playlists";

function SideBar() {
  return (
    <Container>
      <div className="top_links">
        <div className="logo">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="spotify"
          />
        </div>
        <ul>
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Search</span>
          </li>
          <li>
            <IoLibrary />
            <span>Your Library</span>
          </li>
        </ul>
        <div className="playlist">
          <div className="plylst">PLAYLISTS</div>
          <hr/>
        </div>
      </div>

      <Playlists />
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  .top_links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      margin: 1rem 0;
      img {
        max-inline-size: 80%;
        block-size: auto;
      }
    }
    ul{
        font-weight:500;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        li{
            display: flex;
            gap: 1rem;
            cursor: pointer;
            transition: 0.2s ease-in-out;
            align-items:center;
            svg{
                font-size: 1.2rem;
            }
            &:hover {
              color: white;
            }
        }
      }

        .playlist{
           margin-top:1.2rem;
           display:flex;
           flex-direction:column;
           justify-content:center;
           gap:1rem;
           
           .plylst{
             display:flex;
             justify-content:flex-start;
             margin:0 1rem;
             align-items:center;
             color:white;
             font-size:14px;
           }
           hr{
            opacity:0.2;
            width:90%;
            margin: 0 auto;
            
           }  
        }
    }

  
  
`;

export default SideBar;
