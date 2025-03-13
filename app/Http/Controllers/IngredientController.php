<?php

namespace App\Http\Controllers;

use App\Data\IngredientsData;
use App\Models\IngredientSearch;
use Illuminate\Http\Request;

class IngredientController extends Controller
{
    public function index(Request $request)
    {
        $query = new IngredientSearch($request);
        $listingredients = IngredientsData::collect($query->getQuery()->get());
        return response()->json([
            'status'=>'Ok',
            'data'=>$listingredients
        ]);

    }
}
