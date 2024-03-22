// import { log } from 'console'
// import { PaymentType, getAllPayments, getAllPaymentsAxiosVersion } from '../../data/DataFunction'
// import JsonData from './data.json'
// import { useEffect, useState } from 'react'
// import PaymentTableRow from './PaymentTableRow'


// // type Transaction = {
// //     id: number
// //     date: string
// //     country: string
// //     currency: string
// //   }

// //   useEffect(() =>{

// //   },[]);
// //   const payments: PaymentType[] = getAllPayments();

// //   //filter out only countries and all set\
// // const countries: string[] = Array.from(new Set(payments.map(payment => payment.country)));
// // console.log(countries);

// //   const DisplayData=payments.map(
// //     (txn)=>{
// //         return(
// //             <tr>
// //                 <td>{txn.id}</td>
// //                 <td>{txn.date
// //                 }</td>
// //                 <td>{txn.currency}</td>
// //             </tr>
// //         )
// //     }
// // )

// // function TransactionsTable(){

// //     return(
// //         <div>
// //             <select> {countries.map(country => <option value={country} key={country}>{country}</option>)}</select>
// //             <table border={1} className="table table-striped">
// //                 <thead>
// //                     <tr>
// //                     <th>Id</th>
// //                     <th>Date</th>
// //                     <th>Currency</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {DisplayData}
// //                 </tbody>
// //             </table>
// //         </div>
// //     )
// //  }
 
// //  export default TransactionsTable;

// const Transactions = (): JSX.Element => {

//     console.log("transactions is rendering")

//     const [payments, setPayments] = useState<PaymentType[]>([]);
//     const [loading, setLoading] = useState<boolean>(false);

//     // const loadData = () => {
//     //     getAllPayments()
//     //     .then(response => {
//     //         response.json()
//     //             .then(data => {
//     //                 setPayments(data);
//     //                 setLoading(false);    
//     //             })
//     //         }
//     //     );
//     // }

//     useEffect(() => loadDataAxios(), []);

//     const loadDataAxios = () => {
//         getAllPaymentsAxiosVersion()
//            .then(data => {
//                     setPayments(data);
//                     setLoading(false);    
//                 })
//     };

//     return (
//         <div>
//             {loading && <p className="loadingMessage">The data is loading please wait...</p>}

//             {!loading &&
//                 <div>
//                     <table className="transactionsTable">
//                         <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>orderId</th>
//                             <th>Date</th>
//                             <th>Country</th>
//                             <th>Currency</th>
//                             <th>Amount</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                             {payments.map(payment => <PaymentTableRow key={payment.id} {...payment} />}
//                         </tbody>
//                     </table>
//                 </div>
//             }
//         </div>
//     );
// }

export {}