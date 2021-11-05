import React from "react";

const Page: React.FC<{}> = ({ children }) => {
	return (
		<>
			<h2>I am the page component</h2>
			{children}
		</>
	);
};

export default Page;
