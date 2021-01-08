import React from 'react'
import {stockData} from './dataStock'

export const Stocks = () => {
    return(
        <> 
            <div className="stock-container">
                {stockData.map((data, key) => {
                    return(
                        <div key={key}>
                            {data.company + "," +
                             data.ticker + "," +
                             data.stockPrice + "," +
                             data.timeElapsed
                            }
                        </div>

                    )
                })}
            </div>
        </>
    )
}