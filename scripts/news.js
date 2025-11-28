window.GameGouNews = [
  {
    id: 'portfolio-football-games',
    dateISO: '2025-11-22',
    title: 'GameGou Portfolio: Perfect Kick, Perfect Kick 2, Top Football Manager, and Soccer Strike',
    excerpt: 'From arcade shootouts to full 3D management, GameGou now supports a full line-up of football games enjoyed around the world.',
    tags: ['Portfolio', 'Games'],
  },
  {
    id: 'perfect-kick-series-update',
    dateISO: '2025-11-15',
    title: 'Perfect Kick Series: New Events, New Rewards',
    excerpt: 'Limited-time events, upgraded gear, and more ways to curve the perfect shot across Perfect Kick and Perfect Kick 2.',
    tags: ['Perfect Kick', 'Perfect Kick 2'],
  },
  {
    id: 'top-football-manager-dev',
    dateISO: '2025-11-05',
    title: 'Inside Top Football Manager',
    excerpt: 'A closer look at real-time 3D matches, tactical controls, and how managers build their dream squad.',
    tags: ['Top Football Manager', 'Dev Diary'],
  },
];

(function () {
  function renderNews(containerSelector, limit) {
    var container = document.querySelector(containerSelector);
    if (!container || !window.GameGouNews) return;

    var items = window.GameGouNews
      .slice()
      .sort(function (a, b) { return b.dateISO.localeCompare(a.dateISO); });

    if (typeof limit === 'number') {
      items = items.slice(0, limit);
    }

    var html = items.map(function (item) {
      var date = new Date(item.dateISO);
      var formatted = date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
      var tags = (item.tags || []).map(function (tag) {
        return '<span class="news-tag">' + tag + '</span>';
      }).join('');
      return (
        '<article class="news-card">' +
          '<header class="news-card-header">' +
            '<p class="news-date">' + formatted + '</p>' +
            '<h2 class="news-title">' + item.title + '</h2>' +
          '</header>' +
          '<p class="news-excerpt">' + item.excerpt + '</p>' +
          (tags ? '<div class="news-tags">' + tags + '</div>' : '') +
        '</article>'
      );
    }).join('');

    container.innerHTML = html;
  }

  window.renderGameGouNews = renderNews;
})();