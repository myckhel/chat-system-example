<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use \Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
  public function login(Request $request){
    $request->validate([
      'email'       => 'email',
      'name'        => Rule::requiredIf(!$request->email),
      'password'    => 'required|string',
    ]);

    $user = User::whereEmail($request->email)->orWhere('name', $request->name)->first();

    if ($user) {
      if(!Hash::check($request->password, $user->password))
        throw ValidationException::withMessages([
          'password' => [trans('validation.password')],
        ]);

        $token       = $user->grantMeToken();

        return response()->json([
            'user'        => $user,
            'token'       => $token['token'],
            'token_type'  => $token['token_type'],
        ]);
      } else {
        return response()->json([
            'message' => 'credentials does not match our records',
            'status'  => false,
        ], 401);
      }
  }
}
