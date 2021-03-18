import React from 'react';
import BarChart from '../components/charts/BarChart';

const SortingPage = (data, width, height) => {
  //   function rerender() {
  //     this.setState({ state: this.state });
  //     window.location.reload();
  //   }
  return (
    <div>
      <BarChart data={data} width={width} height={height} />
      {/* <button className="ui primary button" onClick={() => this.rerender()}>
        Reset
      </button> */}
    </div>
  );
};

export default SortingPage;
