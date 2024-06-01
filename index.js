document.addEventListener("DOMContentLoaded", () => {
  fetchData();

  document.getElementById('dark-mode-toggle').addEventListener('change', (event) => {
      document.body.classList.toggle('dark-mode', event.target.checked);
  });
});

async function fetchData() {
  try {
      const response = await fetch('./data.json');
      const data = await response.json();

      // Display data from data.json
      document.getElementById('total-followers').innerText = data.total_followers;
      document.getElementById('facebook-followers').innerText = `${data.facebook.followers} Followers`;
      document.getElementById('twitter-followers').innerText = `${data.twitter.followers} Followers`;
      document.getElementById('instagram-followers').innerText = `${data.instagram.followers} Followers`;
      document.getElementById('youtube-followers').innerText = `${data.youtube.subscribers} Subscribers`;

      document.getElementById('facebook-page-views').innerText = data.facebook.page_views;
      document.getElementById('facebook-likes').innerText = data.facebook.likes;
      document.getElementById('instagram-likes').innerText = data.instagram.likes;
      document.getElementById('instagram-profile-views').innerText = data.instagram.profile_views;
      document.getElementById('twitter-retweets').innerText = data.twitter.retweets;
      document.getElementById('twitter-likes').innerText = data.twitter.likes;
      document.getElementById('youtube-total-views').innerText = data.youtube.total_views;
      document.getElementById('youtube-likes').innerText = data.youtube.likes;
      
      // Apply changes
      applyChanges(data);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

function applyChanges(data) {
  document.querySelector('#facebook-card .change').innerText = `${data.facebook.change.today} Today`;
  document.querySelector('#twitter-card .change').innerText = `${data.twitter.change.today} Today`;
  document.querySelector('#instagram-card .change').innerText = `${data.instagram.change.today} Today`;
  document.querySelector('#youtube-card .change').innerText = `${data.youtube.change.today} Today`;

  // Apply positive or negative class based on the value
  updateChangeClass('#facebook-card .change', data.facebook.change.today);
  updateChangeClass('#twitter-card .change', data.twitter.change.today);
  updateChangeClass('#instagram-card .change', data.instagram.change.today);
  updateChangeClass('#youtube-card .change', data.youtube.change.today);
}

function updateChangeClass(selector, value) {
  const element = document.querySelector(selector);
  if (parseInt(value) < 0) {
      element.classList.add('negative');
  } else {
      element.classList.remove('negative');
  }
}

  