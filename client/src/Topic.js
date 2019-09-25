import React from "react";
import { Route, Link } from "react-router-dom";
import { topics } from "./App";
import Resource from "./Resource";

const Topic = ({ match }) => {
  const topic = topics.find(({ id }) => id === match.params.topicId);
  return (
    <div>
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>
      <ul>
        {topic.resources.map(sub => (
          <li key={sub.id}>
            <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
          </li>
        ))}
      </ul>
      <hr />

      <Route path={`${match.path}/:subId`} component={Resource} />
    </div>
  );
};

export default Topic;
