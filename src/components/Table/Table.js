import './Table.scss';
import React from 'react';

function Table({
  list,
  head,
  clickOnRow,
  clickOnHeadItem
}) {
  return (
    <div className="Table">
      <table className="Table__el">
        <thead>
          <tr className="Table__el_row">
            {
              head.map((item, index) => (
                <th
                  onClick={() => { clickOnHeadItem(`${item}`); }}
                  className="Table__el_head"
                  key={index}
                >
                  {item}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            list.map((item, index) => (
              <tr className="Table__el_row" key={index} onClick={() => clickOnRow(item)}>
                <td className="Table__el_item">{item?.id}</td>
                <td className="Table__el_item">{item?.firstName}</td>
                <td className="Table__el_item">{item?.lastName}</td>
                <td className="Table__el_item">{item?.phone}</td>
                <td className="Table__el_item">{item?.email}</td>
                <td className="Table__el_item">{item?.description}</td>
                <td className="Table__el_item">
                  {`${item?.address?.city}, ${item?.address?.state}, ${item?.address?.streetAddress} ${item?.address?.zip}`}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
