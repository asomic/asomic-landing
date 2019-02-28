<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'email' => 'required|email',
            'theme' => 'required',
            'message' => 'required'
        ];
    }
    public function messages()
    {
        return [
            'name.required' => 'Debes ingresar un nombre',
            'name.string' => 'Debes ingresar un nombre válido',
            'email.required' => 'Debes ingresar un email',
            'email.email' => 'Debes ingresar un email válido',
            'theme.required' => 'Debes ingresar un asunto',
            'message.required' => 'Debes ingresar un mensaje'
        ];
    }
}
