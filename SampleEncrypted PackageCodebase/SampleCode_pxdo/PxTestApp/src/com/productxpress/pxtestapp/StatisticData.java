package com.productxpress.pxtestapp;

import android.os.Debug.MemoryInfo;

public class StatisticData {
	enum Type {MemoryInfoStart, MemoryInfoDeplLoad, MemoryInfoPreOptimize, MemoryInfoCalc, MemoryInfoEnd, LoadTime, PreOptimizeTime, CalcTime};
	
	private Type             m_type;
	private float            m_time = 0;
	private float            m_minCalcTime = 0;
	private float            m_maxCalcTime = 0;
	private int              m_nbCalcRequests = 0;
	private MemoryInfo       m_memoryInfo;

	private StatisticData(Type type, float time) {
		m_type = type;
		m_time = time;
	}
	
	private StatisticData(Type type, float time, float minTime, float maxTime, int nbRequests) {
		m_type = type;
		m_time = time;
		m_minCalcTime = minTime;
		m_maxCalcTime = maxTime;
		m_nbCalcRequests = nbRequests;
	}
	
	private StatisticData(Type type, MemoryInfo memoryInfo) {
		m_type = type;
		m_memoryInfo = memoryInfo;
	}
	
	public static StatisticData createLoadTime(float time) {
		return new StatisticData(Type.LoadTime, time);
	}
	
	public static StatisticData createPreOptimizeTime(float time) {
		return new StatisticData(Type.PreOptimizeTime, time);
	}
	
	public static StatisticData createCalcTime(float time, float minTime, float maxTime, int nbRequests) {
		return new StatisticData(Type.CalcTime, time, minTime, maxTime, nbRequests);
	}
	
	public static StatisticData createMemoryInfoStart(MemoryInfo memoryInfo) {
		return new StatisticData(Type.MemoryInfoStart, memoryInfo);
	}
	
	public static StatisticData createMemoryInfoDeplLoad(MemoryInfo memoryInfo) {
		return new StatisticData(Type.MemoryInfoDeplLoad, memoryInfo);
	}
	
	public static StatisticData createMemoryInfoPreOptimize(MemoryInfo memoryInfo) {
		return new StatisticData(Type.MemoryInfoPreOptimize, memoryInfo);
	}
	
	public static StatisticData createMemoryInfoCalc(MemoryInfo memoryInfo) {
		return new StatisticData(Type.MemoryInfoCalc, memoryInfo);
	}
	
	public static StatisticData createMemoryInfoEnd(MemoryInfo memoryInfo) {
		return new StatisticData(Type.MemoryInfoEnd, memoryInfo);
	}
	
	public Type getType() {
		return m_type;
	}
	
	public float getTime() {
		return m_time;
	}
	
	public float getMinCalcTime() {
		return m_minCalcTime;
	}
	
	public float getMaxCalcTime() {
		return m_maxCalcTime;
	}
	
	public int getNbCalcRequests() {
		return m_nbCalcRequests;
	}
	
	public MemoryInfo getMemoryInfo() {
		return m_memoryInfo;
	}
}
