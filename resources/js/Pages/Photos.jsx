import { Link, useForm } from '@inertiajs/react';

export default function Photos({ galleries, auth }) {
    const { delete: destroy } = useForm();

    const handleDelete = (galleryId) => {
        if (confirm('Are you sure you want to delete this gallery?')) {
            destroy(route('gallery.destroy', galleryId));
        }
    };

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {galleries.map((gallery) => (
                                <div key={gallery.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                                    {gallery.randomPhoto && (
                                        <img
                                            className="w-full"
                                            src={`/storage/${gallery.randomPhoto.photo_path}`}
                                            alt={gallery.name}
                                        />
                                    )}
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{gallery.name}</div>
                                        <p className="text-gray-700 text-base">
                                            {gallery.description}
                                        </p>
                                        <Link
                                            href={route('gallery.show', gallery.id)}
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            View More
                                        </Link>
                                        {auth?.user?.id === gallery.user_id && (
                                            <button
                                                onClick={() => handleDelete(gallery.id)}
                                                className="text-red-500 bg-red-300 p-1 rounded-lg hover:bg-green-400 hover:text-red-700 ml-4"
                                            >
                                                Delete
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link href="/" className="text-blue-500 hover:text-blue-700 mt-4 block">
                            Back to Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
