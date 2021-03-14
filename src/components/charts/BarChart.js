import React from 'react';
import * as d3 from 'd3';

import styles from '../../css/BarChart.css';
import { rgb } from 'd3';
import BubbleSort from '../Algorithms/BubbleSort';

var data = [];
var svg = {};

class BarChart extends React.Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    data = this.props.data;
    let w = this.props.width;
    let h = this.props.height;

    svg = d3
      .select('body')
      .append('svg')
      .attr('width', this.props.width)
      .attr('height', this.props.height)
      .style('margin-left', 100);

    //Draw box charts
    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', (d, i) => h - 10 * d)
      .attr('width', 65)
      .attr('height', (d, i) => d * 10)
      .attr('id', function (d, i) {
        return 'rect' + data[i];
      })
      .attr('fill', styles.BarChart)
      .attr('class', 'chartPath');

    //Adding label
    svg
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text((d) => d)
      .attr('id', function (d, i) {
        return 'text' + data[i];
      })
      .attr('x', (d, i) => i * 70)
      .attr('y', (d, i) => h - 10 * d - 3);

    svg.exit().remove();
  }

  render() {
    const svg_style = {};

    return (
      <React.Fragment>
        <div id={'#' + this.props.id} style={svg_style}>
          <BubbleSort data={this.props.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default BarChart;
