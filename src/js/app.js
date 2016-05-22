import Tabs from './tabs';
import RegExTask from './regex-task';
import SearchText from './search-text-task';
import Fizzbuzz from './fizzbuzz-task';

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
    if (!$links.length) { return; }
    new Tabs($links);
  }

  function initRegExTask() {
    var $cnt = $('.regexp');
    if (!$cnt.length) { return; }
    new RegExTask($cnt);
  }

  function initSearchText() {
    var $form = $('.text-search');
    if (!$form.length) { return; }
    new SearchText($form);
  }

  function initFizzBuzz() {
    var $cnt = $('.fizzbuzz');
    if (!$cnt.length) { return; }
    new Fizzbuzz($cnt);
  }

}(jQuery));