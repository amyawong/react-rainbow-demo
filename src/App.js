// Docs: https://react-rainbow.io/#/Button
import "./App.css";
import { Button } from "react-rainbow-components";
import "boxicons";

function App() {
  return (
    <div className="App">
      <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <Button
          variant="base"
          label="Button Base"
          className="rainbow-m-around-medium"
        />

        <Button variant='outline-brand'>
          <box-icon name='cake'></box-icon>
          Cake icon to the left
        </Button>

        <Button variant='outline-brand'>
          Cake icon to the right
          <box-icon name='cake'></box-icon>
        </Button>

        <Button variant='outline-brand' disabled>
          <box-icon name='cake'></box-icon>
          Disabled button example
        </Button>

        <Button variant='outline-brand' disabled style={{backgroundColor: 'blue', fontSize: '20px', color: 'yellow'}}>
          <box-icon name='cake'></box-icon>
          Button with custom properties
        </Button>
        
      </div>
    </div>
  );
}

export default App;
