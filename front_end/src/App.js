import logo from './logo.svg';
import './App.css';
// need to install axios in cmd by running
// npm install axios in project folder
// CORs is blocked in modern web browser  when using JS
// lets fix that by install allow CORS plugin to Chrome or edge
// https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related
import Axios from "axios";
import React, { useEffect, useState } from "react";
import Table from './Table.js';
import { createApi } from 'unsplash-js';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);
  const [photoURL,setPhotoURL] = useState([]);
  let urls = [];

  const api = createApi({
    headers: {
      Authorization: "Client-ID <yourClientID>",
    },
  });


  const fetchData  = async () => {
    const resp = await Axios("https://localhost/miniProject/data.php");
    setData(resp.data);
    const url = "https://api.unsplash.com/search/photos?client_id=yourClientID&query=cars&per_page=30";

    // make a requst to api
    // unplash
    fetch(url)
      .then(function (data){
        return data.json(); // convert reponse into json
      })
      .then (function (data){
        data.results.forEach(e => {
          urls.push(e.urls.regular);
        });
        setPhotoURL(urls);

      });

  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="App">
      <h1>Fetching some JSON</h1>

      <Table data={data} photos={photoURL} />
    </div>
  );
}

export default App;
