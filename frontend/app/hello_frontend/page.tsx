'use client'

import axios from 'axios'
import { useEffect, useState } from "react"

export default function Page() {
    const [data, setData] = useState({ name: '' })
    console.log('Page called')
    useEffect(() => {
        console.log('useEffect called')
        axios.get('/api/hello')
        .then((res) => res.data)
        .then((data) => { setData(data) })
    }, [])

    return <h1>Hello {data.name}!</h1>
}