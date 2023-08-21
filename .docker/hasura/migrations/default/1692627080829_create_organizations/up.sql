SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.answers (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL,
    author_id uuid,
    text text NOT NULL
);
CREATE TABLE public.articles (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL,
    description text NOT NULL,
    url character varying,
    image_id uuid,
    author_id uuid NOT NULL,
    headline character varying,
    published_at timestamp with time zone,
    is_part_of uuid,
    text text NOT NULL
);
CREATE TABLE public.events (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL,
    description text,
    image_id uuid,
    start_at timestamp with time zone NOT NULL,
    end_at timestamp with time zone NOT NULL,
    in_language character varying,
    keywords jsonb
);
CREATE TABLE public.images (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL,
    description text,
    author_id uuid,
    license character varying,
    height numeric,
    width numeric,
    caption uuid,
    "exifData" jsonb
);
CREATE TABLE public.organizations (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    url text,
    image_id uuid NOT NULL
);
CREATE TABLE public.pages (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL,
    description text,
    url character varying,
    image_id uuid,
    author_id uuid,
    headline character varying,
    published_at timestamp with time zone,
    is_part_of uuid,
    in_language character varying NOT NULL,
    keywords jsonb,
    license character varying,
    "position" numeric DEFAULT 0 NOT NULL,
    text text NOT NULL,
    genre character varying
);
CREATE TABLE public.persons (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL,
    description text,
    url character varying,
    image_id uuid,
    additional_name character varying,
    email character varying,
    family_name character varying,
    given_name character varying,
    job_title character varying,
    telephone character varying
);
CREATE TABLE public.questions (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL,
    description text NOT NULL,
    author_id uuid,
    image_id uuid,
    text text NOT NULL,
    accepted_answer_id uuid,
    suggested_answer_id uuid
);
ALTER TABLE ONLY public.answers
    ADD CONSTRAINT answers_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.organizations
    ADD CONSTRAINT organizations_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.pages
    ADD CONSTRAINT pages_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.persons
    ADD CONSTRAINT persons_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_answers_updated_at BEFORE UPDATE ON public.answers FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_answers_updated_at ON public.answers IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_articles_updated_at BEFORE UPDATE ON public.articles FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_articles_updated_at ON public.articles IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_events_updated_at BEFORE UPDATE ON public.events FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_events_updated_at ON public.events IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_images_updated_at BEFORE UPDATE ON public.images FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_images_updated_at ON public.images IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_organizations_updated_at BEFORE UPDATE ON public.organizations FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_organizations_updated_at ON public.organizations IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_pages_updated_at BEFORE UPDATE ON public.pages FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_pages_updated_at ON public.pages IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_persons_updated_at BEFORE UPDATE ON public.persons FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_persons_updated_at ON public.persons IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_questions_updated_at BEFORE UPDATE ON public.questions FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_questions_updated_at ON public.questions IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.persons(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_image_id_fkey FOREIGN KEY (image_id) REFERENCES public.images(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.persons(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_caption_fkey FOREIGN KEY (caption) REFERENCES public.images(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.organizations
    ADD CONSTRAINT organizations_image_id_fkey FOREIGN KEY (image_id) REFERENCES public.images(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.pages
    ADD CONSTRAINT pages_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.persons(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.pages
    ADD CONSTRAINT pages_image_id_fkey FOREIGN KEY (image_id) REFERENCES public.images(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.pages
    ADD CONSTRAINT pages_is_part_of_fkey FOREIGN KEY (is_part_of) REFERENCES public.pages(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.persons
    ADD CONSTRAINT persons_image_id_fkey FOREIGN KEY (image_id) REFERENCES public.images(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_accepted_answer_id_fkey FOREIGN KEY (accepted_answer_id) REFERENCES public.answers(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.persons(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_suggested_answer_id_fkey FOREIGN KEY (suggested_answer_id) REFERENCES public.answers(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
