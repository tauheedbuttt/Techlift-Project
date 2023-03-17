import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setTolls, deleteToll, updateToll, addToll } from '../features/toll/slice';
import api from '../app/api';

export default () => {
    const dispatch = useDispatch();
    const [tollLoading, setTollLoading] = useState();
    const [tollAddLoading, setTollAddLoading] = useState();

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

    const onDeleteToll = async (toll) => {
        try {
            await api.delete(`/tolls/${toll._id}`);
            dispatch(deleteToll(toll))
        } catch (err) {
            const message = err.response ? err.response.data.message : err;
            alert(message);
        }
    }

    const onNewToll = async (data) => {
        setTollAddLoading(true);
        try {
            const response = await api.post(`/entry`, { ...data, day: data.day?.getTime() });
            dispatch(addToll(response.data))
            setTollAddLoading(false);
        } catch (err) {
            const message = err.response ? err.response.data.message : err;
            setTollAddLoading(false);
            alert(message);
        }
    }

    const onExitToll = async (data) => {
        setTollAddLoading(true);
        try {
            const response = await api.put(`/exit/${data._id}`, data);
            dispatch(updateToll(response.data))
            setTollAddLoading(false);
        } catch (err) {
            const message = err.response ? err.response.data.message : err;
            setTollAddLoading(false);
            alert(message);
        }
    }


    return {
        tollAddLoading,
        tollLoading,
        fetchTolls,
        onDeleteToll,
        onNewToll,
        onExitToll
    }
}