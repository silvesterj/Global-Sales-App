package com.productxpress.pxtestapp;

import android.os.AsyncTask;

public class CalculateTask extends AsyncTask<Void, IProgress, Void> {

	private final String m_productName;
	private final PxActivity m_activity;
	private final FileLogger m_logger = FileUtil.getLogger();

	public CalculateTask(String productName, PxActivity activity) {
		m_productName = productName;
		m_activity = activity;
	}
	public String getCurrenTaskProduct()
	{
		return m_productName;
		
	}
	public void reportProgress(String message) {
		publishProgress(new ProgressMessage(message));
	}

	public void reportError(Exception e) {
		publishProgress(new ProgressError(e));
	}

	public void reportStatistics(StatisticData data) {
		publishProgress(new ProgressStatistics(data));
	}
	
	@Override
	protected Void doInBackground(Void... arg0) {
		m_logger.writeLine("Perform calculation for product: " + m_productName);
		try {
			if (m_productName.equals("Simple A+B")) {
				PxCalculatorUtil.doSimpleAplusB(new PxHandler(this));
			} else if (m_productName.equals("AmLife LifeStyle")) {
				PxCalculatorUtil.doAmLifeLifeStyle(new PxHandler(this));
			} else if (m_productName.equals("AmLife SecureGuard Plus")) {
				PxCalculatorUtil.doAmLifeSecureGuardPlus(new PxHandler(this));
			} else if (m_productName.equals("Mini coverage")) {
				PxCalculatorUtil.doMiniCoverage(new PxHandler(this));
			} else if (m_productName.equals("UK Pension Product")) {
				PxCalculatorUtil.doUKPension(new PxHandler(this));
			} else if (m_productName.equals("Other Products")) {
				PxCalculatorUtil.doOtherProducts(new PxHandler(this));				
			} else {
				m_activity.showStatusMessage("No valid product selected");
			}
		} catch (Exception e) {
			m_logger.writeLine("Error: " + e.getMessage());
			reportError(e);
		}

		return null;
	}

	protected void onProgressUpdate(IProgress... progress) {
		for (IProgress curr : progress) {
			switch (curr.getType()) {
			case MESSAGE:
				showStatusMessage(curr.getMessage());
				break;
			case ERROR:
				showError(curr.getError());
				break;
			case STATISTICS:
				showStatisticData(curr.getStatisticData());
				break;
			default:
			}
		}
	}

	protected void onPreExecute() {
		m_activity.showProductName(m_productName);
		m_activity.showStartMemoryInfo();
	}
	
	protected void onPostExecute(Void arg) {
		m_activity.showStatusMessage("Finished " + m_productName);
		m_activity.finishedCalculating();
	}

	private void showStatusMessage(String message) {
		m_activity.showStatusMessage(message);
	}

	private void showError(String error) {
		m_activity.showError(error);
	}
	
	private void showStatisticData(StatisticData statisticData) {
		m_activity.updateStatisticData(statisticData);
	}
}
