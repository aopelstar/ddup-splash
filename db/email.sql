insert into email_db
(email, email_name)
values ($1, $2)

returning *