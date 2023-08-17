// # Chapter 03 - Laying the Foundation
// Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

const header = React.createElement("div",{className:"title",key:"title"},[
    React.createElement("h1",{key:"h1"},"this is H1 tag"),
    React.createElement("h2",{key:"h2"},"this is h2 tag"),
    React.createElement("h3",{key:"h3"},"this is h3 tag")
  ])
  
  // Q: Create the same element using JSX
  
  const header1 = (
    <div className="title" key="title">
        <h1 key="h1">this is h1 tag</h1>
        <h2 key="h2">This is h2 tag</h2>
        <h3 key="h3">This is h3 tag</h3>
    </div>
  )
  
  
  // Q: Create a functional component of the same with JSX
  
  const header2 = ()=>{
    return(
    <div className="title" key="title">
    <h1 key="h1">this is h1 tag</h1>
    <h2 key="h2">This is h2 tag</h2>
    <h3 key="h3">This is h3 tag</h3>
  </div>)
    
  }
  
  // Q: Pass attribute into the tag in JSX
  
  const header3 = ()=>{
    return(
    <div className="title" key="title">
    <h1 style={{color:"red"}} key="h1">this is h1 tag</h1>
    <h2 style={{color:"blue"}} key="h2">This is h2 tag</h2>
    <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
  </div>)
    
  }
  
  // Composition of Component (Add a component inside another)
  
  const AnotherComponent = ()=>{
    return <h2> This is another component</h2>
  }
  
  const header4 = ()=>{
    return(
    <div className="title" key="title">
    <h1 style={{color:"red"}} key="h1">this is h1 tag</h1>
    <h2 style={{color:"blue"}} key="h2">This is h2 tag</h2>
    <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
    <AnotherComponent/>
  </div>)
    
  }
  
  // `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.
  
  const element = (<h1>This is react element</h1>)
  
  const TitleElement = () =>{
  return(
    <h2 style={{color:red}}>This is element</h2>
  )
  }
  
  const header5 = ()=>{
    return(
    <div className="title" key="title">
    {element}
    <h1 style={{color:"red"}} key="h1">this is h1 tag</h1>
    <TitleElement/>
    <h2 style={{color:"blue"}} key="h2">This is h2 tag</h2>
    <TitleElement></TitleElement>
    <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
    <AnotherComponent/>
  </div>)
    
  }
  
  
  /*
  Q: Create a Header Component from scratch using Functional Component with JSX
  - Add a Logo on Left
  - Add a search bar in middle
  - Add User icon on right
  - Add CSS to make it look nice
  */
  
  
  const Header6 = ()=>{
    return(
        <>
        <header className="header">
        <div className="left">
            <img src="https://img.freepik.com/free-vector/gradient-culture-logo-template_23-2149840309.jpg?w=360&t=st=1686401002~exp=1686401602~hmac=de2971901f2cf08dce97eebd89312e4f714ad8efef50cc46c9783259675eed83" alt="logo"/>
  
        </div>
  
        <div className="middle">
            <input type="text" placeholder="search anything"/>
        </div>
  
        <div className="right">
            <img src="https://img.icons8.com/?size=512&id=23264&format=png" alt="user"/>
        </div>
        </header>
        </>
    )
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Header6 />);
