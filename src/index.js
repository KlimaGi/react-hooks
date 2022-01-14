import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useFetch } from "./useFetch";

const App = ({ login }) => {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );
  if (loading) return <h3>loading...</h3>;
  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }
  return (
    <div>
      <img src={data.avatar_url} alt={data.login} />
      <div>
        <h3>{data.login}</h3>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
};

ReactDOM.render(<App login="KlimaGi" />, document.getElementById("root"));
