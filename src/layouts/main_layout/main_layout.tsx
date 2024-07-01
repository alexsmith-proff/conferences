import React, { FC, useState } from "react"
import s from './main_layout.module.scss'
import Find from "../../components/find/find"
import Contacts from "../../components/contacts/contacts"
import Info from "../../components/info/info"
import { contactsData } from "../../data/data"

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    const [activeItemId, setActiveItemId] = useState<number>(0)

    const handleClick = (id: number) => {
        setActiveItemId(id)
    }
    return (
        <div className={s.main}>
            <div className={s.left}>
                <Find />
                <div className={s.contacts}>
                    <Contacts activeItemId={activeItemId} click={handleClick} />
                </div>
            </div>
            <div className={s.right}>
                <div className={s.info}>
                    {
                        (activeItemId > 0) ? (
                            <Info
                                contactName={contactsData[activeItemId - 1].name}
                                timePassed={contactsData[activeItemId - 1].timePassed}
                                users={contactsData[activeItemId - 1].users}
                            />
                        ) : null
                    }

                </div>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default MainLayout