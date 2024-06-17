<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\GalleryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/gallery', function () {
    return Inertia::render('CreateGallery');
})->middleware(['auth', 'verified'])->name('gallery');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/blog', function () {
    return Inertia::render('Blog');
})->name('blog');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/photos', function () {
    return Inertia::render('Photos');
})->name('photos');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/gallery/create', [GalleryController::class, 'create'])->name('gallery.create');
    Route::post('/gallery', [GalleryController::class, 'store'])->name('gallery.store');
});

Route::get('/photos', [GalleryController::class, 'index'])->name('photos');
Route::get('/gallery/{gallery}', [GalleryController::class, 'show'])->name('gallery.show');
Route::delete('/gallery/{id}', [GalleryController::class, 'destroy'])->middleware(['auth', 'verified'])->name('gallery.destroy');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
