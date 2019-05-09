<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;
use Redirect;
use Session;
use App\Http\Requests\ContactRequest;
use Validator;

class MailController extends Controller
{
    public function sendmail(Request $request)
    {
      return response('wiiii',200);

      // $validator = \Validator::make($request->all(), [
      //   'name' => 'required',
      //   'email' => 'required|email',
      //   'subject' => 'required',
      //   'message' => 'required|max:700'
      //  ]);
      //
      //  if ($validator->fails())
      //  {
      //      return response()->json(['errors' => $validator->errors()->all()]);
      //  }

      // Validator::make($request->all(), [
      //  'name' => 'required',
      //  'email' => 'required|email',
      //  'subject' => 'required',
      //  'message' => 'required|max:700'
      // ])->validate();

      Mail::to("contacto@asomic.com")->send(new ContactMail($request->input()));

      if (Mail::failures()) {

      //   //dd('algo paso');
        // Session::flash('error','error.');
        return response()->json(['warningcito']);

      }
      else {
      //
        // Session::flash('success','Su mensaje a sido recibido satisfactoriamente y pronto nos contactaremos con usted.');
        return response()->json(['success']);

      }


    }

}
