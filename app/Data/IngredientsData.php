<?php
namespace App\Data;

use DateTime;
use Spatie\LaravelData\Attributes\WithCast;
use Spatie\LaravelData\Attributes\WithTransformer;
use Spatie\LaravelData\Casts\DateTimeInterfaceCast;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Transformers\DateTimeInterfaceTransformer;

class IngredientsData extends Data
{
    public function __construct(
        public int $id,
        public string $name,
        #[WithCast(DateTimeInterfaceCast::class, format: 'Y-m-d H:i:s')]
        #[WithTransformer(DateTimeInterfaceTransformer::class, format: 'Y-m-d H:i:s')]
        public ?DateTime $created_at,
        #[WithCast(DateTimeInterfaceCast::class, format: 'Y-m-d H:i:s')] #castea el valor
        #[WithTransformer(DateTimeInterfaceTransformer::class, format: 'Y-m-d H:i:s')]
        public ?DateTime $updated_at
    )
    {

    }
}
