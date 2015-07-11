package com.productxpress.pxtestapp;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.Vector;

import android.os.Environment;

public class FileUtil {

	private static String externalStoragePath = null;
	private static FileLogger logger = null;
	private static FileLogger statslogger = null;
	
	public static String getExternalStoragePath() {
		if (externalStoragePath == null) {
			externalStoragePath = Environment.getExternalStorageDirectory()
					.getAbsolutePath();
		}

		return externalStoragePath;
	}

	public static String getProductXpressProductDataPath() {
		return getProductXpressPath() + "/products";
	}

	public static String getProductXpressInstallPath() {
		return getProductXpressPath() + "/install";
	}

	private static String getProductXpressPath() {
		return getExternalStoragePath() + "/productxpress";
	}
	
	public static void stringToFile(String string, String filename)
			throws Exception {
		FileWriter writer = new FileWriter(filename);
		writer.write(string);
		writer.close();
	}

	public static String fileToString(File file) throws Exception {
	    String result = null;
	    BufferedReader br = null;

	    try {
	      StringBuffer sb = new StringBuffer();
	      br = new BufferedReader(new FileReader(file));

	      char[] buffer = new char[1024];

	      int bytesRead = 0;

	      do {
	        bytesRead = br.read(buffer, 0, 1024);
	        if (bytesRead > 0) {
	          sb.append(buffer, 0, bytesRead);
	        }
	      } while (bytesRead > 0);

	      result = sb.toString();
	    } finally {
	      if (br != null) {
	          br.close();
	      }
	    }
	    
	    return result;
	}

	public static String getDeploymentPackageFileName(String fromPath) {
		File searchDir = new File(fromPath);
		
		if(searchDir.isDirectory()) {
			File files[] = searchDir.listFiles();
			
			for(File file: files) {
				if(file.isFile()) {
					String absolutePath = file.getAbsolutePath();
					if(absolutePath.endsWith(".pxdp") || absolutePath.endsWith(".pxdpz")) {
						return absolutePath;
					}
				}
			}
		}
		
		return null;
	}
	
	public static Vector<File> getClcinFiles(String fromPath) {
		Vector<File> result = new Vector<File>();
		
		File searchDir = new File(fromPath);
		
		if(searchDir.isDirectory()) {
			File files[] = searchDir.listFiles();
			
			for(File file: files) {
				if(file.isFile()) {
					if(file.getName().endsWith(".clcin")) {
						result.add(file);
					}
				} else if(file.isDirectory()) {
					result.addAll(getClcinFiles(file.getAbsolutePath()));
				}
			}
		}
		
		return result;
	}
	
	public static FileLogger getLogger() {
		if(logger == null) {
			logger = new FileLogger(getLogFile());
		}
		
		return logger;
	}
	
	private static File getLogFile() {
		String logFilename = getProductXpressPath() + "/log.txt";
		return new File(logFilename);
	}
	
	public static FileLogger getStatsLogger() {
		if(statslogger == null) {
			statslogger = new FileLogger(getStatsFile());
		}
		
		return statslogger;
	}
	
	private static File getStatsFile() {
		String logFilename = getProductXpressPath() + "/stats.txt";
		return new File(logFilename);
	}
}
