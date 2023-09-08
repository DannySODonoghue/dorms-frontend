import axios from "axios";
import React, { useState, useEffect } from "react";

function Bored() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios
      .get("https://www.boredapi.com/api/activity")
      .then((response) => {
        setData(response.data.activity);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
      <div>
        <h1>You should...</h1>
        <p>
          {data ? (
            <pre>{JSON.stringify(data, null, 2)}</pre>
          ) : (
            <p>Loading...</p>
          )}
        </p>
      </div>
    </>
  );
}

export default Bored;
