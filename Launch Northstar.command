#!/bin/zsh
cd -- "$(dirname -- "$0")"
command -v python3 >/dev/null 2>&1 || { echo "Python 3 required. Install Python 3 and try again."; read -r; exit 1; }
(sleep 1; open 'http://127.0.0.1:8765/') >/dev/null 2>&1 &
echo 'Northstar available at http://127.0.0.1:8765/'
echo 'Keep this Terminal window open while using the app. Press Ctrl+C to stop.'
exec python3 -m http.server 8765 --bind 127.0.0.1
