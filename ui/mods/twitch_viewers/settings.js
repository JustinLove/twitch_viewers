model.twitchName = model.twitchName.extend({session: 'twitchname'})
model.twitchName.subscribe(function(value) {
  api.Panel.message(api.Panel.parentId, 'twitch_viewers_twitch_name', value)
})
