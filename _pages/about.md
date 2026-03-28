---
layout: about
title: About
permalink: /
subtitle: Researcher & Developer.

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true # true for circle cropped image instead of rounded square
  more_info: >
    <p>DisneyResearch|Studios</p>
    <p>Zurich, Switzerland</p>

news: false # Set to false if you don't want a "News" or "Updates" section
latest_posts: false # Set to true if you plan to write a blog
selected_papers: true # Set to false if you don't have research papers to show yet
social: true # Keep this true to show your email/LinkedIn/GitHub icons at the bottom
---

<h2 id="greeting">Hello!</h2>

<script>
  const now = new Date();
  const hours = now.getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good morning!";
  } else if (hours < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  document.getElementById("greeting").innerHTML = greeting;
</script>

<p style="text-align: justify;">
I'm Álvaro, a researcher and developer specializing in Computer Graphics. Currently, you can find me at DisneyResearch\|Studios, where I work on machine learning for 3D animation.
Before joining Disney, I earned my PhD in Computer Science at TU Delft (Netherlands), following a background in Physics and Engineering from MIT (USA) and UPC (Spain).

I am deeply interested in the interplay between technology and art &mdash; in particular, how interactive multimodal systems, generative models, and physics simulation can push the boundaries of motion and digital storytelling.

You can learn more about my past research in my [Publications](/publications/) or on my [Google Scholar profile](https://scholar.google.com/citations?user=jKRp_wYAAAAJ).

Beyond academic research, I am also an (amateur) indie game designer. You can find my latest projects [here](/game-dev/).
</p>