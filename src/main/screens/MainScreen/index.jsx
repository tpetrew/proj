import React from 'react';
import SearchBar from '../../components/SearchBar';
import BankCard from '../../components/BankCard';
import ChangeDate from '../../components/ChangeDate';
import PersonLinePreview from '../../components/PersonLinePreview';
import ActivityLinePreview from '../../components/ActivityLinePreview';
import InvoiceLinePreview from '../../components/InvoiceLinePreview';
import TotalPreviewCard from '../../components/TotalPreviewCard';
import MoreButton from '../../../24/basic/gray/more-vertical.svg';
import GraphicsSection from '../../components/GraphicsSection';
import { useSelector, useDispatch } from 'react-redux';
import { setBankCardStyleModalVisible, setBankCardStyle } from '../../../reducers/bankCardReducer'

const data = {
    user: {
        firstName: 'Anton',
        secondName: 'Petryayev',
        image: '',
        username: 'tpetrew',
    },
    invoices: [
        {
            id: 1,
            date: '08 June, 2021',
            number: 'A59EE0DE-0003-2021',
            recipient: {
                name: 'Figma inc.',
                image: 'http://pzmskh47.beget.tech/imagesProj/figma-icon.svg'
            },
            status: true,
            category: 'Services',
            amount: 1200
        },

        {
            id: 2,
            date: '19 September, 2021',
            number: 'B89UY0DE-0543-2021',
            recipient: {
                name: 'Apple inc.',
                image: 'http://pzmskh47.beget.tech/imagesProj/apple.svg'
            },
            status: false,
            category: 'Tehnicue',
            amount: 990
        },

        {
            id: 3,
            date: '08 June, 2021',
            number: 'A59EE0DE-0003-2021',
            recipient: {
                name: 'Spotify inc.',
                image: 'http://pzmskh47.beget.tech/imagesProj/spotify.svg'
            },
            status: true,
            category: 'Services',
            amount: 90
        }
    ],
    activity: [
        {
            id: 1,
            image: '',
            name: 'YouTube income',
            date: '04 June 2021, 01:40 PM',
            amount: 190,
            type: 'income',
        },

        {
            id: 2,
            image: '',
            name: 'Sent to Alice',
            date: '04 June 2021, 08:50 PM',
            amount: 75,
            type: 'outcome',
        },

        {
            id: 3,
            image: '',
            name: 'Hospital of St. Patric',
            date: '03 June 2021, 06:26 AM',
            amount: 240,
            type: 'outcome',
        },

        {
            id: 4,
            image: '',
            name: 'Received from Stripe',
            date: '02 June 2021, 05:20 AM',
            amount: 2.340,
            type: 'income',
        },

        {
            id: 5,
            image: '',
            name: 'Income from WalletCo',
            date: '01 June 2021, 11:40 PM',
            amount: 4.300,
            type: 'income',
        }
    ],
    people: [
        {
            id: 1,
            name: 'Daniil Gusarov',
            email: 'gudanii20000@gmail.com',
            image: 'http://pzmskh47.beget.tech/imagesProj/PInYuP6vCvE.jpeg',
        },

        {
            id: 2,
            name: 'Dmitry Alekseye',
            email: 'alexdmitry19@yahoo.com',
            image: 'http://pzmskh47.beget.tech/imagesProj/q4EDQPChQvo.jpeg',
        },

        {
            id: 3,
            name: 'Artem Zaitcev',
            email: 'zaitcart@yandex.com',
            image: 'http://pzmskh47.beget.tech/imagesProj/UsDkOjbMr6o.jpeg',
        },

        {
            id: 4,
            name: 'Anton Petryayev',
            email: 'tpetrew@yandex.com',
            image: 'http://pzmskh47.beget.tech/imagesProj/user.JPG',
        }
    ],
    total: [
        {
            name: "Total incomes",
            amount: 12000,
            percent: 2.4,
            type: "text-green",
            color: "background-green",
            image: 1
        },

        {
            name: "Total outcome",
            amount: 24400,
            percent: 4.8,
            type: "text-red",
            color: "background-red",
            image: 2
        },

        {
            name: "Investment",
            amount: 21820,
            percent: 6.2,
            type: "text-green",
            color: "background-blue",
            image: 3
        },
    ]
}


const MainScreen = () => {

    const dispatch = useDispatch()

    const graphicType = useSelector(state => state.graphic.type)
    const isSetStyleModalVisible = useSelector(state => state.bankCard.isSetStyleModalVisible)

    const changeBankCardStyle = color => {
        dispatch(setBankCardStyle(color))
        dispatch(setBankCardStyleModalVisible())
    }

    return (
        <div className="wrapper">
            <div className="main-panel">

                {/* MAIN HEADER */}

                <div className="main-panel__header">
                    <div className="main-panel__header__hello-wrapper">
                        <h2>Get started, <span className="bold">{data.user.firstName}</span></h2>
                        <h4>Here's your report overview by today.</h4>
                    </div>
                    <SearchBar />
                </div>

                {/* MAIN HEADER END */}

                {/* TOTAL BLOCKS */}

                <div className="main-panel__total-blocks">

                    {/* TARGETS */}
                    {data.total.map((item, key) => {
                        if (graphicType === key) {
                            return (
                                <TotalPreviewCard type={key} item={item} key={key} active={true} />
                            )
                        } else
                        return (
                            <TotalPreviewCard type={key} item={item} key={key} active={false} />
                        )
                    })}
                </div>

                {/* TOTAL BLOCKS END */}

                {/* GRAPHICS */}

                <GraphicsSection />

                {/* GRAPHICS END */}

                {/* INVOICES */}

                <div className="main-panel__invoices">
                    <div className="main-panel__invoices-wrapper">
                        <div className="main-panel__invoices-wrapper__header">
                            <h4>Manage Invoice</h4>
                            <ChangeDate />
                        </div>
                        <div className="main-panel__invoices-wrapper__column">

                            <div className="main-panel__invoices-wrapper__grid background-gray">
                                <div className="main-panel__invoices-wrapper__grid__element flex-2 info">DATE</div>
                                <div className="main-panel__invoices-wrapper__grid__element flex-3 info">INVOICE NUMBER</div>
                                <div className="main-panel__invoices-wrapper__grid__element flex-2 info">RECIPIENT</div>
                                <div className="main-panel__invoices-wrapper__grid__element flex-2 info">STATUS</div>
                                <div className="main-panel__invoices-wrapper__grid__element flex-2 info">CATEGORY</div>
                                <div className="main-panel__invoices-wrapper__grid__element flex-2 info">AMOUNT</div>
                            </div>
                            {data.invoices.map((item, key) => {
                                return (
                                    <InvoiceLinePreview item={item} key={key} />
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* INVOICES END */}

            </div>

            <div className="cards-panel">
                {/* BANK CARD */}
                <div className="cards-panel__header">
                    <h4>Active card</h4>
                    <div onClick={() => dispatch(setBankCardStyleModalVisible())} className="cards-panel__header__change-card-button">
                        <img src={MoreButton} />
                    </div>
                    <div className={isSetStyleModalVisible ? "cards-panel__header__change-card-button__modal" : "cards-panel__header__change-card-button__modal__not-visible"}>
                            <div onClick={() => changeBankCardStyle("orange")} className="change-card-style__color"><div className="change-card-style__color__circle" style={{backgroundColor: "#FF998F"}}/>Orange</div>
                            <div onClick={() => changeBankCardStyle("black")} className="change-card-style__color"><div className="change-card-style__color__circle" style={{backgroundColor: "#212121"}}/>Black</div>
                            <div onClick={() => changeBankCardStyle("green")} className="change-card-style__color"><div className="change-card-style__color__circle" style={{backgroundColor: "#0F5959"}}/>Green</div>
                            <div onClick={() => changeBankCardStyle("blue-green")} className="change-card-style__color"><div className="change-card-style__color__circle" style={{backgroundColor: "#6594DB"}}/>Blue-Green</div>
                            <div onClick={() => changeBankCardStyle("gray")} className="change-card-style__color"><div className="change-card-style__color__circle" style={{backgroundColor: "#5B628B"}}/>Gray</div>
                            <div onClick={() => changeBankCardStyle("blue")} className="change-card-style__color"><div className="change-card-style__color__circle" style={{backgroundColor: "#100DA7"}}/>Blue</div>
                    </div>
                </div>

                <div className="cards-half-swipe-wrapper">
                    <BankCard />
                </div>

                {/* BANK CARD END */}

                {/* RECENT ACTIVITY  */}

                <div className="recent-activity-wrapper">
                    <div className="cards-panel__header">
                        <h4>Recent Activity</h4>
                        <div className="cards-panel__header__see-all text-red">
                            See all
                        </div>
                    </div>
                    <div className="recent-activity-wrapper__column">
                        {data.activity.map((item, key) => {
                            return (
                                <ActivityLinePreview key={key} item={item} />
                            )
                        })}
                    </div>
                </div>

                {/* RECENT ACTIVITY END */}

                {/* PEOPLE */}

                <div className="send-money-wrapper">
                    <div className="cards-panel__header">
                        <h4>Send Money</h4>
                        <div className="cards-panel__header__see-all text-red">
                            See all
                        </div>
                    </div>
                    <div className="send-money-wrapper__column">
                        {data.people.map((item, key) => {
                            return (
                                <PersonLinePreview key={key} item={item} />
                            )
                        })}
                    </div>
                </div>

                {/* PEOPLE END */}
            </div>
        </div>
    )
}

export default MainScreen;