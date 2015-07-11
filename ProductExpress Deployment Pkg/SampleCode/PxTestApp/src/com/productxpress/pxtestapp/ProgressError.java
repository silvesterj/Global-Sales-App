package com.productxpress.pxtestapp;

public class ProgressError implements IProgress {

	String m_error;
	
	public ProgressError(String error) {
		m_error = error;
	}
	
	public ProgressError(Exception e) {
		m_error = e.getMessage();
	}
	
	@Override
	public Type getType() {
		return Type.ERROR;
	}

	@Override
	public String getMessage() {
		return null;
	}

	@Override
	public String getError() {
		return m_error;
	}

	@Override
	public StatisticData getStatisticData() {
		return null;
	}
}
