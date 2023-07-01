import React from 'react';
import "./Sidebar.css";
import DonutLargeICon from "@material-ui/icons/DonutLarge";
function Sidebar() {
  return (
    <div className='Sidebar'>
   
        <div className='sidebar__headr'>
          <div className='sidebar__headerRight'>
           <DonutLargeICon />
         </div>
      </div>

    </div>
  )
}

export default Sidebar;