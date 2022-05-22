import styles from "./button.scss";
import "./button.scss";
import React, { useState, useRef } from "react";
import { Mentions, Popover, Button } from "antd";
import debounce from "lodash/debounce";
import CSSModules from "react-css-modules";

const { Option } = Mentions;
const AsyncMention = () => {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef();

  const handleVisibleChange = (visible) => {
    setVisible(visible);
  };

  const Men = () => {
    const [users, setUsers] = useState([]);
    const [loading, setloading] = useState(false);
    const [search, setsearch] = useState("");
    const boxRef = useRef();
    const onSearch = (search) => {
      debugger;
      setUsers([]);
      setloading(!!search);
      setsearch(setsearch);
      // setState({ search, loading: !!search, users: [] });
      console.log("Search:", search);
      loadGithubUsers(search);
    };

    const loadGithubUsers = (key) =>
      debounce(() => {
        if (!key) {
          setUsers([]);
          return;
        }

        fetch(`https://api.github.com/search/users?q=${key}`)
          .then((res) => res.json())
          .then(({ items = [] }) => {
            // const { search } = state;
            if (search !== key) return;

            setUsers(items.slice(0, 10));
            setloading(false);
          });
      }, 800)();
    return (
      <div className="box">
        <div className="box-inner" ref={boxRef}>
          <Mentions
            autoSize
            style={{ height: 35, width: "280px" }}
            loading={loading}
            onSearch={onSearch}
            getPopupContainer={() => boxRef.current}
          >
            {users.map(({ login, avatar_url: avatar }, index) => (
              <Option key={index} value={login}>
                <img src={avatar} alt={login} />
                <span>{login}</span>
              </Option>
            ))}
          </Mentions>
        </div>
      </div>
    );
  };
  return (
    <div className="popover-wrapper">
      <Popover
        content={<Men />}
        trigger="click"
        visible={visible}
        onVisibleChange={handleVisibleChange}
        getPopupContainer={() => btnRef.current}
      >
        <Button ref={btnRef} type="primary">
          Click me
        </Button>
      </Popover>
    </div>
  );
};
// export default CSSModules(AsyncMention, styles, {
//   allowMultiple: true,
// });

export default AsyncMention;
