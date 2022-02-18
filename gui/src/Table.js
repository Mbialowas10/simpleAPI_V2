import React, { useEffect, useState } from "react";

// fetch(`https://source.unsplash.com/250x250/?car`).then((response) => {
//                             return   `<img class="car-image" src="${response.url}" alt="car image"/>`
//                       })



function Table({data,photos}){

  // const photos = fetch(`https://source.unsplash.com/250x250/?car`).then((response) => {
  //   `<img class="car-image" src="${response.url}" alt="car image"/>`
  // })
  console.log( photos)
  let idx = 0;

  return (
      <table className="table">
        <thead>
          <tr>
            <td>ID:</td>
            <td>Name:</td>
            <td>Email:</td>
            <td>Company:</td>
            <td>user ID:</td>
            <td>Passsword:</td>
            <td>Job Title:</td>
            <td>Avatar:</td>
            <td>Photo:</td>
            </tr>
        </thead>
        <tbody>
        {data.map((d) => {
          //console.log(d);
          return <tr key={d[0]}>
                    <td>
                      {d['id']}
                    </td>
                    <td>
                      {d['name']}
                    </td>
                    <td>
                      {d['email']}
                    </td>
                    <td>
                      {d['company']}
                    </td>

                    <td>
                      {d['userName']}
                    </td>
                    <td>
                      {d['password']}
                    </td>
                    <td>
                      {d['jobTitle']}
                    </td>

                    <td>
                      <img src={d['imageURL']} />
                    </td>
                    <td>
                      {
                        ( <img src={photos[idx++]}/> )

                        }
                    </td>
                  </tr>;

        })}
        </tbody>
    </table>
  );
}
export default Table;