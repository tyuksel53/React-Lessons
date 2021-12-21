const addOptionFunc = (e) => {
    e.preventDefault();
    console.log("Click fired!");
    const val = e.target.elements.optionInput.value;
    if(val){
        appObject.options.push(val);
        renderPage();
    }
}

const appObject = {

    title : "Simply Title",
    subtitle : "yav sen kimsin",
    options : []

};

const onMakeDesicion = () => {
    const length = appObject.options.length;

    if(length == 0){
        return;
    }

    const variable = Math.floor(Math.random() * appObject.options.length);
    const option = appObject.options[variable];

    alert(option);
}

const removeAllFunc = () => {
    appObject.options = [];
    renderPage();
}

const appRoot = document.getElementById('app');

const renderPage = () => {
    const template = (
        <div>
            <h2> {appObject.title}</h2>
            {appObject.subtitle && <p> {appObject.subtitle} </p> }
            <p>{appObject.options.length > 0 ? 'Here are your options' : 'No options'} </p>
            <button  disabled={appObject.options.length == 0} onClick={onMakeDesicion}>What shuld i do?</button>
            <button onClick={removeAllFunc}>Remove All</button>
            <ol>
                {
                    appObject.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={addOptionFunc}>
                <input name="optionInput"></input>
                <button>Add option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

renderPage();