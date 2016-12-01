var app = angular.module('jycionario', [])
  .filter('translate', function() {
    return function(input) {
      translatedInput = input;

      var pattern = /\b\w*(de\sment|de\smi|de\sm|de\sv|di|dí|die|dmi|gin|gí|dinhos|dinho|jinhos|jinho|inho|ti)\w*\b/gi;
      translatedInput = translatedInput.replace(pattern, function replacer(match) {
        var original = match;
        match = match.replace(/de ment/i, "Jimmynt");
        match = match.replace(/de mi/i, "Jimmy");
        match = match.replace(/de m/i, "Jimm");
        match = match.replace(/de v/i, "Jyv");
        match = match.replace(/die/i, "dJye");
        match = match.replace(/di/i, "Jy");
        match = match.replace(/dí/i, "Jý");
        match = match.replace(/dmi/i, "Jimmy");
        match = match.replace(/gin/i, "Jimn");
        if(match !== 'login') {
          match = match.replace(/gi/i, "Jy");
        }
        match = match.replace(/gí/i, "Jy");
        match = match.replace(/dinhos/i, "Jimnhos");
        match = match.replace(/dinho/i, "Jimm");
        match = match.replace(/jinhos/i, "Jimnhos");
        match = match.replace(/jinho/i, "Jimm");
        match = match.replace(/inho/i, "imm");
        match = match.replace(/ti/i, "tchy");
        // console.log('Matched in any place of word', pattern, 'Original: ' + original, 'Changed: ' + match);
        return match;
      });

      var pattern = /\b\w*(de|gem|ge|id|dy|idge|dge|te|ti|tes)\b/gi;
      translatedInput = translatedInput.replace(pattern, function replacer(match) {
        var original = match;
        match = match.replace(/idge/i, "idJy");
        match = match.replace(/dge/i, "dJy");
        match = match.replace(/de/i, "Jy");
        match = match.replace(/di/i, "Jy");
        match = match.replace(/gem/i, "Jy");
        match = match.replace(/ge/i, "Jy");
        match = match.replace(/tes/i, "tchys");
        if(match !== 'solid' && match !== 'solid') {
          match = match.replace(/id/i, "iJy");
        }
        match = match.replace(/dy/i, "dJy");
        if(match !== 'teste' && match !== 'tente' && match !== 'late' && match !== 'white') {
          match = match.replace(/te/i, "tchy");
        }
        else {
          match = 'testchy';
        }
        // console.log('Matched at end of word', pattern, original, match);
        return match;
      });

      var pattern = /\b(dema|demai|din|gemi)\w*\b/gi;
      translatedInput = translatedInput.replace(pattern, function replacer(match) {
        var original = match;
        match = match.replace(/demai/i, "Jimmay");
        match = match.replace(/dema/i, "Jimma");
        match = match.replace(/din/i, "Jimn");
        match = match.replace(/gemi/i, "Jimmy")
        // console.log('Matched at begin of word', pattern, original, match);
        return match;
      });

      var pattern = /\b(de)\b/gi;
      translatedInput = translatedInput.replace(pattern, function replacer(match) {
        var original = match;
        match = match.replace("de", "Jy");
        // console.log('Matched whole word', pattern, original, match);
        return match;
      });

      return translatedInput;
    };
  })
  .controller('MainController', function($scope) {
    $scope.text = '';
    var samples = ['imprescindível', 'prescindir', 'cônjuge', 'diligência', 'plenitude', 'equidade', 'paradigma', 'reciprocidade', 'terraplanagem', 'diuturnamente', 'dicionário', 'gramatical', 'etimologia',
  'divisão', 'transitividade', 'conjugação de verbos', 'dinâmico', 'idiomáticas', 'corrente', 'infinitivo', 'gramaticalmente', 'relevantes', 'colchetes', 'utilizadas'];
    $scope.randomWord = samples[Math.floor(Math.random() * samples.length)];
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
