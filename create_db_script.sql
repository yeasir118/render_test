create database if not exists render_test;

use render_test;

create table user (
	id integer primary key auto_increment,
    email varchar(40) not null
);

create table movie (
	id integer primary key auto_increment,
    title varchar(40) not null,
    cast json,
    category varchar(40),
    release_date date
);

create table favorites (
	id integer primary key auto_increment,
    user_id integer not null,
    movie_id integer not null,
    foreign key(user_id) references user(id) on delete cascade,
    foreign key(movie_id) references movie(id) on delete cascade
);

INSERT INTO movie (title, cast, category, release_date) VALUES
('Inception', '["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]', 'Sci-Fi', '2010-07-16'),
('The Matrix', '["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]', 'Sci-Fi', '1999-03-31'),
('The Godfather', '["Marlon Brando", "Al Pacino", "James Caan"]', 'Crime', '1972-03-24'),
('The Dark Knight', '["Christian Bale", "Heath Ledger", "Aaron Eckhart"]', 'Action', '2008-07-18'),
('Pulp Fiction', '["John Travolta", "Uma Thurman", "Samuel L. Jackson"]', 'Crime', '1994-10-14'),
('Forrest Gump', '["Tom Hanks", "Robin Wright", "Gary Sinise"]', 'Drama', '1994-07-06'),
('Fight Club', '["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]', 'Drama', '1999-10-15'),
('The Shawshank Redemption', '["Tim Robbins", "Morgan Freeman", "Bob Gunton"]', 'Drama', '1994-09-22'),
('The Avengers', '["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"]', 'Action', '2012-05-04'),
('Titanic', '["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"]', 'Romance', '1997-12-19'),
('Interstellar', '["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]', 'Sci-Fi', '2014-11-07'),
('Gladiator', '["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"]', 'Action', '2000-05-05'),
('Joker', '["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"]', 'Drama', '2019-10-04'),
('The Lion King', '["Matthew Broderick", "Jeremy Irons", "James Earl Jones"]', 'Animation', '1994-06-24'),
('Frozen', '["Kristen Bell", "Idina Menzel", "Josh Gad"]', 'Animation', '2013-11-27'),
('Avengers: Endgame', '["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"]', 'Action', '2019-04-26'),
('Toy Story', '["Tom Hanks", "Tim Allen", "Don Rickles"]', 'Animation', '1995-11-22'),
('The Silence of the Lambs', '["Jodie Foster", "Anthony Hopkins", "Scott Glenn"]', 'Thriller', '1991-02-14'),
('The Social Network', '["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"]', 'Drama', '2010-10-01'),
('The Grand Budapest Hotel', '["Ralph Fiennes", "Tony Revolori", "Saoirse Ronan"]', 'Comedy', '2014-03-28');

INSERT INTO movie (title, cast, category, release_date) VALUES
('The Prestige', '["Hugh Jackman", "Christian Bale", "Scarlett Johansson"]', 'Drama', '2006-10-20'),
('Whiplash', '["Miles Teller", "J.K. Simmons", "Paul Reiser"]', 'Drama', '2014-10-10'),
('Mad Max: Fury Road', '["Tom Hardy", "Charlize Theron", "Nicholas Hoult"]', 'Action', '2015-05-15'),
('La La Land', '["Ryan Gosling", "Emma Stone", "John Legend"]', 'Romance', '2016-12-09'),
('The Revenant', '["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson"]', 'Adventure', '2015-12-25'),
('The Big Short', '["Christian Bale", "Steve Carell", "Ryan Gosling"]', 'Drama', '2015-12-11'),
('Parasite', '["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"]', 'Thriller', '2019-05-30'),
('1917', '["George MacKay", "Dean-Charles Chapman", "Mark Strong"]', 'War', '2019-12-25'),
('Django Unchained', '["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio"]', 'Western', '2012-12-25'),
('Blade Runner 2049', '["Ryan Gosling", "Harrison Ford", "Ana de Armas"]', 'Sci-Fi', '2017-10-06'),
('Knives Out', '["Daniel Craig", "Chris Evans", "Ana de Armas"]', 'Mystery', '2019-11-27'),
('The Wolf of Wall Street', '["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"]', 'Biography', '2013-12-25'),
('Gravity', '["Sandra Bullock", "George Clooney", "Ed Harris"]', 'Sci-Fi', '2013-10-04'),
('A Beautiful Mind', '["Russell Crowe", "Jennifer Connelly", "Ed Harris"]', 'Biography', '2001-12-21'),
('The Irishman', '["Robert De Niro", "Al Pacino", "Joe Pesci"]', 'Crime', '2019-11-01'),
('Shutter Island', '["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"]', 'Mystery', '2010-02-19'),
('The Imitation Game', '["Benedict Cumberbatch", "Keira Knightley", "Matthew Goode"]', 'Biography', '2014-11-28'),
('Black Panther', '["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong o"]', 'Action', '2018-02-16'),
('The Truman Show', '["Jim Carrey", "Laura Linney", "Ed Harris"]', 'Drama', '1998-06-05'),
('Coco', '["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"]', 'Animation', '2017-11-22');
