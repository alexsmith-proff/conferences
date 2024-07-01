import React, { FC } from "react"
import s from './main_layout.module.scss'
import Find from "../../components/find/find"

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className={s.main}>
            <div>
                <Find />
                <div></div>
            </div>
            <div>
                <div></div>
                <div>{children}</div>
            </div>            
        </div>
    )
}

export default MainLayout