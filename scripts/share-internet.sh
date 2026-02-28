#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-8000}"

cat <<MSG
Starting public tunnel for local app on port ${PORT} via localhost.run.
Keep this terminal open. Press Ctrl+C to stop sharing.
MSG

ssh -o ExitOnForwardFailure=yes -o ServerAliveInterval=60 -R 80:localhost:${PORT} nokey@localhost.run
