import React from "react";
import { Chart } from "react-google-charts";
import "./ChartContainer.css"

export const weightData = [
    ["Dinosaur", "KGs"],
    ["Apatosaurus", 19000],
    ["Saurolophus", 1900],
    ["Tyrannosaurus Rex", 7000],
    ["Stegosaurus", 5000],
    ["Triceratops", 5500],
    ["Pterodatylus", 50],
    ["Elasmosaurus", 100],
    ["Muttaburrasaurus", 2800],
    ["Oviraptor", 20],
    ["Hypsilohodon", 50],
];

export const lengthData = [
    ["Dinosaur", "Meters"],
    ["Apatosaurus", 21],
    ["Saurolophus", 9],
    ["Tyrannosaurus Rex", 12],
    ["Stegosaurus", 9],
    ["Triceratops", 9],
    ["Pterodatylus", 1.83],
    ["Elasmosaurus", 6.2],
    ["Muttaburrasaurus", 7],
    ["Oviraptor", 2],
    ["Hypsilohodon", 2.3],
];

export const dietData = [
    ["Diet Type", "Number"],
    ["Herbivorous", 6],
    ["Carnivorous", 3],
    ["Omnivorous", 1],
];

export const weightOptions = {
    title: "Dinosaur Weight",
    backgroundColor: 'transparent'
};

export const lengthOptions = {
    title: "Dinosaur Length Comparison",
    backgroundColor: 'transparent'
};

export const dietTitle = {
    title: "Diet Types",
    backgroundColor: 'transparent'
}

const ChartContainer = () => {
    return (
        <>
            <div className="charts">
                <div className="weight-chart">
                    <Chart
                        chartType="BarChart"
                        data={weightData}
                        options={weightOptions}
                        width={"100%"}
                        height={"400px"}
                    />
                </div>
                <div className="length-chart">
                    <Chart
                        chartType="BarChart"
                        data={lengthData}
                        options={lengthOptions}
                        width={"100%"}
                        height={"400px"}
                    />
                </div>
                <div className="diet-chart">
                    <Chart
                        chartType="PieChart"
                        data={dietData}
                        options={dietTitle}
                        width={"100%"}
                        height={"400px"}
                    />
                </div>
            </div>
        </>
    )
}

export default ChartContainer;