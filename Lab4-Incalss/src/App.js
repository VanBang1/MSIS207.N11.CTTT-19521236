
//import React from "react";
import "typeface-roboto";

//ex8
//import FormGroup from "@mui/material/FormGroup";
//import MyTextInput from "./MyTextInput";
//import MySelect from "./MySelect";
//ex9
import React, {useState} from "react";
import  Button  from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton, { iconButtonClasses } from "@mui/material/IconButton";
import AndroidIcon from "@mui/icons-material/Android";
//ex11 
//import {useState} from './ForExample0'
//import FormExamPle1 from "./ForExample"
//import ShowData from './ShowData'
//ex6
/*
import "typeface-roboto";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
*/
//ex1,2,3

//import * as ReactDOM from "react-dom";
//import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
//import MyComponent from "./MyComponent";
//ex4

//import {FadeLoader} from "react-spinners";
//import MyPage from "./MyPage";

/*function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() =>{
      resolve({ id:19521236, name:"Bang"});
    }, 1000);
  });
}
//ex1
*/
//const root = ReactDOM.createRoot(document.getElementById("root"));
//function App() {
/*root.render(
  <Router>
    <Routes>
      <Route path="/" element={<MyComponent />} />
    </Routes>
  </Router>
);
//ex2
const [MyComponent, setMyComponet] = React.useState(() =>() => null);
  React.useEffect(() => {
    import("./MyComponent").then((module)=>{
      setMyComponet(()=> module.default);
  });
},[]); 
  return <MyComponent />;
  
 const [id, setID] = React.useState("tai..");
 const [name, setName] = React.useState("tai..");
  React.useEffect(()=>{
    fetchUser().then((user)=>{
      setID(user.id);
      setName(user.name);
    });
  });
  return(
    <>
    <p>ID: {id}</p>
    <p>Name: {name}</p>
    </>
  );
 
 return(
  <React.Suspense fallback={<FadeLoader color={"lightblue"}size={150}/>}>
    <MyPage />
  </React.Suspense>
 );
};
 */
/*
const headFooterStyle = {
  padding:8,
  textAlign:"center",
};
const mainStyle = {
  padding:16,
  textAlign:"center"
}
const navStyle = {marginLeft: 5};

export default function App(){
  return(
    <div style={{flexGrow:1}}>
      <Grid container spacing={3}>
        <Paper style={headFooterStyle}>
          <Typography>Header</Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12}>
              <Typography style={navStyle}>Nav Item 1</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <Typography style={navStyle}>Nav Item 2</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography style={navStyle}>Nav Item 3</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography style={navStyle}>Nav Item 4</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper style={mainStyle}>
              <Typography>Main content 2</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={mainStyle}>
              <Typography>Main content 3</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={mainStyle}>
              <Typography>Main content 4</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper style={mainStyle}>
          <Typography>Footer</Typography>
        </Paper>
      </Grid>

    </div>
  )
  */
 //ex8
 /*
 export default function App(){
  return(
    <FormGroup style={{width:200, margin:10}}>
      <MyTextInput/>
      <MySelect/>
    </FormGroup>
  )
}
 */
//ex9 //ex10
const buttonStyle = {margin:10};
function toggleColor(setter, value){
  setter(value === "default"?"primary":"dafault");
}
export default function App(){
  const [contained, setContained]=useState("default");
  const [text, setText] = useState("default");
  const [outlined,setOutlined] = useState("default");
  const [icon, setIcon] = useState("default");

  return (
    <Grid container>
      <Grid
      item 
      componet={Button}
      variant="contained"
      style={buttonStyle}
      color={contained}
      onClick={()=> toggleColor(setContained,contained)}
      >
        Exit confirmation
      </Grid>
      <Grid
      item 
      componet={Button}
      style={buttonStyle}
      color={text}
      onClick={()=> toggleColor(setText,text)}
      >
        
      </Grid>
      <Grid
      item 
      componet={Button}
      variant="outlined"
      style={buttonStyle}
      color={outlined}
      onClick={()=> toggleColor(setOutlined,outlined)}
      >
        
      </Grid>
      <Grid
      item 
      componet={IconButton}
      style={buttonStyle}
      color={icon}
      onClick={()=> toggleColor(setIcon,iconButtonClasses)}
      >
        <AndroidIcon/>
      </Grid>
    </Grid>
  )
}