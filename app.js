/**
 * Atheneum for Jenkins Javascript Overrides
 * based on Canon for Jenkins by Rackspace Web Team
 *
 * Leverages Jenkins-included Prototype.js
 *
 * @author Hasan Otuome
 */
document.observe("dom:loaded", function () {
    // Auto Refresh
    var autoRefreshSelector = $$('#right-top-nav #right-top-nav div.smallfont');
    if (autoRefreshSelector.length > 0) {
        var autoRefreshLink = new Element('span').update(autoRefreshSelector[0].innerHTML);
        $$('span.jenkins_ver')[0].insert({before:autoRefreshLink});
    }
    // Click logo, go home.
    var dashboard = '/jenkins';
    $$('div.logo')[0].on('click', function(){ location = dashboard; });
    // Header Icons
    $$(".icon-help.icon-sm").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/16x16/help.png"; } );
    // Sidebar Task Icons (Dashboard)
    $$(".icon-up.icon-md").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/up.png"; } );
    $$(".icon-new-package.icon-md").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/build.png"; } );
    $$(".icon-setting.icon-md").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/settings.png"; } );
    $$(".icon-search.icon-md").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/search.png"; } );
    $$(".icon-notepad.icon-sm").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/16x16/edit.png"; } );
    $$(".icon-new-user.icon-md").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/user.png"; } );
    $$(".icon-new-computer.icon-md").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/system.png"; } );
    $$(".icon-folder.icon-md").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/workspace.png"; } );
    $$(".icon-folder-delete.icon-md").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/delete.png"; } );
    $$(".icon-edit-delete.icon-md").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/delete_project.png"; } );
    $$(".icon-terminal.icon-md").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/console.png"; } );
    $$(".icon-previous.icon-md").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/previous.png"; } );
    $$(".icon-next.icon-md").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/next.png"; } );
    // NOTE: The following icons have to be handled differently (see jQuery Overrides): People, Build History, Credentials, My Views
    // Build Status Icons (Balls)
    $$(".icon-blue.icon-sm").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/16x16/circle_blue.png"; } );
    $$(".icon-red.icon-sm").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/16x16/circle_red.png"; } );
    $$(".icon-green.icon-sm").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/16x16/circle_green.png"; } );
    $$(".icon-yellow.icon-sm").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/16x16/circle_yellow.png"; } );
    $$(".icon-blue.icon-md").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/circle_blue.png"; } );
    $$(".icon-red.icon-md").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/circle_red.png"; } );
    $$(".icon-green.icon-md").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/circle_green.png"; } );
    $$(".icon-yellow.icon-md").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/circle_yellow.png"; } );
    $$(".icon-blue.icon-lg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/32x32/circle_blue.png"; } );
    $$(".icon-red.icon-lg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/32x32/circle_red.png"; } );
    $$(".icon-green.icon-lg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/32x32/circle_green.png"; } );
    $$(".icon-yellow.icon-lg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/32x32/circle_yellow.png"; } );
    $$(".icon-blue.icon-xlg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/circle_blue.png"; } );
    $$(".icon-red.icon-xlg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/circle_red.png"; } );
    $$(".icon-green.icon-xlg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/circle_green.png"; } );
    $$(".icon-yellow.icon-xlg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/circle_yellow.png"; } );
    // Health Report Icons
    $$(".icon-health-00to19.icon-sm").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/16x16/stormy.png"; } );
    $$(".icon-health-20to39.icon-sm").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/16x16/showers.png"; } );
    $$(".icon-health-40to59.icon-sm").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/16x16/cloudy.png"; } );
    $$(".icon-health-60to79.icon-sm").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/16x16/partly_cloudy.png"; } );
    $$(".icon-health-80plus.icon-sm").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/16x16/sunny.png"; } );
    $$(".icon-health-00to19.icon-lg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/32x32/stormy.png"; } );
    $$(".icon-health-20to39.icon-lg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/32x32/showers.png"; } );
    $$(".icon-health-40to59.icon-lg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/32x32/cloudy.png"; } );
    $$(".icon-health-60to79.icon-lg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/32x32/partly_cloudy.png"; } );
    $$(".icon-health-80plus.icon-lg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/32x32/sunny.png"; } );
    // Scheduler Icon
    $$(".icon-clock.icon-md").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/32x32/clock.png"; } );
    // Main Panel Header Icons
    $$(".icon-user.icon-xlg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/people.png"; } );
    $$(".icon-notepad.icon-xlg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/history.png"; } );
    // Main Panel Icons
    $$(".icon-setting.icon-lg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/32x32/settings.png"; } );
    $$(".icon-setting.icon-xlg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/settings.png"; } );
    $$(".icon-secure.icon-xlg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/lock.png"; } );
    $$(".icon-refresh.icon-xlg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/reload.png"; } );
    $$(".icon-plugin.icon-xlg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/plugins.png"; } );
    $$(".icon-computer.icon-xlg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/system.png"; } );
    $$(".icon-clipboard.icon-xlg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/logs.png"; } );
    $$(".icon-monitor.icon-xlg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/stats.png"; } );
    $$(".icon-terminal.icon-xlg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/console.png"; } );
    $$(".icon-network.icon-xlg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/network.png"; } );
    $$(".icon-help.icon-xlg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/help_bw.png"; } );
    $$(".icon-document.icon-xlg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/data.png"; } );
    $$(".icon-system-log-out.icon-xlg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/shutdown.png"; } );
    $$(".icon-computer.icon-lg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/32x32/system.png"; } );
    $$(".icon-clipboard.icon-lg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/32x32/log.png"; } );
    $$(".icon-error.icon-xlg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/error.png"; } );
    $$(".icon-orange-square.icon-xlg").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/gears.png"; } );
    $$(".icon-go-next.icon-sm").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/16x16/next.png"; } );
    $$(".icon-folder.icon-sm").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/16x16/folder.png"; } );
    $$(".icon-text.icon-sm").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/16x16/file.png"; } );
    $$(".icon-package.icon-sm").each( function(img){ img.src="/jenkins/userContent/themes/atheneum-jenkins/icons/16x16/zip.png"; } );
    // Hide localization link
    $("l10n-footer").hide();
});
/**
 * JQuery Overrides
 */
Q(document).ready(function(){
  // Sidebar Task Icons
  var peopleTaskIcon = Q('a[href$="/asynchPeople/"]')
  .children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/people.png');

  var historyTaskIcon = Q('a[href$="/view/All/builds"]')
  .children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/history.png');

  var buildsTaskIcon = Q('a[href^="/jenkins/user"][href$="/builds"]')
  .children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/toolbox.png');

  var credentialsTaskIcon = Q('a[href$="/credential-store"]')
  .children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/keys.png');

  var viewsTaskIcon = Q('a[href$="/my-views"]')
  .children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/views.png');

  var domainTaskIcon = Q('a[href="newDomain"]')
  .children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/domain.png');

  var editViewTaskIcon = Q("a:contains('Edit View')")
  .prev().children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/edit_view.png');

  var deleteViewTaskIcon = Q("a:contains('Delete View')")
  .prev().children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/delete_view.png');

  var loggerListTaskIcon = Q("a:contains('Logger List')")
  .prev().children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/list.png');

  var logsTaskIcon = Q("a:contains('All Logs')")
  .prev().children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/clipboard.png');

  var logRecorderTaskIcon = Q("a:contains('New Log Recorder')")
  .prev().children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/record.png');

  var logLevelsTaskIcon = Q("a:contains('Log Levels')")
  .prev().children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/levels.png');

  var buildChangesTaskIcon = Q("a:contains('Changes')")
  .prev().children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/asterisk.png');

  var embeddableBuildStatusTaskIcon = Q("a:contains('Embeddable Build Status')")
  .prev().children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/build_status.png');

  var tapExtendedTestResultsTaskIcon = Q("a:contains('TAP Extended Test Results')")
  .prev().children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/tap_results.png');

  var cloverCoverageReportTaskIcon = Q("a:contains('Clover HTML Coverage Report')")
  .prev().children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/clover.png');

  var githubHookLogTaskIcon = Q("a:contains('GitHub Hook Log')")
  .prev().children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/log.png');

  var editBuildInfoTaskIcon = Q("a:contains('Edit Build Information')")
  .prev().children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/cube.png');

  var pollingLogTaskIcon = Q("a:contains('Polling Log')")
  .prev().children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/polling.png');

  var tagsTaskIcon = Q("a:contains('No Tags')")
  .prev().children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/tag.png');

  var tapTestResultsTaskIcon = Q("a:contains('TAP Test Results')")
  .prev().children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/tap.png');

  // Main Panel Icons
  var domainListIcon = Q('a[href^="domain"]')
  .children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/32x32/domain.png');

  var scriptConsoleLink = Q('a[href$="script"]');
  var scriptConsoleIcon = scriptConsoleLink.children('img');
  if (scriptConsoleIcon.hasClass('icon-xlg')){
    scriptConsoleIcon.attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/scripts.png');
  }

  var scriptApprovalIcon = Q('a[href$="scriptApproval"]')
  .children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/script_approval.png');

  var logRecorderHeaderIcon = Q("h1:contains(' Log Recorders')")
  .children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/recorders.png');

  var scriptConsoleHeaderIcon = Q("h1:contains(' Script Console')")
  .children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/scripts.png');

  var userHeaderIcon = Q('img[src$="/images/48x48/user.png"]')
  .attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/user.png');

  var credentialsHeaderIcon = Q('img[src$="/images/48x48/credentials.png"]')
  .attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/keys.png');

  var smallCredentialsHeaderIcon = Q('img[src$="/images/32x32/credentials.png"]')
  .attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/32x32/keys.png');

  var domainHeaderIcon = Q('img[src$="/images/48x48/domain.png"]')
  .attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/domain.png');

  var newCredentialsIcon = Q('img[src$="/images/24x24/new-credential.png"]')
  .attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/key.png');

  var asteriskIcon = Q('img[tooltip="One or more fields in this block have been edited."]')
  .attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/24x24/asterisk.png');

  var recentBuildChangesIcon = Q("a:contains('Recent Changes')")
  .prev().children('img').attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/asterisk.png');

  var cloverCoverageReportIcon = Q('img[src$="/clover/clover_48x48.png"]')
  .attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/clover.png');

  var workspaceIcon = Q('img[src$="/images/48x48/folder.png"]')
  .attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/workspace.png');

  var checkstyleIcon = Q('img[src$="/icons/checkstyle-48x48.png"]')
  .attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/48x48/changes.png');

  var rssFeedIcon = Q('img[src$="/images/atom.gif"]')
  .attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/16x16/rss_feed.png');

  // Have to wait a few seconds before replacing some main panel icons that are rendered progressively
  var timer = setTimeout(updateIcons, 3000);
  function updateIcons(){
    var userIcon32 = Q('img[src$="/images/32x32/user.png"]')
    .attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/32x32/user.png');
    var userIcon16 = Q('img[src$="/images/16x16/person.png"]')
    .attr('src','/jenkins/userContent/themes/atheneum-jenkins/icons/16x16/user.png');
    clearTimeout(timer);
  }
});
