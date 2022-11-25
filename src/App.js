import './App.css';
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

import PATRICK from './PATRICK.png';
import STEFANIE from './STEFANIE.png';
import AARON from './AARON.png';
import ANSLEY from './ANSLEY.png';
import ABHIJITH from './ABHIJITH.png';

import frame1 from './1.png';
import frame2 from './2.png';
import frame3 from './3.png';
import frame4 from './4.png';
import frame5 from './5.png';

import graph1 from './Picture7.png';
import graph2 from './Picture8.png';
import graph3 from './Picture9.png';
import graph4 from './Picture10.png';
import graph5 from './Picture11.png';
import graph6 from './Picture12.png';
import graph7 from './Picture13.png';

import resi from './Residual.jpeg'








function PersonCard({name}) {

  if ({name}.name == "PATRICK") {
    return (
      <div>
        <img className="cardPhoto" src={PATRICK} />
        <h4 className='cardname'>{name}</h4>
        </div>
    
    );}

  if ({name}.name == "AARON") {
    return (
      <div>
        <img className="cardPhoto" src={AARON} />
        <h4 className='cardname'>{name}</h4>
        </div>
    
    );}

  if ({name}.name == "ANSLEY") {
    return (
      <div>
        <img className="cardPhoto" src={ANSLEY} />
        <h4 className='cardname'>{name}</h4>
        </div>
    
    );}

  if ({name}.name == "ABHIJITH") {
    return (
      <div>
        <img className="cardPhoto" src={ABHIJITH} />
        <h4 className='cardname'>{name}</h4>
        </div>
    
    );}

  if ({name}.name == "STEFANIE") {
    return (
      <div>
        <img className="cardPhoto" src={STEFANIE} />
        <h4 className='cardname'>{name}</h4>
        </div>
    
    );}



  }


  






function App() {

  const [scroll, setscroll] = useState(0);

  const[values,setValues] = useState({Field1 : null, Field2 :null,Field3 : null,Field4 : null,Field5 : null,Field6 : null,Field7:null});

  const[Submitted, setSubmitted] = useState(false);

  const[yValue, setyValue] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("YES" ) 


    setyValue(163.7024819 + (values.Field1)*0.121742035 + (values.Field2)*0.451251901 + (-12.2257722418332)*Math.log((values.Field3)*(values.Field6))    + (values.Field4)*(1.086169485) + (-23.67156309)*Math.log(values.Field5)  + (values.Field7)*(-0.00293848) )
    
    console.log(yValue)
    
    setSubmitted(true);
    }
   
  const handleField1 = (event) => {
    console.log("REG")
    setValues({...values, Field1: event.target.value})
    console.log(values.Field1)
  }

  const handleField2 = (event) => {
    setValues({...values, Field2: event.target.value})
  }

  const handleField3 = (event) => {
    setValues({...values, Field3: event.target.value})
  }

  const handleField4 = (event) => {
    setValues({...values, Field4: event.target.value})
  }

  const handleField5 = (event) => {
    setValues({...values, Field5: event.target.value})
  }

  const handleField6 = (event) => {
    setValues({...values, Field6: event.target.value})
  }

  const handleField7 = (event) => {
    setValues({...values, Field7: event.target.value})
  }


  const[Yvalue,setYvalue] = useState(null);


  

  


  window.addEventListener("scroll", function(event) {
    var scroll = this.scrollY


    if (scroll < 831) {
      document.documentElement.style.setProperty('--opacity1', 0 );
      document.documentElement.style.setProperty('--opacity2', 0 );
      document.documentElement.style.setProperty('--opacity3', 0 );
      document.documentElement.style.setProperty('--opacity4', 0 );
      document.documentElement.style.setProperty('--opacity5', 0 );
    }

    else if (scroll > 831 && scroll < 1240) {
   
      document.documentElement.style.setProperty('--opacity2', 0 );
      document.documentElement.style.setProperty('--opacity1', (((scroll - 831)/(1240-831) )* 1) );

    }

    else if (scroll > 1240 && scroll < 1654) {

      document.documentElement.style.setProperty('--opacity3', 0 );
      document.documentElement.style.setProperty('--opacity1', 1 );
      document.documentElement.style.setProperty('--opacity2', (((scroll - 1240)/(1649-1240) )* 1) );

    }

    else if (scroll > 1654 && scroll < 2070) {
      document.documentElement.style.setProperty('--opacity4', 0 );
      document.documentElement.style.setProperty('--opacity2', 1 );
      document.documentElement.style.setProperty('--opacity3', (((scroll - 1654)/(1649-1240) )* 1) );

    }

    else if (scroll > 2070 && scroll < 2515) {
      document.documentElement.style.setProperty('--opacity5', 0 );
      document.documentElement.style.setProperty('--opacity3', 1 );
      document.documentElement.style.setProperty('--opacity4', (((scroll - 2070)/(2515-2070) )* 1) );

    }

    else if (scroll > 2515 && scroll < 3000) {

      document.documentElement.style.setProperty('--opacity2', 1 );
      document.documentElement.style.setProperty('--opacity4', 1 );
      document.documentElement.style.setProperty('--opacity5', (((scroll - 2515)/(3000-2515) )* 1) );

    }

    else if (scroll > 3000 && scroll < 5000) {
      document.documentElement.style.setProperty('--opacity1', 1 );
      document.documentElement.style.setProperty('--opacity2', 1 );
      document.documentElement.style.setProperty('--opacity3', 1 );
      document.documentElement.style.setProperty('--opacity4', 1 );
      document.documentElement.style.setProperty('--opacity5', 1 );
    }
    
    else if (scroll > 5000 && scroll < 5485) {
      console.log(scroll)
      document.documentElement.style.setProperty('--opacity1', (((5485 - scroll)/(485) )* 1) );
      document.documentElement.style.setProperty('--opacity2', (((5485 - scroll)/(485) )* 1) );
      document.documentElement.style.setProperty('--opacity3', (((5485 - scroll)/(485) )* 1) );
      document.documentElement.style.setProperty('--opacity4', (((5485 - scroll)/(485) )* 1) );
      document.documentElement.style.setProperty('--opacity5', (((5485 - scroll )/(485) )* 1) );
      document.documentElement.style.setProperty('--opacityh3', (((5485 - scroll )/(485) )* 1) );


    }

    else if (scroll > 5485 && scroll < 6000) {
      document.documentElement.style.setProperty('--opacity1', 0 );
      document.documentElement.style.setProperty('--opacity2', 0 );
      document.documentElement.style.setProperty('--opacity3', 0 );
      document.documentElement.style.setProperty('--opacity4', 0 );
      document.documentElement.style.setProperty('--opacity5', 0 );
      document.documentElement.style.setProperty('--opacityh3', 0 );
      document.documentElement.style.setProperty('--opacityh4PS', 0 );
      document.documentElement.style.setProperty('--opacityh3PS', 0 );

    }

    else if (scroll > 6000 & scroll < 6700) {
      document.documentElement.style.setProperty('--opacityh4PS', (((scroll-6200)/(500) )* 1) );
      document.documentElement.style.setProperty('--opacityh3PS', (((scroll-6000)/(500) )* 1) );

      document.documentElement.style.setProperty('--toph4PS', (   (    ((scroll-6000)/(700)) * 5) + 10 ).toString()+"%" );

    }

    else if (scroll > 6700 & scroll < 7200) {
      document.documentElement.style.setProperty('--toph4PS', (   (    ((scroll-6700)/(500)) * 1.5) + 15 ).toString()+"%" );
    }

    else if (scroll > 7200 && scroll < 7700) {
      document.documentElement.style.setProperty('--toph4PS', (   (    ((scroll-7200)/(500)) * 1.5) + 16.5 ).toString()+"%" );
      document.documentElement.style.setProperty('--opacityh4PS', (((7700-scroll)/(500) )* 1) );
      document.documentElement.style.setProperty('--opacityh3PS', (((7700-scroll)/(500) )* 1) );
    }

    else if (scroll > 7700 && scroll < 8200) {
    
      document.documentElement.style.setProperty('--opacityh4PS', 0 );
      document.documentElement.style.setProperty('--opacityh3PS', 0 );
      document.documentElement.style.setProperty('--opacityh3v', 0 );
      document.documentElement.style.setProperty('--opacityvariables', 0 );
    }

    else if (scroll > 8200 && scroll < 8700) {

      document.documentElement.style.setProperty('--positionvar', (   (    ((scroll-8200)/(500)) * 5) + 32 ).toString()+"%" );
      document.documentElement.style.setProperty('--opacityh3v', (((scroll-8200)/(500) )* 1) );
      document.documentElement.style.setProperty('--opacityvariables', (((scroll-8200)/(500) )* 1) );

    }

    else if (scroll > 8700 && scroll < 9200) {

      document.documentElement.style.setProperty('--positionvar', (   (    ((scroll-8700)/(500)) * 1.5) + 37 ).toString()+"%" );


    }

    else if (scroll > 9200 && scroll < 9700) {

      document.documentElement.style.setProperty('--positionvar', (   (    ((scroll-9200)/(500)) * 5) + 38.5 ).toString()+"%" );
      document.documentElement.style.setProperty('--opacityh3v', (((9700-scroll)/(500) )* 1) );
      document.documentElement.style.setProperty('--opacityvariables', (((9700-scroll)/(500) )* 1) );
    }

    else if (scroll > 9700 && scroll <10200) {
      document.documentElement.style.setProperty('--opacityh3v', 0 );
      document.documentElement.style.setProperty('--opacityvariables', 0 );
    }

    else if (scroll > 10200 && scroll < 10700) {

      document.documentElement.style.setProperty('--positionvar', (   (((scroll-9200)/(500)) * 5) + 38.5 ).toString()+"%" );
      document.documentElement.style.setProperty('--opacityh3v', (((9700-scroll)/(500) )* 1) );
      document.documentElement.style.setProperty('--opacityvariables', (((9700-scroll)/(500) )* 1) );
      document.documentElement.style.setProperty('--opacityScatterPlot', 0 );

    }

    else if (scroll > 10700 && scroll <27200) {
      document.documentElement.style.setProperty('--opacityScatterPlot', ( ((scroll-10700)/(500) )* 1) );
      document.documentElement.style.setProperty('--left', (   (-1 * ((scroll-10700)/30) + (120) ).toString()+"%" ));
      document.documentElement.style.setProperty('--opacityvariables', 0 );
    

    }

    else if (scroll > 27200 && scroll <27700) {

      document.documentElement.style.setProperty('--opacityScatterPlot', ( ((27700 - scroll)/(500))* 1) );
    
      document.documentElement.style.setProperty('--opacityvariables', 0 );
      document.documentElement.style.setProperty('--resiopacity', 0 );
    

    }

    else if (scroll > 27700 && scroll < 28700) {
      document.documentElement.style.setProperty('--opacityScatterPlot', 0 ); 
      document.documentElement.style.setProperty('--opacityvariables', 0 );

      document.documentElement.style.setProperty('--resiopacity', (((scroll-27700)/(1000) )* 1) );
    }


    else if (scroll > 28700 && scroll < 29500) {
    
      document.documentElement.style.setProperty('--resiopacity', (((29500-scroll)/(800) )* 1) );
      document.documentElement.style.setProperty('--formopacity', 0 ); 

    

    }

    else if (scroll > 29500 ) {
      document.documentElement.style.setProperty('--resiopacity', (0) );

      document.documentElement.style.setProperty('--formopacity', (((scroll-29500)/(1000) )* 1) ); 

    }


   

    


  })



  return (
    <div className="App">
      <header className="App-header">

        <h1>GROUP 01</h1>
        <h2>2D DOCUMENTATION</h2>

        <table className="chars">
          <tr className="tr2">
            <td><PersonCard name="PATRICK" /></td>
            <td><PersonCard name="ANSLEY"></PersonCard></td>
            <td><PersonCard name="AARON"></PersonCard></td>
            <td><PersonCard name="ABHIJITH"></PersonCard></td>
            <td><PersonCard name="STEFANIE"></PersonCard></td>
          </tr>
        </table>

        

        <img className="Frame1" src={frame1}></img>
        <img className="Frame2" src={frame2}></img>
        <img className="Frame3" src={frame3}></img>
        <img className="Frame4" src={frame4}></img>
        <img className="Frame5" src={frame5}></img>

        <h3>THE PROCESS</h3>

        <h4 className = "P_Statement">How might we predict the food security of a country indicated by the prevalence of undernourishment through the consideration of that country’s wealth, food prices, social stability, general stress levels, education, asymmetry in food supply and the population density? </h4>
        <h3 className = "P_Statement">THE PROBLEM STATEMENT</h3>


        
        <h3 className = "H3_Variables">THE VARIABLES</h3>


        <div className = "VariablesDIV">
        <table className = "Variables">
          <tr>
            <td className = "TData">GDP PER CAPITA</td>
            <td className = "TData">FOOD PRICE INDEX</td>
            <td className = "TData">CRIME INDEX</td>
          </tr>
        </table>

        <table className = "Variables2">
    

          <tr>
            <td className = "TData">FOOD WASTE LEVELS</td>
            <td className = "TData">POPULATION SIZE</td>
            <td className = "TData">POPULATION DENSITY</td>
            
            <td className = "TData" >LITERACY RATE</td>
          </tr>
 
        </table>

        <table className = "Variables3">
          <tr>
          <td className = "TData" >AVERAGE WORK HOURS  /  WEEK  /  EMPLOYED PERSON</td>
          </tr>
        </table>
        </div>

        <div className = "Slideshow">
          <table>
            <tr>
              <td>
                <img className = "Graph" src = {graph1}></img>
              </td>
              <td>
                <img className = "Graph" src = {graph2}></img>
              </td>
              <td>
                <img className = "Graph" src = {graph3}></img>
              </td>
              <td>
                <img className = "Graph" src = {graph4}></img>
              </td>
              <td>
                <img className = "Graph" src = {graph5}></img>
              </td>
              <td>
                <img className = "Graph" src = {graph6}></img>
              </td>
              <td>
                <img className = "Graph" src = {graph7}></img>
              </td>
            </tr>
          </table>
        </div>

        <h3 className = "H3_ScatterPlots">INITIAL SCATTER PLOTS</h3>




        <h3 className = "H3_Resi">FINAL RESIDUAL PLOT</h3>

        <h3 className = "Model">THE MODEL</h3>





        <img className = "resi" src = {resi}></img>




        <h3 className="Equation">Prevelance of undernourishment = <br/><br/> b_0 + b_1 * Food Prices + b_2 * Crime Index + b_3 * LOG(Literacy Rate * Population Size) <br/>+ b_4 * Average Work Hours Per week 
        Per employed person + b_5 * LOG(GDP(PPP) per capita(Int. $)) <br/>+ b_6 * Average Monthly Net Salary</h3>


        <div className="Form">
        <form onSubmit = {handleSubmit}>
        <input className = "blank" type="text" placeholder = "Food Prices (x_1)" onChange={handleField1} value={values.Field1}  /><br></br>
        <input className = "blank" type="text" placeholder = "Crime Index (x_2)" onChange={handleField2} value={values.Field2}  /><br></br>
        <input className = "blank" type="text" placeholder = "Literacy Rates (x_3)" onChange={handleField3} value={values.Field3}  /><br></br>
        <input className = "blank" type="text" placeholder = "Average Work Hours Per week Per employed person (x_6)" onChange={handleField4} value={values.Field4}  /><br></br>
        <input className = "blank" type="text" placeholder = "GDP(PPP) per capita(Int. $) (x_7)" onChange={handleField5} value={values.Field5}  /><br></br>
        <input className = "blank" type="text" placeholder = "Population Size (x_8)" onChange={handleField6} value={values.Field6}  /><br></br>
        <input className = "blank" type="text" placeholder = "Average Monthly Net Salary (x_9)" onChange={handleField7} value={values.Field7}  /><br></br>
      
        { Submitted ? <p class="modelY">{yValue}</p>:null}

        <p></p>
  

        <button className = "SB" type="submit">Find Y ( Prevalence of undernourishment )</button>

        </form>

        </div>

        

        <p className = "Footer">Developed by Group 01 SC03</p>


        
     
      </header>
    </div>
  );
}

export default App;
