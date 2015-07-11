
HP ProductXpress calculator for Android platform release: 3.7.2
===============================================================

===========================================
Delivered content
===========================================
The Android.zip file contains all that is needed to use the Android embedded calculator in an Android App.

The zip file contains:
1. All ProductXpress jar files and native shared libraries for android 32 bit App development in the libs directory.
2. An example Android App with source code for use in Eclipse for Android development in the PxTestApp directory.
  (It also includes the .apk file that could be installed on Android devices)
3. Test data and ProductXpress settings/configuration files to be used with the example Android App in the productxpress
   directory.

===========================================
Minimum hardware required / Android support
===========================================
1. 512 MB Ram Device with 2 GB external Storage
2. Android 4.0 Ice Cream Sandwich (API level 14)
3. Developed support for "Android 4.4 KitKat (API level 19)"
 

=============================================================
Steps required for building Android App. (Compile time steps)
=============================================================

Find the essential libraries and jar files as below

1. Jars Library to be found in "PxTestApp\libs" of the Code base

The jars files required for the ProductXpress embedded calculator runtime environment are:
a. FiaJNI.jar
b. pxjavaruntime.jar
c. PxUtils.jar
d. PxVal.jar

2. The native shared libraries for the ProductXpress embedded calculator runtime environment 
   (Located in directory: "PxTestApp/libs/armeabi") are: 

a. libCalculatorJNI.so
b. libexslt.so
c. libiconv.so
d. libxml2.so
e. libxslt.so

3. Building the Android App. ( ** Ensure that you have the native dependency enabled**)

a. For any android App, ensure to enable the development IDE having native support. The developed App has dependency
   on the the native libraries so, the native support has to be explicitly mentioned as a compile time parameter. This option
   is generally done my making an "armeabi" directory in the dependency directory namely "libs" directory of the IDE of the 
   code base directory structure. Ensure that "native path" is also mentioned in the build path of the "Build System" of the 
   IDE being used.
b. Use the setting provided in the "AndroidManifest.XML" as there are logs written in the Android Device files system
   and the App should have a security for "write enabled"


4. Code steps for using the embedded calculator . Please refer the code base. Basic code snippet as below

PxCalculatorHome calculatorHome = PxCalculatorHomeJNI.instance();
 calculatorHome.initialize(getProductXpressInstallPath()); 
calculatorHome.loadDeploymentPackage("TestInput/MyDeployment2_1_0.pxdp", null, null, null);
PxPushCalculator calculator = calculatorHome.getPushCalculator();
String request;
// Construct the request string
String result = calculator.calculate(request);


========================================================================================
Steps required for running the example App developed with above steps. (Runtime steps)
========================================================================================

1. PxCalculatorHome object need some initial setting files for initialising the ProductXpress runtime environment.
   Copy the "productxpress" directory provided to the device at "/storage/sdcard0". ******Please do not make a 
   separate directory and then copy in it******. Ensure that it is on the same directory level as the other system directories.

2. The copied "productxpress" directory has the "install/Etc" directory containing among others, ProductXpress settings files 
   and the "products" directory that contains the products for the test App.

					**********Note****** 
The directory structure mentioned above is in consistent with the test App provided. Depending on the need
the directory name and structure path can be changed it would require the code changes accordingly at the
calculator initialization.


============================================================================
Steps Required for installing the PxTestApp provided  on any Android Device
============================================================================

1. Disable all the "security policies" required.
2. Follow the standard steps of installing the "PxTestApp" by copying the PxTestApp.apk
   file (Located in PxTestApp/bin directory) to the Android device using a USB connection.
3. Ensure to copy the "productxpress" directory to the "/storage/sdcard0" which contains all the
   setting files and products.
4. Click/touch to install on the device .
5. Ensure that the App starts and select the appropriate product and then press "Calculate".
6. See the output in the respective product directory as ."clcout" files.
7. See the logs in the "productxpress" directory as "log.txt" and "stats.txt"


