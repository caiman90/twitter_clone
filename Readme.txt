
npm install
create db add user with id=101 and insert one tweet for it
node app.js

















////////////////  DATABASE //////


CREATE DATABASE twitter
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'Bosnian (Latin)_Bosnia and Herzegovina.1250'
       LC_CTYPE = 'Bosnian (Latin)_Bosnia and Herzegovina.1250'
       CONNECTION LIMIT = -1;
GRANT CONNECT, TEMPORARY ON DATABASE twitter TO public;
GRANT ALL ON DATABASE twitter TO postgres;
GRANT ALL ON DATABASE twitter TO twitteruser;



CREATE TABLE public.tweets
(
  tweet_id integer NOT NULL,
  user_id integer NOT NULL,
  content character varying(300) NOT NULL,
  created_at date NOT NULL,
  username character varying,
  CONSTRAINT tweets_pkey PRIMARY KEY (tweet_id),
  CONSTRAINT user_id FOREIGN KEY (user_id)
      REFERENCES public.users (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.tweets
  OWNER TO postgres;
GRANT ALL ON TABLE public.tweets TO postgres;
GRANT SELECT ON TABLE public.tweets TO twitteruser;

-- Index: public.fki_user_id

-- DROP INDEX public.fki_user_id;

CREATE INDEX fki_user_id
  ON public.tweets
  USING btree
  (user_id);




CREATE TABLE public.users
(
  id integer NOT NULL,
  username character varying(25) NOT NULL,
  "firstName" character varying(25) NOT NULL,
  "lastName" character varying,
  CONSTRAINT users_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.users
  OWNER TO postgres;
GRANT ALL ON TABLE public.users TO postgres;
GRANT SELECT ON TABLE public.users TO twitteruser;



