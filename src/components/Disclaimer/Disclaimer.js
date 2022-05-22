import React from "react";
import ReactDOM from "react-dom";
import styles from "./disclaimer.scss";
import CSSModules from "react-css-modules";
// import closeIcon from "@/assets/images/close-icon.png";

const Disclaimer = (props) => {
  const { isShowDisclaimer } = props;
  const handleClose = () => {
    ReactDOM.render(<div />, document.getElementById("mask"));
  };

  return (
    <div styleName="disclaimer-wrap">
      <div styleName="content">
        <div styleName="icon-wrap" onClick={handleClose}>
          <div styelName="icon">
            {/* <img src={closeIcon} alt="close" /> */}
          </div>
        </div>
        <div styleName="title">免责声明</div>
        <div styleName="main">免责声明免责声明免责声明免责声明</div>
      </div>
    </div>
  );
};

export default CSSModules(Disclaimer, styles, {
  allowMultiple: true,
});
