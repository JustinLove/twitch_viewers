model.displayName = ko.observable('').extend({ session: 'displayName' });
model.twitchName = function() {
  return JSON.parse(localStorage.twitch_name || '')
}
model.twitchStream = function() {
  if (model.twitchName() && model.twitchName() != '') {
    return model.twitchName()
  } else if (model.displayName() && model.displayName() != '') {
    return model.displayName()
  } else {
    return null
  }
}

handlers['update_twitch_viewers_twitch_stream'] = function() {
  api.panels.options_bar.message('twitch_viewers_twitch_stream', model.twitchStream())
}
