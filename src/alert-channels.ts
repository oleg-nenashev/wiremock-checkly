import { URL } from 'node:url'
import {
  SmsAlertChannel,
  EmailAlertChannel,
  SlackAlertChannel,
  WebhookAlertChannel
} from 'checkly/constructs'

const sendDefaults = {
  sendFailure: true,
  sendRecovery: true,
  sendDegraded: false,
  sslExpiry: true,
  sslExpiryThreshold: 30
}

export const emailChannel = new EmailAlertChannel('email-channel-1', {
  address: 'oleg+checkly@wiremock.org',
  ...sendDefaults
})

// TODO
/*
export const slackChannel = new SlackAlertChannel('slack-channel-1', {
  url: new URL('https://hooks.slack.com/services/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'),
  channel: '#ops',
  ...sendDefaults
})*/
