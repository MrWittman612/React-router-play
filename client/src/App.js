import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
// import Home from "./Home";
// import Topics from "./Topics";

const topics = [
  {
    name: "React Router",
    id: "react-router",
    description: "Declarative, component based routing",
    resources: [
      {
        name: "URL Parameters",
        id: "url-parameters",
        description: "Url parameters are parameters which",
        url: "https://www.youtube.com/watch?v=sfvrjwVihFY"
      },
      {
        name: "Programmatically navigate",
        id: "programmatically-navigate",
        description: "When building an app with React",
        url: "https://www.youtube.com/watch?v=sfvrjwVihFY"
      }
    ]
  },
  {
    name: "React.js",
    id: "reactjs",
    description: "A JavaScript library for building user",
    resources: [
      {
        name: "React Lifecycle Events",
        id: "react-lifecycle",
        description:
          "React Lifecycle events allow you to tie into specific events",
        url: "https://www.youtube.com/watch?v=sfvrjwVihFY"
      },
      {
        name: "React AHA Moments",
        id: "react-aha",
        description: "A collection of 'Aha moments while learning React.'",
        url: "https://www.youtube.com/watch?v=sfvrjwVihFY"
      }
    ]
  },
  {
    name: "Functional Programing",
    id: "functional-programing",
    description: "In computer science, functional programing is a program",
    resources: [
      {
        name: "imperative vs Declarative programming",
        id: "imperative-declarative",
        description: "A guide to underStanding the difference between",
        url: ""
      },
      {
        name: "Building User Interfaces with Pure Functional programming",
        id: "fn-compostion",
        description: "A guild to builing ui with pur functions",
        url: "https://www.youtube.com/watch?v=sfvrjwVihFY"
      }
    ]
  }
];

const Resource = ({ match }) => {
  const topic = topics
    .find(({ id }) => id === match.params.topicId)
    .resources.find(({ id }) => id === match.params.subId);
  // console.log(topic.url);
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

const Topic = ({ match }) => {
  const topic = topics.find(({ id }) => id === match.params.topicId);
  return (
    <div>
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>
      <ul>
        {topic.resources.map(sub => (
          <li key={sub.id}>
            {/* <Link to={`/topics/${match.params.topicId}/${sub.id}`}> */}
            <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
          </li>
        ))}
      </ul>
      <hr />
      {/* <Route path={`/topics/:topicId/:subId`} component={Resource} /> */}
      <Route path={`${match.path}/:subId`} component={Resource} />
    </div>
  );
};

const Topics = ({ match }) => {
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map(({ name, id }) => (
          <li key={id}>
            {/* <Link to={`/topics/${id}`}>{name}</Link> */}
            <Link to={`${match.url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <hr />
      {/* <Route path={`/topics/:topicId`} component={Topic} /> */}
      <Route path={`${match.path}/:topicId`} component={Topic} />
    </div>
  );
};

const Home = () => {
  return <h1>Home</h1>;
};

const NoMatch = ({ location }) => {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div style={{ width: "100%", margin: "0 auto", padding: "1.5rem" }}>
        <ul style={{ marginLeft: "10px" }}>
          <li
            style={{
              backgroundColor: "white",
              display: "inline-block",
              textDecoration: "line"
            }}
          >
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Topics" component={Topics} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
