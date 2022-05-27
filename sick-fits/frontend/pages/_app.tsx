import Page from "../components/Page";
import { NextPage } from "next";
import NProgress from "nprogress";
import Router from "next/router";
import "../components/styles/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp: React.FC<{ Component: NextPage; pageProps: any }> = ({
	Component,
	pageProps
}) => {
	return (
		<Page>
			<Component {...pageProps} />
		</Page>
	);
};

export default MyApp;
