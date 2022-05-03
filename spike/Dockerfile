FROM fusuf/whatsasena:latest

RUN git clone https://github.com/TOXIC-ACE/Spike /root/Spike
WORKDIR /root/Spike/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --ignore-engines

CMD ["node", "bot.js"]
