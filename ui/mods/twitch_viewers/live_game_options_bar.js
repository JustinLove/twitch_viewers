model.twitchViewers = ko.observable('-')
model.twitchStreamLive = ko.observable(false)
model.twitchStream = ko.observable()
Twitch.init({clientId: 'YOUR_CLIENT_ID_HERE'}, function(error, status) {
  var poll = function() {
    if (model.twitchStream()) {
      Twitch.api({method: 'streams/'+model.twitchStream()}, function(error, data) {
        if (data && data.stream) {
          model.twitchStreamLive(true)
          model.twitchViewers(data.stream.viewers.toString())
        } else {
          model.twitchStreamLive(false)
          model.twitchViewers('TV')
        }
        console.log(model.twitchViewers())
      })
    }
  }
  var queryStream = function() {
    api.Panel.message(api.Panel.parentId, 'update_twitch_viewers_twitch_stream')
  }
  var tick = function() {
    if (model.twitchStreamLive()) {
      poll()
    }
    setTimeout(tick, 60000)
  }
  model.twitchViewersPoll = poll

  if (!error) {
    queryStream()
    tick()

    var $tw = $('<div id="twitch_viewers" class="btn_ingame_options btn_std_ix" data-bind="text: twitchViewers, css: { twitch_viewers_live: twitchStreamLive }, visible: twitchStream, click: twitchViewersPoll, tooltip: \'Twitch Viewers (click to poll)\'"></div>')
    $('.div_ingame_options_bar_cont').prepend($tw)
  }

  handlers['twitch_viewers_twitch_stream'] = function(stream) {
    model.twitchStream(stream)
    poll()
  }
})
