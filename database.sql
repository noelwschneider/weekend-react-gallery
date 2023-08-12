-- Query text to create database
CREATE TABLE "tweets" (
	"id" serial primary key,
	"path" VARCHAR(100) not null,
	"description" VARCHAR(1000) not null,
	"author" VARCHAR(100),
	"likes" integer,
	"tags" VARCHAR(500) not null
);

