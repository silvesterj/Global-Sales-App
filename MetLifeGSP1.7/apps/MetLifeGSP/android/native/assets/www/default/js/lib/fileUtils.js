
/* JavaScript content from js/lib/fileUtils.js in folder common */

/* JavaScript content from js/lib/fileUtils.js in folder common */
/* JavaScript content from js/lib/fileUtils.js in folder common */
angular
		.module("FileUtils", [])
		.service(
				"$FileUtils",
				function($rootScope) {
					this.service = "FilePlugin";
					this.relativePath = "relativepath";
					this.absolutePath = "absolutepath";
var thisFileUtils=this;
					this.getExternalStoragePath = function(type) {
						if (type == this.absolutePath) {
							// alert("inexternal"+absoluteExternalStoragePath);
							return $filePath.externalStoragePath + "/";

						} else if (type == this.relativePath) {
							return $filePath.externalStoragePath.replace(
									/file:\/\/\//, '/')
									+ "/";

						}
					};
					this.getApplicationStoragePath = function(type) {
						if (device.platform.toUpperCase().indexOf("IOS") >= 0) {
							return this.getExternalStoragePath(type);
						} else {
							if (type == this.absolutePath) {
								return $filePath.applicationStoragePath + "/";

							} else if (type == this.relativePath) {

								return $filePath.applicationStoragePath
										.replace(/file:\/\/\//, '/')
										+ "/";
							}
						}

					};

					this.getProductXpressPath = function(type) {

						return this.getApplicationStoragePath(type)
								+ "productxpress/";
					};
					this.getProductXpressProductPath = function(type) {

						return this.getProductXpressPath(type) + "products/";
					};
					this.getProductXpressProductDetailsPath = function(type) {

						return this.getProductXpressPath(type)
								+ "productDetails/";
					};
					this.getProductXpressInstallPath = function(type) {

						return this.getProductXpressPath(type) + "install";
					};
					this.getContentPath = function(type) {

						return this.getExternalStoragePath(type) + "MetLife/";
					};
					this.getLogFile = function(type) {

						return this.getProductXpressPath(type) + "log.txt";
					};
					this.getStatsFile = function(type) {

						return this.getProductXpressPath(type) + "stats.txt";
					};
					this.getServerPath = function() {
						//return "http://10.207.52.18:8080/Download/";
						return "https://instance01.dev.sl.metlife.com/globalsales/";

						// return
						// this.getExternalStoragePath(this.absolutePath);

					};
					this.getLocalProductDetailsPath = function() {
						return "json/productDetails/";
						// return
						// this.getExternalStoragePath(this.absolutePath);

					};
					this.getProductServerPath = function() {
						return this.getServerPath() + "files/products/";
					};
					this.getContentServerPath = function() {
						return this.getServerPath() + "files/contents/";

					};
					this.getDependencyServerPath = function() {
						return this.getServerPath()
								+ "files/dependency/productxpress.zip";
					};
					this.unZip = function(sourcePath, destinationPath, success,
							fail) {
						cordova.exec(success, fail, this.service, "unZip", [
								sourcePath, destinationPath ]);
					};
					this.open = function(sourcePath, extension, success, fail) {
						cordova.exec(success, fail, this.service, "open", [
								sourcePath, extension ]);
					};
					this.email = function(emailAddress, subject, body,
							attachment, success, fail) {

						cordova.exec(success, fail, "EmailPlugin", "email", [
								emailAddress, subject, body, attachment ]);
					};
					this.generatePdf = function(docDefinition, fileName) {
						
						/*
						 * if (!window.cordova) { alert("browser");
						 * pdfMake.createPdf(docDefinition).open(fileName); }
						 * else {
						 */

						var pdfOutput;

						pdfMake
								.createPdf(docDefinition)
								.getBuffer(
										function(base64) {

											pdfOutput = new Blob([ base64 ]);

											window
													.requestFileSystem(
															LocalFileSystem.PERSISTENT,
															0,
															function(fileSystem) {
																

																fileSystem.root
																		.getFile(
																				fileName+".pdf",
																				{
																					create : true
																				},
																				function(
																						entry) {

																					entry
																							.createWriter(
																									function(
																											writer) {
																										writer.onwrite = function(
																												evt) {
																											//alert("write success");
																											thisFileUtils.open(thisFileUtils.getExternalStoragePath(thisFileUtils.relativePath)+fileName,"pdf",function(s){},function(e){alert(JSON.stringify(e));});
																										};

																										writer
																												.write(pdfOutput);

																										// writer.write(buffer);
																									},
																									function(
																											error) {
																										console
																												.log("error:"
																														+ error);
																									});

																				},
																				function(
																						error) {
																					console
																							.log(error);
																				});
															},
															function(event) {
																console
																		.log(evt.target.error.code);
															});

										});
						// }
					};
					this.download = function(source, destination, authToken,
							successCallback, errorCallback) {
						authToken = JSON.parse(authToken);
						var ft = new FileTransfer();

						ft.download(source, destination, successCallback,
								errorCallback, false, {
									headers : {

										username : authToken.username,
										password : authToken.password
									}
								});

					};
					this.productDownload = function(source, destination, index,
							authToken, successCallback, errorCallback) {
						authToken = JSON.parse(authToken);
						var ft = new FileTransfer();
						ft.onprogress = function(progressEvent) {
							if (device.platform.toUpperCase().indexOf("IOS") >= 0) {
								$rootScope.$productDownloadPercent[index] = Math
										.floor(progressEvent.loaded
												/ progressEvent.total * 100);
							} else {
								$rootScope.$productDownloadPercent[index] = Math
										.floor(progressEvent.loaded
												/ progressEvent.total * 50);
							}

							$rootScope.$digest();
						};
						ft.download(source, destination, successCallback,
								errorCallback, false, {
									headers : {

										username : authToken.username,
										password : authToken.password
									}
								});

					};
					this.contentDownload = function(source, destination, index,
							authToken, successCallback, errorCallback) {
						authToken = JSON.parse(authToken);
						var ft = new FileTransfer();
						ft.onprogress = function(progressEvent) {
							if (device.platform.toUpperCase().indexOf("IOS") >= 0) {
								$rootScope.$contentDownloadPercent[index] = Math
										.floor(progressEvent.loaded
												/ progressEvent.total * 100);
							} else {
								$rootScope.$contentDownloadPercent[index] = Math
										.floor(progressEvent.loaded
												/ progressEvent.total * 50);
							}
							$rootScope.$digest();
						};
						ft.download(source, destination, successCallback,
								errorCallback, false, {
									headers : {

										username : authToken.username,
										password : authToken.password
									}
								});

					};

				});
