@echo off
echo ===============================
echo Building Albion DPS Meter EXE
echo ===============================

npm install

echo.
echo Building executable...
npx pkg . --targets node18-win-x64 --output dist/AODPSM.exe

echo.
echo Build complete!
pause