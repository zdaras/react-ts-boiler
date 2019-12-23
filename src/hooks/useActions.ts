import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

const useActions = <T>(actions: T, deps: [] = []): typeof actions => {
	const dispatch = useDispatch();
	return useMemo(() => {
		if (Array.isArray(actions)) {
			return actions.map(a => bindActionCreators(a, dispatch));
		}
		return bindActionCreators<any, any>(actions, dispatch);
	}, [dispatch, ...deps]);
};

export default useActions;
