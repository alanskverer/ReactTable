import React, {useMemo} from 'react';
import {useTable, useGlobalFilter, useFilters, Column} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './columns'
import './table.css'
import {GlobalFilter} from "./GlobalFilter";
import {ColumnFilter} from "./ColumnFilter";


export const FilteringTable = () => {

    const columns = useMemo(()=> COLUMNS,[])
    const data = useMemo(()=> MOCK_DATA,[])

    //Specifing default column for every column
    const defaultColumn:Partial<Column> = useMemo(()=> {
        return {
            Filter:ColumnFilter
        }
    },[])

    const tableInstance = useTable({

        columns,
        data,
        defaultColumn
    },useFilters,useGlobalFilter)


    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow, state,setGlobalFilter} = tableInstance;

    const {globalFilter} = state

    return (
        <div>

            <button onClick={()=> setGlobalFilter('s')}> filter me</button>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                                {column.render("Header")}
                                <div>{column.canFilter? column.render('Filter'):null}</div>
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

