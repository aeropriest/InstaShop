import {connect} from 'react-redux'
import MenuItem from "../menu-items/menu-item.component"
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

import './directory.styles.scss'

const Directory = ({ sections }) => {
  console.log(' ------ directory reducer -------')
  console.log(sections)
  return(
      <div className='directory-menu'>
          {sections.map(({ id, ...otherSections}) => (
          <MenuItem key={id} {...otherSections}/>
          ))}
      </div>
)
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
}) 


export default connect(mapStateToProps)(Directory)