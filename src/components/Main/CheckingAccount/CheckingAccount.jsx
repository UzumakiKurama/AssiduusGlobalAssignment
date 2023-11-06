import { useState, useEffect ,useRef } from "react"
import * as d3 from "d3";
import './styles.css'

export default function CheckingAccount() {
    const [data, setData] = useState([25,200,120,60,100,44,60,32,80]);
    const svgRef = useRef();

    const renderLineChart = (data) =>{
        // setting up svg
        const w = 600;
        const h = 200;
        const svg = d3
          .select(svgRef.current)
          .attr("width", w)
          .attr("height", h)
          .style("overflow", "visible")

        const removeChart = svg.selectAll("path");
        const removeAxes = svg.selectAll("g");
        // xscales
        const xScale = d3
        .scaleLinear()
        .domain([0, data.length - 1])
        .range([0, w])

        //yscales
        const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);
        const generateScaledLine = d3
        .line()
        .x((d, i) => xScale(i))
        .y(yScale)
        .curve(d3.curveCardinal);

        // setting the axes
        const xAxis = d3
            .axisBottom(xScale)
            .ticks(8)
            .tickFormat((i) => i + 1)
            .tickSize(0)

            
        // // drawing the axes on the svg
        svg
        .append("g")
        .style("font-size", "16px")
        .call(xAxis)
        .attr("transform", `translate(0,${h})`)
        .attr("stroke-width", "0")

        svg.selectAll(".line")
            .data([data])
            .join(
                enter => enter.append("path")
                              .attr("stroke", "#40ed5d")
                              .attr("stroke-width", "2px")
                              .attr("fill", "none")
                              .attr("d", (d) => generateScaledLine(d)),
                update => update,
                exit => exit.remove()
            )
        removeChart.style("opacity", "0");
        removeAxes.style("opacity", "0");
    }

    const randomDataGenerator = () => {
        let randomDataArray = [];
        for( let i=0; i<9; i++){
            randomDataArray.push(Math.floor(Math.random() * (200 + 10 + 1) + 10 ));
        }

        return randomDataArray;
    }

    useEffect(()=>{
        renderLineChart(data);
    },[data])



    const handleChange = () => {
        setData(randomDataGenerator());
    }

  return (
    <div className="lineChart-main">
        <div className="lineChart-header">
            <h2 className="lineChart-label">Checking account</h2>
            <div className="lineChart-buttons" onChange={handleChange}>
                <select name="Actions">
                    <option value="manage" selected>Manage</option>
                    <option value="create">Create</option>
                    <option value="edit">Edit</option> 
                </select>
                <select name="Months" onChange={handleChange}>
                    <option value="January" selected>January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                </select>
            </div>
        </div>
        <hr />
        <div style={{textAlign: "center", marginTop: "30px"}}>
            <svg 
                ref={svgRef}
                className="lineChart-graph">
            </svg>
        </div>
    </div>
  )
}
