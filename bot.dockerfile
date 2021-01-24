FROM node:15.5.1

LABEL description "OBS Websocket Bot"
EXPOSE 4444

RUN git clone https://github.com/Paragrimm/OBS-Websocket-Bot-for-Twitch.git
WORKDIR /OBS-Websocket-Bot-for-Twitch
RUN npm i && npm cache verify

VOLUME [ "/commands", "/json" ]

CMD [ "node", "bot.js"]