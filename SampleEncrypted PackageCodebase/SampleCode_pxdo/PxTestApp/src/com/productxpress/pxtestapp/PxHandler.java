package com.productxpress.pxtestapp;

import android.os.Debug.MemoryInfo;

public class PxHandler implements IPxHandler {

	private final CalculateTask m_task;
	private final FileLogger    m_logger = FileUtil.getLogger();
	private final FileLogger m_statslogger = FileUtil.getStatsLogger();
	
	public PxHandler(CalculateTask task) {
		m_task = task;
	}
	
	@Override
	public void progressMessage(String message) {
		m_logger.writeLine(message);
		m_task.reportProgress(message);
	}

	@Override
	public void reportError(Exception e) {
		m_logger.writeLine("Error: " + e.getMessage());
		m_task.reportError(e);
	}

	@Override
	public void reportStatistcs(StatisticData data) {
		logStatistics(data);
		m_task.reportStatistics(data);
	}

	private void logStatistics(StatisticData data) {
		switch (data.getType()) {
		case MemoryInfoStart:
			logMemoryStatistics("Memory usage at start", data.getMemoryInfo());
			break;
		case MemoryInfoDeplLoad:
			logMemoryStatistics("Memory usage after package load", data.getMemoryInfo());
			break;
		case MemoryInfoCalc:
			logMemoryStatistics("Memory usage after calculations", data.getMemoryInfo());
			break;
		case MemoryInfoEnd:
			logMemoryStatistics("Memory usage at end", data.getMemoryInfo());
			break;
		case LoadTime:
			m_logger.writeLine("Package load time: " + Float.toString(data.getTime()) + " seconds");
			m_statslogger.writeLine("Package load time: " + Float.toString(data.getTime()) + " seconds");
			break;
		case CalcTime:
			m_logger.writeLine("Total calculation time: " + Float.toString(data.getTime()) + " seconds");
			m_logger.writeLine("Minimum calculation time: " + Float.toString(data.getMinCalcTime()) + " seconds");
			m_logger.writeLine("Maximum calculation time: " + Float.toString(data.getMaxCalcTime()) + " seconds");
			m_logger.writeLine("Request count: " + Integer.toString(data.getNbCalcRequests()));
			
			m_statslogger.writeLine("Total calculation time: " + Float.toString(data.getTime()) + " seconds");
			m_statslogger.writeLine("Minimum calculation time: " + Float.toString(data.getMinCalcTime()) + " seconds");
			m_statslogger.writeLine("Maximum calculation time: " + Float.toString(data.getMaxCalcTime()) + " seconds");
			m_statslogger.writeLine("Request count: " + Integer.toString(data.getNbCalcRequests()));
			break;
		default:
		}
	}
	
	private void logMemoryStatistics(String contextInfo, MemoryInfo memoryInfo) {
		m_logger.writeLine(contextInfo);
		m_logger.writeLine("nativePss: " + Integer.toString(memoryInfo.nativePss) + " KBytes");
		m_logger.writeLine("nativePrivateDirty: " + Integer.toString(memoryInfo.nativePrivateDirty) + " KBytes");
		m_logger.writeLine("dalvikPss: " + Integer.toString(memoryInfo.dalvikPss) + " KBytes");
		m_logger.writeLine("nativePrivateDirty: " + Integer.toString(memoryInfo.nativePrivateDirty) + " KBytes");
		
		m_statslogger.writeLine(contextInfo);
		m_statslogger.writeLine("nativePss: " + Integer.toString(memoryInfo.nativePss) + " KBytes");
		m_statslogger.writeLine("nativePrivateDirty: " + Integer.toString(memoryInfo.nativePrivateDirty) + " KBytes");
		m_statslogger.writeLine("dalvikPss: " + Integer.toString(memoryInfo.dalvikPss) + " KBytes");
		m_statslogger.writeLine("nativePrivateDirty: " + Integer.toString(memoryInfo.nativePrivateDirty) + " KBytes");

	}
}
