import React from 'react';

import ClubInput from '../components/ClubInput'
import { setClubFormDataForEdit, resetClubForm } from '../actions/editClub'
import { editClub } from '../actions/addClub'
import {connect} from 'react-redux'

class EditClubFormWrapper extends React.Component {


  componentDidMount() {
    this.props.clubs.clubs && this.props.setClubFormDataForEdit(this.props.clubs.clubs.filter(club => club.id === parseInt(this.props.match.params.id))[0])
  }

  componentDidUpdate(prevProps) {
    this.props.clubs.clubs && !prevProps.clubs.clubs && this.props.setClubFormDataForEdit(this.props.clubs.clubs.filter(club => club.id === parseInt(this.props.match.params.id))[0])
  }


  handleSubmit = (clubFormData) => {

    const { editClub, club, history } = this.props
    
      editClub({
        ...clubFormData,
        clubId: club.id
      }, history)
  }

  render() {
    return <>
      <ClubInput editMode handleSubmit={this.handleSubmit} />
      <br/>
      </>
    }
}

export default connect(null, {editClub, setClubFormDataForEdit, resetClubForm})(EditClubFormWrapper)
