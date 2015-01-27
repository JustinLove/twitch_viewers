model.twitchName = ko.observable('').extend({session: 'twitch_name'})
model.twitchStream = function() {
  if (model.twitchName() && model.twitchName() != '') {
    return model.twitchName()
  } else {
    return null
  }
}

handlers['twitch_viewers_twitch_name'] = function(name) {
  model.twitchName(name)
  api.panels.options_bar.message('twitch_viewers_twitch_stream', model.twitchStream())
}

handlers['update_twitch_viewers_twitch_stream'] = function() {
  api.panels.options_bar.message('twitch_viewers_twitch_stream', model.twitchStream())
}
