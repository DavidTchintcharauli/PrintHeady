import { Link } from '@inertiajs/react';

export default function GalleryPhotos({ gallery }) {
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight mb-4">{gallery.name}</h2>
                        <p className="text-gray-700 mb-4">{gallery.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {gallery.photos.map((photo) => (
                                <div key={photo.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <img
                                        className="w-full"
                                        src={`/storage/${photo.photo_path}`}
                                        alt={gallery.name}
                                    />
                                </div>
                            ))}
                        </div>
                        <Link href={route('photos')} className="text-blue-500 hover:text-blue-700 mt-4 block">
                            Back to Galleries
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
