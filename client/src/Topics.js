import React from "react";
import { Route, Link } from "react-router-dom";
import { topics } from "./App";
import Topic from "./Topic";

const Topics = ({ match }) => {
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <hr />

      <Route path={`${match.path}/:topicId`} component={Topic} />
    </div>
  );
};

export default Topics;
