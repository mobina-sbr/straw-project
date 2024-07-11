import React from 'react'

export default function ItemsNav({itemNav,path}) {
    return (
        <li className="nav-item me-5"> <a className="nav-link active" aria-current="page" href={path}>{itemNav}</a>
        </li>
    )
}
