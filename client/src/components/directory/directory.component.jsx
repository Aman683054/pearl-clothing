import React from 'react';
import {connect} from 'react-redux';
import {selectDirectorySections} from "../../redux/directory/directory.selector";

import MenuItem from '../menu-items/menu-items.component';
import './directory.styles.scss';

const Directory = ({sections}) => {
        return(
            <div className="directory-menu">
                {sections.map(section  => (
                    <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size} linkUrl={section.linkUrl} />
                ))
                }

            </div>
        )
    
}


const mapStateToProps = state => ({
  sections: selectDirectorySections(state)
})

export default connect(mapStateToProps, null)(Directory);
