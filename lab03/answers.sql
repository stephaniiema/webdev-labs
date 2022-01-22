-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT id, first_name, last_name from users ORDER BY last_name;



-- Exercise 4
SELECT id, image_url, user_id from posts WHERE user_id = 26;



-- Exercise 5
SELECT id, image_url, user_id from posts WHERE user_id = 26 OR user_id = 12;



-- Exercise 6 
SELECT count(*) from posts;



-- Exercise 7
SELECT user_id, count(*) FROM comments GROUP BY user_id
 ORDER BY count(*) desc;



-- Exercise 8
SELECT posts.id, posts.image_url, posts.user_id, username, first_name, last_name FROM posts INNER JOIN users on posts.user_id = users.id WHERE posts.user_id = 26 OR posts.user_id = 12;



-- Exercise 9
SELECT posts.id, pub_date, following_id from posts INNER JOIN following on posts.user_id = following_id WHERE following.user_id = 26;

-- Exercise 10




-- Exercise 11




-- Exercise 12




-- Exercise 13




-- Exercise 14
