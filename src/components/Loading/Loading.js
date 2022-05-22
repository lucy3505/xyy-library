import React from "react";
import styles from "./loading.less";
import CSSModules from "react-css-modules";

const Loading = (props) => {

    return(<div>
        <div styleName="weui-mask_transparent"></div>
        <div styleName="weui-toast">
            <i styleName="weui-loading weui-icon_toast"></i>
            <p styleName="weui-toast__content">数据加载中</p>
        </div>
    </div>);

};
export default CSSModules(Loading, styles, {
    allowMultiple: true
});
