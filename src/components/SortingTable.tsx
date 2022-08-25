import React, {useMemo} from 'react';
import {useTable, useSortBy} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './columns'
import './table.css'


export const SortingTable = () => {

    const columns = useMemo(()=> COLUMNS,[])
    const data = useMemo(()=> MOCK_DATA,[])

    const tableInstance = useTable({
        columns,
        data
    }, useSortBy)


    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = tableInstance

    return (
        <div>

            <table {...getTableProps()}>
                <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render("Header")}
                                <span>
                                    {column.isSorted? (column.isSortedDesc? 'down': 'up'):''}
                                </span>
                                {/* Render the columns filter UI */}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                );
                            })}
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

