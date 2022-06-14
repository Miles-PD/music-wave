import SidebarHeader from "./components/sidebar/sidebarHeader"
import SidebarOption from "./components/sidebar/sidebarOptions"

import { RiLoginBoxLine, RiHome8Line, RiStarLine, RiCalendarTodoFill, RiInformationLine } from 'react-icons/ri';
import { GiGuitarHead, GiMicrophone, GiGrandPiano, GiHeadphones } from 'react-icons/gi'
import { HiOutlineMusicNote } from 'react-icons/hi'
import { BsPersonSquare, BsMusicNote, BsFiles } from 'react-icons/bs'
import { FaGuitar, FaBorderAll } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className="sidebar">

            <div className="sidebar-logo"
            src="/images/icon.png"
            alt="logo"
            />

            <SidebarHeader title="MY MUSIC" />
                <SidebarOption title="LOG IN" icon={<RiLoginBoxLine />}/>

            <SidebarHeader title="DISCOVER" />
                <SidebarOption title="HOME" icon={<RiHome8Line />}/>
                <SidebarOption title="BEST SELLERS" icon={<RiStarLine />}/>
                <SidebarOption title="PRE-ORDERS" icon={<RiCalendarTodoFill />}/>
                <SidebarOption title="TOP 100 ROCK" icon={<GiGuitarHead />}/>
                <SidebarOption title="TOP 100 JAZZ" icon={<BsMusicNote />}/>
                <SidebarOption title="TOP 100 POP" icon={<GiMicrophone />}/>
                <SidebarOption title="TOP 100 CLASICAL" icon={<GiGrandPiano />}/>
                <SidebarOption title="FEMALE VOCALISTS" icon={<BsPersonSquare />}/>
                <SidebarOption title="AUDIOPHILE PICKS" icon={<GiHeadphones />}/>

            <SidebarHeader title="BROWSE BY" />
                <SidebarOption title="ROCK" icon={<FaGuitar />}/>
                <SidebarOption title="JAZZ" icon={<BsMusicNote />}/>
                <SidebarOption title="POP" icon={<GiMicrophone />}/>
                <SidebarOption title="CLASSICAL" icon={<GiGrandPiano />}/>
                <SidebarOption title="ALL GENRES" icon={<HiOutlineMusicNote />}/>
                <SidebarOption title="ALL LABELS" icon={<BsFiles />}/>
                <SidebarOption title="ALL ARTISTS" icon={<GiMicrophone />}/>
                <SidebarOption title="ALL COMPOSERS" icon={<BsMusicNote />}/>
                <SidebarOption title="ALL CATEGORIES" icon={<FaBorderAll />}/>
                <SidebarOption title="HELP" icon={<RiInformationLine />}/>
        </div>
    )
}

export default Sidebar