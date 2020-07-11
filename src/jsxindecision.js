
const app = {
    title: "Todo List",
    options: ["Take out trash", "Clean fridge"]
  };
  
  const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
      app.options.push(option);
      e.target.elements.option.value = '';
      renderApplication();
    }
  
  };
  
  const removeAll = () => {
    app.options = [];
    renderApplication();
  }
  
  const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
  };
  
  const renderApplication = () => {
    const template = (
      <div>
        <h1>{app.title}</h1>
        <p>{app.options.length > 0 ? "Here are your options" : "All done!"} </p>
        {
          app.options.map( (task) => {
            return <li key={task}>{task}</li>;
          })
        }
  
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Task</button>
        </form>
  
  
        <button onClick={makeDecision}>Pick a random task</button>
  
        <button onClick={removeAll}>Remove All</button>
      </div>
    );
    ReactDOM.render(template,document.getElementById('root'));
  };
  
  renderApplication();
  
  