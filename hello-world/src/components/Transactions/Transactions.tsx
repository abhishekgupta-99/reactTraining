import JsonData from './data.json'


type Transaction = {
    id: number
    date: string
    country: string
    currency: string
  }

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