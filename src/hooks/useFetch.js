import { wait } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react';

export default function useFetch(url) {

    const [data, setData] = useState({data: null, loading: true});

    const getFetch = async () => {
        let res = await fetch(url);
        res = await res.json();
        setData({data: res, loading: false});
    }

    useEffect( () => {
        getFetch();
    }, [url] );

    return data;
}
