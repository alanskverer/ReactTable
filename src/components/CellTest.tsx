import React from 'react';

export const CellTest = (props:any) => {

  // console.log({props})
  console.log(props?.row.original)
  // console.log(props.original.id)
  return (
    <div>{props?.row.original.date_of_birth}</div>
  );
}

