import { useState, useEffect } from 'react';

import { AxiosData } from '@/types';

const useApi = <T>(apiCallFunction: T, params = {}, fetchOnMount = true, initialData: any = []): IReturn<T> => {
	const [res, setData] = useState(initialData);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [fetched, setFetched] = useState(false);

	const fetchUrl = async (par = null) => {
		const parameters = par || params;
		try {
			if (typeof apiCallFunction === 'function') {
				setLoading(true);
				const { data }: { data: AxiosData<T> } = await apiCallFunction(parameters);
				setData(data);
			}
		} catch (err) {
			setError(true);
		} finally {
			setLoading(false);
			setFetched(true);
		}
	};

	useEffect(() => {
		if (fetchOnMount) fetchUrl();
	}, []);

	return [res, loading, error, fetchUrl, fetched];
};

type IReturn<T> = [AxiosData<T>, boolean, boolean, (...args: any[]) => Promise<void>, boolean];

export default useApi;
