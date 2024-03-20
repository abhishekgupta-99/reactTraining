import { log } from 'console'
import { PaymentType, getAllPayments } from '../../data/DataFunction'
import JsonData from './data.json'


type Transaction = {
    id: number
    date: string
    country: string
    currency: string
  }

  const payments: PaymentType[] = getAllPayments();

  //filter out only countries and all set\
const countries: string[] = Array.from(new Set(payments.map(payment => payment.country)));
console.log(countries);

  const DisplayData=JsonData.map(
    (txn)=>{
        return(
            <tr>
                <td>{txn.id}</td>
                <td>{txn.Date}</td>
                <td>{txn.currency}</td>
            </tr>
        )
    }
)

function TransactionsTable(){

    return(
        <div>
            <select> {countries.map(country => <option value={country} key={country}>{country}</option>)}</select>
            <table border={1} className="table table-striped">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
 }
 
 export default TransactionsTable;