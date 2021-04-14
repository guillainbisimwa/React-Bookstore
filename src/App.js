import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Bookstore extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>Bookstore</div>
    );
  }
}

// ========================================

ReactDOM.render(
    <Bookstore />,
    document.getElementById('root'),
);
