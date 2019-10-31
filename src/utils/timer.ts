export const timer = (callback: () => any, countdown: number) => {
	let rem = countdown;
	let timerId = 0;
	let start = 0;

	const cancel = (withCallback = false) => {
		clearTimeout(timerId);
		if (withCallback) callback();
	};

	const pause = () => {
		clearTimeout(timerId);
		rem -= Date.now() - start;
	};

	const resume = () => {
		start = Date.now();
		clearTimeout(timerId);
		timerId = setTimeout(callback, rem);
	};

	const remaining = () => rem;

	resume();

	return { cancel, pause, resume, remaining };
};

export default timer;
