import { createStateManager } from "react-consumer";

const initStore = {
  info: {
    params: {
      dark: true,
      info: "",
      title: "",
      footer: "",
      src: "",
      text: ""
    }
  }
};

const { Consumer, store } = createStateManager(initStore);

export { Consumer, store };
