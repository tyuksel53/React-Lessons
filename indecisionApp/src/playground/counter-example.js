/*const user = {
    name : 'Regnar',
    age : 19,
    location : 'Rize'
};

const userName = 'Ragnar HasanKeyf.';
const userAge = 13;
const userLocation = 'Kattegat';

const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        { (user.age && user.age >= 18)  &&  <p> Age: {user.age * 12} </p>}
        {getLocation(user.location)}
    </div>
);

function getLocation(location) {
    if(location){
        return <p> Location: {location} </p>;
    } else {
        return undefined;
    }
}

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

renderReactApp(); */