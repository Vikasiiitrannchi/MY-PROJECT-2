// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    var blogForm = document.getElementById('blogForm');
    var blogPostsContainer = document.getElementById('blogPosts');
  
    blogForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var title = document.getElementById('title').value;
      var content = document.getElementById('content').value;
      var image = document.getElementById('image').files[0];
      var video = document.getElementById('video').value;
  
      var postContainer = document.createElement('div');
      postContainer.className = 'blog-post';
  
      var titleElement = document.createElement('h2');
      titleElement.textContent = title;
      postContainer.appendChild(titleElement);
  
      var contentElement = document.createElement('p');
      contentElement.textContent = content;
      postContainer.appendChild(contentElement);
  
      if (image) {
        var imageElement = document.createElement('img');
        imageElement.src = URL.createObjectURL(image);
        postContainer.appendChild(imageElement);
      }
  
      if (video) {
        var videoElement = document.createElement('video');
        videoElement.src = video;
        videoElement.controls = true;
        postContainer.appendChild(videoElement);
      }
  
      blogPostsContainer.appendChild(postContainer);
  
      blogForm.reset();
    });
  });
  