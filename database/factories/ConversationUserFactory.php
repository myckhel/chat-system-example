<?php

namespace Database\Factories;

use App\Models\ConversationUser;
use Binkode\ChatSystem\Database\Factories\ConversationUserFactory as Factory;

class ConversationUserFactory extends Factory
{
  /**
   * The name of the factory's corresponding model.
   *
   * @var string
   */
  protected $model = ConversationUser::class;

  /**
   * Define the model's default state.
   *
   * @return array
   */
  public function definition()
  {
    return [
      //
    ];
  }
}
