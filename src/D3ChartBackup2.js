import * as d3 from "d3";

const myData = [200, 120, 160, 250, 180];

export default class D3Chart {
  constructor(element) {
    const svg = d3
      .select(element)
      .append("svg")
      .attr("width", 500)
      .attr("height", 500);

    // link data to 'rect'
    const rects = svg.selectAll("rect").data(myData);

    // each rect details
    rects
      .enter() // ??
      .append("rect")
      .attr("x", (d, i) => i * 100) // data & index,
      .attr("y", 50) // do down from height
      .attr("width", 50) //
      .attr("height", (d) => d)
      .attr("fill", "orange");
  }
}
