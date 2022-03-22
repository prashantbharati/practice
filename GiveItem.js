const GiveItem = (props) => {
  return <section>it's working lol</section>;
};

const domContainer = document.querySelector("#injected-react-content");
ReactDOM.render(React.createElement(GiveItem), domContainer);
