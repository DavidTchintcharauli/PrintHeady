<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'name', 'description'];

    public function photos()
    {
        return $this->hasMany(Photo::class);
    }

    public function randomPhoto()
    {
        return $this->photos()->inRandomOrder()->first();
    }
}
