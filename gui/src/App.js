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
  const [photoURL,setPhotoURL] = useState([]);
  const [data, setData] = useState([]);
  let urls = [];

  const api = createApi({
    headers: {
      Authorization: "Client-ID ys5kWCCVvIGblbDS2nZz6nIn799KvgAV3TlwI13ue9M",
    },
  });

  const fetchData = async () => {
    const resp = await Axios("http://localhost/miniProject/data.php");
    //const resp2 = await Axios("https://api.unsplash.com/search/photos?client_id=ys5kWCCVvIGblbDS2nZz6nIn799KvgAV3TlwI13ue9M&query=cars");
    const url = "https://api.unsplash.com/search/photos?client_id=ys5kWCCVvIGblbDS2nZz6nIn799KvgAV3TlwI13ue9M&query=cars&per_page=30";
    //console.log(resp.data.results);
    setData(resp.data);
    //setPhotos(resp2.results);

    //console.log(photos);

    // make request to api
    fetch(url)
      .then(function (data) {
        //console.log(data);
        return data.json(); // convert response to json
      })
      .then (function (data){
        //console.log(data.results);

        data.results.forEach(e => {
          urls.push(e.urls.regular);
        });
        setPhotoURL(urls);
      })

  };

  useEffect(() => {
    fetchData();
    //fetchPhotos();
  }, []);


  // function fetchPhotos(){
  //   api.search
  //           .getPhoto({query:"cars"})
  //           .then(result=>{
  //             setPhoto(result);
  //           })
  //           .catch(()=> {
  //             console.log("can't fetch photos from unsplash");
  //           });

  // }
  return (
    <div className="App">
      <h1>Fetching some JSON</h1>
      {/* {data.map((d) => {
        return <table class="table"><tr><td>{d}</td></tr></table>;
      })} */}
      <Table data={data} photos={photoURL} />
    </div>
  );
}

export default App;
