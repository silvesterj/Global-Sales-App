package com.productxpress.pxtestapp;

public class ProgressStatistics implements IProgress {

	private final StatisticData m_statisticData;
	
	public ProgressStatistics(StatisticData statisticData) {
		m_statisticData = statisticData;
	}
	
	@Override
	public Type getType() {
		return Type.STATISTICS;
	}

	@Override
	public String getMessage() {
		return null;
	}

	@Override
	public String getError() {
		return null;
	}

	@Override
	public StatisticData getStatisticData() {
		return m_statisticData;
	}

}
