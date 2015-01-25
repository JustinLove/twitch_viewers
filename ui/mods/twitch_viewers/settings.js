model.twitchName = model.twitchName.extend({local: 'twitch_name'})
model.twitchName.subscribe(function() {
  api.Panel.message(api.Panel.parentId, 'update_twitch_viewers_twitch_stream')
})
