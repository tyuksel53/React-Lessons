const appRoot = document.getElementById('app');

const appObject = {

    title : "Simply Title",
    subtitle : "yav sen kimsin",
    options : []

};

const onSubmitForm = (e) => {
   e.preventDefault();

   const value = e.target.elements.option.value;

   if(value){
       appObject.options.push(value);
       e.target.elements.option.value = "";
       renderReactApp();
   }

   console.log("Submit fired!")
}

const removeAll = () => {
    appObject.options = [];
    renderReactApp();
}

const renderReactApp = () => {
    const template = (
        <div>
            <h2> {appObject.title}</h2>
            {appObject.subtitle && <p> {appObject.subtitle} </p> }
            <p>{appObject.options.length > 0 ? 'Here are your options' : 'No options'} </p>
            <p>{appObject.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
                <li>Item Three</li>
            </ol>
            <form onSubmit={onSubmitForm}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderReactApp();

