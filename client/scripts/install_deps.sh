# /bin/sh 
if [ ! -d "node_modules" ]; then
echo "==== Installing dependencies ======" 
npm i
else
echo "==== Dependencies already installed ======" 
fi

# Start the server
npm start