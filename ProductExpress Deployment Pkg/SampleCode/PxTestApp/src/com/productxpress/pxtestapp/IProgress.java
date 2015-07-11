package com.productxpress.pxtestapp;

public interface IProgress {
	
	enum Type{ ERROR, MESSAGE, STATISTICS };
	
	Type getType();
	String getMessage();
	String getError();
	StatisticData getStatisticData();
	
}
