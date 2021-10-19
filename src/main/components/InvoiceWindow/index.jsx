import React from 'react';
import { Transition, animated } from 'react-spring'
import { useSelector, useDispatch } from 'react-redux';
import { setIsInvoiceModalOpen } from '../../../reducers/invoiceReducer';

const InvoiceWindow = () => {

    const isInvoiceModalOpen = useSelector(state => state.invoices.isInvoiceModalOpen)

    const dispatch = useDispatch()

    return (
        <Transition
            items={isInvoiceModalOpen}
            from={{ opacity: 0, transform: "translateX(200px)" }}
            enter={{ opacity: 1, transform: "translateX(0px)" }}
            leave={{ opacity: 0, transform: "translateX(200px)" }}
            duration={1000}
        >
            {(styles, item) =>
                item && <animated.div style={styles} className="more-info__wrapper__content-box">
                    <div onClick={() => dispatch(setIsInvoiceModalOpen())}>Close</div>
                </animated.div>
            }
        </Transition>
    )
}

export default InvoiceWindow;