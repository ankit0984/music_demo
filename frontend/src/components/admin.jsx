import React from 'react';
import './admin.css'
const CustomerOrdersTable = () => {
  return (
    <main className="table" id="customers_table">
      <section className="table__header">
        <h1>Customer's Orders</h1>
        <div className="input-group">
          <input type="search" placeholder="Search Data..." />
          <img src="images/search.png" alt="" />
        </div>
        <div className="export__file">
          <label htmlFor="export-file" className="export__file-btn" title="Export File"></label>
          <input type="checkbox" id="export-file" />
          <div className="export__file-options">
            <label>Export As &nbsp; &#10140;</label>
            <label htmlFor="export-file" id="toPDF">PDF <img src="images/pdf.png" alt="" /></label>
            <label htmlFor="export-file" id="toJSON">JSON <img src="images/json.png" alt="" /></label>
            <label htmlFor="export-file" id="toCSV">CSV <img src="images/csv.png" alt="" /></label>
            <label htmlFor="export-file" id="toEXCEL">EXCEL <img src="images/excel.png" alt="" /></label>
          </div>
        </div>
      </section>
      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th> Id <span className="icon-arrow">&UpArrow;</span></th>
              <th> Customer <span className="icon-arrow">&UpArrow;</span></th>
              <th> Location <span className="icon-arrow">&UpArrow;</span></th>
              <th> Order Date <span className="icon-arrow">&UpArrow;</span></th>
              <th> Status <span className="icon-arrow">&UpArrow;</span></th>
              <th> Amount <span className="icon-arrow">&UpArrow;</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
                        <td> 1 </td>
                        <td> <img src="images/Zinzu Chan Lee.jpg" alt=""/>Zinzu Chan Lee</td>
                        <td> Seoul </td>
                        <td> 17 Dec, 2022 </td>
                        <td>
                            <p class="status delivered">Delivered</p>
                        </td>
                        <td> <strong> $128.90 </strong></td>
                    </tr>
                    <tr>
                        <td> 2 </td>
                        <td><img src="images/Jeet Saru.png" alt=""/> Jeet Saru </td>
                        <td> Kathmandu </td>
                        <td> 27 Aug, 2023 </td>
                        <td>
                            <p class="status cancelled">Cancelled</p>
                        </td>
                        <td> <strong>$5350.50</strong> </td>
                    </tr>
                    <tr>
                        <td> 3</td>
                        <td><img src="images/Sonal Gharti.jpg" alt=""/> Sonal Gharti </td>
                        <td> Tokyo </td>
                        <td> 14 Mar, 2023 </td>
                        <td>
                            <p class="status shipped">Shipped</p>
                        </td>
                        <td> <strong>$210.40</strong> </td>
                    </tr>
                    <tr>
                        <td> 4</td>
                        <td><img src="images/Alson GC.jpg" alt=""/> Alson GC </td>
                        <td> New Delhi </td>
                        <td> 25 May, 2023 </td>
                        <td>
                            <p class="status delivered">Delivered</p>
                        </td>
                        <td> <strong>$149.70</strong> </td>
                    </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default CustomerOrdersTable;