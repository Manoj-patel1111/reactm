const element = React.createElement("h1",{id :"first",className:"manoj",style:{fontSize:"30px",backgroundColor:"red"}}, "hello coder army");
const element1 = React.createElement("h1",{id :"first",className:"manoj",style:{fontSize:"30px",backgroundColor:"red"}}, "appp kasie ho");
const div1 = React.createElement('div',{},[element,element1]);
root = ReactDOM.createRoot(document.getElementById('root'));

root.render(div1);
