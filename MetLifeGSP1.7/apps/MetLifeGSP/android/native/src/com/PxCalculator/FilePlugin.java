package com.PxCalculator;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.net.Uri;
import android.util.Log;

public class FilePlugin extends CordovaPlugin {
	@Override
	public boolean execute(String action, final JSONArray args,
			final CallbackContext callbackContext) throws JSONException {

		// TODO Auto-generated method stub
		try {
			if (action.equalsIgnoreCase("getApplicationStoragePath")) {

				cordova.getThreadPool().execute(new Runnable() {

					public void run() {
						try {

							callbackContext
									.success(getApplicationStoragePath());

						} catch (Exception e) {
							callbackContext.error(e.getMessage());
							e.printStackTrace();
						}

					}
				});
				return true;
			} else if (action.equalsIgnoreCase("unZip")) {

				cordova.getThreadPool().execute(new Runnable() {

					public void run() {
						try {
							unzip(args.getString(0), args.getString(1));
							callbackContext.success();

						} catch (Exception e) {
							callbackContext.error(e.getMessage());
							e.printStackTrace();
						}

					}
				});
				return true;
			} else if (action.equalsIgnoreCase("open")) {

				cordova.getThreadPool().execute(new Runnable() {

					public void run() {
						try {
							String result=open(args.getString(0), args.getString(1));
							if(result.equalsIgnoreCase("opened"))
							{
								callbackContext.success(result);
							}
							else{
								callbackContext.error(result);
							}

						} catch (Exception e) {
							callbackContext.error(e.getMessage());
							e.printStackTrace();
						}

					}
				});
				return true;
			} else {
				callbackContext.error("invalid action");
				return false;
			}
		} catch (Exception e) {
			e.printStackTrace();
			callbackContext.error(e.getMessage());
			return true;
		}
	}

	private String getApplicationStoragePath() {
		return cordova.getActivity().getFilesDir().getAbsolutePath();
	}

	private void unzip(String sourcePath, String destinationPath)
			throws Exception {

		FileInputStream fin = new FileInputStream(sourcePath);
		ZipInputStream zin = new ZipInputStream(fin);
		ZipEntry ze = null;
		while ((ze = zin.getNextEntry()) != null) {
			Log.v("PxCalculator", "Unzipping " + ze.getName());

			if (ze.isDirectory()) {
				File f = new File(destinationPath + ze.getName());

				if (!f.isDirectory()) {
					f.mkdirs();
				}
			} else {
				FileOutputStream fout = new FileOutputStream(destinationPath
						+ ze.getName());
				for (int c = zin.read(); c != -1; c = zin.read()) {
					fout.write(c);
				}

				zin.closeEntry();
				fout.close();
			}

		}
		zin.close();
		Log.i("PxCalculator", "successfully unzipped..");

	}

	private String fetchMimeType(String extension) {

		if (extension.equalsIgnoreCase("avi")) {
			return "video/avi";

		} else if (extension.equalsIgnoreCase("mpeg")) {
			return "video/mpeg";
		} else if (extension.equalsIgnoreCase("mp4")) {
			return "video/mp4";
		} else if (extension.equalsIgnoreCase("mkv")) {
			return "video/mkv";
		} else if (extension.equalsIgnoreCase("doc")) {
			return "application/msword";
		} else if (extension.equalsIgnoreCase("docx")) {
			return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
		} else if (extension.equalsIgnoreCase("pdf")) {
			return "application/pdf";
		} else if (extension.equalsIgnoreCase("ppsx")) {
			return "application/vnd.openxmlformats-officedocument.presentationml.slideshow";
		} else if (extension.equalsIgnoreCase("ppt")) {
			return "application/vnd.ms-powerpointtd>";
		} else if (extension.equalsIgnoreCase("pptx")) {
			return "application/vnd.openxmlformats-officedocument.presentationml.presentation";
		} else if (extension.equalsIgnoreCase("txt")) {
			return "text/plain";
		} else if (extension.equalsIgnoreCase("xlam")) {
			return "application/vnd.ms-excel.addin.macroEnabled.12";
		} else if (extension.equalsIgnoreCase("xls")) {
			return "application/vnd.ms-excel";
		} else if (extension.equalsIgnoreCase("xlsb")) {
			return "application/vnd.ms-excel.sheet.binary.macroEnabled.12";
		} else if (extension.equalsIgnoreCase("xlsx")) {
			return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
		} else if (extension.equalsIgnoreCase("xltx")) {
			return "application/vnd.openxmlformats-officedocument.spreadsheetml.template";
		} else {
			return "";
		}

	}

	private String open(String filePath, String extension) throws Exception {
		String mimetype = fetchMimeType(extension);
		if (!mimetype.equalsIgnoreCase("")) {

			Uri uri = Uri.fromFile(new File(filePath + "." + extension));
			Intent intent = new Intent(Intent.ACTION_VIEW);
			intent.setDataAndType(uri, mimetype);
			PackageManager pm = cordova.getActivity().getPackageManager();

			List<ResolveInfo> activities = pm.queryIntentActivities(intent, 0);

			if (activities.size() > 0) {
				cordova.getActivity().startActivity(intent);
				return "opened";
			} else {
				//Toast.makeText(cordova.getActivity(), "no applications supports",
						//Toast.LENGTH_SHORT).show();
				
				if(extension.equalsIgnoreCase("ppt")){
					return open( filePath, "pptx");
				}else{
					return "File not supported by device";
				}
			}
		} else {
			return "File not supported by device";
		}

	}
}
