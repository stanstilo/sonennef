import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectDirectorySections } from '../../store/reducers/selector'
import './directory.styles.scss'

 const directory = ({sections}) => (
            <div className = 'directory-menu'>
                {
                  sections.map(({id,  ...otherSectionProps}) => (
                     <MenuItem key={id} {...otherSectionProps}/>
                  ))
                }     
            </div>
        )
    
const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySections
})

export default connect(mapStateToProps)(directory)