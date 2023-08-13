-- Query text to create main database table
CREATE TABLE "tweets" (
	"id" SERIAL primary key,
	"path" VARCHAR(100) not null,
	"description" VARCHAR(1000) not null,
	"likes" integer
);

-- Query text to populate main database table
INSERT INTO "tweets"
	("path", "description", "likes")
VALUES
	('images/agonies.png',
	'In unexpected moments, I sometimes hear a chipper voice in my head saying "Yes, due to my agonies." I don''t know why it''s good, it''s just very funny. As the years go on, I appreciate Otterlake''s unique humor more and more.',
	73200),
	
	('images/balloon.png', 
	'This tweet is very good on its own merits, but I mostly included it because Stefan Heck deserves credit for his longevity. Most people have a short run of good material before they stop being funny on Twitter. Most of them seem to lose their minds in the process. He has been consistenly funny on Twitter, Twitch, and his podcast (and I believe other forums before Twitter) for over a decade, all while seeming to keep his head above his shoulders. One of Canada''s finest.',
	105400),
	
	('images/bassoon.png',
	'Ten years out, this tweet doesn''t quite make me laugh like it used to, largely because it is so unmistakeably of its era. The "weird Twitter" days sometimes relied on absurdity as a substitute for cleverness, but it was the fashion of the time. In the context that surrounded it, this still deserves credit as one of the best tweets ever.',
	18300),
	
	('images/boggs.jpeg',
	'This comes from an account with barely 100 followers, but deserves more credit. The commenter plays into the dynamics described in the first two tweets and juxtaposes the overlong and slightly-too-serious second comment with a lighthearted five-word reply. The best tweets aren''t usually replies, but the best replies bring a certain something that standalone tweets cannot.',
	8200),
	
	('images/bowsuh.png',
	'Though older tweets do tend to have lower like counts, I was surprised this classic is barely over 20,000. I think of this as one of Otterlake''s more approachable tweets, but it got less than one-quarter of the button clicks of the soak in tub tweet.',
	20000),

	('images/chappie.jpeg', 
	'So often in life, the answer to "is it Chappie?" is a firm "no". This sudden "yes!" provides a much-needed breath of fresh air.', 
	22000),
	
	('images/clown.jpeg',
	'It seems like a lot of good jokes come from dissecting idioms that have become so familiar that you don''t even think about the words within them. So clever to hear the phrase "who''s this clown?" and recognize an insult in the word "who".',
	129700),
	
	('images/crumbster.png',
	'Anybody who has spent more than a moment in the chaotic world of internet forums should be familiar with self-serious moderators and sudden vitriol. Good-natured Hawaiian bread forum newbs like Crumbster aren''t cut out for it.', 
	18600),
	
	('images/geoff.png', 
	'Before Twitter, there were three places I could find written comedy: comic strips, The Onion, and essayists like David Sedaris. These all have their place in the comedy ecosystem, but all feel niche in comparison to television, movies, and stand-up. Twitter provided a broader outlet for written jokes, and ''Geoff: "Yeos"'' is a great example of a punchline that couldn''t easily exist anywhere else.', 
	81500),
	
	('images/grandma.png',
	'I think this would not be a very funny tweet if ch000ch had used a different adjective. But "devastating" is perfect.',
	116500),
	
	('images/guitar.png',
	'When I first saw this tweet, I assumed it was a reference. And I thought it was such a gripping passage, I searched for some time trying to find the source before realizing this eloquent phrase was original content from a twitter user with a furry-adjacent avi lamenting the change of the Guitar Center logo. For all its headaches, Twitter has taught me how much brilliance is bouncing around in the world.',
	80000),
	
	
	('images/haunted.png',
	'I like when a non-comedian posts a rock-solid joke that blows up. This is a very good one in that genre.',
	205100),
	
	('images/judas.jpeg',
	'A lot of Twitter jokes use a dialogue format, but this one stands out for feeling like authentic sitcom dialogue.',
	134700),
	
	('images/mustards.png', 
	'Every era has its own slang, and it''s always kind of funny to hear people express old-as-time sentiments in the modern way. A few eras stand out as especially silly (the 20''s and 80''s come to mind as having top-notch slang), but I think today''s stuff is extra silly because social media has shaped the common tone and accelerated the rate at which slang enters the lexicon. This tweet jabs at the modern voice very well. (Note: the original account no longer exists, so the tweet is on the author''s new account, resulting in an unusually low like count for a well-known tweet).', 
	350),
	
	('images/paris.jpeg', 
	'Better known for her literary work, Patricia Lockwood got off a good (and extremely efficient) joke back in 2013. The Paris Review ended up devoting an article to reviewing Paris in 2014, citing this tweet as their inspiration.',
	22600),
	
	('images/quiero.png', 
	'I''ve only seen the first few episodes of Mad Men, but it still tickles me imagining Don Draper giving the Taco Bell chihuahua his trademark spin.', 
	23900),
	
	('images/rangoon.jpeg',
	'This tweet is only good for folks familiar with Stephen A''s brand of blustering sports commentary, but it has struck a chord with pretty much anybody who has sat through an afternoon of First Take', 
	35100),
	
	('images/rip.png',
	'Though it appears to be gone from Twitter, this classic is certainly not forgotten. While surely tongue-in-cheek, "rip to ur grandma but im different" has become a go-to phrase for invoking misguided bravado.',
	0),
	
	('images/socrates.jpeg', 
	'The more things change, the more they stay the same. Whether it be a frathouse fistfight or an ancient meeting of the minds, Daryl has your back.',
	87200),
	
	('images/sowing.jpeg',
	'It is the dumbest joke in the gallery by a comfortable margin, but it makes me laugh regardless. Just a vulgar retelling of a universal experience.', 
	139000),
	
	('images/turtle.jpeg',
	'Another entry in the catalogue of unexpectedly eloquent tweets about silly things.',
	25400),
	
	('images/zoo.png', 
	'My favorite tweet from the consensus GOAT. Like most great comedy buffoons, I think Dril''s affinity for bad grammar, toilet humor, and emotional outbursts often masks a terrific grasp of how language operates in comedy. This is his most obviously eloquent offering -- not many tweets have produced phrases as resonant as "I will face God and walk backwards into Hell", whether or not they are about hollering at zoo animals.', 
	81000),

	('images/grink.png',
	'We are more than the mistakes we''ve made, unless of course you have made a typo.',
	180900),
	
	('images/swayze.png',
	'I''m a sucker for well-executed subtext, so this punchline is a big winner. We don''t know exactly what the next line of this freestyle will be, but we''ve got a pretty good idea of how it will end.',
	70700),
	
	('images/haircut.png',
	'People are a mystery, and this baffling anecdote from a CNN reporter is inescapable. It''s hard to say exactly how this scenario came to be, but it''s impossible to not want answers.',
	9000);