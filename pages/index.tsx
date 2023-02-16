import useSWR from "swr";
import { useState } from "react";

const IndexPage = () => {
	const [state, setState] = useState<number>(1);

	const foobar = useSWR("/api/foo", {
		fetcher: fetch,
		revalidateOnFocus: false,
		onSuccess: () => console.log("foo succeeded")
	});
	const barfoo = useSWR("/api/bar", {
		fetcher: fetch,
		revalidateOnFocus: false,
		onSuccess: () => console.log("bar succeeded")
	});

	if (
		(foobar.data == null && foobar.isValidating) ||
		(barfoo.data == null && barfoo.isValidating)
	) {
		return (
			<div>
				loading
				<button onClick={() => setState(new Date().valueOf())}>
					perform state change which will rerender the thing
				</button>
			</div>
		);
	}

	return (
		<div>
			result shown
			<button onClick={() => setState(new Date().valueOf())}>
				perform state change which will rerender the thing
			</button>
		</div>
	);
};

export default IndexPage;
