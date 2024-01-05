'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Page() {
    const [data, setData] = useState({ message: '' })
    console.log('Page called')
    console.log(axios.defaults)
    useEffect(() => {
        console.log('useEffect called')
        axios.get('/api/hello/backend')
            .then((res) => res.data)
            .then((data) => {
                setData(data)
            })
    }, [])

    return <div>hello {data.message}!</div>
}
