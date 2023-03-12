import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setTolls, deleteToll, updateToll, addToll } from '../features/toll/slice';
import api from '../app/api';

export default () => {
    const dispatch = useDispatch();
    const [tollLoading, setTollLoading] = useState();

    const fetchTolls = async (query) => {
        setTollLoading(true);
        try {
            const queries = Object.keys(query).map(item => `${item}=${query[item]}&`);
            const response = await api.get(`/tolls?${queries}`);
            dispatch(setTolls(response.data))
            setTollLoading(false);
        } catch (err) {
            const message = err.response ? err.response.data.message : err;
            setTollLoading(false);
            alert(message);
        }
    }


    return {
        tollLoading,
        fetchTolls
    }
}