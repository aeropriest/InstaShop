
import {connect} from 'react-redux'

import MenuItem from "../menu-items/menu-item.component"
import './directory.styles.scss'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selector'

const Directory =({sections}) => (
    <div className='directory-menu'>
        {sections.map(({ id, ...otherSections}) => (
        <MenuItem key={id} {...otherSections}/>
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory)