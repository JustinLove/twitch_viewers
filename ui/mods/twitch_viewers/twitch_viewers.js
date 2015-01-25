model.twitchViewers = ko.observable('-')
model.twitchStreamLive = ko.observable(false)
Twitch.init({clientId: 'YOUR_CLIENT_ID_HERE'}, function(error, status) {
  var poll = function() {
    Twitch.api({method: 'streams/wondible'}, function(error, data) {
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
  var tick = function() {
    poll()
    setTimeout(poll, 60000)
  }
  if (!error) {
    tick()
    var $tw = $('<div id="twitch_viewers" data-bind="text: twitchViewers, visible: twitchStreamLive"></div>')
    $tw.insertAfter('.div_uberbar_toggle_cont')
  }
})
