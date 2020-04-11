import React from 'react';
import './ResultsListComponent.css';

const ResultsListComponent = (props) => {
  return (
    <div className="result-list">
      {props.results.map((result, index) => (
        <div className="result" key={index}>
          <div className="title">{result.title}</div>
          <div className="url"><a href={result.url} target="_blank">{result.url}</a></div>
        </div>
      ))}
    </div>
  );
}

export default ResultsListComponent;