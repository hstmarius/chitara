import React from 'react';
import moment from 'moment';

// {moment(product.dateOfPurchase).format("MM-DD-YYYY")}

const UserHistoryBlock = (props) => {


    const renderBlocks = () => (
        props.products ?
            props.products.map((product,i)=>(
                <tr key={i}>
                    <td>{product.porder}</td>
                    <td>{product.brand} {product.name}</td>
                    <td>$ {product.price}</td>
                    <td>{product.quantity}</td>
                </tr>
            ))
        :null
    )

    return (
        <div className="history_blocks">
            <table>
                <thead>
                    <tr>
                        <th>Numar comanda</th>
                        <th>Produs</th>
                        <th>Pret</th>
                        <th>Cantitate</th>
                    </tr>
                </thead>
                <tbody>
                    {renderBlocks()}
                </tbody>
            </table>
        </div>
    );
};

export default UserHistoryBlock;