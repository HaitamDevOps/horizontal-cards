import HorizontalCards from 'horizontal-cards';
function App() {
  const inputList = [
    {title: "Item1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."},
    {title: "Item2", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."},
    {title: "Item3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."},
    {title: "Item4", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."}
  ];
  return (
    <div className="App">
      <center>
        <h1 style={{borderBottom:"1px solid", paddingBottom:"2px", width:"260px"}}>Horizontal Cards</h1>
        <em style={{}}>Demo page</em>
      </center>
      <HorizontalCards 
        data = {inputList}
        bgColor="#ad611a"
        lineColor="#38fcd2"
        titleColor="#d5ebeb"
        descriptionColor="white"
      />
      <div className='info-wrapper'>
        <div className='info'>
          <p>
            <span>&#128204;</span>
            <em>
            This page is a demo for the Horizontal Cards package. It is a NPM package that display 
            items from a list in the form of infinitely scrolled cards. You can visit the package 
            page <a href="https://www.npmjs.com/package/horizontal-cards" target="_blank"
            rel="noreferrer">here</a> to learn more about it.</em>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
