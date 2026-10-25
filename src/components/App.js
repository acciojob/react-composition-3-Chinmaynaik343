
import React from "react";
import Tooltip from "./Tooltip";
import "./App.css";

function App() {
    return (
        <div>
            <h1>React Composition 3</h1>

            <Tooltip text="This is a paragraph tooltip">
                <p>Hover over this paragraph</p>
            </Tooltip>

            <Tooltip text="This is a heading tooltip">
                <h2>Hover over this heading</h2>
            </Tooltip>

            <Tooltip text="This is a button tooltip">
                <button>Hover over this button</button>
            </Tooltip>
        </div>
    );
}

export default App;
