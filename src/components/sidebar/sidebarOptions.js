import "./sidebar.css"


const SidebarOption = ({ title, icon, link }) => {
    return (
        <>
            
            <div className="sidebar-option">
                <div className="sidebar-icon">
                    {icon}
                </div>
                {title}
            </div>
        </>
    )
}

export default SidebarOption