console.log("hello world");

//JSX JavaScript XML

var appObject = {

    title : "Simply Title",
    desc : "yav sen kimsin"

};

var template = (
    <div>
        <h2> {appObject.title}</h2>
        <p> {appObject.desc} </p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
        </ol>
    </div>
);

var user = {
    name : 'Regnar',
    age : 12,
    userLocation : 'Kattegat'
};

var userName = 'Ragnar HasanKeyf F.';
var userAge = 13;
var userLocation = 'Kattegat';

var template2 = (
    <div>
        <h1>{userName.toUpperCase() + '!'}</h1>
        <p>From: {userLocation.toLowerCase()}</p>
        <p>Age: {user.age * 12} </p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);