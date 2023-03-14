import "./basic-render.scss";
function BasicRender(props:any) {
    const{handelHeadingChange,heading}=props;
  return (
    <div className="container">
        <h1>{heading}</h1>
        <h1>{handelHeadingChange("My React App-typeScript")}</h1>
    </div>
  );
}

export default BasicRender;
