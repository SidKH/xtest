(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _tabs = require('./tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _regexTask = require('./regex-task');

var _regexTask2 = _interopRequireDefault(_regexTask);

var _searchTextTask = require('./search-text-task');

var _searchTextTask2 = _interopRequireDefault(_searchTextTask);

var _fizzbuzzTask = require('./fizzbuzz-task');

var _fizzbuzzTask2 = _interopRequireDefault(_fizzbuzzTask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {

  // When DOM is ready
  $(function () {
    initTabs();
    initRegExTask();
    initSearchText();
    initFizzBuzz();
  });

  function initTabs() {
    var $links = $('.tab-nav li');
    if (!$links.length) {
      return;
    }
    new _tabs2.default($links);
  }

  function initRegExTask() {
    var $cnt = $('.regexp');
    if (!$cnt.length) {
      return;
    }
    new _regexTask2.default($cnt);
  }

  function initSearchText() {
    var $form = $('.text-search');
    if (!$form.length) {
      return;
    }
    new _searchTextTask2.default($form);
  }

  function initFizzBuzz() {
    var $cnt = $('.fizzbuzz');
    if (!$cnt.length) {
      return;
    }
    new _fizzbuzzTask2.default($cnt);
  }
})(jQuery);

},{"./fizzbuzz-task":2,"./regex-task":3,"./search-text-task":4,"./tabs":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fizzbuzz = function () {

  /**
   * Class constructor
   *   set basic elements and init handlers
   * @param  {Object|String} cnt selection of the container or jQuery element
   */

  function Fizzbuzz(cnt) {
    _classCallCheck(this, Fizzbuzz);

    this.$cnt = $(cnt);
    this.$form = this.$cnt.find('form');
    this.$input = this.$form.find('input');
    this.$consoleCnt = this.$cnt.find('.console');
    this.setHandlers();
  }

  /**
   * Set event handlers and create app behavior
   */


  _createClass(Fizzbuzz, [{
    key: 'setHandlers',
    value: function setHandlers() {
      var _this = this;

      this.$form.on('submit', function (e) {
        e.preventDefault();
        _this.render(_this.countFizzbuzz(_this.$input.val()));
      });
    }

    /**
     * Counting fizz and buzz according to the current iteration
     * @param  {Number} n - number of iterations
     * @return {Array}    - Array with the fizzbuzz statements
     */

  }, {
    key: 'countFizzbuzz',
    value: function countFizzbuzz(n) {
      var arr = [];
      for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          arr.push('FizzBuzz');
        } else if (i % 3 === 0) {
          arr.push('Fizz');
        } else if (i % 5 === 0) {
          arr.push('Buzz');
        } else {
          arr.push(i);
        }
      }
      return arr;
    }

    /**
     * Render html from the array of the fizzbuzz statements
     * @param  {Array} arr - array with the fizz, buzz and fizzbuzz
     */

  }, {
    key: 'render',
    value: function render(arr) {
      var str = '';
      arr.forEach(function (el) {
        str += '<div class="entry">' + el + '</div>';
      });
      this.$consoleCnt.html(str);
    }
  }]);

  return Fizzbuzz;
}();

exports.default = Fizzbuzz;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RegExpTest = function () {

  /**
   * Class constructor
   *   Set regular expression,
   *   Set elements,
   *   Set event handlers
   * @param  {Object} $cnt jQuery object of the container
   */

  function RegExpTest($cnt) {
    _classCallCheck(this, RegExpTest);

    this.regex = /^([A-Z]{1}[a-z]+(\s?)){1,3}$/;
    this.$cnt = $cnt;
    this.$input = $cnt.find('input');
    this.validClass = 'valid';
    this.notValidClass = 'not-valid';
    this.setHandlers();
  }

  /**
   * Set event handlers on the elements
   *   and create app behavior
   */


  _createClass(RegExpTest, [{
    key: 'setHandlers',
    value: function setHandlers() {
      var _this = this;

      this.$input.on('input', function (e) {
        var val = e.currentTarget.value.trim();
        if (val === '') {
          _this.$cnt.removeClass(_this.validClass + ' ' + _this.notValidClass);
          return;
        }
        var isValid = _this.checkString(val);
        _this.$cnt.toggleClass(_this.validClass, isValid);
        _this.$cnt.toggleClass(_this.notValidClass, !isValid);
      });
    }

    /**
     * Checking string on regexp matching
     * @param  {String} str - checked string
     * @return {Boolean}    - true if matched and false if do not
     */

  }, {
    key: 'checkString',
    value: function checkString(str) {
      return this.regex.test(str);
    }
  }]);

  return RegExpTest;
}();

exports.default = RegExpTest;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SearchText = function () {

  /**
   * Class constructor
   *   set basic elements and event handlers
   * @param  {String} cnt container selection
   */

  function SearchText(cnt) {
    _classCallCheck(this, SearchText);

    this.$cnt = $(cnt);
    this.$form = this.$cnt.find('form');
    this.$textarea = this.$form.find('textarea');
    this.$table = this.$cnt.find('.words-list');
    this.$wordsCnt = this.$table.find('tbody');
    this.$wordsCount = this.$cnt.find('.count');
    this.$cancelButton = this.$cnt.find('.cancel');
    this.setHandlers();
  }

  /**
   * Set event handlers and create app behavior
   */


  _createClass(SearchText, [{
    key: 'setHandlers',
    value: function setHandlers() {
      var _this = this;

      this.$form.on('submit', function (e) {
        e.preventDefault();
        var words = _this.createList(_this.$textarea.val());
        _this.render(words);
      });
      this.$cancelButton.on('mousedown', function (e) {
        e.preventDefault();
        _this.$textarea.val('').focus();
        _this.render([]);
      });
    }

    /**
     * Render words list from the array of objects
     * @param  {Array} words - array of words with similarities
     */

  }, {
    key: 'render',
    value: function render(words) {
      var str = '';
      this.$table.toggleClass('show', !!words.length);
      this.$wordsCount.html(words.length);
      words.forEach(function (word) {
        str += '<tr><td class="word">' + word.word + '</td>\n        <td class="similarities">';
        word.similarities.forEach(function (sim) {
          str += '<span class="sim">' + sim + '</span>';
        });
        str += '</td>\n        </tr>';
      });
      this.$wordsCnt.html(str);
    }

    /**
     * Create words array:
     *   parse String to get simple array of words
     *   checkLevenshtein distance of the word to create similarities
     * @param  {String} str - string with words
     * @return {Array}     - Array of the words with similarities
     */

  }, {
    key: 'createList',
    value: function createList(str) {
      var _this2 = this;

      var words = this.getWords(str);
      var arr = [];
      words.forEach(function (word) {
        if (!_this2.checkLevenshtein(word, arr)) {
          arr.push({ word: word, similarities: [] });
        }
      });
      return arr;
    }

    /**
     * Check Levenshtein distance of the given word
     *   and array of the words.
     *   Return true if similarities found and false if not
     * @param  {String} word  - word for checking
     * @param  {Array} arr    - Array of words for checking
     * @return {Boolean}      - true if similarities found and false if not
     */

  }, {
    key: 'checkLevenshtein',
    value: function checkLevenshtein(word, arr) {
      var _this3 = this;

      return !arr.every(function (currentWord) {
        if (_this3.getEditDistance(currentWord.word, word) === 1) {
          currentWord.similarities.push(word);
          return false;
        } else {
          return true;
        }
      });
    }

    /**
     * Get set of unique words from the string as an array
     * @param  {String} str - string with words
     * @return {Array}      - Array of words
     */

  }, {
    key: 'getWords',
    value: function getWords(str) {
      return $.unique(str.match(/\w+/mg) || []);
    }

    /**
     * Get Levenshtein distance between two words
     *   fast matrix algorithm
     *   (https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance#JavaScript)
     * @param  {String} a - first word
     * @param  {String} b - second word
     * @return {Number}   - Levenshtein distance between words
     */

  }, {
    key: 'getEditDistance',
    value: function getEditDistance(a, b) {
      if (a.length === 0) {
        return b.length;
      }
      if (b.length === 0) {
        return a.length;
      }
      var matrix = [];
      var i;
      for (i = 0; i <= b.length; i++) {
        matrix[i] = [i];
      }
      var j;
      for (j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
      }
      for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
          if (b.charAt(i - 1) == a.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
          }
        }
      }
      return matrix[b.length][a.length];
    }
  }]);

  return SearchText;
}();

exports.default = SearchText;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tabs = function () {

  /**
   * Class constructor
   *   Create basic elements, set classes
   *   open default tab
   * @param  {String} links - selection of the tabs links
   */

  function Tabs(links) {
    _classCallCheck(this, Tabs);

    this.$links = $(links);
    this.$tabs = this.setTabs();
    this.showClass = 'show';
    this.activeClass = 'active';
    this.setHandlers();
    this.setActiveTab(this.$links.eq(0).data('id'));
  }

  /**
   * Create selection of the tabs
   *   based on the links data attributes
   * @return {Object} - jQuery selection of the tabs
   */


  _createClass(Tabs, [{
    key: 'setTabs',
    value: function setTabs() {
      var $tabs = $();
      this.$links.each(function (e, el) {
        var $tab = $('#' + $(el).data('id'));
        if ($tab.length) {
          $tabs = $tabs.add($tab);
        }
      });
      return $tabs;
    }

    /**
     * Set event handlers and create app behavior 
     */

  }, {
    key: 'setHandlers',
    value: function setHandlers() {
      var _this = this;

      this.$links.on('click', function (e) {
        _this.setActiveTab($(e.currentTarget).data('id'));
      });
    }

    /**
     * Set active tab by showing tab container
     *   and set active class to navigation link
     * @param {String} id - id of the tab
     */

  }, {
    key: 'setActiveTab',
    value: function setActiveTab(id) {
      this.$tabs.removeClass(this.showClass);
      $('#' + id).addClass(this.showClass);
      this.$links.removeClass(this.activeClass);
      this.$links.filter('[data-id=' + id + ']').addClass(this.activeClass);
    }
  }]);

  return Tabs;
}();

exports.default = Tabs;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2ZpenpidXp6LXRhc2suanMiLCJzcmMvanMvcmVnZXgtdGFzay5qcyIsInNyYy9qcy9zZWFyY2gtdGV4dC10YXNrLmpzIiwic3JjL2pzL3RhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQyxXQUFVLENBQVYsRUFBYTs7O0FBR1osSUFBRSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQUxEOztBQU9BLFdBQVMsUUFBVCxHQUFvQjtBQUNsQixRQUFJLFNBQVMsRUFBRSxhQUFGLENBQWI7QUFDQSxRQUFJLENBQUMsT0FBTyxNQUFaLEVBQW9CO0FBQUU7QUFBUztBQUMvQix1QkFBUyxNQUFUO0FBQ0Q7O0FBRUQsV0FBUyxhQUFULEdBQXlCO0FBQ3ZCLFFBQUksT0FBTyxFQUFFLFNBQUYsQ0FBWDtBQUNBLFFBQUksQ0FBQyxLQUFLLE1BQVYsRUFBa0I7QUFBRTtBQUFTO0FBQzdCLDRCQUFjLElBQWQ7QUFDRDs7QUFFRCxXQUFTLGNBQVQsR0FBMEI7QUFDeEIsUUFBSSxRQUFRLEVBQUUsY0FBRixDQUFaO0FBQ0EsUUFBSSxDQUFDLE1BQU0sTUFBWCxFQUFtQjtBQUFFO0FBQVM7QUFDOUIsaUNBQWUsS0FBZjtBQUNEOztBQUVELFdBQVMsWUFBVCxHQUF3QjtBQUN0QixRQUFJLE9BQU8sRUFBRSxXQUFGLENBQVg7QUFDQSxRQUFJLENBQUMsS0FBSyxNQUFWLEVBQWtCO0FBQUU7QUFBUztBQUM3QiwrQkFBYSxJQUFiO0FBQ0Q7QUFFRixDQWxDQSxFQWtDQyxNQWxDRCxDQUFEOzs7Ozs7Ozs7Ozs7O0lDTE0sUTs7Ozs7Ozs7QUFPSixvQkFBWSxHQUFaLEVBQWlCO0FBQUE7O0FBQ2YsU0FBSyxJQUFMLEdBQVksRUFBRSxHQUFGLENBQVo7QUFDQSxTQUFLLEtB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LEtBQUssT0FBTCxFQUFiO0FBQ0EsU0FBSyxTQUFMLEdBQWlCLE1BQWpCO0FBQ0EsU0FBSyxXQUFMLEdBQW1CLFFBQW5CO0FBQ0EsU0FBSyxXQUFMO0FBQ0EsU0FBSyxZQUFMLENBQWtCLEtBQUssTUFBTCxDQUFZLEVBQVosQ0FBZSxDQUFmLEVBQWtCLElBQWxCLENBQXVCLElBQXZCLENBQWxCO0FBQ0Q7Ozs7Ozs7Ozs7OzhCQU9TO0FBQ1IsVUFBSSxRQUFRLEdBQVo7QUFDQSxXQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLFVBQUMsQ0FBRCxFQUFJLEVBQUosRUFBVztBQUMxQixZQUFJLE9BQU8sUUFBTSxFQUFFLEVBQUYsRUFBTSxJQUFOLENBQVcsSUFBWCxDQUFOLENBQVg7QUFDQSxZQUFJLEtBQUssTUFBVCxFQUFpQjtBQUFFLGtCQUFRLE1BQU0sR0FBTixDQUFVLElBQVYsQ0FBUjtBQUEwQjtBQUM5QyxPQUhEO0FBSUEsYUFBTyxLQUFQO0FBQ0Q7Ozs7Ozs7O2tDQUthO0FBQUE7O0FBQ1osV0FBSyxNQUFMLENBQVksRUFBWixDQUFlLE9BQWYsRUFBd0IsVUFBQyxDQUFELEVBQU87QUFDN0IsY0FBSyxZQUFMLENBQWtCLEVBQUUsRUFBRSxhQUFKLEVBQW1CLElBQW5CLENBQXdCLElBQXhCLENBQWxCO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7Ozs7O2lDQU9ZLEUsRUFBSTtBQUNmLFdBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUIsS0FBSyxTQUE1QjtBQUNBLGNBQU0sRUFBTixFQUFZLFFBQVosQ0FBcUIsS0FBSyxTQUExQjtBQUNBLFdBQUssTUFBTCxDQUFZLFdBQVosQ0FBd0IsS0FBSyxXQUE3QjtBQUNBLFdBQUssTUFBTCxDQUFZLE1BQVosZUFBK0IsRUFBL0IsUUFBc0MsUUFBdEMsQ0FBK0MsS0FBSyxXQUFwRDtBQUNEOzs7Ozs7a0JBR1ksSSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgVGFicyBmcm9tICcuL3RhYnMnO1xuaW1wb3J0IFJlZ0V4VGFzayBmcm9tICcuL3JlZ2V4LXRhc2snO1xuaW1wb3J0IFNlYXJjaFRleHQgZnJvbSAnLi9zZWFyY2gtdGV4dC10YXNrJztcbmltcG9ydCBGaXp6YnV6eiBmcm9tICcuL2ZpenpidXp6LXRhc2snO1xuXG4oZnVuY3Rpb24gKCQpIHtcblxuICAvLyBXaGVuIERPTSBpcyByZWFkeVxuICAkKGZ1bmN0aW9uICgpIHtcbiAgICBpbml0VGFicygpO1xuICAgIGluaXRSZWdFeFRhc2soKTtcbiAgICBpbml0U2VhcmNoVGV4dCgpO1xuICAgIGluaXRGaXp6QnV6eigpO1xuICB9KTtcblxuICBmdW5jdGlvbiBpbml0VGFicygpIHtcbiAgICB2YXIgJGxpbmtzID0gJCgnLnRhYi1uYXYgbGknKTtcbiAgICBpZiAoISRsaW5rcy5sZW5ndGgpIHsgcmV0dXJuOyB9XG4gICAgbmV3IFRhYnMoJGxpbmtzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRSZWdFeFRhc2soKSB7XG4gICAgdmFyICRjbnQgPSAkKCcucmVnZXhwJyk7XG4gICAgaWYgKCEkY250Lmxlbmd0aCkgeyByZXR1cm47IH1cbiAgICBuZXcgUmVnRXhUYXNrKCRjbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFNlYXJjaFRleHQoKSB7XG4gICAgdmFyICRmb3JtID0gJCgnLnRleHQtc2VhcmNoJyk7XG4gICAgaWYgKCEkZm9ybS5sZW5ndGgpIHsgcmV0dXJuOyB9XG4gICAgbmV3IFNlYXJjaFRleHQoJGZvcm0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdEZpenpCdXp6KCkge1xuICAgIHZhciAkY250ID0gJCgnLmZpenpidXp6Jyk7XG4gICAgaWYgKCEkY250Lmxlbmd0aCkgeyByZXR1cm47IH1cbiAgICBuZXcgRml6emJ1enooJGNudCk7XG4gIH1cblxufShqUXVlcnkpKTsiLCJjbGFzcyBGaXp6YnV6eiB7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqICAgc2V0IGJhc2ljIGVsZW1lbnRzIGFuZCBpbml0IGhhbmRsZXJzXG4gICAqIEBwYXJhbSAge09iamVjdHxTdHJpbmd9IGNudCBzZWxlY3Rpb24gb2YgdGhlIGNvbnRhaW5lciBvciBqUXVlcnkgZWxlbWVudFxuICAgKi9cbiAgY29uc3RydWN0b3IoY250KSB7XG4gICAgdGhpcy4kY250ID0gJChjbnQpO1xuICAgIHRoaXMuJGZvcm0gPSB0aGlzLiRjbnQuZmluZCgnZm9ybScpO1xuICAgIHRoaXMuJGlucHV0ID0gdGhpcy4kZm9ybS5maW5kKCdpbnB1dCcpO1xuICAgIHRoaXMuJGNvbnNvbGVDbnQgPSB0aGlzLiRjbnQuZmluZCgnLmNvbnNvbGUnKTtcbiAgICB0aGlzLnNldEhhbmRsZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV2ZW50IGhhbmRsZXJzIGFuZCBjcmVhdGUgYXBwIGJlaGF2aW9yXG4gICAqL1xuICBzZXRIYW5kbGVycygpIHtcbiAgICB0aGlzLiRmb3JtLm9uKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5yZW5kZXIodGhpcy5jb3VudEZpenpidXp6KHRoaXMuJGlucHV0LnZhbCgpKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ291bnRpbmcgZml6eiBhbmQgYnV6eiBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgaXRlcmF0aW9uXG4gICAqIEBwYXJhbSAge051bWJlcn0gbiAtIG51bWJlciBvZiBpdGVyYXRpb25zXG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAtIEFycmF5IHdpdGggdGhlIGZpenpidXp6IHN0YXRlbWVudHNcbiAgICovXG4gIGNvdW50Rml6emJ1enoobikge1xuICAgIHZhciBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuOyBpICsrKSB7XG4gICAgICBpZiAoaSAlIDMgPT09IDAgJiYgaSAlIDUgPT09IDApIHsgYXJyLnB1c2goJ0ZpenpCdXp6Jyk7IH1cbiAgICAgIGVsc2UgaWYgKGkgJSAzID09PSAwKSB7IGFyci5wdXNoKCdGaXp6Jyk7IH1cbiAgICAgIGVsc2UgaWYgKGkgJSA1ID09PSAwKSB7IGFyci5wdXNoKCdCdXp6Jyk7IH1cbiAgICAgIGVsc2UgeyBhcnIucHVzaChpKTsgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBodG1sIGZyb20gdGhlIGFycmF5IG9mIHRoZSBmaXp6YnV6eiBzdGF0ZW1lbnRzXG4gICAqIEBwYXJhbSAge0FycmF5fSBhcnIgLSBhcnJheSB3aXRoIHRoZSBmaXp6LCBidXp6IGFuZCBmaXp6YnV6elxuICAgKi9cbiAgcmVuZGVyKGFycikge1xuICAgIHZhciBzdHIgPSAnJztcbiAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHN0ciArPSBgPGRpdiBjbGFzcz1cImVudHJ5XCI+JHtlbH08L2Rpdj5gO1xuICAgIH0pO1xuICAgIHRoaXMuJGNvbnNvbGVDbnQuaHRtbChzdHIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpenpidXp6OyIsImNsYXNzIFJlZ0V4cFRlc3Qge1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKiAgIFNldCByZWd1bGFyIGV4cHJlc3Npb24sXG4gICAqICAgU2V0IGVsZW1lbnRzLFxuICAgKiAgIFNldCBldmVudCBoYW5kbGVyc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9ICRjbnQgalF1ZXJ5IG9iamVjdCBvZiB0aGUgY29udGFpbmVyXG4gICAqL1xuICBjb25zdHJ1Y3RvcigkY250KSB7XG4gICAgdGhpcy5yZWdleCA9IC9eKFtBLVpdezF9W2Etel0rKFxccz8pKXsxLDN9JC87XG4gICAgdGhpcy4kY250ID0gJGNudDtcbiAgICB0aGlzLiRpbnB1dCA9ICRjbnQuZmluZCgnaW5wdXQnKTtcbiAgICB0aGlzLnZhbGlkQ2xhc3MgPSAndmFsaWQnO1xuICAgIHRoaXMubm90VmFsaWRDbGFzcyA9ICdub3QtdmFsaWQnO1xuICAgIHRoaXMuc2V0SGFuZGxlcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZXZlbnQgaGFuZGxlcnMgb24gdGhlIGVsZW1lbnRzXG4gICAqICAgYW5kIGNyZWF0ZSBhcHAgYmVoYXZpb3JcbiAgICovXG4gIHNldEhhbmRsZXJzKCkge1xuICAgIHRoaXMuJGlucHV0Lm9uKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICB2YXIgdmFsID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICh2YWwgPT09ICcnKSB7XG4gICAgICAgIHRoaXMuJGNudC5yZW1vdmVDbGFzcyhgJHt0aGlzLnZhbGlkQ2xhc3N9ICR7dGhpcy5ub3RWYWxpZENsYXNzfWApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgaXNWYWxpZCA9IHRoaXMuY2hlY2tTdHJpbmcodmFsKTtcbiAgICAgIHRoaXMuJGNudC50b2dnbGVDbGFzcyh0aGlzLnZhbGlkQ2xhc3MsIGlzVmFsaWQpO1xuICAgICAgdGhpcy4kY250LnRvZ2dsZUNsYXNzKHRoaXMubm90VmFsaWRDbGFzcywgIWlzVmFsaWQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNraW5nIHN0cmluZyBvbiByZWdleHAgbWF0Y2hpbmdcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHIgLSBjaGVja2VkIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtCb29sZWFufSAgICAtIHRydWUgaWYgbWF0Y2hlZCBhbmQgZmFsc2UgaWYgZG8gbm90XG4gICAqL1xuICBjaGVja1N0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gdGhpcy5yZWdleC50ZXN0KHN0cik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnRXhwVGVzdDsiLCJjbGFzcyBTZWFyY2hUZXh0IHtcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICogICBzZXQgYmFzaWMgZWxlbWVudHMgYW5kIGV2ZW50IGhhbmRsZXJzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gY250IGNvbnRhaW5lciBzZWxlY3Rpb25cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNudCkge1xuICAgIHRoaXMuJGNudCA9ICQoY250KTtcbiAgICB0aGlzLiRmb3JtID0gdGhpcy4kY250LmZpbmQoJ2Zvcm0nKTtcbiAgICB0aGlzLiR0ZXh0YXJlYSA9IHRoaXMuJGZvcm0uZmluZCgndGV4dGFyZWEnKTtcbiAgICB0aGlzLiR0YWJsZSA9IHRoaXMuJGNudC5maW5kKCcud29yZHMtbGlzdCcpO1xuICAgIHRoaXMuJHdvcmRzQ250ID0gdGhpcy4kdGFibGUuZmluZCgndGJvZHknKTtcbiAgICB0aGlzLiR3b3Jkc0NvdW50ID0gdGhpcy4kY250LmZpbmQoJy5jb3VudCcpO1xuICAgIHRoaXMuJGNhbmNlbEJ1dHRvbiA9IHRoaXMuJGNudC5maW5kKCcuY2FuY2VsJyk7XG4gICAgdGhpcy5zZXRIYW5kbGVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBldmVudCBoYW5kbGVycyBhbmQgY3JlYXRlIGFwcCBiZWhhdmlvclxuICAgKi9cbiAgc2V0SGFuZGxlcnMoKSB7XG4gICAgdGhpcy4kZm9ybS5vbignc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciB3b3JkcyA9IHRoaXMuY3JlYXRlTGlzdCh0aGlzLiR0ZXh0YXJlYS52YWwoKSk7XG4gICAgICB0aGlzLnJlbmRlcih3b3Jkcyk7XG4gICAgfSk7XG4gICAgdGhpcy4kY2FuY2VsQnV0dG9uLm9uKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy4kdGV4dGFyZWEudmFsKCcnKS5mb2N1cygpO1xuICAgICAgdGhpcy5yZW5kZXIoW10pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciB3b3JkcyBsaXN0IGZyb20gdGhlIGFycmF5IG9mIG9iamVjdHNcbiAgICogQHBhcmFtICB7QXJyYXl9IHdvcmRzIC0gYXJyYXkgb2Ygd29yZHMgd2l0aCBzaW1pbGFyaXRpZXNcbiAgICovXG4gIHJlbmRlcih3b3Jkcykge1xuICAgIHZhciBzdHIgPSAnJztcbiAgICB0aGlzLiR0YWJsZS50b2dnbGVDbGFzcygnc2hvdycsICEhd29yZHMubGVuZ3RoKTtcbiAgICB0aGlzLiR3b3Jkc0NvdW50Lmh0bWwod29yZHMubGVuZ3RoKTtcbiAgICB3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICBzdHIgKz0gYDx0cj48dGQgY2xhc3M9XCJ3b3JkXCI+JHt3b3JkLndvcmR9PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwic2ltaWxhcml0aWVzXCI+YDtcbiAgICAgIHdvcmQuc2ltaWxhcml0aWVzLmZvckVhY2goZnVuY3Rpb24gKHNpbSkge1xuICAgICAgICBzdHIgKz0gYDxzcGFuIGNsYXNzPVwic2ltXCI+JHtzaW19PC9zcGFuPmA7XG4gICAgICB9KTtcbiAgICAgIHN0ciArPSBgPC90ZD5cbiAgICAgICAgPC90cj5gO1xuICAgIH0pO1xuICAgIHRoaXMuJHdvcmRzQ250Lmh0bWwoc3RyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgd29yZHMgYXJyYXk6XG4gICAqICAgcGFyc2UgU3RyaW5nIHRvIGdldCBzaW1wbGUgYXJyYXkgb2Ygd29yZHNcbiAgICogICBjaGVja0xldmVuc2h0ZWluIGRpc3RhbmNlIG9mIHRoZSB3b3JkIHRvIGNyZWF0ZSBzaW1pbGFyaXRpZXNcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHIgLSBzdHJpbmcgd2l0aCB3b3Jkc1xuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgIC0gQXJyYXkgb2YgdGhlIHdvcmRzIHdpdGggc2ltaWxhcml0aWVzXG4gICAqL1xuICBjcmVhdGVMaXN0KHN0cikge1xuICAgIHZhciB3b3JkcyA9IHRoaXMuZ2V0V29yZHMoc3RyKTtcbiAgICB2YXIgYXJyID0gW107XG4gICAgd29yZHMuZm9yRWFjaCgod29yZCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNoZWNrTGV2ZW5zaHRlaW4od29yZCwgYXJyKSkge1xuICAgICAgICBhcnIucHVzaCh7d29yZDogd29yZCwgc2ltaWxhcml0aWVzOiBbXX0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgTGV2ZW5zaHRlaW4gZGlzdGFuY2Ugb2YgdGhlIGdpdmVuIHdvcmRcbiAgICogICBhbmQgYXJyYXkgb2YgdGhlIHdvcmRzLlxuICAgKiAgIFJldHVybiB0cnVlIGlmIHNpbWlsYXJpdGllcyBmb3VuZCBhbmQgZmFsc2UgaWYgbm90XG4gICAqIEBwYXJhbSAge1N0cmluZ30gd29yZCAgLSB3b3JkIGZvciBjaGVja2luZ1xuICAgKiBAcGFyYW0gIHtBcnJheX0gYXJyICAgIC0gQXJyYXkgb2Ygd29yZHMgZm9yIGNoZWNraW5nXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgLSB0cnVlIGlmIHNpbWlsYXJpdGllcyBmb3VuZCBhbmQgZmFsc2UgaWYgbm90XG4gICAqL1xuICBjaGVja0xldmVuc2h0ZWluKHdvcmQsIGFycikge1xuICAgIHJldHVybiAhYXJyLmV2ZXJ5KChjdXJyZW50V29yZCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2V0RWRpdERpc3RhbmNlKGN1cnJlbnRXb3JkLndvcmQsIHdvcmQpID09PSAxKSB7XG4gICAgICAgIGN1cnJlbnRXb3JkLnNpbWlsYXJpdGllcy5wdXNoKHdvcmQpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2V0IG9mIHVuaXF1ZSB3b3JkcyBmcm9tIHRoZSBzdHJpbmcgYXMgYW4gYXJyYXlcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHIgLSBzdHJpbmcgd2l0aCB3b3Jkc1xuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAtIEFycmF5IG9mIHdvcmRzXG4gICAqL1xuICBnZXRXb3JkcyhzdHIpIHtcbiAgICByZXR1cm4gJC51bmlxdWUoc3RyLm1hdGNoKC9cXHcrL21nKSB8fCBbXSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IExldmVuc2h0ZWluIGRpc3RhbmNlIGJldHdlZW4gdHdvIHdvcmRzXG4gICAqICAgZmFzdCBtYXRyaXggYWxnb3JpdGhtXG4gICAqICAgKGh0dHBzOi8vZW4ud2lraWJvb2tzLm9yZy93aWtpL0FsZ29yaXRobV9JbXBsZW1lbnRhdGlvbi9TdHJpbmdzL0xldmVuc2h0ZWluX2Rpc3RhbmNlI0phdmFTY3JpcHQpXG4gICAqIEBwYXJhbSAge1N0cmluZ30gYSAtIGZpcnN0IHdvcmRcbiAgICogQHBhcmFtICB7U3RyaW5nfSBiIC0gc2Vjb25kIHdvcmRcbiAgICogQHJldHVybiB7TnVtYmVyfSAgIC0gTGV2ZW5zaHRlaW4gZGlzdGFuY2UgYmV0d2VlbiB3b3Jkc1xuICAgKi9cbiAgZ2V0RWRpdERpc3RhbmNlKGEsIGIpIHtcbiAgICBpZiAoYS5sZW5ndGggPT09IDApIHsgcmV0dXJuIGIubGVuZ3RoOyB9IFxuICAgIGlmIChiLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gYS5sZW5ndGg7IH1cbiAgICB2YXIgbWF0cml4ID0gW107XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMDsgaSA8PSBiLmxlbmd0aDsgaSsrKSB7XG4gICAgICBtYXRyaXhbaV0gPSBbaV07XG4gICAgfVxuICAgIHZhciBqO1xuICAgIGZvciAoaiA9IDA7IGogPD0gYS5sZW5ndGg7IGorKykge1xuICAgICAgbWF0cml4WzBdW2pdID0gajtcbiAgICB9XG4gICAgZm9yIChpID0gMTsgaSA8PSBiLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGogPSAxOyBqIDw9IGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKGIuY2hhckF0KGktMSkgPT0gYS5jaGFyQXQoaiAtIDEpKSB7XG4gICAgICAgICAgbWF0cml4W2ldW2pdID0gbWF0cml4W2kgLSAxXVtqIC0gMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0cml4W2ldW2pdID0gTWF0aC5taW4obWF0cml4W2kgLSAxXVtqIC0gMV0gKyAxLFxuICAgICAgICAgICAgTWF0aC5taW4obWF0cml4W2ldW2ogLSAxXSArIDEsXG4gICAgICAgICAgICBtYXRyaXhbaSAtIDFdW2pdICsgMSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXRyaXhbYi5sZW5ndGhdW2EubGVuZ3RoXTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFRleHQ7IiwiY2xhc3MgVGFicyB7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqICAgQ3JlYXRlIGJhc2ljIGVsZW1lbnRzLCBzZXQgY2xhc3Nlc1xuICAgKiAgIG9wZW4gZGVmYXVsdCB0YWJcbiAgICogQHBhcmFtICB7U3RyaW5nfSBsaW5rcyAtIHNlbGVjdGlvbiBvZiB0aGUgdGFicyBsaW5rc1xuICAgKi9cbiAgY29uc3RydWN0b3IobGlua3MpIHtcbiAgICB0aGlzLiRsaW5rcyA9ICQobGlua3MpO1xuICAgIHRoaXMuJHRhYnMgPSB0aGlzLnNldFRhYnMoKTtcbiAgICB0aGlzLnNob3dDbGFzcyA9ICdzaG93JztcbiAgICB0aGlzLmFjdGl2ZUNsYXNzID0gJ2FjdGl2ZSc7XG4gICAgdGhpcy5zZXRIYW5kbGVycygpO1xuICAgIHRoaXMuc2V0QWN0aXZlVGFiKHRoaXMuJGxpbmtzLmVxKDApLmRhdGEoJ2lkJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBzZWxlY3Rpb24gb2YgdGhlIHRhYnNcbiAgICogICBiYXNlZCBvbiB0aGUgbGlua3MgZGF0YSBhdHRyaWJ1dGVzXG4gICAqIEByZXR1cm4ge09iamVjdH0gLSBqUXVlcnkgc2VsZWN0aW9uIG9mIHRoZSB0YWJzXG4gICAqL1xuICBzZXRUYWJzKCkge1xuICAgIHZhciAkdGFicyA9ICQoKTtcbiAgICB0aGlzLiRsaW5rcy5lYWNoKChlLCBlbCkgPT4ge1xuICAgICAgdmFyICR0YWIgPSAkKGAjJHskKGVsKS5kYXRhKCdpZCcpfWApO1xuICAgICAgaWYgKCR0YWIubGVuZ3RoKSB7ICR0YWJzID0gJHRhYnMuYWRkKCR0YWIpOyB9XG4gICAgfSk7XG4gICAgcmV0dXJuICR0YWJzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBldmVudCBoYW5kbGVycyBhbmQgY3JlYXRlIGFwcCBiZWhhdmlvciBcbiAgICovXG4gIHNldEhhbmRsZXJzKCkge1xuICAgIHRoaXMuJGxpbmtzLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICB0aGlzLnNldEFjdGl2ZVRhYigkKGUuY3VycmVudFRhcmdldCkuZGF0YSgnaWQnKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGFjdGl2ZSB0YWIgYnkgc2hvd2luZyB0YWIgY29udGFpbmVyXG4gICAqICAgYW5kIHNldCBhY3RpdmUgY2xhc3MgdG8gbmF2aWdhdGlvbiBsaW5rXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZCAtIGlkIG9mIHRoZSB0YWJcbiAgICovXG4gIHNldEFjdGl2ZVRhYihpZCkge1xuICAgIHRoaXMuJHRhYnMucmVtb3ZlQ2xhc3ModGhpcy5zaG93Q2xhc3MpO1xuICAgICQoYCMke2lkfWApLmFkZENsYXNzKHRoaXMuc2hvd0NsYXNzKTtcbiAgICB0aGlzLiRsaW5rcy5yZW1vdmVDbGFzcyh0aGlzLmFjdGl2ZUNsYXNzKTtcbiAgICB0aGlzLiRsaW5rcy5maWx0ZXIoYFtkYXRhLWlkPSR7aWR9XWApLmFkZENsYXNzKHRoaXMuYWN0aXZlQ2xhc3MpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnM7Il19
