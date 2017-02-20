create database learning_nodejs;

create table if not exists books (
    id int not null auto_increment,
    title varchar(50) not null,
    description text not null,
    price decimal(10,2) not null,

    primary key (id)
);

insert into books(title, description, price) values ('title 1', 'description 1', 10.2);
insert into books(title, description, price) values ('title 2', 'description 2', 10.2);
insert into books(title, description, price) values ('title 3', 'description 3', 10.2);
insert into books(title, description, price) values ('title 4', 'description 4', 10.2);