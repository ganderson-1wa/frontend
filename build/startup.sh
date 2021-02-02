#!/bin/bash

CONF_DIR='/usr/share/nginx/html/conf'
MGMT_DIR='/usr/share/nginx/html/mgmt'
ENV_FILE="$CONF_DIR/env.json"
HEALTH_FILE="$MGMT_DIR/health"



echo "Vars passed in:"
echo "ENV is set to '$ENV'"
echo "HOST is set to '$HOST'"
echo "VERSION is set to '$VERSION'"

mkdir -p $CONF_DIR/
mkdir -p $MGMT_DIR/

SERVER=$(hostname)
NOW=$(date)

cat > $ENV_FILE << EOF
{
    "env": "$ENV",
    "host": "$HOST",
    "version": "$VERSION",
    "host_url": "https://$HOST",
    "resources_url": "https://$HOST/api/resources",
    "server": "$SERVER",
    "created": "$NOW"
}
EOF

echo "Created '$ENV_FILE':"
cat $ENV_FILE
echo 

cat > $HEALTH_FILE << EOF
status=UP
EOF

echo "Created '$HEALTH_FILE':"
cat $HEALTH_FILE
echo 
