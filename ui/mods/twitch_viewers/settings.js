(function() {
  api.settings.definitions.server.settings['twitch_viewers_twitch_name'] = {
    title: 'Twitch Name',
    type: 'text',
    default: ''
  }

  // force model.settingsLists to update
  model.settingDefinitions(api.settings.definitions)

  model.twitchViewersTwitchName = model.settingsItemMap()['server.twitch_viewers_twitch_name'].value
  model.twitchViewersTwitchName.subscribe(function(value) {
    api.Panel.message(api.Panel.parentId, 'twitch_viewers_twitch_name', value)
  })

  var settingsHtml = 
    '<div class="form-group">' +
      '<div class="sub-group">' +
        '<div class="option">' +
          '<label>Twitch Name</label>' +
          '<input type="text" class="form-control" value="" data-bind="value: twitchViewersTwitchName" />' +
        '</div>' + 
      '</div>' + 
    '</div>'
  var $group = $(settingsHtml).appendTo('.option-list.server')
})()
