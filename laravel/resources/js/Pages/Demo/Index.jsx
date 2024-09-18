import { useEffect, useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Index(props) {
    // const user = usePage().props.auth.user;
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('api/user')
            .then(response => response.json())
            .then(setUser);
    }, [])

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Demo</h2>}
        >
            <Head title="Demo" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">My protected content</div>
                        <div className="p-6 text-gray-900">
                            <div>Id: { user.id }</div>
                            <div>Name: { user.name }</div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
