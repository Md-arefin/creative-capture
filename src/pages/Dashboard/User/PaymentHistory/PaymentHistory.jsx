import usePaymentHistory from "../../../../components/Hook/usePaymentHistory";


const PaymentHistory = () => {

    const [paymentHistory, refetch] = usePaymentHistory()

    return (
        <div>
            <div className='mx-auto my-16  '>
                <div className='flex justify-center items-center gap-5'>
                    <h1 className='text-center font-semibold text-2xl md:text-3xl '>
                        Payment History
                    </h1>
                </div>
                <div className='mx-auto border-b-2 pb-5 w-[300px]'>
                </div>
            </div>
            <div className="overflow-x-auto max-w-full mb-16 border-black border-2 rounded-lg my-10">
                <table className="table">
                    {/* head */}

                    <thead>

                        <tr>
                            <th className='text-lg text-black'>
                                #
                            </th>
                            <th className='text-lg text-black text-center'>Date</th>
                            <th className='text-lg text-black text-center'>
                                Transaction Id</th>
                            <th className='text-lg text-black text-center'>Quantity</th>
                            <th className='text-lg text-black text-center'>Classes</th>
                            <th className='text-lg text-black '>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            paymentHistory?.map((item, index) => <tr
                                key={item._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {item.date}
                                </td>
                                <td>
                                    {item.transactionId}
                                </td>
                                <td className='text-center'>{item.quantity}</td>
                                <td>
                                    {item.itemNames.map((names, i) => <li key={i}>{names}</li>)}
                                </td>
                                <td className='text-center font-semibold text-lg'>
                                    ${item.price}
                                </td>
                            </tr>)
                        }



                        {/* row 2 */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;