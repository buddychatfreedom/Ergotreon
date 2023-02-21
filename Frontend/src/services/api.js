const BASE_URL = 'https://my-patreon-like-platform.com/api';

async function fetchCreatorProfile(creatorId) {
  const response = await fetch(`${BASE_URL}/creators/${creatorId}/profile`);
  const data = await response.json();
  return data;
}

async function fetchPostList(creatorId) {
  const response = await fetch(`${BASE_URL}/creators/${creatorId}/posts`);
  const data = await response.json();
  return data;
}

export { fetchCreatorProfile, fetchPostList };

