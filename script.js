const subscribeBtn = document.getElementById('subscribe');
const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const authName = document.getElementById('authName');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = '<img src="./xbox.jpeg" alt="xbox" />';
  title.innerHTML = 'Lorem ipsum dolor sit amet';
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/85.jpg" alt="" />';
  authName.innerHTML = 'Andrew Smith';
  date.innerHTML = 'Nov 08, 2020';
  subscribeBtn.innerHTML = 'Subscribe';

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}

subscribeBtn.addEventListener('click', (e) => {
  subscribeBtn.classList.toggle('subscribed');
  subscribeBtn.innerText = subscribeBtn.classList.contains('subscribed')
    ? 'Subscribed'
    : 'Subscribe';
});
