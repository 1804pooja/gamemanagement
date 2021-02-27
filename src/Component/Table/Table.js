import React, { useEffect, useState } from 'react'
import './Table.css'
import { FaDollarSign, FaFile, FaChartBar, FaCalendar } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Table = (props) => {
    const [t, i18n] = useTranslation('common')
    const tableData = [...props.data]

    const convertToDateTime = (milliseconds) => {
        const dateObject = new Date(milliseconds)
        const mm = dateObject
            .toLocaleString('en-US', { month: 'long' })
            .substr(0, 3) // December
        const dd = dateObject.toLocaleString('en-US', { day: 'numeric' }) // 9
        const yy = dateObject.toLocaleString('en-US', { year: 'numeric' })
        return `${mm} ${yy}, ${dd}`
    }

    const renderData = tableData.map((data) => {
        return (
            <tr key={data.name}>
                <td>
                    <span className="created-on">
                        {convertToDateTime(data.createdOn)}
                    </span>
                    {/* <span className="created-on sub">{difference}</span> */}
                </td>
                <td className="name-region">
                    {' '}
                    <span>
                        <img src={data.image_url} alt="game-logo" />{' '}
                    </span>
                    <span className="name-text">
                        <p>{data.name}</p>
                        <p className="sub">{data.region}</p>
                    </span>
                </td>
                <td onClick={() => props.viewPriceClicked(data.name)}>
                    <FaDollarSign />
                    View Price{' '}
                </td>
                <td>
                    <div className="file">
                        <FaFile />
                        <p>CSV</p>
                    </div>
                </td>
                <td>
                    <div className="file">
                        <FaChartBar />
                        <p>Report</p>
                    </div>
                </td>
                <td>
                    <input
                        className="date"
                        type="date"
                        id="selectdate"
                        name="selectdate"
                        onChange={(e) => props.dateChangeHandler(e, data.id)}
                    />
                </td>
            </tr>
        )
    })

    return (
        <>
            {tableData.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>{t('TableHeader.CreatedOn')}</th>
                            <th>{t('TableHeader.Campaign')}</th>
                            <th>{t('TableHeader.View')}</th>
                            <th>{t('TableHeader.Action')}</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{renderData}</tbody>
                </table>
            ) : (
                <div>No Events Available for the selected period</div>
            )}
        </>
    )
}

export default Table
