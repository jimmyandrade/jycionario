var app = angular.module('jycionario', [])
  .filter('translate', function() {
    return function(input) {
      translatedInput = input;

      var pattern = /\b\w*(de\sment|de\sme|de\smi|de\sv|di|dí|dmi|gin|gí|dinhos|dinho|jinhos|jinho)\w*\b/ig;
      translatedInput = translatedInput.replace(pattern, function replacer(match) {
        var original = match;
        match = match.replace("de ment", "jimmynt");
        match = match.replace("de me", "jimme");
        match = match.replace("de mi", "jimmy");
        match = match.replace("de v", "jyv");
        match = match.replace("di", "jy");
        match = match.replace("dí", "jý");
        match = match.replace("dmi", "jimmy");
        match = match.replace("gin", "jimn");
        if(match !== 'login') {
          match = match.replace("gi", "jy");
        }
        match = match.replace("gí", "jy");
        match = match.replace("dinhos", "jimnhos");
        match = match.replace("dinho", "jimm");
        match = match.replace("jinhos", "jimnhos");
        match = match.replace("jinho", "jimm");
        // console.log('Matched in any place of word', pattern, 'Original: ' + original, 'Changed: ' + match);
        return match;
      });

      var pattern = /\b\w*(de|gem|ge|id|dy|idge|dge|te)\b/ig;
      translatedInput = translatedInput.replace(pattern, function replacer(match) {
        var original = match;
        match = match.replace("idge", "idjy");
        match = match.replace("dge", "djy");
        match = match.replace("de", "jy");
        match = match.replace("di", "jy");
        match = match.replace("gem", "jy");
        match = match.replace("ge", "jy");
        if(match !== 'solid' && match !== 'solid') {
          match = match.replace("id", "ijy");
        }
        match = match.replace("dy", "djy");
        if(match !== 'teste' && match !== 'tente' && match !== 'late' && match !== 'white') {
          match = match.replace("te", "tchy");
        }
        else {
          match = 'testchy';
        }
        // console.log('Matched at end of word', pattern, original, match);
        return match;
      });

      var pattern = /\b(dema|demai|din)\w*\b/ig;
      translatedInput = translatedInput.replace(pattern, function replacer(match) {
        var original = match;
        match = match.replace("demai", "jimmay");
        match = match.replace("dema", "jimma");
        match = match.replace("din", "jimn");
        // console.log('Matched at begin of word', pattern, original, match);
        return match;
      });

      var pattern = /\b(de)\b/ig;
      translatedInput = translatedInput.replace(pattern, function replacer(match) {
        var original = match;
        match = match.replace("de", "jy");
        // console.log('Matched whole word', pattern, original, match);
        return match;
      });

      return translatedInput;
    };
  })
  .controller('MainController', function($scope) {
    $scope.text = '';
    var original = document.getElementById('original');
    var translated = document.getElementById('translated');
    var changeOriginalScroll = function(e) {
      original.scrollTop = translated.scrollTop;
    };
    var changeTranslatedScroll = function(e) {
      translated.scrollTop = original.scrollTop;
    };
    original.addEventListener('scroll', changeTranslatedScroll, false);
    translated.addEventListener('scroll', changeOriginalScroll, false);
  });
