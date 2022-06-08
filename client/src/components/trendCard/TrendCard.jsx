import React from 'react'
import "./TrendCard.scss"
import { TrendData } from '../../data/trendData'
const TrendCard = () => {
  return (
    <div className="trendCard">
        <h3>Latest Trends</h3>
        {TrendData.map((trend)=>{
            return(
                <div className="trend">
                    <span>#{trend.name}</span>
                    <span>{trend.shares}</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard