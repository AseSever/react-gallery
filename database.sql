CREATE TABLE "gallery"(
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(255) NOT NULL,
	"description" VARCHAR(255) NOT NULL,
	"likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" ( "path", "description", "likes" )
VALUES
	('images/zion_from_angels_landing.jpg', 'Photo of Zion National Park from a ledge of Angels Landing.'),
	('images/dhalia.jpg', 'Dhalia, my favorite flower.'),
	('images/half_dome.jpg', 'Half Dome Yosemite National Park. My next big wilderness hike.'),
	('images/edc_las_vegas.jpg', 'EDC Las Vegas. One of the greatest festivals!');