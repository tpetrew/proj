import React from 'react';
import EMVChip from '../../../images/EMV Chip.svg';
import ContactlessIndicator from '../../../images/Contactless Indicator.svg';
import Visa from '../../../images/Visa.svg';
import Logo from '../../../images/Logo.svg';

const BankCard = () => {
    return (
        <div className="bank-card-wrapper">
            <div className="bank-card__front card-background-orange transition-3s">
                <div className="bank-card__front__logos-wrapper">
                    <img className="visa-logo" src={Visa} />
                    <img className="bank-logo" src={Logo} />
                </div>
                <div className="bank-card__front__chip-wrapper">
                    <img className="chip-logo" src={EMVChip} />
                    <img className="contact-logo" src={ContactlessIndicator}/>
                </div>
                <div className="bank-card__front__data-wrapper">
                    <div className="card-number">6219 8610 2888 8075</div>
                    <div className="cardholder-name">
                        <div>A.P. Petryayev</div>
                        <div>22/01</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BankCard;