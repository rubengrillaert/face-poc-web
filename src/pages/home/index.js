import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { Camera } from "./components/camera/index";
import { Root, Preview, Footer, GlobalStyle } from "./styles";

function Home() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cardImage, setCardImage] = useState();

  return (
    <Fragment>
      <Root>
        {isCameraOpen && (
          <Camera
            onCapture={(blob) => setCardImage(blob)}
            onClear={() => setCardImage(undefined)}
          />
        )}

        {cardImage && (
          <div>
            <h2>Preview</h2>
            <Preview src={cardImage && URL.createObjectURL(cardImage)} />
          </div>
        )}

        <Footer>
          <button onClick={() => setIsCameraOpen(true)}>Open Camera</button>
          <button
            onClick={() => {
              setIsCameraOpen(false);
              setCardImage(undefined);
            }}
          >
            Close Camera
          </button>
        </Footer>
      </Root>
      <GlobalStyle />
    </Fragment>
  );
}

export default Home;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
