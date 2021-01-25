import React from 'react'
import {Router} from '@reach/router'
import Create from './create/Create'
import List from './list/List'

const Guest = () => {
    return (
        <Router>
            <Create path="create" />
            <List path="list" />
        </Router>
    )
}

export default Guest
