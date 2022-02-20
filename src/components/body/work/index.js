import React from 'react'
import './work.css'
import Separator from '../../common/separator'
import { WorkData } from '../../../data/work'
import WorkCard from './work-card'
function Work() {
    const data =WorkData;
  return (
    <div>
        <Separator />
        <label className='section-title'>Education</label>
        <div className='work-list'>
            {data.map((item)=>{
                return(
                    <WorkCard item={item}/>
                )
            })}
        </div>
    </div>
  )
}

export default Work