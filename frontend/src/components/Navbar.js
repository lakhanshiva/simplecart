import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash';
import { Redirect } from 'react-router-dom'

const mapStateToProps = state => ({
   user : 1
})

export default connect(mapStateToProps)
