CREATE TABLE "public"."investigations" (
    "id" uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    "name" text NOT NULL,
    "domain" text NOT NULL,
    "description" text,
    "access" integer NOT NULL,
    "active" boolean NOT NULL,
    "url_path" text NOT NULL,
    "url_redirect" text NOT NULL,
    "created_at" timestamp with time zone DEFAULT now(),
    "updated_at" timestamp with time zone DEFAULT now()
);

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON "public"."investigations"
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();