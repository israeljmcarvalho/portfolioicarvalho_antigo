Option Explicit

' This is the Sub that opens external files and reads in the contents.
' In this way, you can have separate files for data and libraries of functions
Sub Include(yourFile)

  Dim oFSO, oFileBeingReadIn   ' define Objects
  Dim sFileContents            ' define Strings
  Dim wshShell
  Dim sSOUser

  Set wshShell = CreateObject( "WScript.Shell" )
  sSOUser = UCASE(wshShell.ExpandEnvironmentStrings( "%USERNAME%" ))

  Set oFSO = CreateObject("Scripting.FileSystemObject")

  If sSOUser = "ICARVALHO" Then  ' Desktop JOI-20-1039 e Notebook NAV-80-1077
    Set oFileBeingReadIn = oFSO.OpenTextFile("C:\Users\icarvalho\Documents\VBA\Git\vbscripts\VBS Library.vbs", 1)
  ELSEIF  sSOUser = "ISRAEL" Then ' Desktop irDias
    Set oFileBeingReadIn = oFSO.OpenTextFile("F:\A_Lear\Lear_Projetos\vbscripts\VBS Library.vbs", 1)
  ELSEIF  sSOUser = "ISRAELRODRIGUESDIAS" Then 'Notebook irDias    
    Set oFileBeingReadIn = oFSO.OpenTextFile("D:\A_Lear\Lear_Projetos\vbscripts\VBS Library.vbs", 1)
  END IF


  sFileContents = oFileBeingReadIn.ReadAll
  oFileBeingReadIn.Close
  ExecuteGlobal sFileContents
  
End Sub

Include "VBS Library"

'================================================================================================================================

Dim sSOUser
Dim sScriptdir
Dim sCommit
Dim bolBashScriptPause
Dim sRemote, sBranch

  sSOUser = GetSOUser_Lib
	sScriptdir = CreateObject("Scripting.FileSystemObject").GetParentFolderName(WScript.ScriptFullName)
	sCommit = "Update - " & FormatDateTime(Now, vbGeneralDate)
  sRemote = "origin"
  sBranch = "master"
	bolBashScriptPause = True
	Call GitPush_Lib (sSOUser, sScriptdir, sCommit, sRemote, sBranch, bolBashScriptPause)

