git pull
chmod 777 start.sh

yarn
yarn build

pm2 delete kana-bbs
pm2 start yarn --name kana-bbs -- start
