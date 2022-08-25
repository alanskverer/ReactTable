import React, {useState} from 'react';
import {useAsyncDebounce} from 'react-table'

export const GlobalFilter: React.FC<{ filter: any, setFilter: any }> = ({filter, setFilter}) => {

    const [value, setValue] = useState(filter)

    const onChange = useAsyncDebounce((value) => {
        setFilter(value || '')
    }, 300)
    return (
        <span>
Search: {' '}
            <input value={value || ''}
                   onChange={(e) => {
                       const newValue = e.target.value;

                       setValue(newValue)
                       onChange(newValue)
                   }}
            />
    </span>
    );
}

