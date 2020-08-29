import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Hello: React.FunctionComponent = function() {
  return (
    <div>Hello World</div>
  );
}

ReactDOM.render(<Hello />, document.getElementById("root"));