CREATE TABLE snowfox_member(
	user_id varchar(20) not null primary key,
    user_pass varchar(100) not null,
    user_name varchar(10) not null,
    zipcode char(5) not null,
    address varchar(50) not null,
    line_number char(15),
    phone_number char(15) not null,
    email varchar(50) not null,
    birth_date date not null,
    birth_date_type char(5) not null,
    marry_date date,
    marry_partner_birth_date date,
    essential_agree boolean not null default(false)
);