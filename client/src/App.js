import React from 'react';
import './App.css';

const topics = [
  {
    name: "React Router",
    id: "react-router",
    description: "Declarative, component based routing",
    resources: [{
      name: "URL Parameters",
      id: "url-parameters",
      description: "Url parameters are parameters which",
      url: "https://www.youtube.com/watch?v=sfvrjwVihFY" 
    }, {
      name: "Programmatically navigate",
        id: "programmatically-navigate",
        description: "When building an app with React",
        url: "https://reacttraining.com/react-router/web/example/no-match" }]
  },
  {
    name: "React.js",
      id: "reactjs",
    description: "A JavaScript library for building user",
    resources: [{
      name: "React Lifecycle Events",
      id: "react-lifecycle",
      description: "React Lifecycle events allow you to tie into specific events",
      url: "https://www.youtube.com/watch?v=sfvrjwVihFY"
    }, {
      name: "React AHA Moments",
        id: "react-aha",
        description: "A collection of 'Aha moments while learning React.'",
        url: "https://www.youtube.com/watch?v=sfvrjwVihFY" }]
  },
  {
    name: "Functional Programing",
    id: "functional-programing",
    description: "In computer science, functional programing is a program",
    resources: [{
      name: "imperative vs Declarative programming",
      id: "imperative-declarative",
      description: "A guide to underStanding the difference between",
      url: ""
    }, {
      name: "Building User Interfaces with Pure Functional programming",
        id: "fn-compostion",
        description: "A guild to builing ui with pur functions",
        url: "https://www.youtube.com/watch?v=sfvrjwVihFY" }]
  }
]

function App() {
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
