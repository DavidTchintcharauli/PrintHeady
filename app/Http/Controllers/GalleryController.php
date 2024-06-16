<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use App\Models\Photo;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    public function create()
    {
        return Inertia::render('CreateGallery');
    }

    public function index()
    {
        $galleries = Gallery::with('photos')->get()->map(function ($gallery) {
            $gallery->randomPhoto = $gallery->randomPhoto();
            return $gallery;
        });

        return Inertia::render('Photos', ['galleries' => $galleries]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'photos.*' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $gallery = Gallery::create([
            'user_id' => auth()->id(),
            'name' => $request->name,
            'description' => $request->description,
        ]);

        if($request->hasFile('photos')) {
            foreach ($request->file('photos') as $photo) {
                $path = $photo->store('photos', 'public');

                Photo::create([
                    'gallery_id' => $gallery->id,
                    'photo_path' => $path,
                ]);
            }
        }

        return redirect()->route('dashboard')->with('success', 'Gallery created successfully.');
    }

    public function show(Gallery $gallery)
    {
        return Inertia::render('GalleryPhotos', ['gallery' => $gallery->load('photos')]);
    }
}
