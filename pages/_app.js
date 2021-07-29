import store from "../redux/store";
import { Provider } from "react-redux";
import "../styles/custom.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
