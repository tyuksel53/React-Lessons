const appRoot = document.getElementById('app');

let isVisible = false;

const onToggleButtonClicked = (e) => {

    isVisible = !isVisible;
    
    renderPage();
}

const renderPage = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggleButtonClicked}>
                {isVisible ? 'Hide details' : 'Show Details'}
            </button>
            {
                isVisible && (
                    <div>
                        <p>Jesse wake up!</p>
                    </div>
                )
            }
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderPage();