import { useEffect, useRef, useState } from 'react'
import * as d3 from "d3";

export default function StackedBar({width, height}) {
    const svgRef = useRef(null);
    const [data, setData] = useState([
        {month : 2, out : 20, in: 100},
        {month : 1, out : 50, in: 130},
        {month : 3, out : 80, in: 50},
        {month : 4, out : 20, in: 90},
        {month : 5, out : 50, in: 90},
        {month : 6, out : 40, in: 70},
    ]);
    const keys = ['in', 'out']
    const tickLabels = ['August', 'September', "October", "November", "December", "January"];
    const stackedData = d3.stack().keys(keys)(data);
    stackedData.map((d,i) => {
        d.map(d => {
        d.key = keys[i]
        return d
        })
        return d
    })

    useEffect(()=>{
        const svg = d3.select(svgRef.current)
                        .attr("width", width)
                        .attr("height", height)
                        .style("overflow", "visible")
                        .append("g")

        // Setting up x and y axis
        const y = d3.scaleLinear().domain([0, height]).range([height, 0]);
        const x = d3.scaleLinear().domain([0, data.length-1]).range([0, width]);
        const xAxis = d3.axisBottom(x)
        
        xAxis.ticks(6)
            .tickFormat((d,i) => tickLabels[i])
            .tickPadding(15)
            .tickSize(0)

        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(xAxis)
            .attr("stroke-width", "0")
            .style("font-size", "14px")
            .style("color", "#0202021f")

        
        svg.selectAll("mybar")
            .data(stackedData)
            .enter()
            .append('g')
                .selectAll('rect')
                .data(d => d)
                .enter()
                .append('rect')
                .attr('x', (d,i) => i * (width / (data.length -0.9)))
                .attr('width', 20)
                .attr('height', d =>  y(d[0])-y(d[1]) )
                .attr('y', d => y(d[1]))
                .attr('fill', d => d.key == 'in' ? '#40ed5d' : '#07cbf2')
    },[data] )

  return (
    <svg 
        ref={svgRef}>

    </svg>
  )
}
