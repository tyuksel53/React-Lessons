
let count = 0;

const buttonID = "my-mundi1";

const buttonMinus = "minus";

const buttonResest = "reset";

const myAddFunction = () => {
    count++;
    console.log("click fired", count);
    renderReactApp();
};

const myMinusFunciton = () => {
    console.log("minus log");
    count--;
    renderReactApp();
}

const resetFunciton = () => {
    console.log("reset log");
    count=0;
    renderReactApp();
}

const appRoot = document.getElementById('app');

const renderReactApp = () => {
    const templateTwo = (
        <div>
            <h1>Count {count} </h1>
            <button id={buttonID} onClick={myAddFunction} className="button">+1</button>
            <button id={buttonMinus} onClick={myMinusFunciton} className="button">-1</button>
            <button id={buttonResest} onClick={resetFunciton} className="button">Reset</button>
        </div>
    );
    
    ReactDOM.render(templateTwo, appRoot);
}

renderReactApp();