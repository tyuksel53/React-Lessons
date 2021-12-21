const appRoot = document.getElementById('app');

let visibility = false;

const onToggleButtonClicked = (e) => {

    const detailsVisibility = document.getElementById('details').style.visibility;

    console.log(detailsVisibility);

    if(detailsVisibility == 'hidden'){
        document.getElementById('details').style.visibility = "visible";
    }else {
        document.getElementById('details').style.visibility = "hidden";
    }
    //renderPage();
}

let toggleVisibility = 'hidden';

const renderPage = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggleButtonClicked}>Show Details</button>
            <p id="details" style={{visibility: 'hidden'}}>Jesse oppen the damn door!</p>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

renderPage();

/* V2

const appRoot = document.getElementById('app');

let isVisible = false;

const onToggleButtonClicked = (e) => {

    isVisible = !isVisible;
    
    renderPage();
}

let toggleVisibility = 'hidden';

const renderPage = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggleButtonClicked}>
                {isVisible ? 'Hide details' : 'Show Details'}
            </button>
            {
                isVisible ? <p>Jesse oppen the damn door!</p> : undefined
            }
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderPage();
*/