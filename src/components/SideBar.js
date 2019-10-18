import React from 'react'
import SideBarItems from './SideBarItems'

class SideBar extends React.Component {
    render() {
        return(
            <div className="ui fixed vertical inverted menu" styleName="width: 150px; height: 100%; overflow: auto; cursor: pointer;">
                <SideBarItems />
            </div>
        )
    }
}

export default SideBar
