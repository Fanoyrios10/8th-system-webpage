class Comment {
  constructor(username, comment_text, date_time, article_id) {
      this.username = username;
      this.comment_text = comment_text;
      this.article_id = article_id;
  }
}

module.exports = Comment;
