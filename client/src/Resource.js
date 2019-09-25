import React from "react";
import { topics } from "./App";

const Resource = ({ match }) => {
  const topic = topics
    .find(({ id }) => id === match.params.topicId)
    .resources.find(({ id }) => id === match.params.subId);
  console.log(topic.url);
  return (
    <div>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
      <a href={topic.url} target="_blank" rel="noopener noreferrer">
        Learn more
      </a>
    </div>
  );
};

export default Resource;
