import { useEffect, useRef } from "react";
import { select } from "d3";

const DonutChart = ({ value = 6.5, maxValue = 24 }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Set up dimensions and constants
    const width = 215;
    const height = 215;
    const radius = Math.min(width, height) / 2;
    const strokeWidth = 58;
    const pieceLength = 15; // Length of each dash
    const gapLength = 2; // Gap between dashes
    const totalPieces = maxValue;
    const circumference = 2 * Math.PI * (radius - strokeWidth / 2);
    const dashArray = `${pieceLength} ${gapLength}`;
    const gradientPieces = Math.min(value, maxValue);
    const startOffset = circumference / 2; // Start at the 6 o'clock position

    // Clear the SVG content if it already exists
    select(chartRef.current).selectAll("*").remove();

    // Create the SVG container
    const svg = select(chartRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Define the radial gradient
    const defs = svg.append("defs");
    const radialGradient = defs
      .append("linearGradient")
      .attr("id", "gradient")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", "0%")
      .attr("y1", "50%")
      .attr("x2", "100%")
      .attr("y2", "50%");

    radialGradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#536DFF");

    radialGradient
      .append("stop")
      .attr("offset", "50%")
      .attr("stop-color", "#82CBFF");

    radialGradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#6179E5");

    // Draw the background gray circle for the full donut
    svg
      .append("circle")
      .attr("r", radius - strokeWidth / 2)
      .attr("fill", "none")
      .attr("stroke", "#eee")
      .attr("stroke-width", strokeWidth)
      .attr("stroke-dasharray", dashArray)
      .attr("stroke-dashoffset", 0)
      .attr("transform", "rotate(180)");

    // Draw the gradient circle for the value portion
    svg
      .append("circle")
      .attr("r", radius - strokeWidth / 2)
      .attr("fill", "none")
      .attr("stroke", "url(#gradient)")
      .attr("stroke-width", strokeWidth)
      .attr(
        "stroke-dasharray",
        `${(gradientPieces / totalPieces) * circumference} ${circumference}`
      )
      .attr("stroke-dashoffset", startOffset)
      .attr("transform", "rotate(180)");

    // Mask on top of the gradient to give it a look similar to saverate pieces
    svg
      .append("circle")
      .attr("r", radius - strokeWidth / 2)
      .attr("fill", "none")
      .attr("stroke", "#fff")
      .attr("stroke-width", strokeWidth)
      .attr("stroke-dasharray", `${gapLength} ${pieceLength}`)
      .attr("stroke-dashoffset", 0)
      .attr("transform", "rotate(180)");

    // Add the value text in the middle
    svg
      .append("text")
      .attr("x", 0)
      .attr("y", -5)
      .attr("text-anchor", "middle")
      .attr("fill", "#414D55")
      .attr("font-family", "Poppins")
      .attr("font-size", "28px")
      .attr("font-style", "normal")
      .attr("font-weight", "700")
      .attr("line-height", "40px")
      .text(value);

    // Add the "Hours" label below the value
    svg
      .append("text")
      .attr("x", 0)
      .attr("y", 15)
      .attr("text-anchor", "middle")
      .attr("fill", "#696D6E")
      .attr("font-family", "Poppins")
      .attr("font-size", "10px")
      .attr("font-style", "normal")
      .attr("font-weight", "500")
      .attr("line-height", "20px")
      .attr("letter-spacing", "0.417px")
      .attr("text-transform", "uppercase")
      .text("HOURS");
  }, [value, maxValue]);

  return <svg ref={chartRef} />;
};

export default DonutChart;
