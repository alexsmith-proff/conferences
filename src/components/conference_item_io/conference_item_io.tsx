import { FC } from "react"

import s from './conference_item_io.module.scss'

interface ConferenceItemIOProps {
    width: number
    height: number
    name: string
    photo?: string
    active?: boolean
    microphoneOn?: boolean
    clickMicrophone: () => void
}

const ConferenceItemIO: FC<ConferenceItemIOProps> = ({ width, height, photo, name, active = false, microphoneOn = false, clickMicrophone }) => {
    return (
        <div className={s.item} style={{width, height}}>
            <div className={s.media}>
                <img src={photo ? photo : 'img/noPhoto.png'} alt="media" />
            </div>
            <div className={s.info}>
                <h2 className={s.name}>{name}</h2>
                <div className={s.btn}></div>
            </div>
            
        </div>
    )
}

export default ConferenceItemIO