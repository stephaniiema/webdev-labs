-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3 
-- Write a query to retrieve the id, first_name, and last_name of each record in the users table sorted by last_name.
SELECT id, first_name, last_name from users ORDER BY last_name;



-- Exercise 4
-- Write a query to retrieve the id, user_id, and image_url for the posts created by Cody Young (id=26).
SELECT id, image_url, user_id from posts WHERE user_id = 26;



-- Exercise 5
-- Write a query to retrieve the id, image_url, and user_id for the posts created by either Cody Young (id=26) or David Barrett (id=12).
SELECT id, image_url, user_id from posts WHERE user_id = 26 OR user_id = 12;



-- Exercise 6 
-- Write a query that uses the count function in the SELECT clause to figure out how many posts there are in the posts table.
SELECT count(*) from posts;



-- Exercise 7
-- Write a query that uses the count function and a GROUP BY clause to find out how many comments each user has made. 
SELECT user_id, count(*) FROM comments GROUP BY user_id
 ORDER BY count(*) desc;



-- Exercise 8
-- Write a query to retrieve the id, image_url, and user_id for the posts created by either Cody Young (id=26) or David Barrett (id=12) 
-- – just like in #5. However, this time you will also join on the users table in order to also include username, first_name, and last_name.
-- You will join the tables where the user.id matches posts.user_id
SELECT posts.id, posts.image_url, posts.user_id, username, first_name, last_name FROM posts INNER JOIN users on posts.user_id = users.id WHERE posts.user_id = 26 OR posts.user_id = 12;



-- Exercise 9
-- Write a query that displays post information for all of the users that Cody Young (id=26) is following. 
SELECT posts.id, pub_date, following_id from posts INNER JOIN following on posts.user_id = following_id WHERE following.user_id = 26;


