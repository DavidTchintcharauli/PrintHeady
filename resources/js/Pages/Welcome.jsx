import { Link, Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <div className="w-full max-w-6xl bg-blue-300 br-200 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-sky-300 mx-auto p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center justify-between py-4">
                        <ApplicationLogo className="w-12 h-12 fill-current text-gray-700" />
                        <nav className="flex-grow flex justify-center space-x-4">
                            <Link href={route('about')} className="text-gray-700 hover:text-gray-900">
                                About
                            </Link>
                            <Link href={route('contact')} className="text-gray-700 hover:text-gray-900">
                                Contact us
                            </Link>
                            <Link href={route('blog')} className="text-gray-700 hover:text-gray-900">
                                Blog
                            </Link>
                            <Link href={route('photos')} className="text-gray-700 hover:text-gray-900">
                                Photos
                            </Link>
                        </nav>
                        <div>
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="text-lg font-semibold text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded">
                                    Dashboard
                                </Link>
                            ) : (
                                <div className="space-x-4">
                                    <Link
                                        href={route('login')}
                                        className="text-lg font-semibold text-white bg-green-500 hover:bg-green-700 py-2 px-4 rounded">
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="text-lg font-semibold text-white bg-gray-500 hover:bg-gray-700 py-2 px-4 rounded">
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
