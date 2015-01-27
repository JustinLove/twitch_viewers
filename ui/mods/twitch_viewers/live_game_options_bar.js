model.twitchViewers = ko.observable('-')
model.twitchStreamLive = ko.observable(false)
Twitch.init({clientId: 'YOUR_CLIENT_ID_HERE'}, function(error, status) {
  var twitchStream = ko.observable()
  var poll = function() {
    if (twitchStream()) {
      Twitch.api({method: 'streams/'+twitchStream()}, function(error, data) {
        if (data.stream) {
          model.twitchStreamLive(true)
          model.twitchViewers(data.stream.viewers.toString())
        } else {
          model.twitchStreamLive(false)
          model.twitchViewers('-')
        }
        console.log(model.twitchViewers())
      })
    }
  }
  var queryStream = function() {
    api.Panel.message(api.Panel.parentId, 'update_twitch_viewers_twitch_stream')
  }
  var tick = function() {
    poll()
    setTimeout(tick, 60000)
  }
  if (!error) {
    queryStream()
    tick()

    var $tw = $('<div id="twitch_viewers" data-bind="text: twitchViewers, visible: twitchStreamLive"></div>')
    $('.div_ingame_options_bar_cont').prepend($tw)
  }

  handlers['twitch_viewers_twitch_stream'] = function(stream) {
    twitchStream(stream)
    poll()
  }
})
