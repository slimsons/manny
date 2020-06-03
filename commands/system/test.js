import { Command } from 'discord-akairo'
import config from '../../bot.config'
import { DateTime } from 'luxon'

class TestCommand extends Command {
  constructor () {
    super('test', {
      aliases: ['test', 't'],
      category: 'System',
      description: {
        name: 'Test',
        content: 'A private command for testing embed designs and other things.',
        usage: '!test'
      },
      channel: 'guild',
      ownerOnly: true
    })
  }

  * args () {
    const design = yield { type: 'string' }

    return { design }
  }

  async exec (message, { design }) {
    const timestamp = DateTime.local().toLocaleString(DateTime.DATETIME_FULL)
    const embed = this.client.util.embed()

    switch (design) {
      case 'ban':
        embed
          .setColor(config.embedColors.red)
          .setTitle(':no_entry_sign: __motherflanker#6666__ was banned by __pfist#9999__')
          .setDescription('Reason: Being a terrible person')
          .setFooter(timestamp)
        break
      case 'unban':
        embed
          .setColor(config.embedColors.red)
          .setTitle(':arrow_right_hook: __motherflanker#6666__ was unbanned by __pfist#9999__')
          .setDescription('Reason: Learned from their mistakes')
          .setFooter(timestamp)
        break
      case 'mute':
        embed
          .setColor(config.embedColors.yellow)
          .setTitle(':clock2: __motherflanker#6666__ was muted for __1h__ by __pfist#9999__')
          .setDescription('Reason: Being a jerk and disrupting conversations')
          .setFooter(timestamp)
        break
      case 'unmute':
        embed
          .setColor(config.embedColors.yellow)
          .setTitle(':arrow_right_hook: __motherflanker#6666__ was unmuted by __pfist#9999__')
          .setDescription('Reason: Muted the wrong person')
          .setFooter(timestamp)
        break
      case 'expired':
        embed
          .setColor(config.embedColors.yellow)
          .setTitle(':alarm_clock: Mute expired on __motherflanker#6666__')
          .setFooter(timestamp)
        break
      case 'strike':
        embed
          .setColor(config.embedColors.orange)
          .setTitle(':triangular_flag_on_post: __motherflanker#6666__ received their 1st strike from __pfist#9999__')
          .setDescription('Reason: Spamming Discord invite links')
          .setFooter(timestamp)
        break
      case 'pardon':
        embed
          .setColor(config.embedColors.orange)
          .setTitle(':arrow_right_hook: __motherflanker#6666__ received their 1st strike from __pfist#9999__')
          .setDescription('Reason: Previous strike was a mistake')
          .setFooter(timestamp)
        break
      case 'history':
        break
      case 'join':
        embed
          .setColor(config.embedColors.green)
          .setTitle(':inbox_tray: __motherflanker#6666__ joined the server')
          .setDescription('<@435533673484386306>')
          .setFooter(timestamp)
        break
      case 'bot':
        embed
          .setColor(config.embedColors.blue)
          .setTitle(':robot: __Manny#4953__ was added to the server')
          .setDescription('<@435533673484386306>')
          .setFooter(timestamp)
        break
      case 'leave':
        embed
          .setColor(config.embedColors.red)
          .setTitle(':outbox_tray: __motherflanker#6666__ left the server')
          .setFooter(timestamp)
        break
    }

    return message.channel.send({ embed })
  }
}

export default TestCommand