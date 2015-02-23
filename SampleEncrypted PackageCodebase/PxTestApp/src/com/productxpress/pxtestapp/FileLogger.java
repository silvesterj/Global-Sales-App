package com.productxpress.pxtestapp;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;

public class FileLogger {

	private File m_file;
	private BufferedWriter m_writer = null;
	
	public FileLogger(File file) {
		m_file = file;
	}
	
	public void write(String data) {
		try{
			if(m_writer == null) {
				createWriter();
			}
			
		    m_writer.write(data);
		    m_writer.flush();
		    
		} catch(Exception e) {
		}
	}
	
	public void writeLine(String data) {
		try{
			if(m_writer == null) {
				createWriter();
			}
			
		    m_writer.write(data);
		    m_writer.write('\n');
		    m_writer.flush();		    
		} catch(Exception e) {
		}
	}
	
	private void createWriter() throws Exception {
		if(!m_file.exists()) {
			m_file.createNewFile();
		}
		
		m_writer = new BufferedWriter(new FileWriter(m_file, true));
	}
}
