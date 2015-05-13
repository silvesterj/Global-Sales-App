package com.PxCalculator;

import java.io.File;
import java.util.ArrayList;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;

public class EmailPlugin extends CordovaPlugin{

	@Override
	public boolean execute(String action, final JSONArray args,
			final CallbackContext callbackContext) throws JSONException {
		// TODO Auto-generated method stub
		
		try 
		{
			if (action.equalsIgnoreCase("email")) {

				cordova.getThreadPool().execute(new Runnable() {

					public void run() {
						try 
						{
							callbackContext.success();
							String emailaddress=args.getString(0);
							String subject=args.getString(1);
							String body=args.getString(2);
							String attachment=null;
							if(args.length()>3)
								attachment=args.getString(3);
							sendEmail(emailaddress, attachment, subject, body);
							
						} catch (Exception e) {
							callbackContext.error(e.getMessage());
							e.printStackTrace();
						}

					}
				});
				return true;
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
		
		
		return super.execute(action, args, callbackContext);
	}
	public void sendEmail(String email,String attachments,String subject,String body)
	{
		String[] mailAddressArray=email.split(",");
		Context context=cordova.getActivity();
		Intent emailIntent = new Intent(android.content.Intent.ACTION_SEND_MULTIPLE);
		emailIntent.setType("text/html");
		emailIntent.setPackage("com.google.android.gm");
		emailIntent.putExtra(android.content.Intent.EXTRA_EMAIL,  mailAddressArray);
		try
		{
			if(attachments!=null)
			{	
				String[] attachmentsArray=attachments.split(",");
				if(attachmentsArray!=null&&attachmentsArray.length>0)
				{
					ArrayList<Uri> uris = new ArrayList<Uri>();
					for(int i=0;i<attachmentsArray.length;i++)
					{
						File fileIn = new File(attachmentsArray[i]);
					    Uri u = Uri.fromFile(fileIn);
					    uris.add(u);
					}
					if(uris.size()>0)
					emailIntent.putParcelableArrayListExtra(Intent.EXTRA_STREAM, uris);
				}
				
			}
		}
		catch (Exception e) 
		{
			e.printStackTrace();
		}
		if(subject==null||subject.trim().length()==0)
			emailIntent.putExtra(android.content.Intent.EXTRA_SUBJECT,"");
		else
			emailIntent.putExtra(android.content.Intent.EXTRA_SUBJECT,subject);
		
		if(body==null||body.trim().length()==0)
			emailIntent.putExtra(android.content.Intent.EXTRA_SUBJECT,"");
		else
			emailIntent.putExtra(android.content.Intent.EXTRA_TEXT,body);
		context.startActivity(emailIntent);
	}
}

