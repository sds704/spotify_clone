import axios from "axios";
import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import { FiVolume2 } from "react-icons/fi";


export default function Volume() {
  const [{ token }] = useStateProvider();
  const setVolume = async (e) => {
    await axios.put(
      "https://api.spotify.com/v1/me/player/volume",
      {},
      {
        params: {
          volume_percent: parseInt(e.target.value),
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
  };
  return (
    <Container>
      <div className="footer">
      <FiVolume2/>
      <input type="range" onMouseUp={(e) => setVolume(e)} min={0} max={100} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
 
 .footer{
  display:flex;
  align-items:center;
  gap:5px;

  svg {
    color: #b3b3b3;
    transition: 0.2s ease-in-out;
    &:hover {
      color: white;
    }
  }

  input {
    height: 4px;
    appearance: none;
    width: 10rem;
    margin: 2px;
    border-radius: 8px;
    transition: 0.2s ease;
    background-color: #5e5e5e;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    // display: none; 
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: green;
  }
  
  input[type="range"]:hover {
    background: green;
  }
  input[type="range"]::-webkit-slider-thumb:hover {
    
    background-color: white;
  }
}
 }
    
`;