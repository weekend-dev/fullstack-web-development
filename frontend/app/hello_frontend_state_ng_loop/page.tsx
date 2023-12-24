'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [data, setData] = useState({ name: '初期値' });

    useEffect(() => {
        const change = { name: '変更' };
        setData(change);
    }, []); // 空の依存配列を追加することで、コンポーネントの初回マウント時のみ実行されます

    return <div>hello {data.name}!</div>;
}
