package com.productxpress.pxtestapp;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import android.app.Activity;
import android.os.Bundle;
import android.os.Debug;
import android.os.Debug.MemoryInfo;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Spinner;

public class PxActivity extends Activity {

	private TextView nativePssStart;
	private TextView nativePssDeplLoad;
	private TextView nativePssPreOptimize;
	private TextView nativePssCalc;
	private TextView nativePssEnd;
	private TextView nativePrivateDirtyStart;
	private TextView nativePrivateDirtyDeplLoad;
	private TextView nativePrivateDirtyPreOptimize;
	private TextView nativePrivateDirtyCalc;
	private TextView nativePrivateDirtyEnd;
	private TextView dalvikPssStart;
	private TextView dalvikPssDeplLoad;
	private TextView dalvikPssPreOptimize;
	private TextView dalvikPssCalc;
	private TextView dalvikPssEnd;
	private TextView dalvikPrivateDirtyStart;
	private TextView dalvikPrivateDirtyDeplLoad;
	private TextView dalvikPrivateDirtyPreOptimize;
	private TextView dalvikPrivateDirtyCalc;
	private TextView dalvikPrivateDirtyEnd;
	private TextView packageLoadTime;
	private TextView preOptimizeTime;
	private TextView calcTime;
	private TextView calcMinTime;
	private TextView calcMaxTime;
	private TextView calcRequestCount;
	private Spinner productSelection;
	private final FileLogger m_logger = FileUtil.getLogger();

	public void onCalculate(View view) {
		try {
			Button calcButton = (Button) findViewById(R.id.calculate_button);
			calcButton.setEnabled(false);

			performCalculation();
		} catch (Exception e) {
			showException(e);
			Button calcButton = (Button) findViewById(R.id.calculate_button);
			calcButton.setEnabled(true);
		}
	}

	public void showStatusMessage(String message) {
		TextView statusView = (TextView) findViewById(R.id.status_message);
		if (statusView != null) {
			statusView.setText(message);
		}
	}

	private void showException(Exception e) {
		showError(e.getMessage());
	}

	public void showError(String error) {
		AlertDialog.Builder alertBuilder = new AlertDialog.Builder(this);
		alertBuilder.setTitle("Error occured");
		alertBuilder.setMessage(error);
		alertBuilder.setPositiveButton("Close",
				new DialogInterface.OnClickListener() {
					public void onClick(DialogInterface dialog, int id) {
						dialog.cancel();
					}
				});

		AlertDialog dialog = alertBuilder.create();
		dialog.show();
	}

	public void finishedCalculating() {
		Button calcButton = (Button) findViewById(R.id.calculate_button);
		calcButton.setEnabled(true);
	}

	private void performCalculation() {
		try {
			if (productSelection != null) {
				clearInfo();
				String productName = productSelection.getSelectedItem()
						.toString();
				new CalculateTask(productName, this).execute();
			}
		} catch (Exception ex) {
			m_logger.writeLine("Error: " + ex.getMessage());

		}

	}

	private void updateCalculateTime(float time, float minTime, float maxTime,
			int requestCount) {
		calcTime.setText(Float.toString(time));
		calcMinTime.setText(Float.toString(minTime));
		calcMaxTime.setText(Float.toString(maxTime));
		calcRequestCount.setText(Integer.toString(requestCount));
	}

	public void updateStatisticData(StatisticData data) {
		switch (data.getType()) {
		case MemoryInfoStart:
			updateMemoryInfoStart(data.getMemoryInfo());
			break;
		case MemoryInfoDeplLoad:
			updateMemoryInfoDeplLoad(data.getMemoryInfo());
			break;
		case MemoryInfoPreOptimize:
			updateMemoryInfoPreOptimize(data.getMemoryInfo());
			break;
		case MemoryInfoCalc:
			updateMemoryInfoCalc(data.getMemoryInfo());
			break;
		case MemoryInfoEnd:
			updateMemoryInfoEnd(data.getMemoryInfo());
			break;
		case LoadTime:
			updatePackageLoadTime(data.getTime());
			break;
		case PreOptimizeTime:
			updatePreOptimizeTimeTime(data.getTime());
			break;
		case CalcTime:
			updateCalculateTime(data.getTime(), data.getMinCalcTime(),
					data.getMaxCalcTime(), data.getNbCalcRequests());
			break;
		default:
		}
	}

	public void showStartMemoryInfo() {
		Debug.MemoryInfo memoryInfo = new Debug.MemoryInfo();
		Debug.getMemoryInfo(memoryInfo);
		updateMemoryInfoStart(memoryInfo);
	}

	public void updatePreOptimizeTimeTime(float time) {
		preOptimizeTime.setText(Float.toString(time));
	}

	public void updatePackageLoadTime(float time) {
		packageLoadTime.setText(Float.toString(time));
	}

	public void showProductName(String productName) {
		TextView valueView = (TextView) findViewById(R.id.product_name);
		if (valueView != null) {
			valueView.setText("Product: " + productName);
		}
	}

	private void clearInfo() {
		nativePssStart.setText("");
		nativePssDeplLoad.setText("");
		nativePssPreOptimize.setText("");
		nativePssCalc.setText("");
		nativePssEnd.setText("");
		nativePrivateDirtyStart.setText("");
		nativePrivateDirtyDeplLoad.setText("");
		nativePrivateDirtyPreOptimize.setText("");
		nativePrivateDirtyCalc.setText("");
		nativePrivateDirtyEnd.setText("");
		dalvikPssStart.setText("");
		dalvikPssDeplLoad.setText("");
		dalvikPssPreOptimize.setText("");
		dalvikPssCalc.setText("");
		dalvikPssEnd.setText("");
		dalvikPrivateDirtyStart.setText("");
		dalvikPrivateDirtyDeplLoad.setText("");
		dalvikPrivateDirtyPreOptimize.setText("");
		dalvikPrivateDirtyCalc.setText("");
		dalvikPrivateDirtyEnd.setText("");
		packageLoadTime.setText("");
		preOptimizeTime.setText("");
		calcTime.setText("");
		calcMinTime.setText("");
		calcMaxTime.setText("");
		calcRequestCount.setText("");
	}

	private void updateMemoryInfoStart(MemoryInfo memoryInfo) {
		nativePssStart.setText(toMemoryValueString(memoryInfo.nativePss));
		nativePrivateDirtyStart
				.setText(toMemoryValueString(memoryInfo.nativePrivateDirty));
		dalvikPssStart.setText(toMemoryValueString(memoryInfo.dalvikPss));
		dalvikPrivateDirtyStart
				.setText(toMemoryValueString(memoryInfo.dalvikPrivateDirty));
	}

	private void updateMemoryInfoDeplLoad(MemoryInfo memoryInfo) {
		nativePssDeplLoad.setText(toMemoryValueString(memoryInfo.nativePss));
		nativePrivateDirtyDeplLoad
				.setText(toMemoryValueString(memoryInfo.nativePrivateDirty));
		dalvikPssDeplLoad.setText(toMemoryValueString(memoryInfo.dalvikPss));
		dalvikPrivateDirtyDeplLoad
				.setText(toMemoryValueString(memoryInfo.dalvikPrivateDirty));
	}

	private void updateMemoryInfoPreOptimize(MemoryInfo memoryInfo) {
		nativePssPreOptimize.setText(toMemoryValueString(memoryInfo.nativePss));
		nativePrivateDirtyPreOptimize
				.setText(toMemoryValueString(memoryInfo.nativePrivateDirty));
		dalvikPssPreOptimize.setText(toMemoryValueString(memoryInfo.dalvikPss));
		dalvikPrivateDirtyPreOptimize
				.setText(toMemoryValueString(memoryInfo.dalvikPrivateDirty));
	}

	private void updateMemoryInfoCalc(MemoryInfo memoryInfo) {
		nativePssCalc.setText(toMemoryValueString(memoryInfo.nativePss));
		nativePrivateDirtyCalc
				.setText(toMemoryValueString(memoryInfo.nativePrivateDirty));
		dalvikPssCalc.setText(toMemoryValueString(memoryInfo.dalvikPss));
		dalvikPrivateDirtyCalc
				.setText(toMemoryValueString(memoryInfo.dalvikPrivateDirty));
	}

	private void updateMemoryInfoEnd(MemoryInfo memoryInfo) {
		nativePssEnd.setText(toMemoryValueString(memoryInfo.nativePss));
		nativePrivateDirtyEnd
				.setText(toMemoryValueString(memoryInfo.nativePrivateDirty));
		dalvikPssEnd.setText(toMemoryValueString(memoryInfo.dalvikPss));
		dalvikPrivateDirtyEnd
				.setText(toMemoryValueString(memoryInfo.dalvikPrivateDirty));
	}

	private String toMemoryValueString(int value) {
		return Integer.toString(value) + " KBytes";
	}

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		setContentView(R.layout.activity_px);

		nativePssStart = (TextView) findViewById(R.id.native_pss_start_value);
		nativePssDeplLoad = (TextView) findViewById(R.id.native_pss_deplload_value);
		nativePssPreOptimize = (TextView) findViewById(R.id.native_pss_preOptimize_value);
		nativePssCalc = (TextView) findViewById(R.id.native_pss_calc_value);
		nativePssEnd = (TextView) findViewById(R.id.native_pss_end_value);
		nativePrivateDirtyStart = (TextView) findViewById(R.id.native_npd_start_value);
		nativePrivateDirtyDeplLoad = (TextView) findViewById(R.id.native_npd_deplload_value);
		nativePrivateDirtyPreOptimize = (TextView) findViewById(R.id.native_npd_preOptimize_value);
		nativePrivateDirtyCalc = (TextView) findViewById(R.id.native_npd_calc_value);
		nativePrivateDirtyEnd = (TextView) findViewById(R.id.native_npd_end_value);
		dalvikPssStart = (TextView) findViewById(R.id.dalvik_pss_start_value);
		dalvikPssDeplLoad = (TextView) findViewById(R.id.dalvik_pss_deplload_value);
		dalvikPssPreOptimize = (TextView) findViewById(R.id.dalvik_pss_preOptimize_value);
		dalvikPssCalc = (TextView) findViewById(R.id.dalvik_pss_calc_value);
		dalvikPssEnd = (TextView) findViewById(R.id.dalvik_pss_end_value);
		dalvikPrivateDirtyStart = (TextView) findViewById(R.id.dalvik_npd_start_value);
		dalvikPrivateDirtyDeplLoad = (TextView) findViewById(R.id.dalvik_npd_deplload_value);
		dalvikPrivateDirtyPreOptimize = (TextView) findViewById(R.id.dalvik_npd_preOptimize_value);
		dalvikPrivateDirtyCalc = (TextView) findViewById(R.id.dalvik_npd_calc_value);
		dalvikPrivateDirtyEnd = (TextView) findViewById(R.id.dalvik_npd_end_value);
		packageLoadTime = (TextView) findViewById(R.id.package_load_time_for_value);
		preOptimizeTime = (TextView) findViewById(R.id.preOptimize_time_value);
		calcTime = (TextView) findViewById(R.id.calculation_time_value);
		calcMinTime = (TextView) findViewById(R.id.calculation_min_time_value);
		calcMaxTime = (TextView) findViewById(R.id.calculation_max_time_value);
		calcRequestCount = (TextView) findViewById(R.id.calculation_nbrequests_value);
		productSelection = (Spinner) findViewById(R.id.product_selection);

		List<String> spinnerContent = new ArrayList<String>();

		File productDir = new File(FileUtil.getProductXpressProductDataPath());

		if (productDir.isDirectory()) {
			for (File dir : productDir.listFiles()) {
				if (dir.isDirectory()) {
					spinnerContent.add(dir.getName());
				}
			}
		}

		ArrayAdapter<String> spinnerArrayAdapter = new ArrayAdapter<String>(
				this, android.R.layout.simple_spinner_item, spinnerContent);
		spinnerArrayAdapter
				.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
		productSelection.setAdapter(spinnerArrayAdapter);
	}
}
