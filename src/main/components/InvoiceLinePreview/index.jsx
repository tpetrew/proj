import React from 'react';
import CheckMark from '../../../24/basic/white/check-mark.svg';
import CloseIcon from '../../../24/basic/close.svg';
import { setIsInvoiceModalOpen } from '../../../reducers/invoiceReducer';
import { useDispatch } from 'react-redux';

const payStatus = (status) => {
    if(status) {
        return (
            <div className="status-paid">
                <div className="status-paid__circle background-green">
                    <img src={CheckMark} />
                </div>
                <span className="text-green">Paid</span>
            </div>
        )
    } else {
        return (
            <div className="status-closed">
                <div className="status-closed__circle background-red">
                    <img src={CloseIcon} />
                </div>
                <span className="text-red">Error</span>
            </div>
        )
    }
}

const InvoiceLinePreview = ({item}) => {

    const dispatch = useDispatch()

    return (
        <div onClick={() => dispatch(setIsInvoiceModalOpen())} className="main-panel__invoices-wrapper__grid main-element">
            <div className="main-panel__invoices-wrapper__grid__element flex-2 item">
                <div className="date">{item.date}</div>
            </div>
            <div className="main-panel__invoices-wrapper__grid__element flex-3 item">{item.number}</div>
            <div className="main-panel__invoices-wrapper__grid__element flex-2 item">
                <div className="recipient-logo">
                    <img src={item.recipient.image} />
                </div>
                <span>{item.recipient.name}</span>
            </div>
            <div className="main-panel__invoices-wrapper__grid__element flex-2 item">
                {payStatus(item.status)}
            </div>
            <div className="main-panel__invoices-wrapper__grid__element flex-2 item">
                <div className={`buying-type ${item.category === "Services" ? "background-blue" : item.category === "Tehnicue" ? "background-red" : "background-green"}`}></div>
                <span>{item.category}</span>
            </div>
            <div className="main-panel__invoices-wrapper__grid__element flex-2 item">
                <span>${item.amount},00</span>
            </div>
        </div>
    )
}

export default InvoiceLinePreview;