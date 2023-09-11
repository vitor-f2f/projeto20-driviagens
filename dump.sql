--
-- PostgreSQL database dump
--

-- Dumped from database version 14.9 (Ubuntu 14.9-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.9 (Ubuntu 14.9-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cities; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cities (
    id integer NOT NULL,
    name text
);


--
-- Name: cities_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cities_id_seq OWNED BY public.cities.id;


--
-- Name: flights; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.flights (
    id integer NOT NULL,
    origin integer,
    destination integer,
    date date
);


--
-- Name: flights_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.flights_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: flights_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.flights_id_seq OWNED BY public.flights.id;


--
-- Name: passengers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.passengers (
    id integer NOT NULL,
    firstname text,
    lastname text
);


--
-- Name: passengers_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.passengers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: passengers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.passengers_id_seq OWNED BY public.passengers.id;


--
-- Name: travels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.travels (
    id integer NOT NULL,
    passengerid integer,
    flightid integer
);


--
-- Name: travels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.travels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: travels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.travels_id_seq OWNED BY public.travels.id;


--
-- Name: cities id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cities ALTER COLUMN id SET DEFAULT nextval('public.cities_id_seq'::regclass);


--
-- Name: flights id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights ALTER COLUMN id SET DEFAULT nextval('public.flights_id_seq'::regclass);


--
-- Name: passengers id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.passengers ALTER COLUMN id SET DEFAULT nextval('public.passengers_id_seq'::regclass);


--
-- Name: travels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels ALTER COLUMN id SET DEFAULT nextval('public.travels_id_seq'::regclass);


--
-- Data for Name: cities; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cities VALUES (5, 'Salvador');
INSERT INTO public.cities VALUES (6, 'Sampa');
INSERT INTO public.cities VALUES (7, 'Rio');
INSERT INTO public.cities VALUES (8, 'Goiania');
INSERT INTO public.cities VALUES (9, 'Manaus');
INSERT INTO public.cities VALUES (10, 'Santarem');
INSERT INTO public.cities VALUES (11, 'Fernandopolis');
INSERT INTO public.cities VALUES (12, 'Campo Grande');
INSERT INTO public.cities VALUES (13, ' Grande');


--
-- Data for Name: flights; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.flights VALUES (6, 8, 5, '2023-12-24');
INSERT INTO public.flights VALUES (7, 8, 9, '2023-12-20');
INSERT INTO public.flights VALUES (8, 8, 9, '2023-12-29');
INSERT INTO public.flights VALUES (9, 8, 9, '2023-12-19');
INSERT INTO public.flights VALUES (10, 8, 9, '2024-12-19');
INSERT INTO public.flights VALUES (11, 11, 9, '2024-12-19');
INSERT INTO public.flights VALUES (12, 11, 9, '2024-07-19');
INSERT INTO public.flights VALUES (13, 9, 5, '2023-12-24');
INSERT INTO public.flights VALUES (14, 9, 5, '2023-12-24');
INSERT INTO public.flights VALUES (15, 7, 8, '2023-09-13');
INSERT INTO public.flights VALUES (16, 7, 8, '2023-09-11');
INSERT INTO public.flights VALUES (17, 7, 8, '2023-09-11');


--
-- Data for Name: passengers; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.passengers VALUES (2, 'Joana', 'Alves');
INSERT INTO public.passengers VALUES (3, 'Joaquim', 'Alves');
INSERT INTO public.passengers VALUES (4, 'Joaquim', 'Joana');
INSERT INTO public.passengers VALUES (5, 'Joaquim', 'Matias');
INSERT INTO public.passengers VALUES (6, 'Fernando', 'Matias');
INSERT INTO public.passengers VALUES (7, 'Vitor', 'Luiz');
INSERT INTO public.passengers VALUES (8, 'Luiz', 'Lins');
INSERT INTO public.passengers VALUES (9, 'Luiz', 'Feijuca');
INSERT INTO public.passengers VALUES (10, 'Leandro', 'Alves');
INSERT INTO public.passengers VALUES (11, 'Leandro', 'Leonardo');
INSERT INTO public.passengers VALUES (12, 'Lopes', 'Leonardo');
INSERT INTO public.passengers VALUES (13, 'Giana', 'Leonardo');
INSERT INTO public.passengers VALUES (14, 'Giana', 'Authaus');
INSERT INTO public.passengers VALUES (15, 'Giana', 'Autha');


--
-- Data for Name: travels; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.travels VALUES (2, 8, 8);
INSERT INTO public.travels VALUES (3, 9, 8);
INSERT INTO public.travels VALUES (4, 9, 7);
INSERT INTO public.travels VALUES (5, 9, 6);
INSERT INTO public.travels VALUES (6, 9, 11);
INSERT INTO public.travels VALUES (7, 9, 12);
INSERT INTO public.travels VALUES (8, 9, 12);
INSERT INTO public.travels VALUES (9, 9, 12);
INSERT INTO public.travels VALUES (10, 9, 8);
INSERT INTO public.travels VALUES (11, 9, 9);
INSERT INTO public.travels VALUES (12, 6, 9);
INSERT INTO public.travels VALUES (13, 6, 9);
INSERT INTO public.travels VALUES (14, 6, 9);
INSERT INTO public.travels VALUES (15, 6, 10);


--
-- Name: cities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cities_id_seq', 13, true);


--
-- Name: flights_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.flights_id_seq', 17, true);


--
-- Name: passengers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.passengers_id_seq', 15, true);


--
-- Name: travels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.travels_id_seq', 15, true);


--
-- Name: cities cities_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (id);


--
-- Name: flights flights_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights
    ADD CONSTRAINT flights_pkey PRIMARY KEY (id);


--
-- Name: passengers passengers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.passengers
    ADD CONSTRAINT passengers_pkey PRIMARY KEY (id);


--
-- Name: travels travels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels
    ADD CONSTRAINT travels_pkey PRIMARY KEY (id);


--
-- Name: flights flights_destination_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights
    ADD CONSTRAINT flights_destination_fkey FOREIGN KEY (destination) REFERENCES public.cities(id);


--
-- Name: flights flights_origin_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights
    ADD CONSTRAINT flights_origin_fkey FOREIGN KEY (origin) REFERENCES public.cities(id);


--
-- Name: travels travels_flightid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels
    ADD CONSTRAINT travels_flightid_fkey FOREIGN KEY (flightid) REFERENCES public.flights(id);


--
-- Name: travels travels_passengerid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels
    ADD CONSTRAINT travels_passengerid_fkey FOREIGN KEY (passengerid) REFERENCES public.passengers(id);


--
-- PostgreSQL database dump complete
--

