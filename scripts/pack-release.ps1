# Monta dist/Lang-Miojo-PTBR-v<versao>.zip com a estrutura do pacote:
#   Lang/config.json  +  Lang/Miojo-PTBR/<translations/ + Font/>
# Uso: powershell -File scripts/pack-release.ps1 2.1.0
param([Parameter(Mandatory=$true)][string]$Version)
$root = Split-Path $PSScriptRoot -Parent
$stage = Join-Path $env:TEMP "miojo-pack"
if (Test-Path $stage) { Remove-Item $stage -Recurse -Force }
$lang = New-Item -ItemType Directory -Path (Join-Path $stage "Lang") -Force
Copy-Item (Join-Path $root "assets/lang/config.json") $lang.FullName
$pt = New-Item -ItemType Directory -Path (Join-Path $lang.FullName "Miojo-PTBR") -Force
Copy-Item (Join-Path $root "translations/*") $pt.FullName -Recurse -Force
Copy-Item (Join-Path $root "assets/lang/Font") $pt.FullName -Recurse -Force
$dist = New-Item -ItemType Directory -Path (Join-Path $root "dist") -Force
$zip = Join-Path $dist.FullName "Lang-Miojo-PTBR-v$Version.zip"
if (Test-Path $zip) { Remove-Item $zip -Force }
Compress-Archive -Path (Join-Path $stage "Lang") -DestinationPath $zip -CompressionLevel Optimal
Remove-Item $stage -Recurse -Force
Write-Host "OK: $zip"
