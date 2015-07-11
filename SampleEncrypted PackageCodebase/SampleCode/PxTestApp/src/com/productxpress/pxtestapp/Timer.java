package com.productxpress.pxtestapp;

public final class Timer {

	private long startTime = 0;
	
	public Timer() {
	}
	
	public void start() {
		startTime = System.currentTimeMillis();
	}
	
	public float elapsedTime() {
		return ((float)(System.currentTimeMillis()-startTime))/1000;
	}
}
