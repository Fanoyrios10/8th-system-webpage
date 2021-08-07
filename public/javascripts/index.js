const homeMorePosts = document.getElementById('more_posts_home')
const homeCluster2 = document.getElementById('home_cluster_2')
const homeCluster3 = document.getElementById('home_cluster_3')
let homeMorePostsCounter = 0;
homeMorePosts.addEventListener("click", function(){
  homeMorePostsCounter++;
  switch (homeMorePostsCounter) {
    case 1:
      homeCluster2.style.display = "block";
      break;
    case 2:
      homeCluster3.style.display = "block";
      homeMorePosts.style.display = 'none'
    default:
      return;
      break;
  }
})

