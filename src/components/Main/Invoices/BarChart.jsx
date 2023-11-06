import { useEffect, useRef, useState } from "react";
import * as d3 from 'd3';

import "./styles.css";

export default function BarChart({width, height}) {
    const [data, setData] = useState([50, 120, 180, 80, 140, 190 ]);
    const svgRef = useRef(null);

    useEffect(()=>{
        let tickLabels = ["older", "Jan 01-08", "Jan 09-16", "Jan 17-25", "Jan 26-31", "Future"];

        const svg = d3.select(svgRef.current)
                      .attr("width", width)
                      .attr("height", height)
                      .style("overflow", "visible")
                      .append("g")
        //Adding X axis
        const xAxis = d3.scaleLinear()
                        .range([0, width])
                        .domain([0, data.length-1])

        const xAxisGenerator = d3.axisBottom(xAxis);
        xAxisGenerator.ticks(6)
                        .tickFormat((d,i) => tickLabels[i])
                        .tickPadding(15)
                        .tickSize(0)
                        
        
        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(xAxisGenerator)
            .attr("stroke-width", "0")
            .style("font-size", "14px")
            .style("color", "#0202021f")
        
        //Adding Y axis
        const y = d3.scaleLinear()
                    .domain([0, height])
                    .range([height, 0]);
    

        // Bars
        svg.selectAll("mybar")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d,i) => i * width / (data.length-0.9))
            .attr("y", (d,i) => height - d)
            .attr("width", 20)
            .attr("height", d => d )
            .attr("fill", "#40ed5d")
            .attr('rx', 5)

    },[data, height, width])

  return (
    <svg
        ref={svgRef}
        className="invoice-barChart">

    </svg>
  )
}
