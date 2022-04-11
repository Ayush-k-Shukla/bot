require('dotenv').config();
const { RTMClient } = require('@slack/rtm-api');

const token = process.env.SLACK_BOT_TOKEN;

const rtm = new RTMClient(token);

rtm.on('ready', async () => {
  console.log(`bot connected`);
});

(async () => {
  await rtm.start();
  await rtm.sendMessage('Bot is online now !!', 'test');
})();

rtm.on('message', async (event) => {
  try {
    if (event.text === '!hi') {
      await rtm.sendMessage(`hello  <@${event.user}>`, event.channel);
    }
  } catch (error) {
    console.log(error);
  }
});

// rtm.on('channel_created', async (event) => {
//   console.log(event);
//   try {
//     await rtm.sendMessage(
//       `Channel ${event.channel.id} created by <@${event.channel.creator}>`,
//       event.channel.id
//     );
//   } catch (error) {
//     console.log(error);
//   }
// });
