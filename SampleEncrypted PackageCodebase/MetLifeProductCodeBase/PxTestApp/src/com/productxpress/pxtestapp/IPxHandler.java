package com.productxpress.pxtestapp;

public interface IPxHandler {

	void progressMessage(String message);
	void reportError(Exception e);
	void reportStatistcs(StatisticData data);
}
