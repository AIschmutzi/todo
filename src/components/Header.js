import React from 'react'
import './style.css'
import ChecklistIcon from '@mui/icons-material/Checklist';
import { List } from '@mui/material';
function Header() {
  return (
    <div>
      <header><h1>
        <ChecklistIcon/>
        Listinator</h1></header>
    </div>
  )
}

export default Header