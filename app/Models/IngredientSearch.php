<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Http\Request;
use PHPUnit\Framework\MockObject\Rule\Parameters;
use Illuminate\Database\Eloquent\Builder;
use App\Models\Ingredient;

class IngredientSearch
{
    private $params;
    public function __construct(Request $params)
    {
        $this->params=$params;

    }
    public function getQuery(): Builder
    {
        $request=$this->params;
        $query=Ingredient::query();
        $query->select(['ingredients.id', 'ingredients.name']);
        if($request->has('sorting') && !empty($request->input('sorting')))
        {
            foreach($request->input('sorting') as $sortRule)
            {
                $query->orderBy($sortRule['id'], $sortRule['desc'] == 'true' ? 'desc' : 'asc');
            }
        } else {
            $query->orderBy('ingredients.id', 'asc');
        }
        return $query;
    }
}
