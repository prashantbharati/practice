const GiveItem = (props) => {
  return <section>Give Item</section>;
};

const domContainer = document.querySelector("#injected-react-content");
ReactDOM.render(React.createElement(GiveItem), domContainer);
