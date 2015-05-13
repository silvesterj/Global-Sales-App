package com.PxCalculator;

import java.util.ArrayList;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import com.solcorp.productxpress.calculator.PxCalculatorHomeJNI;
import com.solcorp.productxpress.calculator.spec.PxCalculatorHome;
import com.solcorp.productxpress.calculator.spec.PxDeployment;
import com.solcorp.productxpress.calculator.spec.PxPushCalculator;

public class PxCalculatorPlugin extends CordovaPlugin {
	private static boolean productXpressInitialized = false;
	private static boolean productDeployed = false;
	PxCalculatorHome calculatorHome;

	@Override
	public boolean execute(String action, final JSONArray args,
			final CallbackContext callbackContext) throws JSONException {

		final String parameter = args.getString(0);
		try {
			if (action.equalsIgnoreCase("initialize")) {
				cordova.getThreadPool().execute(new Runnable() {
					public void run() {

						initialize(parameter);

						callbackContext.success();
						productXpressInitialized = true;
					}
				});
				return true;
			} else if (action.equalsIgnoreCase("loadDeploymentPackage")) {
				if (!productXpressInitialized) {
					callbackContext.error("PxCalculator not initialized");

				}
				cordova.getThreadPool().execute(new Runnable() {
					public void run() {
						loadDeploymentPackage(parameter);
						callbackContext.success();
						productDeployed = true;
					}
				});
				return true;
			} else if (action.equalsIgnoreCase("calculate")) {
				if (!productXpressInitialized) {
					callbackContext.error("PxCalculator not initialized");

				}
				if (!productDeployed) {
					callbackContext.error("None of the products are deployed");

				}
				cordova.getThreadPool().execute(new Runnable() {
					public void run() {
						callbackContext.success(calculate(parameter));
					}
				});
				return true;
			} else if (action.equalsIgnoreCase("unloadDeploymentPackages")) {
				if (!productXpressInitialized) {
					callbackContext.error("PxCalculator not initialized");

				}
				if (!productDeployed) {
					callbackContext.error("None of the products are deployed");

				}
				cordova.getThreadPool().execute(new Runnable() {
					public void run() {
						unloadDeploymentPackages();
						callbackContext.success();
					}
				});
				return true;
			} else if (action.equalsIgnoreCase("importKey")) {
				if (!productXpressInitialized) {
					callbackContext.error("PxCalculator not initialized");

				}
				cordova.getThreadPool().execute(new Runnable() {
					public void run() {
						importKey(parameter);
						callbackContext.success();
					}
				});
				return true;
			} else if (action.equalsIgnoreCase("removeKey")) {
				if (!productXpressInitialized) {
					callbackContext.error("PxCalculator not initialized");

				}
				cordova.getThreadPool().execute(new Runnable() {
					public void run() {
						removeKey(parameter);
						callbackContext.success();
					}
				});
				return true;
			} else if (action.equalsIgnoreCase("keyList")) {
				if (!productXpressInitialized) {
					callbackContext.error("PxCalculator not initialized");

				}
				cordova.getThreadPool().execute(new Runnable() {
					public void run() {
						callbackContext.success(keyList().toString());
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

	private void initialize(String path) {

		calculatorHome = PxCalculatorHomeJNI.instance();
		calculatorHome.initialize(path);

	}

	private void loadDeploymentPackage(String deploymentPackageFilePath) {

		PxDeployment deployment = null;
		// Load deployment package
		deployment = calculatorHome.loadDeploymentPackage(
				deploymentPackageFilePath, null, null, null);
		// Optimize
		deployment.optimize();

	}

	private String calculate(String xmlInput) {
		PxPushCalculator calculator = calculatorHome.getPushCalculator();
		return calculator.calculate(xmlInput);
	}

	private void unloadDeploymentPackages() {
		calculatorHome.unloadDeploymentPackages();
	}

	private void importKey(String path) {

		calculatorHome.importKey(path);

	}

	private void removeKey(String path) {

		calculatorHome.removeKey(path);

	}

	private ArrayList<String> keyList() {

		return calculatorHome.keyList();

	}

	

}
