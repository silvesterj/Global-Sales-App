package com.productxpress.pxtestapp;

public class ProgressMessage implements IProgress {

	private String m_message;
	
	public ProgressMessage(String message) {
		m_message = message;
	}
	
	@Override
	public Type getType() {
		return Type.MESSAGE;
	}

	@Override
	public String getMessage() {
		return m_message;
	}

	@Override
	public String getError() {
		return null;
	}

	@Override
	public StatisticData getStatisticData() {
		return null;
	}

}
