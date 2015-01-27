model.twitchName = model.twitchName.extend({session: 'twitch_name'})
model.twitchName.subscribe(function(value) {
  api.Panel.message(api.Panel.parentId, 'twitch_viewers_twitch_name', value)
})
