import './App.css'
import React, { useState, useEffect } from 'react'
import TableData from './Data/TableData'
import Table from './Component/Table/Table'
import Modal from './Component/Modal/Modal'
import Header from './Component/Header/Header'
import SelectLanguage from './Component/SelectLanguage/SelectLanguage'
import moment from 'moment'
import Toolbar from './Component/Toolbar/Toolbar';

function App() {
    const [tableData, setTableData] = useState(TableData)
    const [modalState, setModalState] = useState(false)
    const [modalData, setModalData] = useState({})
    const [selectedTab, setSelectedTab] = useState('present')
    const [groupedData, setGroupedData] = useState({})

    useEffect(() => {
        const past = []
        const present = []
        const future = []
        TableData.forEach((ele) => {
            const diff = moment(ele.createdOn).diff(moment(), 'days')
            if (diff > 0) {
                future.push(ele)
            } else if (diff < 0) {
                past.push(ele)
            } else present.push(ele)
        })

        console.log('present', present)
        console.log(' past ', past)
        console.log('future', future)
        setGroupedData({ past, present, future })
    }, [tableData])

    const dateHandler = (e, clickedEventId) => {
        const clickedEventIndex = tableData.findIndex(
            (event) => event.id === clickedEventId
        )
        const updatedTableData = [...tableData]
        updatedTableData[clickedEventIndex].createdOn = parseInt(
            moment(e.target.value, 'YYYY-MM-DD').format('x')
        )
        setTableData(updatedTableData)
        console.log(e.target.value, clickedEventId)
    }

    const FaDollerHandler = (selectedEvent) => {
        const events = TableData
        const index = events.findIndex((event) => event.name === selectedEvent)
        setModalData(events[index])
        setModalState(true)
    }
    const modalCloseHandler = () => {
        setModalState(false)
    }

    return (
        <div className="main-content" style= {{height:'100%'}}>
            <div className="content">
                <Toolbar />
                <main style={{marginTop: '64px'}}>
                <SelectLanguage />
                <Header text="Manage Campaign" />
                {['past', 'present', 'future'].map((tab) => (
                    <button key={tab}
                        style={selectedTab === tab ? { background: '#4e4e89' } : {}}
                        className="btn"
                        onClick={() => {
                            setSelectedTab(tab)
                        }}
                        
                    >
                        {tab}
                    </button>
                ))}
                <hr />
                <Table
                    data={
                        groupedData[selectedTab] ? groupedData[selectedTab] : []
                    }
                    dateChangeHandler={dateHandler}
                    viewPriceClicked={FaDollerHandler}
                    />
                </main>
            </div>
            <Modal
                show={modalState}
                data={modalData}
                closeModal={modalCloseHandler}
            />
        </div>
    )
}

export default App
