==================================================================
Readme for using the Distributables for Embedded Calculator Push Mode
===================================================================


===========================================
Minimum Hardware Required / Android Support
===========================================
1. 512 MB Ram Device with 2 GB external Storage
2. Android 4.0 | 4.0.2 Ice Cream Sandwich (API level 14)
3.Developed support for "Android 4.4 KitKat (API level 19)"
 

=============================================================
Steps required for building Android App. (Compile Time Steps)
=============================================================

Find the Essential Libraries and Jars as below

1.  Jars Libarary to be found in "PxTestApp\libs" of the Code base

Find the jars libaries required for the PX Embeded Calcualtor Runtime environment and other Utility jars namely below
a.FiaJNI.jar
b.pxjavaruntime.jar
c.PxUtils.jar
d.PxVal.jar
Total jars size is 64 KB

2.Native Libararies for support the PxRuntime Environment to be found in "PxTestApp\libs\armeabi" of the Code base 
The Native Libraries (.so files) namely as below

a.libCalculatorJNI.so
b.libexslt.so
c.libiconv.so
d.libxml2.so
e.libxslt.so
Total Native size is 24 MB 

Total Size of the Jars + Native Libraries is around 24.64 MB approx. All the distributables are necessary and PX system
cannot execute with anything missing.


3.Building the Android App. ( ** Ensure that you have the native dependency enabled**)

a. For any android app,please ensure to enable the Developement IDE having Native support.The developed apps have dependency
on the the native libaries so,the native support has to be explicitly mentioned as a compile time parameter.This option
is generally done my making an "armeabi" directory in the dependency directory namely  "libs" directory of the IDE or the 
Code Base Directory Structure. Ensure that "native path" is also mentioned in the Build path of the "Build System" of the 
IDE being used.
b.Please use the setting provided in the "AndroidManifest.XML" as there are logs written in the Android Device files system
and app should have a security for "write enabled"


4.Code  Steps for using the Embedded Calculator . Please refer the code base. Basic code snippet as below

PxCalculatorHome calculatorHome = PxCalculatorHomeJNI.instance();
 calculatorHome.initialize(getProductXpressInstallPath()); 
calculatorHome.loadDeploymentPackage("TestInput/MyDeployment2_1_0.pxdp", null, null, null);
PxPushCalculator calculator = calculatorHome.getPushCalculator();
String request;
// Construct the request string
String result = calculator.calculate(request);


========================================================================================
Steps Required for Running the Sample app developed with above Steps. (Runtime Steps)
========================================================================================

1. PxCalculatorHome Object need some intial Setting files for initialing the PX Runtime Environment.
Please copy the "productxpress" provided in the device at "/storage/sdcard0". ******Please do not make a 
separate directory and then copy in it******. Ensure that it is in directory level as the other system directories.

2. The copied "productxpress" directory has the "etc" Directory i..e having settings file and the "products"
directories having the products.

					**********Note****** 
The directory structure mentioned above is in consistent with the Test App provided. Depending on the need
the Directory name and structure path can be changed it would require the code changes accordingly at the
Calculator Initialization.


============================================================================
Steps Required for installing the PxTestApp provided  on any Android Device
============================================================================

1. Please follow the standard steps of installing the "PxTestApp" by copying the PxTestApp.APK
file in the Android Device by connecting througg USB.
2. Please ensure to copy the "productxpress" Directory in the "/storage/sdcard0" which has all the
setting file and products
3. Ensure that before Step# you disable all the "Security policies" required.
4. Click/touch  to install on the device 
5. Ensure that Application starts and select the appropirate Product and then "press Calculate"
6. See the Output in the respective product Direcory as ."clcout" files.
7.See the logs in the "productxpress" directory as "log.txt" and "stats.txt"

