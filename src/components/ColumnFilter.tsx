import React from 'react';

export const ColumnFilter:React.FC<{column:any}> = ({column}) => {

    const {filterValue,setFilter} = column


    return (
        <span>
Search: {' '}
            <input value={filterValue || ''}
                   onChange={(e) => setFilter(e.target.value)}
            />
            <button onClick={()=> setFilter('a')}>Only text with the letter "A"</button>
    </span>
    );
}

