/*global React */

import printFactory from '../source/print';

/*eslint-disable no-unused-vars*/
const print = printFactory({ React });
/*eslint-enable no-unused-vars*/

let word = 'this';
let mode = 'display';
let render;

const actions = {
  setWord (w) {
    word = w;
    render();
  },

  setMode (m) {
    mode = m;
    render();
  }
};

render = function () {
  React.render(
    <Print
      word={ word }
      mode={ mode }
      actions = { actions } />,

    document.getElementById('content')
  );
};

render();
