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

const removeAllFunc = () => {
    appObject.options = [];
    renderPage();
}

const numbers = [55, 101, 1000];

const appRoot = document.getElementById('app');

const renderPage = () => {
    const template = (
        <div>
            <h2> {appObject.title}</h2>
            {appObject.subtitle && <p> {appObject.subtitle} </p> }
            <p>{appObject.options.length > 0 ? 'Here are your options' : 'No options'} </p>
            <p>{appObject.options.length}</p>
            <button onClick={removeAllFunc}>Remove All</button>
            {
                //[99, 98, 97, 'Mike', null, undefined, true]
                //[<p key="1" >a</p>, <p key="2" >b</p>, <p key="3" >c</p>]
                /*numbers.map((number) => {
                    return <p key={number}>Number is: {number}</p>
                })*/
            }
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