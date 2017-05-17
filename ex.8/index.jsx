import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName="Russo">
        <Member name="Caio" />
        <Member name="Paula" />
        <Member name="Le" />
    </Family>
    , document.getElementById('app'))

