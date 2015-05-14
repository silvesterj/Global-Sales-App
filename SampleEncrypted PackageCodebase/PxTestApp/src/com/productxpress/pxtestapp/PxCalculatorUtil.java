package com.productxpress.pxtestapp;

import java.io.File;

import android.os.Debug.MemoryInfo;
import android.os.Debug;

import com.solcorp.productxpress.calculator.PxCalculatorHomeJNI;
import com.solcorp.productxpress.calculator.spec.PxCalculatorHome;
import com.solcorp.productxpress.calculator.spec.PxPushCalculator;
import com.solcorp.productxpress.calculator.spec.PxDeployment;

public final class PxCalculatorUtil {

	private static boolean productXpressInitialized = false;
	private static Timer timer = new Timer();
	private static FileLogger m_statslogger = FileUtil.getStatsLogger();
	
	public static void performCalculationsForProductDirName(String productDirName, IPxHandler handler) throws Exception {
		String productPath = FileUtil.getProductXpressProductDataPath() + "/" + productDirName;
		PxCalculatorHome calculatorHome = getCalculatorHome(handler);
		try{
			String deploymentPackageFile = FileUtil.getDeploymentPackageFileName(productPath);
			m_statslogger.writeLine("******Stats for the Product****** " + productDirName + "*******");
			// Load deployment package
			handler.progressMessage("Load package: " + deploymentPackageFile);
			timer.start();
			PxDeployment deployment = null;
			if(deploymentPackageFile.endsWith("encrypted.pxdo")) {
                
				deployment = calculatorHome.loadEncryptedDeploymentObject(deploymentPackageFile, "MetLife", null, null, null);
			} else if(deploymentPackageFile.endsWith(".pxdo")) {
				deployment = calculatorHome.loadDeploymentObject(deploymentPackageFile, null, null, null);
			} else {
                calculatorHome.importkey("../");
				deployment = calculatorHome.loadDeploymentPackage(deploymentPackageFile, null, null, null);
			}
			
			float elapsedTime = timer.elapsedTime();
			handler.progressMessage("Package loaded in " + Float.toString(elapsedTime) + " seconds");
			handler.reportStatistcs(StatisticData.createLoadTime(elapsedTime));
			handler.reportStatistcs(StatisticData.createMemoryInfoDeplLoad(getMemoryInfo()));
			
			// Optimize
			handler.progressMessage("Pre-optimize");
			timer.start();
			deployment.optimize();
			elapsedTime = timer.elapsedTime();
			handler.progressMessage("Package optimized in " + Float.toString(elapsedTime) + " seconds");
			handler.reportStatistcs(StatisticData.createPreOptimizeTime(elapsedTime));
			handler.reportStatistcs(StatisticData.createMemoryInfoPreOptimize(getMemoryInfo()));
			
			// Perform calculations
			handler.progressMessage("Start calculations");
			PxPushCalculator calculator = calculatorHome.getPushCalculator();
			int nbCalcRequestsFinished = 0;
			float totalCalcTime = 0;
			float minCalcTime = Float.MAX_VALUE;
			float maxCalcTime = 0;
			for(File clcinFile: FileUtil.getClcinFiles(productPath)) {
				String input = FileUtil.fileToString(clcinFile);
				String outputFileName = clcinFile.getAbsolutePath().replace(".clcin", ".clcout");
				timer.start();
				String output = calculator.calculate(input);
				elapsedTime = timer.elapsedTime();
				totalCalcTime += elapsedTime;
				if(elapsedTime > maxCalcTime) {
					maxCalcTime = elapsedTime;
				}
				
				if(elapsedTime < minCalcTime) {
					minCalcTime = elapsedTime;
				}
				nbCalcRequestsFinished++;
				FileUtil.stringToFile(output, outputFileName);
				handler.progressMessage("calculation request " + Integer.toString(nbCalcRequestsFinished) + " executed");
			}
			handler.progressMessage("Total calculation time: " + Float.toString(totalCalcTime) + " seconds");
			handler.reportStatistcs(StatisticData.createCalcTime(totalCalcTime, minCalcTime, maxCalcTime, nbCalcRequestsFinished));			
			handler.reportStatistcs(StatisticData.createMemoryInfoCalc(getMemoryInfo()));
		} finally {
			calculatorHome.unloadDeploymentPackages();
			handler.reportStatistcs(StatisticData.createMemoryInfoEnd(getMemoryInfo()));
			m_statslogger.writeLine("******Completed******");
		}
	}
	
	private static PxCalculatorHome getCalculatorHome(IPxHandler handler) {
		PxCalculatorHome home = PxCalculatorHomeJNI.instance();
		if(!productXpressInitialized) {
			handler.progressMessage("Initialize calculator");
			home.initialize(FileUtil.getProductXpressInstallPath());
			handler.progressMessage("Calculator initialized");
			productXpressInitialized = true;
		}
		
		return home;
	}
	
	private static MemoryInfo getMemoryInfo() {
		MemoryInfo memoryInfo = new Debug.MemoryInfo();
		Debug.getMemoryInfo(memoryInfo);
		return memoryInfo;
	}
	
}
