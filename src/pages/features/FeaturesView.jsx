import React from 'react'
import  IconComponent from '../../components/iconComponent/IconComponent'
import people from '../../assets/icons/people-icon.png'
import gear from '../../assets/icons/gear-icon.png'
import code from '../../assets/icons/code-icon.png'
import speak from '../../assets/icons/speak-icon.png'
import rocket from '../../assets/icons/rocket-icon.png'

import './featuresView.css'

 const FeaturesView = () => {
  return (
    <>
    <div className='features-icon-container'>
    <IconComponent image={people} style="people-icon" text_icon={('Identify Goals ')}/>
    <IconComponent image={code} style="code-icon" text_icon={('Situation Analisis ')}/>
    <IconComponent image={gear} style="gear-icon" text_icon={('Task Settings')}/>
    <IconComponent image={speak} style="speak-icon" text_icon={('Social Interaction')}/>
    <IconComponent image={rocket} style="rocket-icon" text_icon={('Get Things Done')}/>
    </div>
    </>
  )
}

export default FeaturesView