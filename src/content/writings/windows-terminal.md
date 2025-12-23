# >\_ my windows terminal

![Windows Terminal Setup](windows-terminal.jpg)

## **Prerequisites**

1. **Windows Terminal:** Ensure you have Windows Terminal installed on your system.
2. **Download Repository:**
   - Download the repository and locate the `windowsTerminalSetting.json` file.
3. **Open Windows Terminal Settings:**
   - Open Windows Terminal and press `Ctrl + Shift + , (comma)` to access settings.
   - Replace the existing JSON configuration with the content of `windowsTerminalSetting.json` from the repository.
4. **Background Images and Fonts:**
   - Customize background images and fonts by navigating to `Defaults > Appearance` in the settings.

## Install oh-my-posh

In your terminal, execute these commands one by one

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force
Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('<https://ohmyposh.dev/install.ps1>'))

```

Create a new profile by running:

```powershell
New-Item -Path $PROFILE -Type File -Force

```

Open the newly created profile in your preferred code editor:

```powershell
notepad $PROFILE

```

inside this file you’ll find url to a dir like this-

```powershell
D:\Me\posh-configs\themes\shell.json

```

replace this with the path where you have the [\*\*myPoshTheme.json](https://github.com/dev-palwar/my-terminal/blob/windows-terminal/myPoshTheme.json)\*\*

## Apply Themes

```powershell
Get-PoshThemes
```

Ctrl + click on a theme to open its .json content. Copy and paste the content into your `myPoshTheme.json` file.

## Additional Enhancements

### Install Terminal-Icons Module

```powershell
Install-Module -Name Terminal-Icons -Repository PSGallery

```

### Install PSReadLine for Intellisense

```powershell
Install-Module PSReadLine -AllowPrerelease -Force

Install-Module -Name PSReadLine -Force

```

## Fonts :

If you don’t like the system fonts, you can go with with

1. **nerd fonts** - [https://www.nerdfonts.com/font-downloads](https://www.nerdfonts.com/font-downloads)

Navigate to the fonts location:

```powershell
cd $Env:UserProfile\\AppData\\Local\\Microsoft\\Windows\\Fonts
```

1. **oh-my-posh fonts**

```powershell
oh-my-posh font install
```

After installation they’ll be available in the Default > appearance in the settings.

With this your terminal setup is now ready! Reload your terminal, and enjoy the enhanced and visually appealing environment. Customize further as per your preferences.
