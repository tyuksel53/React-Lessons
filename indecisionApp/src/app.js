console.log("hello world");

//JSX JavaScript XML

const appObject = {

    title : "Simply Title",
    subtitle : "yav sen kimsin",
    options : ['One', 'Two']

};

const template = (
    <div>
        <h2> {appObject.title}</h2>
        {appObject.subtitle && <p> {appObject.subtitle} </p> }
        <p>{appObject.options.length > 0 ? 'Here are your options' : 'No options'} </p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
        </ol>
    </div>
);

const user = {
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


const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);