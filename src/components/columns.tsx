import React from "react";
import {Column} from "react-table";
import {CellTest} from "./CellTest";
import {ColumnFilter} from "./ColumnFilter";

import {format} from 'date-fns'


export const COLUMNS: Column[] = [

    {
        Header: 'Id',
        accessor: 'id', // accessor is the "key" in the data
        disableFilters: true
    },

    {
        Header: 'First Name',
        accessor: 'first_name',
    },

    {
        Header: 'Last Name',
        accessor: 'last_name',
    },

    {
        Header: 'Date of Birth',
        accessor: 'date_of_birth',
        Cell: ({value}) => {
            return <div>{format(new Date(value), 'dd/MM/yyyy')}</div>
        }
        // Cell: (props) => {
        //     return (
        //    <CellTest {...props}/>
        // );
        // },


    },

]

//Used this on Elbit
export type BaseTableColumn = Column & {
    accessor?: string;
    columns?: BaseTableColumn[];
    // cellProps?: BaseTableCellProps | DateCellProps;
    fixedColumn?: boolean;
};

