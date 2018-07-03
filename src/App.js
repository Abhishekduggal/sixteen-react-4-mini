import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";
import Routes from "./RoutesComp";
import routes from "./routes";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          price: "$2.96",
          title: "Loaf Pan - 2 Lb, Foil"
        },
        {
          id: 2,
          price: "$3.02",
          title: "Pastry - Chocolate Marble Tea"
        },
        {
          id: 3,
          price: "$1.99",
          title: "Garlic Powder"
        },
        {
          id: 4,
          price: "$7.74",
          title: "Melon - Watermelon Yellow"
        },
        {
          id: 5,
          price: "$4.97",
          title: "Sprouts - Alfalfa"
        },
        {
          id: 6,
          price: "$0.17",
          title: "Bagelers - Cinn / Brown"
        },
        {
          id: 7,
          price: "$0.66",
          title: "Bread Roll Foccacia"
        },
        {
          id: 8,
          price: "$6.40",
          title: "Apples - Spartan"
        },
        {
          id: 9,
          price: "$2.76",
          title: "Samosa - Veg"
        },
        {
          id: 10,
          price: "$9.12",
          title: "Pate - Liver"
        },
        {
          id: 11,
          price: "$5.74",
          title: "Appetizer - Spring Roll, Veg"
        },
        {
          id: 12,
          price: "$7.55",
          title: "Tomatoes Tear Drop"
        },
        {
          id: 13,
          price: "$2.01",
          title: "Chip - Potato Dill Pickle"
        },
        {
          id: 14,
          price: "$6.26",
          title: "Bar Energy Chocchip"
        },
        {
          id: 15,
          price: "$4.96",
          title: "Whmis - Spray Bottle Trigger"
        },
        {
          id: 16,
          price: "$4.14",
          title: "Soup Campbells Mexicali Tortilla"
        },
        {
          id: 17,
          price: "$9.77",
          title: "Ham - Proscuitto"
        },
        {
          id: 18,
          price: "$6.24",
          title: "Cherries - Maraschino,jar"
        },
        {
          id: 19,
          price: "$2.77",
          title: "Cheese - Manchego, Spanish"
        },
        {
          id: 20,
          price: "$0.40",
          title: "Marjoram - Fresh"
        },
        {
          id: 21,
          price: "$4.23",
          title: "Beef - Diced"
        },
        {
          id: 22,
          price: "$4.73",
          title: "Hummus - Spread"
        },
        {
          id: 23,
          price: "$3.76",
          title: "Sachet"
        },
        {
          id: 24,
          price: "$0.51",
          title: "Milk - 2% 250 Ml"
        },
        {
          id: 25,
          price: "$8.82",
          title: "Cookie Double Choco"
        }
      ]
    };
  }
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <Link to="/">Route 1</Link>
            <Link to="/route2">Route 2</Link>
            <Link to="/route3">Route 3</Link>
          </header>
          <Routes products={this.state.products} />
          {/* {routes} */}
        </div>
      </HashRouter>
    );
  }
}

export default App;
