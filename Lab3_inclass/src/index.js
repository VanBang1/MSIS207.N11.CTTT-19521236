import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import MySection from "./Mysection"
import Mybutton from './MyButton';
import MyComponent from './MyComponent';
import MyComponent2 from './Mycomponent2';

import MyButton1 from './Mybutton1';
import Mylist from './MyList';
import MyBotton2 from './Mybutton2';
import App from './App';
import MyInput from './MyInput';

const array=["first","second","third"];
const object={
  first: 1,
  second: 2,
  third: 3,
}
const root = ReactDOM.createRoot(document.getElementById('root'));
/*
root.render(
  <p>
      hello, <strong> JSK</strong>
  </p>
)
root.render(
        <div>
            <button />
             <code />
             <input />
            <label />
             <p />
             <pre />
             <select />
             <table />
             <ul />
        </div>
)

root.render(
    <section>
      <header>
        <h1>Header</h1>
        </header>  
        <nav>
          <a href='item'>Nav Item</a>
        </nav>
        <main>
          <p> the main content ...</p>
        </main>
        <footer>
          <small>&copy; 2021</small>
        </footer>
    </section>
)
/*
root.render(
  <MySection>
    <Mybutton>My Button Text</Mybutton>
  </MySection>
)

/*
root.render(
  <section>
    <h1>Array</h1>
    <ul>
      {array.map((i) =>(
        <li key={i}>{i}</li>
      ))}
    </ul>

    <h1>Object</h1>
    <ul>
      {Object.keys(object).map((i) => (
        <li key={i}>
          <strong>{i}: </strong>
          {object[i]}
        </li>
      ))}
    </ul>
  </section>
)

root.render(<MyComponent />)

root.render(<MyComponent2 />)



/*
const appState ={
  text: "My Button",
  disabled: true,
  items: ["First","Second","Third"],
}
function render( props){
  root.render(
    <main>
      <MyButton1 text={props.text} disabled={props.disabled} />
      <Mylist items={props.items}  />
    </main>
  )

}


render(appState);
setTimeout(() =>{
  appState.disabled=false;
  appState.items.push("Fourth");

  render(appState);
}, 1000);



function render({ second }){
  root.render(
   <main>
    <MyBotton2/>
    <MyBotton2 text={second.text} disabled={second.disabled} />
   </main>
  );
}
render({
  second:{
    text: "Second Button",
    disabled: true,
  }
});
*/
//Ex2
/*
const root1 = ReactDOM.createRoot(document.getElementById('root'));

root1.render(<App/>);

//Ex3
/*
root.render(  <main>
  <MyInput/>
 </main>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
root.render(  <main>
  <MyInput/>
 </main>
);

reportWebVitals();
