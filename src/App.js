// Docs: https://react-rainbow.io/#/Button

import "./App.css";
import {
  Button,
  VisualPicker,
  VisualPickerOption,
  VisualPickerOptionFooter,
} from "react-rainbow-components";
import "boxicons";
import { useState } from "react";

function App() {
  // for <VisualPicker>
  const [selected, setSelected] = useState(null);
  const handleOnChange = (selected) => {
    setSelected(selected);
    console.log(selected);
  };

  return (
    <div className="App">
      <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <Button
          variant="base"
          label="Button Base"
          className="rainbow-m-around-medium"
        />

        <Button variant="outline-brand">
          <box-icon name="cake"></box-icon>
          Cake icon to the left
        </Button>

        <Button variant="outline-brand">
          Cake icon to the right
          <box-icon name="cake"></box-icon>
        </Button>

        <Button variant="outline-brand" disabled>
          <box-icon name="cake"></box-icon>
          Disabled button example
        </Button>

        <Button
          variant="outline-brand"
          disabled
          style={{ backgroundColor: "blue", fontSize: "20px", color: "yellow" }}
        >
          <box-icon name="cake"></box-icon>
          Button with custom properties
        </Button>
      </div>

      <br />
      <br />
      <br />

      <VisualPicker
        onChange={handleOnChange}
        value={selected}
        multiple
        size="large"
      >
        <VisualPickerOption name="ghostPicker">
          <box-icon type="solid" name="ghost"></box-icon>
          <h4>Option 1</h4>
          <VisualPickerOptionFooter
            label="BOO!"
            description="ghosty ghost ghost"
          />
        </VisualPickerOption>

        <VisualPickerOption name="videoRecorderPicker">
          <box-icon type="solid" name="video-recording"></box-icon>
          <h4>Option 2</h4>
          <VisualPickerOptionFooter
            label="I'm recording you"
            description="You're on camera"
          />
        </VisualPickerOption>

        <VisualPickerOption name="cartPicker">
          <box-icon name="cart"></box-icon>
          <h4>Option 3</h4>
          <VisualPickerOptionFooter
            label="Add to cart"
            description="Your shopping cart"
          />
        </VisualPickerOption>
      </VisualPicker>
    </div>
  );
}

export default App;
