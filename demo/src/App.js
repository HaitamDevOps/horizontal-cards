import HorizontalCards from 'horizontal-cards';
function App() {
  return (
    <div className="App">
      <HorizontalCards 
        data = {[
          {title: "Item1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."},
          {title: "Item2", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."},
          {title: "Item3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."},
          {title: "Item4", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."}
        ]}
        bgColor="#333c4a"
        color1="white"
        color2="white"
        color3="gray"
      />
    </div>
  );
}

export default App;
