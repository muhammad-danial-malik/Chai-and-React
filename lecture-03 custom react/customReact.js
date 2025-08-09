const customRender = (reactElement, container) => {
  const domElement = document.createElement(reactElement.type);

  domElement.textContent = reactElement.children;

  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

  container.appendChild(domElement);
  console.log("customRender called", domElement);
};

const reactElement = {
  type: "a",
  props: {
    href: "https://www.youtube.com/@chaiaurcode",
    target: "_blank",
  },
  children: "click here to visit Chai aur Code",
};

const maincontainer = document.getElementById("root");

customRender(reactElement, maincontainer);
