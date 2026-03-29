---
layout: about
title: About
permalink: /
# subtitle: Researcher & Developer

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

  if (hours < 2) {
    greeting = "Good evening!";
  } else if (hours < 12) {
    greeting = "Good morning!";
  } else if (hours < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  document.getElementById("greeting").innerHTML = greeting;
</script>

<p style="text-align: justify;">
I'm Álvaro, a researcher and developer specializing in Computer Graphics. Currently, you can find me at **DisneyResearch\|Studios**, where I work on machine learning for 3D animation.
</p>

<p style="text-align: justify;">
Before joining Disney, I earned my **PhD in Computer Science** at TU Delft (Netherlands), following a background in Physics and Engineering from MIT (USA) and UPC (Spain).
</p>

<p style="text-align: justify;">
I am deeply interested in the interplay between **technology and art** &mdash; in particular, how interactive multimodal systems, generative models, and physics simulation can push the boundaries of motion and digital storytelling.
</p>

<p style="text-align: justify;">
You can learn more about my past research in my [Publications](/publications/) or on my [Google Scholar profile](https://scholar.google.com/citations?user=jKRp_wYAAAAJ).
</p>

<p style="text-align: justify;">
Beyond academic research, I am also an (amateur) indie game designer. You can find my latest projects [here](/game-dev/).
</p>


<div class="fidget-container" style="text-align: center; margin-top: 2rem;">
  <img id="fidget-toy" 
       src="/assets/img/fidget.png" 
       style="width: 60px; height: 60px; cursor: pointer; transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); user-select: none;"
       alt="Fidget Toy"
       title="Give me a spin!">
</div>

<script>
  let rotation = 0;
  const toy = document.getElementById('fidget-toy');

  toy.addEventListener('click', (e) => {
    // 1. Rotate 90 degrees and pop the scale
    rotation += 190;
    toy.style.transform = `rotate(${rotation}deg) scale(1.2)`;
    
    // 2. Bounce back to normal size
    setTimeout(() => {
      toy.style.transform = `rotate(${rotation}deg) scale(1)`;
    }, 150);

    // 3. Create the Sparkle
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '999';
    sparkle.style.transition = 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)';
    
    // Get exact coordinates even if the user has scrolled
    const rect = toy.getBoundingClientRect();
    const x = rect.left + window.scrollX + (Math.random() * rect.width);
    const y = rect.top + window.scrollY + (Math.random() * rect.height);
    
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    document.body.appendChild(sparkle);

    // 4. Animate the Sparkle (Float up and fade out)
    requestAnimationFrame(() => {
      sparkle.style.transform = `translateY(-30px) scale(${Math.random() + 0.5})`;
      sparkle.style.opacity = '0';
    });

    // 5. Clean up the DOM
    setTimeout(() => sparkle.remove(), 600);
  });
</script>